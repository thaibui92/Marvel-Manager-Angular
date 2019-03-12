const sql = require("mssql");
const connectionString = "some-cnn-string";
const query1 = "some-query-1";
const query2 = "some-query-2";
const query3 = "some-query-3";
module.exports = {
  // getAccountId: function(apiKey, cb) {
  //   sql.connect(connectionString, connection => {
  //     connection.query(query1, result => {
  //       console.log(result1);
  //       connection.query(query2, { ...result1 }, result => {
  //         console.log(result2);
  //         connection.query(query3, { ...result2 }, result => {
  //           console.log(result3);
  //         });
  //       });
  //     });
  //   });
  // }
  getAccountId: async function (apiKey, cb) {
    try{
    const connection = await sql.connect(connectionString);
    const result1 = await connection.query(query1);
    console.log(result1);
    const result2 = await connection.query(query2, { ...result1 });
    console.log(result2);
    const result3 = await connection.query(query3, { ...result2 });
    console.log(result3);
    }
    catch(err){
      console.log(err); 
    }
  }
};