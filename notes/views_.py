import json
from django.core import serializers
from django.contrib.auth import authenticate, login as _login
from django.contrib.auth.decorators import login_required
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import render
from django.http import HttpResponse
from .models import Note
from .decorators import require_login
from django.http import JsonResponse
from .parsers import extract_title

# Create your views here.
@csrf_exempt
def login(request):
    payload = json.loads(request.body)
    username = payload['username']
    password = payload['password']
    user = authenticate(request,username=username,password=password)
    if user is not None:
        _login(request,user)
        return JsonResponse({'auth':True})
    else:
        return JsonResponse({'auth':False})


@require_login
def index(request, *args, **kwargs):
    print(request.user.id)
    return JsonResponse({'auth':True})


@require_login
def get_post(request, post_id):
    if request.method == 'GET':

        post = Note.objects.get(id=post_id, author=request.user)
        data = serializers.serialize('json', [post])
        return HttpResponse(data,content_type='application/json')


@csrf_exempt
@require_login
def new_post(request):
    if(request.method=='POST'):
        payload = json.loads(request.body)
        title = extract_title(payload['content'])
        note = Note(title=title,content=payload['content'],author=request.user)
        try:
            note.save()
            return HttpResponse(serializers.serialize('json',[note]), content_type='application/json')
        except:
            return JsonResponse({'status':False})


@csrf_exempt
@require_login
def edit_post(request):
    payload = json.loads(request.body)
    note = Note.objects.get(id=payload['id'])
    note.title = extract_title(payload['content'])
    note.content = payload['content']
    note.save()
    return HttpResponse(serializers.serialize('json',[note]), content_type='application/json')


@require_login
def search_posts(request,query):
    queryset = Note.objects.all()
    queryset = queryset.filter(author=request.user)
    for part in query.split(' '):
        queryset = queryset.filter(content__icontains=part)
    jsonResult = serializers.serialize('json',queryset)
    return HttpResponse(jsonResult, content_type='application/json')
