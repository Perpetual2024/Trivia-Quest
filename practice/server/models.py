#making a class model
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy() # compulsory


class User(db.Model): 
  __tablename__= "users"
  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String, nullable=False)
  profile = db.relationship('Profile', back_populates='user', uselist=False, cascade="all, delete-orphan")


  def __repr__(self):
   return f'<User {self.id}>'
  
class Profile(db.Model):
  __tablename__ = "profiles"
  id = db.Column(db.Integer, primary_key=True)
  age = db.Column(db.Integer, nullable=False)
  email = db.Column(db.String, nullable=False, unique=True)
  user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
  user = db.relationship('User', back_populates='profile')

  def __repr__(self):
   return f'<Profile {self.id}>'