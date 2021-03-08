const mysql = require('mysql');
const fs = require('fs');
const csv = require('fast-csv');
const ws = fs.createWriteStream("randomized_data.csv");

// Edit the lines below so the values match the desired number of random samples.

const limit = 5;

const connection = mysql.createConnection({
    host: 'localhost',

    port: 3306,

    user: 'root',

    // Be sure to change the password below to your MySQL root password. 
    password: 'a1b2c3d4',

    database: 'data_to_rand'
})


const getRandom = () => {    
connection.query(`SELECT * FROM initial_data ORDER BY RAND() LIMIT ${limit};`,
        (err, res) => {
        if (err) throw err;

        csv.write(res, { headers: true}).on("finish", function(){console.log("CSV file written with the data displayed here.");}).pipe(ws);

        console.table(res);

        connection.end();
    });
};
    

// Connect to the DB
connection.connect((err) => {
    if (err) throw err;
    console.log(`connected as id ${connection.threadId}\n`);
    // readData();
    getRandom();
  });