from flask import Flask,request
from flask_sqlalchemy import SQLAlchemy 
from flask_migrate import Migrate
from models import db, Profile

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///test.db'
app.config['SQLALCHEMY_TRACK_MODERATIONS'] = False

db.init_app(app) #connects database to application
migrate = Migrate(app, db) #connects migration to application


@app.route('/')
def index():
    return 'Hello, Perpetual!'

@app.route('/profiles/<int:id>')
def get_profile(id):
    profile = profile.query.get(id)

    if profile:
        return f'Profile: {profile.age} - {profile.email} - {profile.user_id}'

    else:
        return 'Profile not found', 404


if __name__ == '__main__':
    app.run(debug=True, port=5555)