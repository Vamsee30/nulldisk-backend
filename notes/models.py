from django.db import models
from django.contrib.auth.models import AbstractUser
from django.db.models.signals import post_save, pre_save
from django.dispatch import receiver
from django.conf import settings
from datetime import date
from .parsers import extract_blanks
import re


class Note(models.Model):
    title =  models.CharField(max_length=1000, blank=True)
    content = models.TextField()
    date_created = models.DateTimeField(auto_now=False,auto_now_add=True)
    date_updated = models.DateTimeField(auto_now=True,auto_now_add=False)
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)

    def __str__(self):
        return self.title


class Review(models.Model):
    note = models.OneToOneField(Note, on_delete=models.CASCADE, primary_key=True)
    easiness = models.DecimalField(decimal_places=3,max_digits=6)
    interval = models.IntegerField()
    repetitions = models.IntegerField()
    due_date = models.DateField(auto_now=False,auto_now_add=False)
    last_reviewed = models.DateField(auto_now=True,auto_now_add=False)

    def __str__(self):
        return self.note.title

class User(AbstractUser):
    pass
# Create your models here.



@receiver(pre_save, sender=Note)
def modify_review(sender, instance, **kwargs):
    if instance.pk is not None:
        try:
            old_card = Review.objects.get(note=instance)
        except:
            old_card = False
            pass
        blank_review = {'easiness':0,'interval':0,'repetitions':0,'due_date':date.today(),'last_reviewed':date.today()}
        old_content = Note.objects.get(pk=instance.pk).content
        new_blanks = extract_blanks(instance.content)
        if(new_blanks != extract_blanks(old_content)):
            if len(new_blanks)>0:
                if old_card is not False:
                    old_card.easiness = 0
                    old_card.interval = 0
                    old_card.repetitions = 0
                    old_card.due_date = date.today()
                    old_card.save()
                else:
                    Review.objects.create(note=instance, **blank_review)
            if bool(len(new_blanks)) is False and old_card is not False:
                old_card.delete()


@receiver(post_save, sender=Note)
def append_review(sender, instance, created, **kwargs):
    blank_review = {'easiness':0,'interval':0,'repetitions':0,'due_date':date.today(),'last_reviewed':date.today()}
    if created and bool(len(extract_blanks(instance.content))):
        Review.objects.create(note=instance, **blank_review)
