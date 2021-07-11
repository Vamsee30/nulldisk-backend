from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated  # <-- Here
from rest_framework import status
from . import models
from .serializers import NoteSerializer
from .parsers import extract_title, extract_links


class NoteViewSet(viewsets.ModelViewSet):

    queryset = models.Note.objects.all()
    serializer_class = NoteSerializer
    permission_classes = (IsAuthenticated,)

    def list(self, request):
        queryset = self.queryset.filter(author=request.user.id)
        serial = NoteSerializer(queryset, many=True)
        return Response(serial.data)

    def create(self, request):
        title = extract_title(request.data['content'])
        rez = {**request.data,'title':title, 'author':request.user.id}
        serial = NoteSerializer(data=rez)
        if serial.is_valid():
            serial.save()
            return Response(serial.data, status=status.HTTP_201_CREATED)
        return Response(serial.errors, status=status.HTTP_400_BAD_REQUEST)

    def update(self, request, pk=None):
        title = extract_title(request.data['content'])
        current_post = models.Note.objects.get(id=pk)
        rez = {**request.data,'title':title, 'author':request.user.id}
        serial = NoteSerializer(current_post, data=rez)
        if serial.is_valid():
            serial.save()
            return Response(serial.data)
        return Response(serial.errors, status=status.HTTP_400_BAD_REQUEST)

    @action(detail=False, methods=['get'])
    def search(self, request, format=None):
        query = (request.query_params.get('query'))
        if query is None:
            return Response([])
        queryset = self.queryset.filter(author=request.user.id)
        for part in query.split(' '):
            if part[0]=='-':
                queryset = queryset.exclude(content__icontains=part[1:])
            else:
                queryset = queryset.filter(content__icontains=part)
        return Response(NoteSerializer(queryset, many=True).data)

    @action(detail=False, methods=['get'])
    def validateAuth(self, request, format=None):
        user = request.user.username
        return Response({'auth':user})

    @action(detail=True, methods=['get'])
    def getBacklinks(self, request, pk):
        queryset = models.Note.objects.filter(author=request.user.id)
        primary_link='(VID=%s)'%pk
        queryset = queryset.filter(content__icontains=primary_link)
        serial = NoteSerializer(queryset, many=True)
        return Response(serial.data)

    @action(detail=True, methods=['get'])
    def getOutlinks(self,request,pk):
        queryset = models.Note.objects.filter(author=request.user.id)
        target = queryset.get(id=pk)
        ids = [int(i) for i in extract_links(target.content)]
        links = queryset.filter(id__in=ids)
        serial = NoteSerializer(links, many=True)
        return Response(serial.data)
