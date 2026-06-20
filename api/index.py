import os
import sys
from pathlib import Path

# Add the backend directory to the Python path so Django can be found
BASE_DIR = Path(__file__).resolve().parent.parent
sys.path.append(str(BASE_DIR / 'backend'))

from django.core.wsgi import get_wsgi_application

# Set the Django settings module
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "config.settings")

# Vercel needs the application callable to be named `app` or `application`
app = get_wsgi_application()
