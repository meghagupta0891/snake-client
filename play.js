const { connect } = require('./client');
const setupInput = require('./input'); //==> setupInput function
console.log('Connecting ...');
let connection = connect();
setupInput(connection);