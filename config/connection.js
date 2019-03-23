// Set up MySQL connection
var mysql = require("mysql");

var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "MilaBean417",
    database: "burgers_db"
});
}

//mySQL connection
connection.connect(function(err) {
    if (err) {
        console.error('ERROR: MySQL connection error --' + err.stack + '\n\n');
        return;
    }
    console.log('Connected to MySQL database as id ' + connection.threadId + '\n\n');
});

//Export connections
module.exports = connection;