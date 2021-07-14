const fs = require("fs");
const path = require("path");

// define path globally
const p = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "products.json"
);

const getOrdersFromFiles = (cb) => {
  fs.readFile(p, (err, content) => {
    if (err) return cb( []); // in this case it gives us empty array 
    cb(JSON.parse(content)); // in this case it gives us array contains all orders .....
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
  static findByName(name , callback) {
    let order ;
    getOrdersFromFiles(orders => {
      order = orders.find(o => o.name === name)
      if(order){
        callback(order);
      }
    });
  }
};
