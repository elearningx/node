/****************************
 MONGOOSE SCHEMAS
 ****************************/
// let config = require('./configs');
// let mongoose = require('mongoose');
// mongoose.Promise = global.Promise;

// let mongoDBOptions = {
//     useUnifiedTopology: true,
//     useNewUrlParser: true,
// }

// module.exports = function() {
//     var db = mongoose.connect(config.db, mongoDBOptions).then(
//         (connect) => { console.log('MongoDB connected') },
//         (err) => { console.log('MongoDB connection error', err) }
//     );
//     // mongoose.set('useCreateIndex', true);
//     return db;
// };

let config = require('./configs');
let mongoose = require('mongoose');
mongoose.Promise = global.Promise;

let mongoDBOptions = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
};

module.exports = function() {
    return new Promise((resolve, reject) => {
        mongoose.connect(config.db, mongoDBOptions).then(
            (connect) => {
                console.log('MongoDB connected');
                resolve(connect);
            },
            (err) => {
                console.log('MongoDB connection error', err);
                reject(err);
            }
        );
    });
};