import express from "express";
import {
  createTask,
  deleteAllTasks,
  deleteTask,
  getAllTasks,
  getCurrentUserTasks,
  updateTask,
} from "../controllers/task.js";

const router = express.Router();

router.post("/", createTask);
router.get("/all", getAllTasks);
router.get("/myTasks", getCurrentUserTasks);
router.put("/:taskId", updateTask);
router.delete("/:taskId", deleteTask);
router.delete("/deleteAll", deleteAllTasks);

export default router;
