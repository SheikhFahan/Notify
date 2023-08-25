from django.shortcuts import render

from rest_framework.response import Response
from rest_framework import generics


from .serializers import NoteSerializers
from .models import Note


class PdfListCreateAPIView(generics.ListCreateAPIView):
    queryset = Note.objects.all()
    serializer_class = NoteSerializers

    def perform_create(self, serializer):
        if self.request.user:
            serializer.save(prof = self.request.user)
        return Response({"unvalid user": "you must be logged"}, status=400)


class PdfDetailAPIView(generics.RetrieveAPIView):
    queryset = Note.objects.all()
    serializer_class = NoteSerializers
    lookup_field = 'pk'

class PdfDestroyAPIView(generics.DestroyAPIView):
    queryset = Note.objects.all()
    serializer_class = NoteSerializers
    lookup_field = 'pk'
