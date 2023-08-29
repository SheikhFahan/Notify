from django.shortcuts import render

from rest_framework.response import Response
from rest_framework import generics

from rest_framework.decorators import api_view


from .serializers import NoteSerializers, SubCodeSerializer
from .models import Note, SubCode

@api_view(['POST'])
def test(request):
    print(request.data)
    serializer = NoteSerializers(data = request.data)
    if serializer.is_valid(raise_exception=True):
        print(serializer.data)
        return Response(serializer.data)
    return Response({"invalid": "not good data"}, status=400)
    
    print(request.GET)

class PdfListAPIView(generics.ListAPIView):
    queryset = Note.objects.all()
    serializer_class = NoteSerializers

class PdfCreateAPIView(generics.CreateAPIView):
    queryset = Note.objects.all()
    serializer_class = NoteSerializers

    def perform_create(self, serializer):
        serializer.save(user = self.request.user)
        # return super().perform_create(serializer)


class PdfDetailAPIView(generics.RetrieveAPIView):
    queryset = Note.objects.all()
    serializer_class = NoteSerializers
    lookup_field = 'pk'

class PdfDestroyAPIView(generics.DestroyAPIView):
    queryset = Note.objects.all()
    serializer_class = NoteSerializers
    lookup_field = 'pk'

class SubCodeListAPIView(generics.ListCreateAPIView):
    queryset = SubCode.objects.all()
    serializer_class = SubCodeSerializer
    
    # def perform_create(self, serializer):
    #     if (self.request.user.is_superuser):
    #         serializer.save()
    #     return Response({'invalid user' : 'you need to have admin rights'})