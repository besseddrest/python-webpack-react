from flask import render_template, Blueprint

bass_blueprint = Blueprint('bass', __name__)

@bass_blueprint.route('/')
@bass_blueprint.route('/bass')
def index():
  return render_template('index.html')    