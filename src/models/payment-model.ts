import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../shared/connection.js";

interface PaymentAttributes {
  id: number;
  jobId: number;
  operationDate: Date;
  paymentValue: number;
}

interface PaymentCreationAttributes extends Optional<PaymentAttributes, "id"> {}

export class Payment
  extends Model<PaymentAttributes, PaymentCreationAttributes>
  implements PaymentAttributes
{
  public id!: number;
  public jobId!: number;
  public operationDate!: Date;
  public paymentValue!: number;
}

Payment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    jobId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    operationDate: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    paymentValue: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "payment",
    timestamps: false,
  }
);

export default Payment;
