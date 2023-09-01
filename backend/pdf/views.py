from django.shortcuts import render

from rest_framework.response import Response
from rest_framework import generics
from rest_framework import permissions
from rest_framework.decorators import api_view

from api.permissions import isAdminOrReadOnly, isOwnerOrReadOnly

from .serializers import NoteSerializers, SubCodeSerializer, AssignmentSerializers, QPSerializers
from .models import Note, SubCode, Assignment, QuestionPaper


class NoteListCreateAPIView(generics.ListCreateAPIView):
    queryset = Note.objects.filter(visible = True)
    serializer_class = NoteSerializers
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def perform_create(self, serializer):
        serializer.save(user = self.request.user)
        print(serializer.validated_data)



class AssignmentListCreateAPIView(generics.ListCreateAPIView):
    queryset = Assignment.objects.all()
    serializer_class = AssignmentSerializers
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def perform_create(self, serializer):
        serializer.save(user = self.request.user)
        print(serializer.validated_data)



class QPListCreateAPIView(generics.ListCreateAPIView):
    queryset = QuestionPaper.objects.all()
    serializer_class = QPSerializers
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def perform_create(self, serializer):
        serializer.save(user = self.request.user)
        print(serializer.validated_data)




class PdfDetailAPIView(generics.RetrieveAPIView):
    queryset = Note.objects.all()
    serializer_class = NoteSerializers
    lookup_field = 'pk'

class PdfDestroyAPIView(generics.DestroyAPIView):
    queryset = Note.objects.all()
    serializer_class = NoteSerializers
    lookup_field = 'pk'
    permission_classes = [permissions.IsAuthenticated, isOwnerOrReadOnly]


class SubCodeListCreateAPIView(generics.ListCreateAPIView):
    queryset = SubCode.objects.all()
    serializer_class = SubCodeSerializer
    permission_classes = [isAdminOrReadOnly]
    
    # def perform_create(self, serializer):
    #     if (self.request.user.is_superuser):
    #         serializer.save()
    #     return Response({'invalid user' : 'you need to have admin rights'})