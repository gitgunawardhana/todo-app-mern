import * as dotenv from "dotenv";
import express from "express";

import TodoItem from "../mongodb/models/todoItem.js";

dotenv.config();

const router = express.Router();

// Create a Todo item
router.route("/").post(async (req, res) => {
  try {
    const { item } = req.body;
    const addTodo = await TodoItem.create({ item });
    res.status(201).json({ success: true, data: addTodo });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Get all Todo list
router.route("/").get(async (req, res) => {
  try {
    const fetchTodos = await TodoItem.find({});
    res.status(200).json({ success: true, data: fetchTodos });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Update a Todo
router.route("/:id").put(async (req, res) => {
  try {
    const id = req.params.id;
    const { item, isCompleted } = req.body;
    console.log(item);
    const updateTodo = await TodoItem.findByIdAndUpdate(id, {
      item,
      isCompleted,
    });
    res.status(200).json({ success: true, data: updateTodo });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Delete a Todo
router.route("/:id").delete(async (req, res) => {
  try {
    const id = req.params.id;
    const deleteTodo = await TodoItem.findByIdAndDelete(id);
    res.status(200).json({ success: true, data: deleteTodo });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

export default router;
