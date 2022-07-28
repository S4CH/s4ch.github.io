#!/usr/bin/python3
# get all possible combinatins from a set of arguments
from itertools import permutations
import sys
import os

ports_list = sys.argv[1:]
perm = permutations(ports_list)

for i in list(perm):
	u = os.popen("echo './decrypt_linux_amd64 %s'|tr -d '('|tr -d ')'|tr -d ','" % str(i)).read()
	print(u.strip('\n'))
