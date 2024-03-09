from django.shortcuts import render

from rest_framework.response import Response
from rest_framework import generics
from rest_framework import permissions

from api.permissions import isAdminOrReadOnly, isOwnerOrReadOnly

from .serializers import NoteSerializers, SubCodeSerializer, AssignmentSerializers, QPSerializers
from .models import Note, SubCode, Assignment, QuestionPaper


class NoteListCreateAPIView(generics.ListCreateAPIView):
    queryset = Note.objects.filter(visible = True)
    serializer_class = NoteSerializers
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def perform_create(self, serializer):
        serializer.save(user = self.request.user)

class ProfNotesListAPIView(generics.ListCreateAPIView):
    serializer_class  = NoteSerializers
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        queryset  = Note.objects.filter(user = user)
        return queryset

class ProfAssignmentListAPIView(generics.ListCreateAPIView):
    serializer_class  = AssignmentSerializers
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        queryset  = Assignment.objects.filter(user = user)
        return queryset

class ProfQPListAPIView(generics.ListCreateAPIView):
    serializer_class  = QPSerializers
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        queryset  = QuestionPaper.objects.filter(user = user)
        return queryset

class ProfNotesDestroyAPIView(generics.DestroyAPIView):
    queryset = Note.objects.all()
    serializer_class  = NoteSerializers
    permission_classes = [permissions.IsAuthenticated]


class ProfAssignmentDestroyAPIView(generics.DestroyAPIView):
    queryset = Assignment.objects.all()
    serializer_class  = AssignmentSerializers
    permission_classes = [permissions.IsAuthenticated]

class ProfQPDestroyAPIView(generics.DestroyAPIView):
    queryset = QuestionPaper.objects.all()
    serializer_class  = QPSerializers
    permission_classes = [permissions.IsAuthenticated]


class NoteDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Note.objects.all()
    serializer_class = NoteSerializers
    lookup_field = 'pk'
    permission_classes = [permissions.IsAuthenticated, isOwnerOrReadOnly]

    def update(self, request, *args, **kwargs):
        return super().update(request, *args, **kwargs)

class ChangeNoteVisibility(generics.UpdateAPIView):
    serializer_class = NoteSerializers
    queryset = Note.objects.all()
    permission_classes = [permissions.IsAuthenticated]

class ChangeAssignmentVisibility(generics.UpdateAPIView):
    serializer_class = AssignmentSerializers
    queryset = Assignment.objects.all()
    permission_classes = [permissions.IsAuthenticated]

class ChangeQPVisibility(generics.UpdateAPIView):
    serializer_class = QPSerializers
    queryset = QuestionPaper.objects.all()
    permission_classes = [permissions.IsAuthenticated]


class AssignmentListCreateAPIView(generics.ListCreateAPIView):
    queryset = Assignment.objects.all()
    serializer_class = AssignmentSerializers
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def perform_create(self, serializer):
        serializer.save(user = self.request.user)
        print(serializer.validated_data)

class AssigmentDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Note.objects.all()
    serializer_class = NoteSerializers
    lookup_field = 'pk'
    permission_classes = [permissions.IsAuthenticated, isOwnerOrReadOnly]




class QPListCreateAPIView(generics.ListCreateAPIView):
    queryset = QuestionPaper.objects.all()
    serializer_class = QPSerializers
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def perform_create(self, serializer):
        serializer.save(user = self.request.user)
        print(serializer.validated_data)

class QPDestroyAPIView(generics.DestroyAPIView):
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