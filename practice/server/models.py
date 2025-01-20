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
  tags= db.relationship('Tag', back_populates='profile',  secondary= 'profile_tag')

  def __repr__(self):
   return f'<Profile {self.id}>'

profile_tags = db.Table('profile_tags',
 db.Column('profile_id', db.Integer, db.ForeignKey('profiles.id'), primary_key=True),
 db.Column('tag_id', db.Integer, db.ForeignKey('tags.id'), primary_key=True))

class Tag(db.Model):
  __tablename__ = "tags"
  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String, nullable=False)

  profiles =  db.relationship('Profile', secondary= 'profile_tags', back_populates='tags')

def __repr__(self):
  return f'<Tag {self.id}>'

  