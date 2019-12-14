from flask import render_template, Blueprint, jsonify, request
from flask_restful import Resource, Api

instruments_blueprint = Blueprint('instruments', __name__)

api = Api(instruments_blueprint)

class BassAPI(Resource):
  def get(self):
    return [
      {
        "id": 11,
        "make": "Ernie Ball",
        "model": "Joe Dart Signature Sterling"
      },
      {
        "id": 12,
        "make": "Fender",
        "model": "Marcus Miller Signature Jazz"
      },
      {
        "id": 13,
        "make": "Fender",
        "model": "Flea Relic Jazz Bass"
      }
    ]

  def post(self):
    my_json = request.get_json()
    return {'you sent': my_json}, 201

api.add_resource(BassAPI, '/basses')

@instruments_blueprint.route('/')
@instruments_blueprint.route('/bass')
def index():
  return render_template('index.html')