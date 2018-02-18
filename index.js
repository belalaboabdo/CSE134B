var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

// app.use(express.static(__dirname));

app.get('/', function(request, response) {
  response.sendFile(path.join(__dirname+'/index.html'));
})

// app.get('/Chat.html', function(request, response) {
//   response.sendFile(path.join(__dirname+'/Chat.html'));
// })

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
