import json

from django.http import HttpResponse
from django.shortcuts import redirect, render
from .models import Participant
from django.views.decorators.csrf import csrf_exempt

# Create your views here.

# def home(request):
#     return render(request, 'home.html')

@csrf_exempt
def home(request):
    total_participants = Participant.objects.count()

    context = {
        'total_participants': total_participants
    }
    if (request.method == 'POST'):
        request_body = json.loads(request.body)
        name = request_body['name']
        Participant.objects.create(
            name=name,
        )

        response = {
            'total_participants': total_participants,
        }
        return HttpResponse(json.dumps(response))

    return render(request, 'home.html', context)

def survey(request):
    return render(request, 'survey.html')

def result(request, clas):
    return render(request, 'result.html', {'clas': clas})

def match(request, clas):
    return render(request, 'match.html', {'clas': clas})