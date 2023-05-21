from django.db import models

# Create your models here.

class Participant(models.Model):
    # Add any fields you need to store participant information
    name = models.CharField(max_length=100)
    # ...

    # Add any additional methods or fields as required

    def __str__(self):
        return self.name