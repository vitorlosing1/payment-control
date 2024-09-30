import express from "express";
import profileRoutes from "./routes/profile-routes.js";
import jobRoutes from "./routes/job-routes.js";
import depositRoutes from "./routes/deposit-routes.js";
import sequelize from "./shared/connection.js";
import contractRoutes from "./routes/contract-routes.js";
import paymentRoutes from "./routes/payment-routes.js";
import { Deposit } from "./models/deposit-model.js";
import { Job } from "./models/job-model.js";
import { Profile } from "./models/profile-model.js";
import { Contract } from "./models/contract-model.js";
import { Payment } from "./models/payment-model.js";
import "./models/associations.js";

const app = express();
const PORT = 3000;

app.use(express.json());

app.use(profileRoutes);
app.use(jobRoutes);
app.use(depositRoutes);
app.use(contractRoutes);
app.use(paymentRoutes);

app.get("/", (req, res) => {
  res.status(200).send("p1 NodeJs API using TS");
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connected sucessfully.");

    await sequelize.sync();
    console.log("Models synchronized with the database.");

    app.listen(PORT, () => {
      console.log("Server is running on port ", PORT);
    });
  } catch (error) {
    console.error("Unable to connect to the database: ", error);
  }
})();

export default app;
