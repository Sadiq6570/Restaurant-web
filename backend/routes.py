from flask import Blueprint, jsonify, request
from models import Menu
from ai_assistant import restaurant_ai

api_routes = Blueprint('api', __name__)

@api_routes.route("/menu", methods=["GET"])
def get_menu():
    menu = Menu.query.all()
    return jsonify([
        {"name": m.name, "price": m.price, "description": m.description}
        for m in menu
    ])

@api_routes.route("/chat", methods=["POST"])
def chat():
    user_message = request.json.get("message")
    response = restaurant_ai(user_message)
    return jsonify({"reply": response})
