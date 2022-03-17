#!/usr/bin/python3
from hashlib import md5
from sys import argv, exit
from os import path


if len(argv) < 2:
    print("No wordlist specified")
    exit()


try:
    with open(argv[1], "r") as data:
        words = [i.strip("\n") for i in data.readlines()]
except:
    print("Invalid wordlist")
    exit()


if len(argv) > 2:
    filename=argv[2]
else:
    filename="output.wordlist"


with open(filename, "w") as output:
    for i in words:
        output.write(f"{md5(i.encode()).hexdigest()}\n")