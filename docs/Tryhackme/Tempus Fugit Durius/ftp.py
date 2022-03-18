#!/usr/bin/python

from ftplib import FTP

ftp = FTP('ftp.mofo.pwn')
ftp.login('someuser', '04653cr37Passw0rdK06')
ftp.retrlines('LIST')

with open('creds.txt', 'wb') as fp:
    ftp.retrbinary('RETR creds.txt', fp.write)
    ftp.quit()
