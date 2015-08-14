var fs = require('fs')
var inputfile = process.argv[2]
var stream = fs.createReadStream(inputfile)
stream.pipe(process.stdout)
//.pipe(process.stdout);