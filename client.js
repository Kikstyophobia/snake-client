const net = require('net');

const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: 50541,
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