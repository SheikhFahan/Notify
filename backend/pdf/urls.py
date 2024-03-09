from django.urls import path

from . import views 
urlpatterns = [
    path('note/',views.NoteListCreateAPIView.as_view()),
    path('assignment/',views.AssignmentListCreateAPIView.as_view()),
    path('question_paper/',views.QPListCreateAPIView.as_view()),
    path('sub_code/', views.SubCodeListCreateAPIView.as_view()),
    # profile page urls
    path('notes_prof/',views.ProfNotesListAPIView.as_view()),
    path('assignments_prof/',views.ProfAssignmentListAPIView.as_view()),
    path('qp_prof/',views.ProfQPListAPIView.as_view()),
    # deleting files
    path('<int:pk>/delete_note/',views.ProfNotesDestroyAPIView.as_view()),
    path('<int:pk>/delete_assignment/',views.ProfAssignmentDestroyAPIView.as_view()),
    path('<int:pk>/delete_qp/',views.ProfQPDestroyAPIView.as_view()),   
    # changes visibility
    path('change_note_visibility/',views.ProfQPDestroyAPIView.as_view()),   
    path('change_assignment_visibility/',views.ProfQPDestroyAPIView.as_view()),   
    path('change_qp_visibility/',views.ProfQPDestroyAPIView.as_view()),   




]


# view set vs genric views and do serializers