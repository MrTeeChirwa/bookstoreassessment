const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callBack) => {
  // accessing / creating testing database
  MongoClient.connect("mongodb://127.0.0.1:27017", {
    useUnifiedTopology: true,
  })
    .then((client) => {
      console.log("Connected!");
      //_db = client.db('dbName');
      _db = client.db("shop");
      callBack();
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

// getDb instance db connection do
const getDb = () => {
  if (_db) {
    return _db;
  }
  throw "No database found";
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
