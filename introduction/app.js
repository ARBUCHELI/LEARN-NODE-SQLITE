const { printQueryResults } = require('./utils');
// require the 'sqlite3' package here
const sqlite3 = require('sqlite3');

// open up the SQLite database in './db.sqlite'
const db = new sqlite3.Database('./test.db');


/*db.all('SELECT * FROM test ORDER BY year', (error, rows) => {
  if (error) {
    throw error;
  }
  printQueryResults(rows);
});

db.all('SELECT * FROM test WHERE year = 1866', (error, rows) => {
  printQueryResults(rows);
});*/



