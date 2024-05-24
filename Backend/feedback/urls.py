
from django.urls import path,include
from rest_framework.routers import DefaultRouter
from .views import FeedbackViewSet

router = DefaultRouter()
router.register('feed', FeedbackViewSet,basename='blog')

urlpatterns = router.urls