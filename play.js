const net = require("net");

//!/usr/bin/env node

process.stdout.write('\x07');

const { Game } = require('./src/Game')
const { UserInterface } = require('./src/UserInterface')
const { RemoteInterface } = require('./src/RemoteInterface')
const game = new Game(new UserInterface(), new RemoteInterface())

// Begin game
game.start()
// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '192.168.2.14',// IP address here,
    port: "50541",// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

console.log("Connecting ...");
connect();
