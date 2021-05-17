const mysql = require('mysql');

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'test'
});

con.connect(function(err){
    if(err)
    throw err;
    else
    console.log('mySql database is connected.!');
});

// ****************** CREATE ***********************

var sql = "create database IF NOT EXISTS test"
con.query(sql, function(err, res){
    if(err)
    throw err;
    else
    console.log('database created succussfully..');
});

var sql = 'create table IF NOT EXISTS contacts(id int(3) PRIMARY KEY, name VARCHAR(50), email VARCHAR(50))'
con.query(sql,function(err,res) {
  if(err){
      throw err;
  }
  else{
  console.log('Table created.!');
  }
  });

  var records = [

    [1, 'Guru','guru@gmail.com'],
    [2, 'Raj', 'raj@gmail.com'],
    [3, 'Saanvi', 'sanu@gmail.com']
  ];

  // con.query('INSERT INTO contacts values(001,"Gururaj","gururaj@gmail.com")', function (err, res) {
  //   if(err) throw err;
  //   else console.log('inserted records successfully.')
  // });

  // ****************** INSERT **********************

  var sql= "INSERT INTO contacts (id, name, email) VALUES ?";

  var query = con.query(sql, [records], function(err, res){
    if(err) throw err;
    else
    console.log('Inserted records successfully');
  });

  // ******************** READ **************************

  var sql = 'SELECT * FROM contacts'
  con.query(sql, (err,rows) => {
    if(err) throw err;
    console.log(rows);
  });

// ******************* UPDATE ***************************

  var sql = "UPDATE contacts SET email = 'gurujamadar@gmail.com' WHERE email = 'guru@gmail.com'"
  con.query( sql, (err, result) => {
      if (err) throw err;
      else console.log('Updated successfully')
      }
  );


  var sql = 'SELECT * FROM contacts'
  con.query(sql, (err,rows) => {
    if(err) throw err;
    console.log(rows);
  });

// ************************ DELETE **********************

  var sql =  'DELETE FROM contacts where id = 1'
  con.query(sql, (err, result) => {
      if (err) throw err;
      else 
      console.log('Deleted..!!')
     }
  );

  var sql = 'SELECT * FROM contacts'
  con.query(sql, (err,rows) => {
    if(err) throw err;
    console.log(rows);
  });

  con.end();


