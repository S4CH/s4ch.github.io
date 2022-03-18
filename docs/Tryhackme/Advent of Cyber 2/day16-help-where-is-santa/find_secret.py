import requests as r
from bs4 import BeautifulSoup

url = "http://10.10.135.149:8000"

page = r.get(url)
page = BeautifulSoup(page.text, "html.parser")

links = page.find_all("a")
for i in links:
    if i.get("href") not in ["#", "https://tryhackme.com"]:
        print(i.get("href"))