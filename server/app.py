from flask import Flask,jsonify,make_response,request
from flask_migrate import Migrate
from flask_restful import Api,Resource
from flask_cors import CORS
from models import db

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


if __name__ == '__main__':
    app.run(port=5555)
