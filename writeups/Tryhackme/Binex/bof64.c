#include <stdio.h>
#include <unistd.h>

int foo(){
	char buffer[600];
	int characters_read;
	printf("Enter some string:\n");
	characters_read = read(0, buffer, 1000);
	printf("You entered: %s", buffer);
	return 0;
}

void main(){
	setresuid(geteuid(), geteuid(), geteuid());
    	setresgid(getegid(), getegid(), getegid());

	foo();
}
