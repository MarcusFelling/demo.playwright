const app = require('express')();
const httpServer = require('http').Server(app);
const io = require('socket.io')(httpServer);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/chat.html');
});

io.on('connection', (socket) => {
  socket.on('chat message', msg => {
    io.emit('chat message', msg);
  });
});

async function run(port) {
  return new Promise(resolve => {
    httpServer.listen(port, () => {
      console.log(`Socket.IO server running at http://localhost:${port}/`);
      resolve(httpServer);
    });
  });
}

module.exports = run;
if (require.main === module)
  run(process.env.PORT || 3000);
