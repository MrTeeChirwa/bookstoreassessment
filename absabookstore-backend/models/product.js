const mongodb = require("mongodb");
const getDb = require("../util/database").getDb;

const User = require("../models/user");

class Product {
  constructor(title, price, description, imageUrl, id) {
    this.title = title;
    this.price = price;
    this.description = description;
    this.imageUrl = imageUrl;
    //this._id = id;

    // avoiding to covert the id to mongodb objectID.
    this._id = id ? new mongodb.ObjectID(id) : null;
  }

  save() {
    const db = getDb(); // database connection
    let dbOp;

    if (this._id) {
      // update the product
      // Note to self: collection = table in MYSQL/SQL
      dbOp = db
        .collection("products")
        //.updateOne({ _id: new mongodb.ObjectID(this._id) }, { $set: this });
        .updateOne({ _id: this._id }, { $set: this });
      // Note to self: $set is mongodb reserved keyword for updating DB record
    } else {
      // save the product
      dbOp = db.collection("products").insertOne(this);
    }
    return dbOp.then((result) => {}).catch((err) => console.log(err));

    // Note to self:
    // insertOne({ name: "A book", price: 12.99 })
    // insertOne({})
    // insertMany([])
  }

  static fetchAll() {
    const db = getDb();
    return db
      .collection("products")
      .find()
      .toArray()
      .then((products) => {
        return products;
      })
      .catch((err) => {
        console.log(err);
      });

    // Note to self:
    // find({title: 'A Book'})
    // find() // ! find all products
    // find().toArray() // ! find all products as array
  }

  static findByID(prodId) {
    const db = getDb();
    return (
      db
        .collection("products")
        .find({ _id: new mongodb.ObjectID(prodId) })
        // Note to self: new mongodb.ObjectID() - every id, mongodb converts mongodb object. so I need to convert javascript.
        .next()
        // next() - also last document that was returned by find here.
        .then((product) => {
          console.log("53 product model", product);
          return product;
        })
        .catch((err) => {
          console.log(err);
        })
    );
  }

  static deleteById(prodId) {
    const db = getDb();
    return db
      .collection("products")
      .deleteOne({ _id: new mongodb.ObjectID(prodId) })
      .then((result) => {
        console.log("Deleted");
        console.log("95 product model", result);
      })
      .catch((err) => console.log(err));
  }
}

module.exports = Product;
