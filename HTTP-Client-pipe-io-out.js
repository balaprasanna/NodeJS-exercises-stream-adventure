var request = require('request');
var baseurl = "http://localhost:8099"
process.stdin.pipe(request.post(baseurl)).pipe(process.stdout);