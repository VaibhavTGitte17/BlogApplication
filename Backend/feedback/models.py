from django.db import models

class Feedback(models.Model):
    name = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    password = models.CharField(max_length=100)
    phone = models.IntegerField()
    college = models.CharField(max_length=100)
    blog_name = models.CharField(max_length=100)
    
    def __str__(self):
        return self.name
    
