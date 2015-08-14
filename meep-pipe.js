var fs = require('fs')
var inputfile = process.argv[2]
fs.createReadStream(inputfile).pipe(process.stdout);