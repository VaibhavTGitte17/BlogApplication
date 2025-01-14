from django.db import models


class Blog(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField(max_length=2000)
    author = models.CharField(max_length=100)
    comments = models.CharField(max_length=30)
    date = models.DateField()
    image = models.ImageField(upload_to='Blogimg', blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.title

    