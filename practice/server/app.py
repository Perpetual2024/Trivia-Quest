from flask import Flask 
from flask_sqlalchemy import SQLAlchemy 
from flask_migrate import Migrate
from models import db

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///test.db'
app.config['SQLALCHEMY_TRACK_MODERATIONS'] = False

db.init_app(app) #connects database to application
migrate = Migrate(app, db) #connects migration to application


@app.route('/')
def index():
    return 'Hello, Perpetual!'


if __name__ == '__main__':
    app.run(debug=True, port=5555)