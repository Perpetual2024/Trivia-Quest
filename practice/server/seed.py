from faker import Faker
from models import db, User, Profile
from app import app

fake = Faker()

with app.app_context():
    #seed users
    for _ in range(10):
        user = User(
            name = fake.name()
        )
        db.session.add(user)
        db.session.commit()

    for _ in range(50): 
        profile = Profile(
            age = fake.random_int(min=18, max=100),
            email = fake.unique.email(),
            user_id = fake.random_int(min=1, max=10)
             
        )
        db.session.add(profile)
        db.session.commit()  # <--- add this line