from flask_sqlalchemy import SQLAlchemy
from sqlalchemy_serializer import SerializerMixin

db = SQLAlchemy()
class Music(db.Model, SerializerMixin):
    __tablename__="music"
    serialize_rules=("-music_user.music")
    id=db.Column(db.Integer,primary_key=True)
    artist=db.Column(db.String)
    genre=db.Column(db.String)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    image=db.Column(db.String)
    audio=db.Column(db.String)
    music_user=db.relationship("Music_user",backref="music")

class User(db.Model,SerializerMixin):
    __tablename__="user"
    serialize_rules=("-music_user.user",)
    id=db.Column(db.Integer,primary_key=True)
    name=db.Column(db.String)
    playlist=db.Column(db.String)
    favorite=db.Column(db.String)
    Music_user=db.relationship("Music_user",backref="user")

class Music_user(db.Model,SerializerMixin):
    __tablename__='music_user'
    serialize_rules=("-music.music_user","-user.music_user")
    id=db.Column(db.Integer,primary_key=True)
    music_id=db.Column(db.Integer,db.ForeignKey("music.id"))
    user_id=db.Column(db.Integer,db.ForeignKey("user.id"))

