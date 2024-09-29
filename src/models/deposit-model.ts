import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../shared/connection.js";

interface DepositAttributes {
  id: number;
  clientId: number;
  depositValue: number;
  operationDate: Date;
}

interface DepositCreationAttributes extends Optional<DepositAttributes, "id"> {}

export class Deposit
  extends Model<DepositAttributes, DepositCreationAttributes>
  implements DepositAttributes
{
  public id!: number;
  public clientId!: number;
  public depositValue!: number;
  public operationDate!: Date;
}

Deposit.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    clientId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    depositValue: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    operationDate: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    tableName: "deposit",
    timestamps: false,
  }
);

export default Deposit;
