# Generated by Django 5.0.4 on 2024-05-05 13:00

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Feedback',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('email', models.CharField(max_length=100)),
                ('password', models.CharField(max_length=100)),
                ('phone', models.IntegerField()),
                ('college', models.CharField(max_length=100)),
                ('blog_name', models.CharField(max_length=100)),
            ],
        ),
    ]
