const {db} = require('../db/dbconfig');

module.exports = {
  authenticate: (req, res) => {
    let data = req.body;
    let query = 'SELECT * FROM account WHERE userId = ?';
    db.query(query, [data], () => {
    
      res.json('success');
    });
  }
}