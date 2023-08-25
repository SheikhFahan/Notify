from django.urls import path

from . import views 
urlpatterns = [
    path('',views.PdfListCreateAPIView.as_view()),
]


# view set vs genric views and do serializers