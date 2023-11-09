import os

import openai
from dotenv import load_dotenv

load_dotenv()


openai.api_key = os.getenv("CHATGPT_API_KEY")


def generate_explanation(request: str) -> str:
    model = "text-davinci-003"
    details = "Говори подробнее."
    if not request.endswith("?"):
        request += "?"

    response = openai.Completion.create(
        model=model,
        prompt=f"{request} {details}",
        temperature=0.1,
        max_tokens=2000,
        top_p=0.7,
        frequency_penalty=0.02,
        presence_penalty=0.0
    )
    return response["choices"][0]["text"]


def generate_summarize(request: str) -> str:
    augmented_prompt = f"Кратко изложи текст: {request}"
    summary = openai.Completion.create(
        model="text-davinci-003",
        prompt=augmented_prompt,
        temperature=.5,
        max_tokens=1000,
    )["choices"][0]["text"]
    return summary
