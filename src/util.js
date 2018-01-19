class Util{

  getJSON(){
    var myObject = JSON.parse("./alternatives.json");
  }
/*connectToPrint(){
var mysql = require('mysql')
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'gender_database'
});

connection.connect()

connection.query('SELECT selection1_name from alternatives as selection', function (err, rows, fields) {
  if (err) throw err

  console.log('The solution is: ', rows[0].selection)
})

connection.end()
}*/
}
export default Util;