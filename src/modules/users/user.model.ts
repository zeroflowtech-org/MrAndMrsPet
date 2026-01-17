import { DataTypes, Model } from "sequelize";
import sequelize from "../../config/database";

export class User extends Model {
  declare id: number;
  declare email: string;
  declare passwordHash: string;
  declare role: "CUSTOMER" | "VENDOR" | "ADMIN";
}

User.init(
  {
    id: { type: DataTypes.BIGINT, autoIncrement: true, primaryKey: true },
    email: { type: DataTypes.STRING(150), unique: true, allowNull: false },
    passwordHash: { type: DataTypes.STRING, allowNull: false },
    role: { type: DataTypes.STRING(20), allowNull: false },
  },
  { sequelize, tableName: "Users" }
);
