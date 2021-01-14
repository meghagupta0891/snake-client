const net = require('net');
const {IP, PORT} = require('./constants');

module.exports = {
/**
 * Establishes connection with the game server
 */
 connect : () => {
    const conn = net.createConnection({ 
      host: IP,
      port: PORT
    });
    // interpret incoming data as text
    conn.setEncoding('utf8'); 
    conn.on('connect', () => {
        conn.write("Move: up");
        conn.write('Name: MM');
    });
    return conn;
}
}  