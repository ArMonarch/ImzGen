from django.shortcuts import render
from django.conf import settings
import requests
from django.http import HttpResponse

# Create your views here.
def loginPage(request):
    return render(request, "imzgen/login.html")

def mainPage(request):
    return render(request, "imzgen/main.html")
