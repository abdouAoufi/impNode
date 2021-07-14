const Order = require("../model/order");

exports.addOrder = (req, res, next) => {
  const order = new Order(
    req.body.mark,
    req.body.name,
    req.body.modal,
    req.body.entryDate
  );
  order.save();
  res.redirect("/");
};
exports.getAllOrders = (req, res, next) => {
  Order.getOrders((orders) => {
    res.render("order", {
      pageTitle: "My orders",
      orderList: orders,
    });
  });
};

exports.getHome = (req, res, next) => {
  res.render("index");
};

exports.getDetails = (req, res) => {
  Order.findByName((orders) => {
    const order = orders.find((order) => order.name === req.params.orderName);
    res.render("detail", { pageTitle: order.name, order });
  });
};


exports.postToTreat = (req , res) => {
  console.log(req.body);
  res.redirect("/")
}