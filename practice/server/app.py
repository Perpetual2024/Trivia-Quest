from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy 
from flask_migrate import Migrate
from models import db, Profile

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///test.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app) #connects database to application
migrate = Migrate(app, db) #connects migration to application


@app.route('/')
def index():
    return 'Hello, Perpetual!'

@app.route('/profiles/<int:id>')
def get_profile(id):
    profile =Profile.query.get(id)

    profile_obj = {
        'age': profile.age,
        'email': profile.email,
        'user_id': profile.user_id
    }

    if profile:
     return jsonify(profile_obj), 200
    
    return jsonify({'message': 'Profile not found'}), 404



if __name__ == '__main__':
    app.run(debug=True, port=5555)