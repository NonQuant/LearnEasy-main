from api.views import (CreateAudioView, CreateExplanationView,
                       CreateSummarizeView)
from django.urls import path
from lessons.views import TopicViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'topics', TopicViewSet)
topic_patterns = router.urls

urlpatterns = [
    path('create-summarize/', CreateSummarizeView.as_view()),
    path('create-explanation/', CreateExplanationView.as_view()),
    path('create-audio/', CreateAudioView.as_view()),
] + topic_patterns
