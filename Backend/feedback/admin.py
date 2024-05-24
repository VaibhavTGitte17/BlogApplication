from django.contrib import admin
from .models import Feedback


class FeedbackAdmin(admin.ModelAdmin):
    list_display = ('name','email','password','phone','college','blog_name')
    
admin.site.register(Feedback, FeedbackAdmin)
