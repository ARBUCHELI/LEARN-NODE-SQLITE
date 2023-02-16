const { printQueryResults, calculateAverages, addClimateRowToObject } = require('./utils');
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

//const ids = [1, 25, 45, 100, 360, 382];
// your code below:

/*ids.map(id => {
  db.get("SELECT * FROM test WHERE id = $id",  {
        $id: id
        },
    (error, rows) => {
      printQueryResults(rows);
    }
)
})

Using db.run()
const newRow = {
  location: 'Istanbul, Turkey',
  year: 1976,

}
// Your code below!
//Handling Errors Gracefully
const newRow = {
  location: 'Istanbul, Turkey',
  year: 1976,
  tempAvg: 13.35,
  id: 777
}

db.run('INSERT INTO test (location, year, temp_avg, id) VALUES ($location, $year, $tempAvg, $id)', {
  $location: newRow.location,
  $year: newRow.year,
  $tempAvg: newRow.tempAvg,
  $id: newRow.id
}, function(error) {
  // handle errors here!
  if(error) {
    console.log(error);
  };
    db.get('SELECT * FROM test WHERE id = 777', {
  },
  function(error, row){
    printQueryResults(row);
  });
});*/

//Using db.each()
const temperaturesByYear = {};

db.run('DROP TABLE IF EXISTS Average', error => {
  if (error) {
    throw error;
  }
  db.each('SELECT * FROM test',
    (error, row) => {
      if (error) {
        throw error;
      }
      addClimateRowToObject(row, temperaturesByYear);
    }, 
    error => {
      if (error) {
        throw error;
      }
      const averageTemperatureByYear = calculateAverages(temperaturesByYear);
			printQueryResults(averageTemperatureByYear);
    }
  );
});




