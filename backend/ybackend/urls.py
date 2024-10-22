from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include
from houses.views import HouseView
from thumbs.views import HouseImageView
from rest_framework.routers import SimpleRouter
router = SimpleRouter(trailing_slash=True)
router.register("houses", HouseView)
router.register("upload", HouseImageView)
urlpatterns = [
    path('admin/', admin.site.urls),
    path("api/", include(router.urls))
]
if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)