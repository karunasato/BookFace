const orm = require('../config/orm')

const book = {
    //show all the groups
    selectAll: (cb) => {
        orm.selectAll("books", (res) => {
            cb(res);
        });
    },

    dropDown: (cb) => {
        orm.selectAll("books", "groups", (res) => {
            cb(res);
        });
    }
};

// Export the database functions for the controller (books-controller.js).
module.exports = book;