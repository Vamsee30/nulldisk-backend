from django.http import HttpResponse
from django.shortcuts import render

def main(request):
    # Renders React portion of website
    return render(request, 'main.html', {})

def publicNote(request, pk):
    return
