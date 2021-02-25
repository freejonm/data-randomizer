const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',

    port: 3306,

    user: 'root',

    password: 'a1b2c3d4',
    database: 'data_to_rand'
})

// const readData = () => {
//     connection.query('SELECT * FROM initial_data', (err, res) => {
//         if (err) throw err;

//         console.table(res);
//         connection.end();
//     })
// }

const randomize = () => {


    let min = 1;
    let max = 10;
    let stop = 4;

    let numbers = [];

    for(let i = 0; i < stop; i++){
        let n = Math.floor(Math.random() * max) + min;

        let check = numbers.includes(n);

        if (check === false){
            numbers.push(n);
        } else {
            while (check === true){
                n = Math.floor(Math.random() * max) + min;
                check = numbers.includes(n);
                if(check === false){
                    numbers.push(n);
                }
            }
        }
    
        
    }

    console.log(numbers);

   
    connection.query('SELECT * FROM initial_data WHERE ?',
        {
        id: numbers[0]
        }, 
        (err, res) => {
        if (err) throw err;
        
        console.table(res);
        connection.end();
    })

}




// Connect to the DB
connection.connect((err) => {
    if (err) throw err;
    console.log(`connected as id ${connection.threadId}\n`);
    // readData();
    randomize();
  });