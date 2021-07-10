const listProduct = [];

module.exports = class Product { // default export 
  constructor(mark, name, model, date) {
    this.mark = mark;
    this.name = name;
    this.model = model;
    this.date = date;
  }
  save() {
    listProduct.push(this);
  }
  static getProducts() {
    return listProduct;
  }
};
