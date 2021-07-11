from django.db import models
from django.contrib.auth.models import AbstractUser
from django.conf import settings

class Note(models.Model):
    title =  models.CharField(max_length=1000, blank=True)
    content = models.TextField()
    date_created = models.DateTimeField(auto_now=False,auto_now_add=True)
    date_updated = models.DateTimeField(auto_now=True,auto_now_add=False)
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)

class User(AbstractUser):
    pass
# Create your models here.
