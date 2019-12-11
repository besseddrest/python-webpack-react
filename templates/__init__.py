from flask import Flask

app = Flask(__name__,
  static_folder = './public',
  template_folder= './static')

from templates.bass.views import bass_blueprint

# register the blueprints
app.register_blueprint(bass_blueprint)