def positions(str):
    list1 = []
    for i in str:
        list1.append((ord(i) & 31))

    res = []
    for ele in range(0, len(list1), 2):
        res.append((list1[ele] + list1[ele + 1]) % 26)


    for i in range(len(res)):
        print(chr(res[i] + 64).lower(), end=" ")

str1 = "hEzAdCfHzA"
positions(str1)
print("::", end=" ")
str2 = "hEzAdCfHzAhAiJzAeIaDjBcBhHgAzAfHfN"
positions(str2)