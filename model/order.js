const root = require("../helper/path");
const fs = require("fs");
const path = require("path");
const p = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "products.json"
);

const getOrdersFromFiles = (cb) => {
  fs.readFile(p, (err, content) => {
    if (err) return cb( []);
    cb(JSON.parse(content));
  });
};
module.exports = class Order {
  // default export
  constructor(mark, name, model, date) {
    this.mark = mark;
    this.name = name;
    this.model = model;
    this.date = date;
  }
  save() {
    getOrdersFromFiles((listProducts) => {
      listProducts.push(this);
      fs.writeFile(p, JSON.stringify(listProducts), (error) => {
        console.log(error);
      });
    });
  }
  static getOrders(callback) {
    return getOrdersFromFiles(callback);
  }
  static findByName(callback) {
    getOrdersFromFiles(callback);
  }
};
