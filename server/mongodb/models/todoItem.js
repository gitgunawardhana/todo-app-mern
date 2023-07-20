import mongoose from "mongoose";

const TodoItem = new mongoose.Schema({
  item: { type: String, required: true },
  isCompleted: { type: Boolean, default: false },
});

const TodoItemSchema = mongoose.model("TodoItem", TodoItem);

export default TodoItemSchema;
