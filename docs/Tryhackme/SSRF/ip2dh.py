"""
You can run this in the following format:
For decimal: python3 ip2dh.py D <Ip-address>
For Hexadecimal: python3 ip2dh.py H <Ip-address>
"""
#!/usr/bin/python3

import sys

if len(sys.argv) < 3:
    print('\nYou must give desired format and IPv4 address as input...')
    print('e.g.: D 192.168.10.100')
    print('Valid formats D=Decimal H=Hexadecimal\n')
    sys.exit(1)

Format = sys.argv[1]

def long(ip):
   IP = ip.split('.')
   IP = list(map(int, IP))
   LongIP = IP[0]*2**24 + IP[1]*2**16 + IP[2]*2**8 + IP[3]
   return LongIP

ip = long(sys.argv[2])

if Format == 'D':
   print('\nIP as Decimal format: %s' % (ip))

if Format == 'H':
   print('\nIP as Hexadecimal format: %s' % (hex(ip)))
