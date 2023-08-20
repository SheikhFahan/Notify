from django.shortcuts import render
from django.http import JsonResponse
# Create your views here.

from rest_framework.response import Response
from rest_framework.decorators import api_view

@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/tokens',
        '/api/token/refresh',
    ]

    return Response(routes)