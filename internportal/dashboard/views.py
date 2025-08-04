from django.shortcuts import render, redirect

# Create your views here.
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Intern
from .serializers import InternSerializer

@api_view(['GET'])
def intern_data(request):
    data = {
        "name": "Samuel Baiju",
        "referral_code": "baijusamuel2025",
        "donations_raised": 12500,
        "rewards": ["T-Shirt", "Certificate", "Exclusive Call with CEO"]
    }
    return Response(data)

@api_view(['GET'])
def leaderboard(request):
    interns = Intern.objects.order_by('-donations_raised')[:10]  # Top 10
    serializer = InternSerializer(interns, many=True)
    return Response(serializer.data)
