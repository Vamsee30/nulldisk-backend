from rest_framework import serializers
from . import models

class NoteSerializer(serializers.ModelSerializer):
    #title = serializers.CharField(max_length=1000, required=False)
    class Meta:
        model = models.Note
        fields = ('id','title','content','date_created','date_updated','author')
