import axios from "axios";
import { useContext, useState } from "react";
import Swal from "sweetalert2";
import Button from "../../base-components/InputForm/Button";
import EditSvg from "../../base-components/SvgIcon/EditSvg";
import LoaderSvg from "../../base-components/SvgIcon/LoaderSvg";
import TrashSvg from "../../base-components/SvgIcon/TrashSvg";
import { ProviderContext } from "../Provider";

const TodoItem = (props) => {
  const { todoList, setTodoList, setIsUpdating } = useContext(ProviderContext);
  const [loadingDelete, setLoadingDelete] = useState(false);

  // Delete a Todo when click on delete button
  const deleteTodo = async (id) => {
    setLoadingDelete(true);
    try {
      const res = await axios.delete(`http://localhost:5500/api/item/${id}`);
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

  return (
    <>
      <div
        id="todo-item"
        className="relative -mx-3 my-2 flex-wrap items-stretch justify-between rounded-lg border-[1px] bg-[#F4F6F8] px-4 py-1 text-center shadow-current hover:border-[1px] hover:border-inherit hover:bg-[#FEFEFE] dark:border-[1px] dark:border-[#232D45] dark:bg-[#313d5a31] dark:hover:bg-[#1B253B] md:flex md:px-7 md:py-3"
      >
        <div className="my-2 flex h-fit grow items-center justify-between text-center">
          <p className="bg-transparent text-left text-slate-500 antialiased dark:text-slate-400">
            {props.children}
          </p>
        </div>
        <div className="my-2 flex h-fit items-center justify-start gap-2 text-center">
          <Button
            className="my-0 w-28 justify-center rounded-full bg-[#e7e7e7] py-1 text-slate-700 hover:!bg-[#d3d3d3] dark:!bg-[#303d5e] dark:text-[#FFFFFF] dark:hover:!bg-[#3c4c70]"
            onClick={() => {
              setIsUpdating(props.id);
            }}
          >
            <EditSvg className="mr-2 w-4 overflow-visible stroke-[#84cc16]" />
            <span className="translate-y-[1px]">Edit</span>
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
