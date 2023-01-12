import pool from "./dbConfig";

let devdb = {};

devdb.all = () => {
  return new Promise((resolve, reject) => {
    pool.query(`SELECT * FROM users`, (err, results) => {
      if (err) return reject(err);

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
};

export default devdb;
