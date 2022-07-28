import base64

f = open("encodedflag.txt", "r")
flag = f.read()

for i in range(0,5):
    result = base64.b16decode(flag)
    flag = result

for i in range(0,5):
    result = base64.b32decode(flag)
    flag = result

for i in range(0,5):
    result = base64.b64decode(flag)
    flag = result

print(flag)

f.close()