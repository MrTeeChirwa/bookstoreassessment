const mongodb = require("mongodb");
const getDb = require("../util/database").getDb;

const ObjectId = mongodb.ObjectID;

class User {
  constructor(username, email, id) {
    this.name = username;
    this.email = email;
    this._id = id;
  }

  save() {
    const db = getDb();
    return db.collection("users").insertOne(this);
  }

  getOrders() {
    const db = getDb();
    return db
      .collection("orders")
      .find({ "user._id": new ObjectId(this._id) })
      .toArray()
      .then((orders) => {
        return orders;
      });
  }

  addOrder(products) {
    console.log(this._id);
    const db = getDb();
    const order = {
      items: products,
      user: {
        _id: new ObjectId(this._id),
        name: this.name,
      },
    };
    return db.collection("orders").insertOne(order);
  }

  static findById(userId) {
    const db = getDb();
    return db
      .collection("users")
      .findOne({ _id: new ObjectId(userId) })
      .then((user) => {
        console.log("user model", user);
        return user;
      })
      .catch((err) => {
        console.log(err);
      });
    /* .find({ _id: new ObjectId(userId) })
      .next(); */
  }
}

module.exports = User;
