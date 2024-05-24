from django.shortcuts import render
from django.http import HttpResponse
from .serializers import FeedbackSerializer
from .models import Feedback
from rest_framework import viewsets
from rest_framework.response import Response


class FeedbackViewSet(viewsets.ModelViewSet):
    queryset = Feedback.objects.all()
    serializer_class = FeedbackSerializer
    
    def list(self, request):
        queryset = Feedback.objects.all()
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)
    
    
    def create(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid(): 
            serializer.save()
            return Response(serializer.data, status=201)  
        else: 
            return Response(serializer.errors, status=400)


