from django.urls import path
from django.conf import settings
from django.conf.urls.static import static

from . import views

from rest_framework_simplejwt.views import (
    TokenRefreshView
)

urlpatterns = [
    path('routes', views.getRoutes),
    path('token/', views.MyTokenObtainPairView.as_view(), name = 'token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name = 'token_refresh'),
]