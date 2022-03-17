const net = require("net");

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

// exits with Ctrl + C 
const handleUserInput = function () {
  process.stdin.on('data', (key) => {
    if (key === '\u0003') {
    process.exit();
    }
  })
};

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: 50541,
  });

  conn.on("connect", () => {
    console.log('Established connection!')
  });

  conn.on("data", (data) => {
    console.log(data);
  });

  conn.on("connect", () => {
    console.log("Successfully connected to game server.")
  });

  conn.on("connect", () => {
    conn.write("Name: CHC");
  });

  conn.on("connect", () => {
    conn.write("Move: up");
  });

  conn.on("connect", () => {
    setTimeout(() => {
    conn.write("Move: left")
    }, 1000);
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

console.log("Connecting ...");
connect();

module.exports = connect;