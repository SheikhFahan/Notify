from django.urls import path

from . import views 
urlpatterns = [
    path('note/',views.NoteListCreateAPIView.as_view()),
    path('assignment/',views.AssignmentListCreateAPIView.as_view()),
    path('question_paper/',views.QPListCreateAPIView.as_view()),
    path('sub_code/', views.SubCodeListCreateAPIView.as_view()),
    path('<int:pk>/delete_note/',views.NoteDestroyAPIView.as_view()),
    path('<int:pk>/delete_assignment/',views.AssigmentDestroyAPIView.as_view()),
    path('<int:pk>/delete_question_paper/',views.QPDestroyAPIView.as_view()),

]


# view set vs genric views and do serializers