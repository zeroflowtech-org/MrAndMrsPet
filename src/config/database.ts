import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

/**
 * Create Sequelize instance
 */
const sequelize = new Sequelize(
  process.env.DB_NAME as string,
  process.env.DB_USER as string,
  process.env.DB_PASSWORD as string,
  {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT || 5432),
    dialect: "postgres",

    logging: process.env.NODE_ENV === "development"
      ? console.log
      : false,

    pool: {
      max: 10,
      min: 0,
      acquire: 30000,
      idle: 10000
    },

    define: {
      timestamps: true,
      underscored: false
    }
  }
);

/**
 * Test DB connection
 */
export async function connectDatabase(): Promise<void> {
  try {
    await sequelize.authenticate();
    console.log("Database connection established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
    process.exit(1);
  }
}

export default sequelize;
