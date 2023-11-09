import os
import time
import wave

import requests
from dotenv import load_dotenv

from primestudy.settings import AUDIO_ROOT

load_dotenv()


API_KEY = os.getenv("YANDEX_TTS_API_KEY")
YANDEX_TTS_URL = 'https://tts.api.cloud.yandex.net/speech/v1/tts:synthesize'


def _synthesize_text_into_chunks(text, voice="jane", emotion="good", speed="0.9"):
    """
    Synthesizes the input text into chunks of audio data using the Yandex.TTS API.
    """
    headers = {'Authorization': 'Api-key ' + API_KEY}

    data = {
        'text': text,
        'lang': 'ru-RU',
        'voice': voice,
        'emotion': emotion,
        'speed': speed,
        'format': 'lpcm',
        'sampleRateHertz': 48000,
    }

    with requests.post(YANDEX_TTS_URL, headers=headers, data=data, stream=True) as resp:
        if resp.status_code != 200:
            raise RuntimeError("Invalid response received: code: %d, message: %s" % (resp.status_code, resp.text))

        for chunk in resp.iter_content(chunk_size=None):
            yield chunk


def _synthesize_text_to_raw(text: str, raw_filepath: str) -> str:
    """
    Synthesizes the input text into chunks and writes the resulting audio data to a .raw file
    """
    with open(raw_filepath, "wb") as f:
        for audio_content in _synthesize_text_into_chunks(text):
            f.write(audio_content)


def _convert_raw_to_wav(raw_filepath: str, wav_filepath: str) -> str:
    with open(raw_filepath, "rb") as inp_f:
        data = inp_f.read()

        with wave.open(wav_filepath, "wb") as out_f:
            out_f.setnchannels(1)
            out_f.setsampwidth(2)  # number of bytes
            out_f.setframerate(48000)
            out_f.writeframesraw(data)


def synthesize_text_to_audio(text: str, audio_folder: str = AUDIO_ROOT) -> str:
    """
    Synthesizes the input text and generates a .wav file containing the resulting audio data.
    """
    if not text:
        raise ValueError("Empty text input")

    filename = str(int(time.time()))
    os.makedirs(audio_folder, exist_ok=True)
    raw_filepath = f"{audio_folder}\\{filename}.raw"
    wav_filepath = f"{audio_folder}\\{filename}.wav"

    _synthesize_text_to_raw(text, raw_filepath)
    _convert_raw_to_wav(raw_filepath, wav_filepath)
    os.remove(raw_filepath)

    return wav_filepath
