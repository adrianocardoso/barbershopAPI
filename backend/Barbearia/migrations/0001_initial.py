# Generated by Django 3.2.3 on 2021-05-26 07:57

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Barber',
            fields=[
                ('barberId', models.AutoField(primary_key=True, serialize=False)),
                ('barberName', models.CharField(max_length=50)),
                ('barberEmail', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='Event',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('selected_date', models.DateField()),
            ],
        ),
        migrations.CreateModel(
            name='Scheduling',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('clientName', models.CharField(max_length=50)),
                ('clientEmail', models.CharField(max_length=50)),
                ('clientCPF', models.CharField(max_length=14)),
                ('appointed_time', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Barbearia.event')),
                ('selected_barber', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Barbearia.barber')),
            ],
        ),
        migrations.AddField(
            model_name='barber',
            name='barberSchedule',
            field=models.ManyToManyField(to='Barbearia.Event'),
        ),
    ]