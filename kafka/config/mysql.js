
var mysql = require('mysql');

//Put your mysql configuration settings - user, password, database and port

    var pool = mysql.createPool({
        host     : 'localhost',
        user     : 'root',
        password : 'mysqlpassword',
        database : 'Kayak',
        port	 : 3306,
        connectionLimit:500
    });




function fetchData(callback,sqlQuery){

    console.log("\n(mysql.js)SQL Query::"+sqlQuery);

    //var connection=getConnection();

    pool.getConnection(function(err, connection) {


        connection.query(sqlQuery, function (err, rows, fields) {
            if (err) {
                console.log("ERROR: " + err.message);
            }
            else {	// return err or result
                console.log("DB Results:" + rows);
                callback(err, rows);
            }
        });
        console.log("\nConnection closed..");
        connection.release();

    });


}



function insertData(callback,sqlQuery){

    console.log("\nSQL Query::"+sqlQuery);

    //var connection=getConnection();

    pool.getConnection(function(err, connection) {

        connection.query(sqlQuery, function (err, rows) {
            if (err) {
                console.log("ERROR: " + err.message);
                callback(err, rows);
            }
            else {	// return err or result
                console.log("DB Insertion successful");
                callback(err, rows);
            }
        });
        console.log("\nConnection closed..");
        connection.release();
    });
}

function deleteData(callback,sqlQuery){

    console.log("\nSQL Query::"+sqlQuery);

    //var connection=getConnection();

    pool.getConnection(function(err, connection) {

        connection.query(sqlQuery, function (err, rows) {
            if (err) {
                console.log("ERROR: " + err.message);
                callback(err, rows);
            }
            else {	// return err or result
                console.log("DB deletion successful");
                callback(err, rows);
            }
        });
        console.log("\nConnection closed..");
        connection.release();
    });
}

function insertstarfiles(callback,sqlQuery){

    console.log("\nSQL Query::"+sqlQuery);

    //var connection=getConnection();

    pool.getConnection(function(err, connection) {

        connection.query(sqlQuery, function (err, rows) {
            if (err) {
                console.log("ERROR: " + err.message);
                callback(err, rows);
            }
            else {	// return err or result
                console.log("DB Insertion for star files successful");
                callback(err, rows);
            }
        });
        console.log("\nConnection closed..");
        connection.release();
    });
}

exports.fetchData=fetchData;
exports.insertData=insertData;
exports.insertstarfiles=insertstarfiles;
exports.deleteData=deleteData;
