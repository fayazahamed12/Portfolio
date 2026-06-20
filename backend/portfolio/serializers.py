from rest_framework import serializers
from .models import Project, Resume, ContactMessage, PortfolioContent

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'

class ResumeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Resume
        fields = '__all__'

class ContactMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactMessage
        fields = '__all__'

class PortfolioContentSerializer(serializers.ModelSerializer):
    class Meta:
        model = PortfolioContent
        fields = '__all__'
