const mysql = require("mysql");

const pool = mysql.createPool({
  connectionLimit: 10,
  user: "root",
  password: "password",
  database: "devdb",
  host: "localhost",
  port: "3306",
});

let devdb = {};

devdb.all = () => {
  return new Promise((resolve, reject) => {
    pool.query(`SELECT * FROM users`, (err, results) => {
      if (err) {
        return reject(err);
      }
      return resolve(results);
    });
  });
};

devdb.one = (id) => {
    return new Promise((resolve, reject) => {
      pool.query(`SELECT * FROM users WHERE ID = ?`, [id], (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results[0]);
      });
    });
}

module.exports = devdb;
