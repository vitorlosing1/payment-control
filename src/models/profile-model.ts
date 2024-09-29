import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../shared/connection.js";

interface ProfileAttributes {
  id: number;
  firstName: string;
  lastName: string;
  profession: string;
  balance: number;
  type: string;
}

interface ProfileCreationAttributes extends Optional<ProfileAttributes, "id"> {}

export class Profile
  extends Model<ProfileAttributes, ProfileCreationAttributes>
  implements ProfileAttributes
{
  public id!: number;
  public firstName!: string;
  public lastName!: string;
  public profession!: string;
  public balance!: number;
  public type!: string;
}

Profile.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    firstName: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    profession: {
      type: DataTypes.STRING(45),
    },
    balance: {
      type: DataTypes.DOUBLE,
      defaultValue: 0,
    },
    type: {
      type: DataTypes.STRING(45),
    },
  },
  {
    sequelize,
    tableName: "profile",
    timestamps: false,
  }
);

export default Profile;
