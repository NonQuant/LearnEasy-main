from api.serializers import TextSerializer
from api.utils.ChatGPT import generate_explanation, generate_summarize
from api.utils.YandexTTS import synthesize_text_to_audio
from django.http import JsonResponse
from rest_framework import status
from rest_framework.views import APIView


class CreateExplanationView(APIView):
    def post(self, request):
        serializer = TextSerializer(data=request.data)
        if not serializer.is_valid():
            return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        text = serializer.validated_data['text']
        explanation = generate_explanation(text)
        return JsonResponse({'explanation': explanation}, status=status.HTTP_200_OK)


class CreateSummarizeView(APIView):
    def post(self, request):
        serializer = TextSerializer(data=request.data)
        if not serializer.is_valid():
            return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        text = serializer.validated_data['text']
        summarize = generate_summarize(text)
        return JsonResponse({'summarize': summarize}, status=status.HTTP_200_OK)


class CreateAudioView(APIView):
    def post(self, request):
        serializer = TextSerializer(data=request.data)
        if not serializer.is_valid():
            return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        text = serializer.validated_data['text']
        audio_path = synthesize_text_to_audio(text)
        return JsonResponse({'audio_path': audio_path}, status=status.HTTP_200_OK)
