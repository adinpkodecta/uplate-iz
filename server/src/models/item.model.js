module.exports = (sequelize, Sequelize) => {
  const Item = sequelize.define("items", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      notNull: true,
      autoIncrement: true,
    },
    title: {
      type: Sequelize.STRING,
      notNull: true,
    },
    description: {
      type: Sequelize.TEXT,
    },
    details: {
      type: Sequelize.TEXT,
    },
    imageSrc: {
      type: Sequelize.STRING,
    },
    createdAt: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
    },
    updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
  });

  return Item;
};
