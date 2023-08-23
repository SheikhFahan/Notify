from django.urls import path

from . import views 
urlpatterns = [
    path('',views.test),
]


# view set vs genric views and do serializers