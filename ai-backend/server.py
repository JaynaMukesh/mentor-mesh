import os
from flask import Flask, request, jsonify
from flask_cors import CORS
from groq import Groq
from dotenv import load_dotenv
import json

load_dotenv()

GroqClient = Groq(
    api_key=os.environ.get("GROQ_API_KEY"),
)

app = Flask(__name__)
CORS(app)

@app.route('/test', methods=['POST'])
def api():
    data = request.json
    responses = []
    if not data.get('topic'):
        return jsonify({
            'error': 'Please provide a topic to search for'
        }), 400
    message = [
        {
            'role': 'system',
            'content': '''You are an AI agent who is responsible for generating quiz quesions 
            based on the topic provided. It has to be 5 questions where 2 questions should be 
            easy, 1 should be medium and 2 should be hard. The questions should be multiple choice and you should generate answers for them as well.
            Output should be in JSON format as follows:
            [
                {
                    "question": "What is the capital of France?",
                    "options": ["Paris", "London", "Berlin", "Madrid"],
                    "answer": "Paris",
                    "difficulty": "easy"
                },
                {
                    "question": "What is the capital of Germany?",
                    "options": ["Paris", "London", "Berlin", "Madrid"],
                    "answer": "Berlin",
                    "difficulty": "easy"
                },
                {
                    "question": "What is the capital of Spain?",
                    "options": ["Paris", "London", "Berlin", "Madrid"],
                    "answer": "Madrid",
                    "difficulty": "medium"
                },
                {
                    "question": "What is the capital of Italy?",
                    "options": ["Paris", "London", "Rome", "Madrid"],
                    "answer": "Rome",
                    "difficulty": "hard"
                },
                {
                    "question": "What is the capital of Japan?",
                    "options": ["Tokyo", "London", "Berlin", "Madrid"],
                    "answer": "Tokyo",
                    "difficulty": "hard"
                }
            ]'''
        },
        {
            "role": "user",
            "content": f"I need questions on the topic of '{data.get('topic')}'. Please respond with JSON."
        }
    ]
    chat_completions = GroqClient.chat.completions.create(
        messages=message,
        model="llama3-8b-8192",
        response_format={"type": "json_object"}
    )
    return jsonify(json.loads(chat_completions.choices[0].message.content))
        

if __name__ == '__main__':
    app.run(debug=False, host='0.0.0.0', port=5000)