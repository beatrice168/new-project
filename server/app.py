from flask import Flask,jsonify,make_response,request
from flask_migrate import Migrate
from flask_restful import Api,Resource
from flask_cors import CORS
from models import db,Music

app = Flask(
    __name__,
    static_url_path='',
    static_folder='../client/build',
    template_folder='../client/build'
)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///bitbox.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
migrate=Migrate(app,db)
db.init_app(app)
api=Api(app)
class Index(Resource):
    def get(self):
        response_dict = {
            'welcome':"welcome to bitko box music"
        }
        response=make_response(
            jsonify(response_dict),
            200
        )
        return response
api.add_resource(Index,"/")  
class Musics(Resource):
    def get(self):
        musics = Music.query.all()
        response_dict_list = [music.to_dict() for music in musics]

        response = make_response(jsonify(response_dict_list), 200)
        return response
        # return response

    def post(self):
      data = request.get_json()
      new_data = Music(
          # name = data['name'],
            artist= data['artist'],
            genre=data['genre'],
            image=data['image'],
            audio=data['audio'],
            # created_at=data['created_at'],
      )
      
      db.session.add(new_data)
      db.session.commit()
      return make_response(jsonify(new_data.to_dict()),201)
    
    
api.add_resource(Musics,"/music")  
class MusicById(Resource):
        def delete(self,id):
            musi = Music.query.filter_by(id=id).first()
            db.session.delete(musi)
            db.session.commit()
    
            response = make_response(
                jsonify({"message":"deleted successfully"}), 200
            )
            return response
api.add_resource(MusicById,"/music/<int:id>")  


    
    
      



if __name__ == '__main__':
    app.run(port=5555)
