import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../shared/connection.js";

interface ContractAttributes {
  id: number;
  terms: string;
  clientId: number;
  contractorId: number;
  operationDate: Date;
  status: string;
}

interface ContractCreationAttributes
  extends Optional<ContractAttributes, "id"> {}

export class Contract
  extends Model<ContractAttributes, ContractCreationAttributes>
  implements ContractAttributes
{
  public id!: number;
  public terms!: string;
  public clientId!: number;
  public contractorId!: number;
  public operationDate!: Date;
  public status!: string;
}

Contract.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    terms: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    clientId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    contractorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    operationDate: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    status: {
      type: DataTypes.STRING(11),
    },
  },
  {
    sequelize,
    tableName: "contract",
    timestamps: false,
  }
);

export default Contract;
