const { printQueryResults } = require('./utils');
// require the 'sqlite3' package here
const sqlite3 = require('sqlite3');

//Opening a database

// open up the SQLite database in './db.sqlite'
const db = new sqlite3.Database('./test.db');

//Retrieving all rows
/*db.all('SELECT * FROM test ORDER BY year', (error, rows) => {
  if (error) {
    throw error;
  }
  printQueryResults(rows);
});

db.all('SELECT * FROM test WHERE year = 1866', (error, rows) => {
  printQueryResults(rows);
});*/

//Retrieving a single row
/*db.get("SELECT * FROM test WHERE year = 1875", (erro, row) => {
  printQueryResults(row);
})*/

//Using Placeholders

const ids = [1, 25, 45, 100, 360, 382];
// your code below:

ids.map(id => {
  db.get("SELECT * FROM test WHERE id = $id",  {
        $id: id
        },
    (error, rows) => {
      printQueryResults(rows);
    }
)
})





