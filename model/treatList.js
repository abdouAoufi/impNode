const fs = require("fs");
const path = require("path");

const p = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "treat-list.json"
);

const getDataFormFile = (callback) => {
  fs.readFile(p, (error, fileContent) => {
    if (error) {
      return callback([]);
    } else {
      callback(JSON.parse(fileContent));
    }
  });
};

module.exports = class TreatList {
  static addItem(order) {
    getDataFormFile((orders) => {
      orders.push(order);
      fs.writeFile(p, JSON.stringify(orders), (error) => {
        return console.log(error);
      });
    });
  }
  static getList(callback) {
    getDataFormFile(callback);
  }
};
