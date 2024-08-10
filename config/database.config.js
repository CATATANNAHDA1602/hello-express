const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'sample_database',
});

// hubungkan ke MySQL
connection.connect((err) => {
    if (err) {
        console.error('Connection failed while connect to database.', err.stack);
        return;
    }
    console.log('Connected into database.');
});

module.exports ={
    connection
};