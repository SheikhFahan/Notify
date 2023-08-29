from django.shortcuts import render
from django.http import JsonResponse
# Create your views here.

from django.contrib.auth.models import User


from rest_framework.response import Response
from rest_framework.decorators import api_view

from .serializers import UserSerializer
from rest_framework import generics

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        # Add custom claims
        token['username'] = user.username
        return token

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/tokens',
        '/api/token/refresh',
    ]

    return Response(routes)

class UserCreateAPIView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def perform_create(self, serializer):
        print(serializer.validated_data)
        serializer.save()
        