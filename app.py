#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
Main Server File for running the flask app.
@Title: app.py
@Author: Mphatso
"""

# Import Third Party Modules

import os
from flask import Flask, request, render_template
from flask_cors import CORS
import requests
from requests.auth import HTTPBasicAuth


apiToken = "ea547439ae2aad787c4c84bc8d32a4e13d423ff2"


# Support for gomix's 'front-end' and 'back-end' UI.
app = Flask(__name__, static_folder='public', template_folder='views')  


# Enable CORS
CORS(app)

# Set the app secret key from the secret environment variables.
app.secret = os.environ.get('SECRET')



# Setup Flask functions and end routes
@app.route('/')
def homepage():
    """
    Displays the homepage.
    
    Returns: 
        render template for index.html
    """
    # login = "mphatso.simbao@gpreinc.com"
    # password = "Kaptwamwa6"

    # print(request.args['id'])

    # Making a get request
    # response = requests.get('https://my.labguru.com/api/v1/sessions',
    #         auth = HTTPBasicAuth(login, password))

    # print(response)
    

    return render_template('index.html')


@app.route('/login', methods=['GET', 'POST'])
def read():
    """
    Simple endpoint to fetch the stock and read and jsonify it to be used in javascript
    Returns: 
        Data of chosen item
    """

    login = ""
    password = ""

    login = request.args['email']
    password = request.args['password']

    # Making a get request
    url = "https://my.labguru.com/api/v1/sessions"

    print(login)
    print(password)

    params = {'login': login, 'password': password}
    response = requests.post(url, params=params)
    data = response.json()
    token = data['token']

    experiments_url = 'https://my.labguru.com/api/v1/experiments?token=a8237c81ab1e289f78b04eb3dfbdd332d122e7e9&page=2'
    params={'token':token, 'page':1}
    response = requests.post(experiments_url, params=params)
    data = response.json()

    return data


if __name__ == '__main__':
    app.run()