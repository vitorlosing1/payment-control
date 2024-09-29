import { Sequelize, DataTypes, Model } from "sequelize";

const sequelize = new Sequelize({
  dialect: "mysql",
  database: "nodetest",
  username: "root",
  password: "1234",
  host: "localhost",
  port: 3306,
});

export default sequelize;
