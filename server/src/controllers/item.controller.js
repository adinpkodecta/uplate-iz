const db = require("../models");
const Item = db.item;

const { item } = require("../models");

exports.getItems = (req, res) => {
  console.log(req.body);

  Item.findAll({})
    .then((items) => {
      return res.status(200).send(items);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.getItemById = (req, res) => {
  const { id } = req.params;

  Item.findOne({
    where: {
      id: id,
    },
  })
    .then((item) => {
      return res.status(200).send(item);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

// exports.postItem = (req, res) => {
//   Item.create({
//     title: req.body.title,
//     description: req.body.description,
//     details: req.body.details,
//   })
//     .then((item) => {
//       res.send({
//         message: "Item was registered successfully!",
//         item: item,
//       });
//     })
//     .catch((err) => {
//       res.status(500).send({ message: err.message });
//     });
// };
