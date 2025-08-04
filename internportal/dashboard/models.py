from django.db import models

# Create your models here.

class Intern(models.Model):
    name = models.CharField(max_length=100)
    referral_code = models.CharField(max_length=20, unique=True)
    donations_raised = models.IntegerField(default=0)

    def __str__(self):
        return self.name

