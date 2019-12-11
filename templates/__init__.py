from flask import Flask

app = Flask(__name__,
  static_folder = './public',
  template_folder= './static')

from templates.instruments.views import instruments_blueprint

# register the blueprints
app.register_blueprint(instruments_blueprint)