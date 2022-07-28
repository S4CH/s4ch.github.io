import socket
for i in range(0, 256):
    sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    sock.settimeout(0.5)
    ip = '172.16.1.{}'.format(i)
    if 0 == sock.connect_ex((ip, 22)):
        sock.close()
        print(ip + '   ON' , flush=True)
    else:
        print(ip,  flush=True)