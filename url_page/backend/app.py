from flask import Flask, request, jsonify
from flask_cors import CORS
import urllib.parse

app = Flask(__name__)
CORS(app)  # Allow frontend to connect to backend

# Root route (for testing)
@app.route('/')
def home():
    return "Flask backend is running!"

# Encode URL endpoint
@app.route('/encode', methods=['POST'])
def encode():
    data = request.get_json()
    url = data.get('url', '')
    safe_chars = data.get('safe_chars', '')
    encoded_url = urllib.parse.quote(url, safe=safe_chars)
    return jsonify({"encoded_url": encoded_url})

# Decode URL endpoint
@app.route('/decode', methods=['POST'])
def decode():
    data = request.get_json()
    url = data.get('url', '')
    decoded_url = urllib.parse.unquote(url)
    return jsonify({"decoded_url": decoded_url})

if __name__ == '__main__':
    app.run(debug=True, port=5000)
