from django.contrib import admin
from .models import Blog


class BlogAdmin(admin.ModelAdmin):
    list_display = ('title','content','author','comments','date','image','created_at','updated_at')
    
admin.site.register(Blog, BlogAdmin)
