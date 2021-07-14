const Order = require("../model/order"); // We got here A model !!
const TreatList = require("../model/treatList");

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
// this is resposable about to send all orders
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
  Order.findByName(req.params.orderName, (order) => {
    res.render("detail", { pageTitle: order.name, order });
  });
};

exports.postToTreat = (req, res) => {
  const orderName = req.body.productName;
  Order.findByName(orderName, (order) => {
    TreatList.addItem(order);
  });
  res.redirect("/");
};

exports.getTreatList = (req, res) => {
  TreatList.getList((orders) => {
    res.render("treat.ejs", { pageTitle: "Treat list", tratList: orders });
  });
};
