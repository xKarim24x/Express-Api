const mysql = require("mysql");

const pool = mysql.createPool({
  connectionLimit: 10,
  user: "bfc342825cd435",
  password: "5e9620de",
  database: "heroku_87e4e9c087d91f8",
  host: "us-cdbr-east-06.cleardb.net",
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
