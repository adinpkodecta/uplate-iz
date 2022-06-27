const express = require("express");
const app = express();
const { PORT } = require("./config/env");

app.use(express.json());

const db = require("./models");

db.sequelize.sync();

// force: true will drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   initial();
// });

require("./routes/item.routes")(app);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
