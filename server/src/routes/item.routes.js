const controller = require("../controllers/item.controller");

module.exports = function (app) {
  app.get("/items", controller.getItems);

  app.get("/item/:id", controller.getItemById);
};
