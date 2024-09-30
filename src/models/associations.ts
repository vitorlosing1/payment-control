import sequelize from "../shared/connection.js";
import Profile from "./profile-model.js";
import Contract from "./contract-model.js";
import Job from "./job-model.js";
import Deposit from "./deposit-model.js";
import Payment from "./payment-model.js";

Profile.hasMany(Contract, { foreignKey: "clientId" });
Contract.belongsTo(Profile, { foreignKey: "clientId" });

Contract.hasMany(Job, { foreignKey: "contractId" });
Job.belongsTo(Contract, { foreignKey: "contractId" });

Profile.hasMany(Deposit, { foreignKey: "clientId" });
Deposit.belongsTo(Profile, { foreignKey: "clientId" });

Job.hasMany(Payment, { foreignKey: "jobId" });
Payment.belongsTo(Job, { foreignKey: "jobId" });

sequelize
  .sync()
  .then(() => {
    console.log("Models synchronized with the database.");
  })
  .catch((error) => {
    console.error("Error synchronizing models with the database: ", error);
  });

export { Profile, Contract, Job, Deposit, Payment };
