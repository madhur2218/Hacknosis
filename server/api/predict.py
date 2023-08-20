from flask_restful import Resource, abort
from flask import jsonify, request
import uuid
import os

try:
  import tensorflow as tf
  from tensorflow.keras.models import load_model
  from tensorflow.keras.preprocessing.image import load_img , img_to_array
except:
  raise ImportError("Tensorflow not installed!")


API_DIR = os.path.dirname(os.path.abspath(__file__))
MODEL_DIR = os.path.join(API_DIR, '..','models')
UPLOAD_FOLDER = os.path.join(API_DIR, 'uploads')
print("UPLOAD_FOLDER :", UPLOAD_FOLDER)


class Predict():
  """
  Each object will have a model set to it & the labels of the classes 
  We can set a custom preprocessing and postprocessing function. 
  [TODO] Arguments are passed to the functions as a dictionary (**kwargs) 
  Inputs are handled by the object's __call__ method
    On call, image is preprocessed and then passed to the model. The output is then postprocessed 
    and data is returned.

  Inputs to the object are:
    model: the model to be used for prediction
    labels: the labels of the classes
    preprocessing: a function to preprocess the image
    postprocessing: a function to postprocess the output
  """

  # default preprocessing function
  def default_preprocessing(image):
    img = img_to_array(image)
    img = img.astype('float32')
    img = img/255.0
    img = img.reshape(1 , 224 ,224 ,3)
    return img


  # default postprocessing function
  def default_postprocessing(result):
    probilities = { i: round((result[0][i]*100), 2) for i in range(result[0].shape[0]) }
    label_idx = max(probilities , key = probilities.get)
    return {
      "message": "Success!", 
      "predicted_class_idx": label_idx, 
      "probilities": probilities
    }


  def __init__(self, model, labels):
    self.model = model
    self.labels = labels
    self.preprocessing = Predict.default_preprocessing
    self.postprocessing = Predict.default_postprocessing


  def __call__(self, image):
    # preprocess the image
    image = self.preprocessing(image)
    # predict the class
    result = self.model.predict(image)
    # postprocess the output
    result = self.postprocessing(result)
    
    return result


def do_prediction(id, labels, model_name):
  """
  Function to predict the class of the image
  
  Inputs:
    id: the id of the image
    labels: the labels of the classes
    model_name: the name of the model to be used for prediction
  """
  # load the image
  img = load_img(os.path.join(UPLOAD_FOLDER,id), target_size = (224, 224))
  
  LABELS = labels

  predict = Predict(
    model = load_model(os.path.join(MODEL_DIR, model_name)), 
    labels = LABELS 
    )

  try:
    output = predict(img)
  except Exception as e:
    print(e)
    output = {"message": "Something went wrong!",
              "error": str(e)}
  
  return {"labels":LABELS, "result": output}


modelMap = {
  "skin-burn": {
        "labels":   ["Superficial", "Superficial Partial-Thickness", "Full Thickness", "Healthy Skin"],
        "model_name": "burn.h5"
      },

  "pox-viruses": {
        "labels":   ["chickenpox", "Healthy","measlses", "monkeypox", "smallpox"],
        "model_name": "pox.h5"
      },

  "skin-cancer": {
        "labels":   ["Actinic Keratoses","Basal Cell carcinoma","Benign Keratosis-like lesions", \
                     "Dermatofibromax","Melanocytic nevi","Melanoma","Vascular Lesions"],
        "model_name": "cancer.h5"
      },
}


def allowed_file(filename):
  """
  Checks if the file extension is allowed
  """
  ALLOWED_EXT = {'jpg' , 'jpeg' , 'png' , 'jfif'}
  
  return '.' in filename and \
    filename.rsplit('.', 1)[1] in ALLOWED_EXT



class Make_Prediction(Resource):
  def post(self):
    file = request.files['img']
    if file and allowed_file(file.filename):
      print("file object type=> ",type(file))
      id = str(uuid.uuid4()) + file.filename
      # saves the file locally to the uploads folder! 
      # TODO: store the file in a cloud storage!
      file.save(os.path.join(UPLOAD_FOLDER,id))

      print(f"[SERVER] >> {file.filename} saved successfully!")
      module_to_use = request.form['type']
      print(f"[SERVER] >> Problem selected: {module_to_use}")
      # get the prediction from the model 
   
      return jsonify(do_prediction(id, modelMap[module_to_use]["labels"], modelMap[module_to_use]["model_name"]))
    

    abort(400, message="Invalid file type")
    
  
  def get(self):
    return {
      "message": "Make Predictions",
      "status": "Models are loaded!",
      "models_available": list(modelMap.keys())
    }