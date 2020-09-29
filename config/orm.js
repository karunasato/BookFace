const connection = require("../config/config.js");

printQuestionMarks = (num) => {
  const arr = [];

  for (let i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}


objToSql = (ob) => {
  const arr = [];

  // loop through the keys and push the key/value as a string int arr
  for (let key in ob) {
    let value = ob[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // if string with spaces, add quotations 
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      
      arr.push(key + "=" + value);
    }
  }

  // translate array of strings to a single comma-separated string
  return arr.toString();
}

// Object for all our SQL statement functions.
const orm = {
  //view all groups
  selectAll: (tableInput, cb) => {
    let queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  //add a group
  insertOne: (table, cols, vals, cb) => {
    let queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";


    connection.query(queryString, vals, (err, result) => {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  
  //delete a group
  delete: function(table, condition, cb) {
    var queryString = "DELETE FROM " + table;
    queryString += " WHERE ";
    queryString += condition;



    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },

  selectbyId: function(table, id, cb) {
    var queryString = "SELECT * FROM " + table + " WHERE id =" + id;

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
    
      if(result[0]) {
        cb(result[0]);
      } else {
        throw new Error("404 that group does not exist'");
      }
      
    })
  },

  //update group with subject of study
  update: function (objColVals, condition, cb) {
    const queryString = `UPDATE groups SET currentlyReading = '${objColVals.currentlyReading}', currentImgUrl = '${objColVals.currentImgUrl}', currentAuthor = '${objColVals.currentAuthor}' WHERE id = ${condition}`

    console.log("query string", queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  }
 


// Export the orm 
module.exports = orm;