from random import choice as rc
import random
from datetime import datetime
from faker import Faker
from app import app

from models import db, Music, User, Music_user
fake = Faker()

with app.app_context():
    Music.query.delete()
    User.query.delete()
    Music_user.query.delete()

    photograph = Music(
        artist="ed sheraan",
        genre="rnb",
        created_at=datetime(2023, 7, 12),
        image="https://i.pinimg.com/564x/7c/a4/75/7ca47586a38227b3f7dbdf17ced246c5.jpg",
        audio="https://www.youtube.com/watch?v=nSDgHBxUbVQ&list=RDnSDgHBxUbVQ&start_radio=1",
    )
    Wetdreamz = Music(
        artist="jcole",
        genre="rnb",
        created_at=datetime(2023, 7, 12),
        image="https://i.pinimg.com/564x/a6/41/0a/a6410ace4c1d05eb40a19044f9768665.jpg",
        audio="https://www.youtube.com/watch?v=eCGV26aj-mM",
    )
    lightsup = Music(
        artist="Harry styles",
        genre="rnb",
        created_at=datetime(2023, 7, 12),
        image="https://www.capitalfm.co.ke/thesauce/files/2022/03/Harry-Styles.jpg",
        audio="https://www.youtube.com/watch?v=9NZvM1918_E",
    )
    Rude = Music(
        artist="Magic",
        genre="rnb",
        audio="https://www.youtube.com/watch?v=PIh2xe4jnpk&list=RDnSDgHBxUbVQ&index=11",
        image="https://i.pinimg.com/736x/f8/f2/9d/f8f29d276b4df4f2ac9b14580b658069.jpg",
        created_at=datetime(2023, 7, 12)
    )
    lightswitch = Music(
        artist="charlie puth",
        genre="rnb",
        created_at=datetime(2023, 7, 12),
        image="https://i.pinimg.com/564x/a4/39/aa/a439aa849585796189d2003954846883.jpg",
        audio="https://www.youtube.com/watch?v=WFsAon_TWPQ",
    )
    athousandyears = Music(
        artist="christina peri",
        genre="rnb",
        created_at=datetime(2023, 7, 12),
        image="https://i.pinimg.com/564x/2a/44/35/2a4435f81722f5f9c1aeeffa3124a680.jpg",
        audio="https://youtu.be/rtOvBOTyX00",
    )
    db.session.add_all([photograph, Wetdreamz, lightsup, Rude, lightswitch, athousandyears])
    playlist = ["sad", "happy", "calm"]
    favorite = ["lightswitch", "wetdreamz", "photograph"]
    users = []
    for i in range(6):
        u = User(
            name=fake.name(),
            playlist=rc(playlist),
            favorite=rc(favorite),
        )
        users.append(u)
    db.session.add_all(users)

    music_user = []
    for i in range(6):
        mu = Music_user(
            music_id=random.randint(1, 20),
            user_id=random.randint(1, 20)
        )
        music_user.append(mu)
    db.session.add_all(music_user)
    db.session.commit()
