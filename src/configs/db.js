const mongoose = require('mongoose');

module.exports = () => {
    return mongoose.connect("mongodb+srv://armaanhooda97:7thhFGXguPSDEskp@website.eilw5ko.mongodb.net/?retryWrites=true&w=majority");
    
};