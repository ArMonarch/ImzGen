from django.urls import path
from . import views

urlpatterns = [
    path('login', views.loginPage, name='login-page'),
    path('app', views.mainPage, name="Application"),
]