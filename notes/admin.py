from django.contrib import admin
from .models import User,Note,Review
from django.contrib.auth.admin import UserAdmin

admin.site.register(User,UserAdmin)
admin.site.register(Note)
admin.site.register(Review)
# Register your models here.
