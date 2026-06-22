from django.core.mail import send_mail
from django.conf import settings
from rest_framework import viewsets, mixins, permissions
from .models import Project, Resume, ContactMessage, PortfolioContent
from .serializers import ProjectSerializer, ResumeSerializer, ContactMessageSerializer, PortfolioContentSerializer

class ProjectViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows visitors to view projects, and authenticated users to modify them.
    """
    queryset = Project.objects.all().order_by('-created_at')
    serializer_class = ProjectSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

class ResumeViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows visitors to view resumes, and authenticated users to modify them.
    """
    queryset = Resume.objects.all().order_by('-created_at')
    serializer_class = ResumeSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

class PortfolioContentViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows visitors to view portfolio content, and authenticated users to modify it.
    """
    queryset = PortfolioContent.objects.all().order_by('-created_at')
    serializer_class = PortfolioContentSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

class ContactMessageViewSet(mixins.CreateModelMixin, viewsets.GenericViewSet):
    """
    API endpoint that allows visitors to submit a contact message.
    """
    queryset = ContactMessage.objects.all()
    serializer_class = ContactMessageSerializer

    def perform_create(self, serializer):
        # Save the message to the database
        instance = serializer.save()
        
        # Send an email notification using Resend API (bypasses Render SMTP blocks)
        import os
        import json
        import urllib.request
        
        resend_api_key = os.environ.get('RESEND_API_KEY')
        
        if resend_api_key:
            try:
                subject = f"New Portfolio Contact: {instance.subject}"
                url = "https://api.resend.com/emails"
                data = json.dumps({
                    "from": "onboarding@resend.dev",
                    "to": "fayazahamed.dev@gmail.com", # Your verified Resend email
                    "subject": subject,
                    "html": f"<p><strong>Name:</strong> {instance.name}</p><p><strong>Email:</strong> {instance.email}</p><p><strong>Message:</strong><br>{instance.message}</p>"
                }).encode('utf-8')
                
                req = urllib.request.Request(url, data=data, headers={
                    "Authorization": f"Bearer {resend_api_key}",
                    "Content-Type": "application/json"
                })
                urllib.request.urlopen(req, timeout=5)
            except Exception as e:
                print(f"Failed to send email via Resend API: {e}")
        else:
            print("RESEND_API_KEY not set. Message saved to DB only.")

