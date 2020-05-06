from django.shortcuts import render


def index(request):
    context = dict(
        active_page = 'beta',
    )
    return render(request, 'frontend/index.html.j2', context)