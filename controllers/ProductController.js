const Product = require("../model/product");

exports.addProducts = (req, res, next) => {
  const product = new Product(
    req.body.mark,
    req.body.name,
    req.body.modal,
    req.body.entryDate
  );
  product.save();
  res.redirect("/");
};
exports.getProducts = (req, res, next) => {
  const products = Product.getProducts();
  console.log("prodducts => " , products);
  res.render("order", {
    pageTitle: "My orders",
    productList: products,
  });
};

exports.getHome = (req, res, next) => {
  res.render("index");
};
