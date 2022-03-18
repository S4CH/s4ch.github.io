import requests

path    = "/"
host    = "http://10.10.169.100:3000"
values  = []

while path != "/end":
    r = requests.get(host+path)
    json_r = r.json()
    path = "/" + json_r["next"]
    if path != "/end":
        values.append(json_r["value"])

print("".join(values))
