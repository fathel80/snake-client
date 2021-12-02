let { ClientRequest } = require('http');
let net = require("net");
let { IP, PORT } = require('./constant');

let connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT

  });
  conn.on('data', (data) => {
    console.log('serve says: ', data)  //data form server
  })
  conn.on('connect', () => {
    conn.write('Successfully connected to game server');  //print a message as soon as theirs a successful connection
    conn.write('Name: sm8');

  })
  conn.setEncoding("utf8");
//incoming data interpreted as a text
  return conn;
};

console.log('Connecting ...');
connect();

module.exports = {
  connect,

};
