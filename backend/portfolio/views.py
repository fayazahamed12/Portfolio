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
        
        # Send an email notification
        subject = f"New Portfolio Contact: {instance.subject}"
        message = f"Name: {instance.name}\nEmail: {instance.email}\n\nMessage:\n{instance.message}"
        
        try:
            send_mail(
                subject,
                message,
                settings.DEFAULT_FROM_EMAIL if hasattr(settings, 'DEFAULT_FROM_EMAIL') else 'noreply@example.com',
                [settings.CONTACT_EMAIL] if hasattr(settings, 'CONTACT_EMAIL') else ['your-email@example.com'],
                fail_silently=True,
            )
        except Exception as e:
            # You might want to log the error here
            print(f"Failed to send email: {e}")

