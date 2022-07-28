s1 = "44585d6b2368737c65252166234f20626d"
s2 = "1010101010101010101010101010101010"

a = hex(int(s1, 16) ^ int(s2, 16))[2:]
print(bytes.fromhex(a).decode('utf-8'))
