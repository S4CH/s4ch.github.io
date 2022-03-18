import string
import math

characters = string.digits + string.ascii_lowercase

hashstring = 'dxeedxebdwemdwesdxdtdweqdxefdxefdxdudueqduerdvdtdvdu'

ord_chars = [ ord(i) for i in hashstring ]


password = [ ord(j) for i in range(1,len(ord_chars),2)
        for j in characters if (ord(j) % 26 + 97) == ord_chars[i]
        and (math.floor(ord(j)/26) + 97) == ord_chars[i-1] ]

password = [ j for i in range(1,len(password),2)
        for j in characters if (ord(j) % 26 + 97) == password[i]
        and (math.floor(ord(j)/26) + 97) == password[i-1] ]

print("Connor's password is: " + ''.join(password))