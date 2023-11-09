from lessons.models import Topic
from lessons.serializers import TopicSerializer
from rest_framework import viewsets


class TopicViewSet(viewsets.ModelViewSet):
    queryset = Topic.objects.all()
    serializer_class = TopicSerializer
