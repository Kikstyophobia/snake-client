const net = require('net');
const { IP, PORT } = require('./constants');

const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.on("data", (data) => {
    console.log(data);
  });

  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log('Established connection!')
    console.log("Successfully connected to game server.")
    conn.write("Name: CHC");
  });
  
  return conn;
};

module.exports = {connect};