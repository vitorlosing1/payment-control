import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../shared/connection.js";

interface JobAttributes {
  id: number;
  contractId: number;
  description: string;
  operationDate: Date;
  paymentDate?: Date;
  price: number;
  paid: boolean;
}

interface JobCreationAttributes
  extends Optional<JobAttributes, "id" | "paymentDate"> {}

export class Job
  extends Model<JobAttributes, JobCreationAttributes>
  implements JobAttributes
{
  public id!: number;
  public contractId!: number;
  public description!: string;
  public operationDate!: Date;
  public paymentDate?: Date;
  public price!: number;
  public paid!: boolean;
}

Job.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    contractId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(45),
    },
    operationDate: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    paymentDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    price: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    paid: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    sequelize,
    tableName: "job",
    timestamps: false,
  }
);

export default Job;
