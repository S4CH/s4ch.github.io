var argv = require('minimist')(process.argv.slice(2));

if (process.argv.length != 8) {
	console.log('Example usage: ')
	console.log('node stream_brute_force.js -w /usr/share/wordlists/rockyou.txt -c 1337 -u abcd')
	console.log('-w: wordlist')
	console.log('-c: ciphered snippet')
	console.log('-u: unciphered snippet')
	return 0;
}

console.log('----------------------------------------------')
console.log('Cooking up some keys')
console.log("Bob Loblaw's Vigenere Cipher Brute Force tool")
console.log('----------------------------------------------')



const fs = require('fs');
const readline = require('readline');
const chef = require("cyberchef");

const readInterface = readline.createInterface({
	input: fs.createReadStream(argv['w']), //keep in mind vigenere cipher keys can only contain letters
	console: false
});

var done = false;

// Reads each line of the key file as a stream to enable large files for brute forcing (i.e. rockyou)
readInterface.on('line', function(line) {
	if (String(chef.vigenèreDecode(argv['c'], [line])) == argv['u']) {
		console.log()
        	console.log('The key is: ' + line)
		console.log()
		process.exit()
	}
});
