from django.urls import path
from . import views


app_name = 'svip'
urlpatterns = [
    path('svip', views.index, name='index'),
    path('svip/<slug:slug>/', views.post, name='post'),
]
