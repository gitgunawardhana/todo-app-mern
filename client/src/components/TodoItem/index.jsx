import axios from "axios";
import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { twMerge } from "tailwind-merge";
import Button from "../../base-components/InputForm/Button";
import EditSvg from "../../base-components/SvgIcon/EditSvg";
import LoaderSvg from "../../base-components/SvgIcon/LoaderSvg";
import TrashSvg from "../../base-components/SvgIcon/TrashSvg";
import { ProviderContext } from "../Provider";

const TodoItem = (props) => {
  const [isCompleted, setIsCompleted] = useState(props.isCompleted);
  const [isCompletedTemp, setIsCompletedTemp] = useState(props.isCompleted);

  const { todoList, setTodoList, setIsUpdating } = useContext(ProviderContext);
  const [loadingDelete, setLoadingDelete] = useState(false);
  const [loadingComplete, setLoadingComplete] = useState(false);

  // Delete a Todo when click on delete button
  const deleteTodo = async (id) => {
    setLoadingDelete(true);
    try {
      const token = sessionStorage.getItem("access_token");

      const headers = {
        Authentication: `Bearer ${token}`,
        Authorization: `Bearer ${token}`,
        access_token: token,
        "Content-Type": "application/json",
      };
      const res = await axios.delete(
        `https://todo-app-mern-5dc7.onrender.com/api/tasks/${id}`,
        {
          headers: headers,
        }
      );
      setTodoList(todoList.filter((todo) => todo._id !== id));
      Swal.fire({
        position: "center",
        icon: "success",
        text: "Task deleted! One less thing to worry about!",
        background: "#1B253B",
        color: "rgba(255, 255, 255, 0.699)",
        showConfirmButton: false,
        timer: 5000,
      });
    } catch (err) {
      Swal.fire({
        position: "center",
        icon: "error",
        text: "Sorry! Failed to delete task. Please try again later.",
        background: "#1B253B",
        color: "rgba(255, 255, 255, 0.699)",
        showConfirmButton: false,
        timer: 5000,
      });
    } finally {
      setLoadingDelete(false);
    }
  };

  // Complete a Todo when click on item
  const completeTodo = async (id) => {
    setLoadingComplete(true);
    const updatedItemIndex = todoList.findIndex((item) => item._id === id);

    try {
      const token = sessionStorage.getItem("access_token");

      const headers = {
        Authentication: `Bearer ${token}`,
        Authorization: `Bearer ${token}`,
        access_token: token,
        "Content-Type": "application/json",
      };

      const data = {
        completed: true,
      };
      const res = await axios.put(
        `https://todo-app-mern-5dc7.onrender.com/api/tasks/${id}`,
        data,
        {
          headers: headers,
        }
      );

      if (res.data.success) {
        setIsCompletedTemp(true);
      }
      todoList[updatedItemIndex].completed = true;
      Swal.fire({
        position: "center",
        icon: "success",
        text: "Great job! Task marked as complete.",
        background: "#1B253B",
        color: "rgba(255, 255, 255, 0.699)",
        showConfirmButton: false,
        timer: 5000,
      });
    } catch (err) {
      Swal.fire({
        position: "center",
        icon: "error",
        text: "Sorry! Failed to complete task. Please try again later.",
        background: "#1B253B",
        color: "rgba(255, 255, 255, 0.699)",
        showConfirmButton: false,
        timer: 5000,
      });
    } finally {
      setLoadingComplete(false);
    }
  };

  return (
    <>
      <div
        id="todo-item"
        className="relative -mx-3 my-2 flex-wrap items-stretch justify-between rounded-lg border-[1px] bg-[#F4F6F8] px-4 py-1 text-center shadow-current hover:border-[1px] hover:border-inherit hover:bg-[#FEFEFE] dark:border-[1px] dark:border-[#232D45] dark:bg-[#313d5a31] dark:hover:bg-[#1B253B] md:flex md:px-7 md:py-3"
      >
        {loadingComplete ? (
          <LoaderSvg className="w-6 fill-[#c2410c] stroke-none text-[#1B253B] dark:text-gray-200" />
        ) : (
          <div
            className="my-2 flex h-fit grow items-center justify-between text-center"
            onClick={() => completeTodo(props.id)}
          >
            <p className="bg-transparent text-left text-slate-500 antialiased dark:text-slate-400">
              {isCompleted | isCompletedTemp ? (
                <strike>{props.children}</strike>
              ) : (
                `${props.children}`
              )}
            </p>
          </div>
        )}
        <div className="my-2 flex h-fit items-center justify-start gap-2 text-center">
          <Button
            className={twMerge([
              "my-0 w-28 justify-center rounded-full bg-[#e7e7e7] py-1 text-slate-700 hover:!bg-[#d3d3d3] dark:!bg-[#303d5e] dark:text-[#FFFFFF] dark:hover:!bg-[#3c4c70]",
              isCompleted | isCompletedTemp && "cursor-not-allowed opacity-50",
            ])}
            onClick={() => {
              setIsUpdating(props.id);
            }}
          >
            {!(isCompleted | isCompletedTemp) && (
              <EditSvg className="mr-2 w-4 overflow-visible stroke-[#84cc16]" />
            )}

            <span className="translate-y-[1px]">
              {isCompleted | isCompletedTemp ? "Completed" : "Edit"}
            </span>
          </Button>
          {loadingDelete ? (
            <LoaderSvg className="w-6 fill-[#c2410c] stroke-none text-[#1B253B] dark:text-gray-200" />
          ) : (
            <Button
              className="group my-0 w-28 justify-center rounded-full bg-[#e7e7e7] py-1 text-slate-700 hover:!bg-[#c2410c] hover:text-[#FFFFFF] dark:!bg-[#303d5e] dark:text-[#FFFFFF] dark:hover:!bg-[#c2410c]"
              onClick={() => deleteTodo(props.id)}
            >
              <TrashSvg className="mr-2 w-4 overflow-visible stroke-[#c2410c] group-hover:stroke-[#fff]" />
              <span className="translate-y-[1px]">Delete</span>
            </Button>
          )}
        </div>
      </div>
    </>
  );
};

export default TodoItem;
