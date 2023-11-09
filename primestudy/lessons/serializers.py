from lessons.models import Topic
from rest_framework import serializers


class TopicSerializer(serializers.ModelSerializer):
    content = serializers.ReadOnlyField()
    relative_url = serializers.ReadOnlyField()
    subject_grade_name = serializers.CharField(source='subject_grade.name')

    class Meta:
        model = Topic
        fields = ['topic', 'subject_grade_name', 'content', 'relative_url']
