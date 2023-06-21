const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'db_users'
  });

export default function handler(req, res) {
  // simple query
connection.query(
    'SELECT * FROM `tbl_users`',
    function(err, results) {
      console.log(results); // results contains rows returned by server
      res.status(200).json({users: results});
    }
  );
 
}
//export default function handler(req, res) {
//    res.status(200).json([
//       { id: '1', firstname: 'Sathit', lastname: 'Chitbamrung', username: 'sathitchitbamrung', password: '0817345543', status: 'admin' },
//        { id: '2', firstname: 'สาธิต', lastname: 'จิตรบำรุง    ', username: 'sathitchitbamrung', password: '0817345543', status: 'user' }
//    ])
//  }

  