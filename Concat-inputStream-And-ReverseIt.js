var concat = require('concat-stream');
var fs = require('fs');
var through2 = require('through2');

var writeStream = concat(function(data){
	console.log(data.toString().split('').reverse().join(''));
});

process.stdin.pipe(writeStream);
// var tr = through2(function(line,_,next){
// 	this.push("\n"+line.toString())
// 	next();
// });

// var inputStream = fs.createReadStream('map.txt')
// 	inputStream.pipe(tr)
// 			.pipe(process.stdout);