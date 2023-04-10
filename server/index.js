import cors from "cors";
import * as dotenv from "dotenv";
import express from "express";
import connectDB from "./mongodb/connect.js";
import todoItemsRoutes from "./routes/todoItemsRoutes.js";

dotenv.config();
const app = express();
app.use(express.json());

const PORT = process.env.PORT;

app.use(cors());

app.use("/api/item", todoItemsRoutes);

app.get("/", async (req, res) => {
  res.send("Hello from Todo app!");
});

const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL);
    app.listen(PORT, () => {
      console.log("Server has started on port http://localhost:5500");
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
