var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('<h1>Innovadiv - Entertainment Consultation</h1><p>Contact <a href="mailto:lscullark@innovadiv.com">lscullark@innovadiv.com</a> for more details</p>');
}).listen(80);

console.log('app running...');