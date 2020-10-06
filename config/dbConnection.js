const mysql = require('mysql');


const connMySQL = function () {
    return connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '1998',
        database: 'agro'
    });
}

module.exports =  function() {
    console.log('----------------------------')
    console.log('db funcionando')
    return connMySQL;
}