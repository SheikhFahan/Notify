from django.urls import path

from . import views 
urlpatterns = [
    path('',views.PdfListAPIView.as_view()),
    path('sub_code/', views.SubCodeListAPIView.as_view()),
    # path('create/', views.PdfCreateAPIView.as_view()),
    path('create/', views.test)

]


# view set vs genric views and do serializers