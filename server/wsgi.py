from flask import Flask
from flask_restful import Api
from flask_cors import CORS # for dev only  

PRED_ENABLED = True

from api.hello import Hello
try:
    from api.predict import Make_Prediction
except:
    PRED_ENABLED = False


app = Flask(__name__)

CORS(app) # remove for prod

api = Api(app)


@app.route("/")
def status():
    """
    Response to check if the server is running
    """    
    return {
        "status": "ok",
        "models_loaded": PRED_ENABLED    
        }


@app.errorhandler(404)
def not_found(e):
    """
    Response to invalid endpoints, returns 404
    """
    return {"message": "Not found"}, 404


# list of endpoints
api.add_resource(Hello, "/hello")

if PRED_ENABLED:
    api.add_resource(Make_Prediction, "/api/predict")
else:
    @app.route("/api/predict")
    def not_enabled():
        return {"message": "Prediction is not enabled!"}, 400
    

"""
TODO
    - ditch server, use cloud for model hosting
    - If not
        - use async/await
        - modularize the predict resource
            - dir Predict
            - use a map to call the correct function
        - terrafrom for deployment
        - aws lambda for model hosting, fix lambda issue
        - use cloud storage for image uploads/firebase connection with flask 
"""