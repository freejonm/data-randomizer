const mysql = require('mysql');
const fs = require('fs');
const csv = require('fast-csv');
const ws = fs.createWriteStream("randomized_data.csv");

const connection = mysql.createConnection({
    host: 'localhost',

    port: 3306,

    user: 'root',

    password: 'a1b2c3d4',
    database: 'data_to_rand'
})


const getRandom = () => {    
connection.query('SELECT * FROM initial_data ORDER BY RAND() LIMIT 5;',
        (err, res) => {
        if (err) throw err;
        
        console.table(res);

        csv.write(res, { headers: true}).on("finish", function(){console.log("File written!");}).pipe(ws);

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