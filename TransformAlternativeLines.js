var split =  require('split')
var through2 = require('through2')
var i = 0 ;

var tr = through2(function (line, _, next) {
		if((i % 2) == 0)
		{
		this.push('\n' +line.toString().toLowerCase());			
		}else
		{			
		this.push('\n' +line.toString().toUpperCase());
		}
        i++;
        next();
    });

process.stdin
	.pipe(split())
	.pipe(tr)
    .pipe(process.stdout);