from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ProjectViewSet, ResumeViewSet, ContactMessageViewSet

router = DefaultRouter()
router.register(r'projects', ProjectViewSet)
router.register(r'resumes', ResumeViewSet)
router.register(r'contact', ContactMessageViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
