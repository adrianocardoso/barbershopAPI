from django.db import models
from django import forms

# Create your models here.

class Event(models.Model):
    start_time = forms.TimeField(input_formats=['%H:%M'], localize=True, widget=forms.DateTimeInput)
    selected_date = models.DateField()

class Barber(models.Model):
    barberId = models.AutoField(primary_key=True)
    barberName = models.CharField(max_length=50)
    barberEmail = models.CharField(max_length=50)
    barberPassword = forms.CharField(widget=forms.PasswordInput)
    barberSchedule = models.ManyToManyField(Event)

class Scheduling(models.Model):
    clientName = models.CharField(max_length=50)
    clientEmail = models.CharField(max_length=50)
    clientCPF = models.CharField(max_length=14)
    selected_barber = models.ForeignKey(Barber, on_delete=models.CASCADE)
    appointed_time = models.ForeignKey(Event, on_delete=models.CASCADE)
