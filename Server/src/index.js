const server = require('./app.js');
const PORT = 3001;
const { conn } = require('./DB_connection.js');

conn.sync({force: true}).then(() => {
    server.listen(PORT, () => {
        console.log('Server listening on port ' + PORT);
    })
});