import requests
from requests.auth import HTTPBasicAuth

# token = 'a8237c81ab1e289f78b04eb3dfbdd332d122e7e9'

# experiments_url = 'https://my.labguru.com/api/v1/experiments'
# params={'token':token, 'page':1, 'meta':'true'}
# response = requests.post(experiments_url, params=params)
# data = response.json()

login = "mphatso.simbao@gpreinc.com"
password = "Kaptwamwa3*"

url = "https://my.labguru.com/api/v1/sessions?login=mphatso.simbao@gpreinc.com&password=Kaptwamwa3*"

# print(login)
# print(password)

params = {'login': login, 'password': password}
# response = requests.post(url, params=params)
response = requests.post(url)
data = response.json()
token = data['token']

# experiments_url = 'https://my.labguru.com/api/v1/experiments?token=a8237c81ab1e289f78b04eb3dfbdd332d122e7e9&page=2'


print(data)