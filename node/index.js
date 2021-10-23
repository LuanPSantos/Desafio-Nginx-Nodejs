const express = require('express')
const mysql = require('mysql')

const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database:'nodedb'
};

const connection = mysql.createConnection(config)
const sqlUse = `use nodedb`
const sqlCreate = `CREATE TABLE IF NOT EXISTS people(name VARCHAR(255) NOT NULL)ENGINE=INNODB;`
const sqlInsertNewPeople = `INSERT INTO people(name) values('Mauro')`
const sqlSelectPeople = `select name from people`;

connection.query(sqlUse)
connection.query(sqlCreate)
connection.query(sqlInsertNewPeople)
connection.query(sqlSelectPeople, (err, result, fields) => {
  if (err) {
    throw err;
  }
  resultPeople = result.map(row => '<li>' + row.name + '</li>')
});
connection.end()


app.get('/', (req,res) => {
    res.send('<h1>Full Cycle Rocks!</h1>' + '<h2>Name:</h2><ul>' + resultPeople + '</ul>')
})

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})
