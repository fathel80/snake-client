let connection;// TCP connection object

let setupInput = function (conn) {
  connection = conn;
  let stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};

let handleUserInput = (key) => {

  if(key === '\u0003'){
    process.exit();
  }
  
  if(key === 'w') {
    connection.write('Move: up');
  }

  if(key === 's') {
    connection.write('Move: down')
  }

  if(key === 'a') {
    connection.write('Move: left');
  }
  
  if((key === 'd')) {
    connection.write('Move: right');
  }

  if(key === 'h') {
    connection.write("Say: sssnake") // Comm
  };

}

module.exports = {
  setupInput
}