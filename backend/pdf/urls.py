from django.urls import path

from . import views 
urlpatterns = [
    path('note/',views.NoteListCreateAPIView.as_view()),
    path('assignment/',views.AssignmentListCreateAPIView.as_view()),
    path('questionpaper/',views.QPListCreateAPIView.as_view()),
    path('sub_code/', views.SubCodeListCreateAPIView.as_view()),
    # path('create/', views.PdfCreateAPIView.as_view()),
    # path('create/', views.test)

]


# view set vs genric views and do serializers