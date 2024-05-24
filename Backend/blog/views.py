from django.shortcuts import render
from django.http import HttpResponse
from .models import Blog
from .serializers import BlogSerializer
from rest_framework import viewsets
from rest_framework.response import Response

# Create your views here.
def home(request):
    return HttpResponse("Welcome to the homepage and for going to blog use blog/ and for going to feedback use feed/")

class BlogViewSet(viewsets.ModelViewSet):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer
    
    def list(self, request):
        queryset = Blog.objects.all()
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)
    
    def create(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid(): 
            serializer.save()
            return Response(serializer.data, status=201)  
        else: 
            return Response(serializer.errors, status=400)
        
    
    def update(self, request, pk=None):
        project = self.queryset.get(pk=pk)
        serializer = self.serializer_class(project,data=request.data)
        if serializer.is_valid(): 
            serializer.save()
            return Response(serializer.data)
        else: 
            return Response(serializer.errors, status=400)