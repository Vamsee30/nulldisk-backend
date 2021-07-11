from django.http import JsonResponse

def require_login(function):
    def wrap(request, *args, **kwargs):
        if request.user.is_authenticated:
            return function(request, *args, **kwargs)
        else:
            return JsonResponse({'auth':False})
    wrap.__doc__ =  function.__doc__
    wrap.__name__= function.__name__
    return wrap
