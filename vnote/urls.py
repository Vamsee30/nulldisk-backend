"""vnote URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import include,path
from rest_framework.authtoken.views import obtain_auth_token
from rest_framework_simplejwt import views as jwt_views
from rest_framework.urlpatterns import format_suffix_patterns
from notes import api_views, views as note_views
from entrance import views as entrance_views
from rest_framework.routers import DefaultRouter

router=DefaultRouter()
router.register(r'notes', api_views.NoteViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('api/token/', jwt_views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
    path('93/', note_views.main, name='main'),
    path('', entrance_views.index,name='entrance'),
#    path('notes/', api_views.NotesList.as_view()),
#    path('api/',views.NotesView.as_view(),name='API'),
#    path('api-auth',obtain_auth_token,name='auth'),
#    path('', views.index),
#    path('get_post/<post_id>', views.get_post),
#    path('new_post', views.new_post),
#    path('edit_post', views.edit_post),
#    path('login',views.login),
#    path('search_posts/<query>', views.search_posts),
]

# urlpatterns = format_suffix_patterns(urlpatterns)
