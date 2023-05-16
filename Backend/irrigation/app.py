from flask import Flask, request, jsonify, render_template, url_for
from flask_cors import CORS

# from tensorflow.keras.models import load_model
import numpy as np

from tensorflow.keras.models import load_model

# Load the saved model
loaded_model = load_model('model.h5')


# Use the loaded model for prediction or further training
# predictions = loaded_model.predict(x_test)

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})


# loaded_model = load_model('my_ann_model.h5')
@app.route('/check')
def myval():
    return render_template('form.html')
@app.route('/fuzzy_logic', methods=['POST'])
def fuzzy_logic():
    a=[]
    if request.method == 'POST':
        data = request.form.to_dict()
        a.append(int(data['temp']))
        a.append(int(data['moist']))
        predictions = np.array(a)
        predictions = predictions.reshape((1, -1))
        predictions = loaded_model.predict(predictions)
        predictions_list = predictions.tolist()
    
        if predictions >= 0.5:
            return "Do not water land"
        else :
            return "You should water land"
        
        # return jsonify({"predictions": predictions_value})
        
        # return 'Submitted'
if __name__ == '__main__':
    app.run(debug=True)
