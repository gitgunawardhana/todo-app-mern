import axios from "axios";
import { useContext, useState } from "react";
import Swal from "sweetalert2";
import Button from "../../base-components/InputForm/Button";
import InputField from "../../base-components/InputForm/InputField";
import EditSvg from "../../base-components/SvgIcon/EditSvg";
import LoaderSvg from "../../base-components/SvgIcon/LoaderSvg";
import TrashSvg from "../../base-components/SvgIcon/TrashSvg";
import { ProviderContext } from "../Provider";

const UpdateForm = () => {
  const { todoList, isUpdating, setIsUpdating } = useContext(ProviderContext);
  const [loadingUpdate, setLoadingUpdate] = useState(false);

  const updatedItemIndex = todoList.findIndex(
    (item) => item._id === isUpdating
  );
  const [updatedItemText, setUpdatedItemText] = useState(
    todoList[updatedItemIndex].item
  );

  // Update a Todo
  const updateTodo = async (e, id) => {
    e.preventDefault();
    setLoadingUpdate(true);
    if (updatedItemText) {
      try {
        const data = {
          item: updatedItemText,
        };
        const res = await axios.put(
          `http://localhost:5500/api/item/${id}`,
          data
        );
        todoList[updatedItemIndex].item = updatedItemText;
        setUpdatedItemText("");
        setIsUpdating("");
        Swal.fire({
          position: "center",
          icon: "success",
          text: "Task updated! You're in control of your to-dos!",
          background: "#1B253B",
          color: "rgba(255, 255, 255, 0.699)",
          showConfirmButton: false,
          timer: 5000,
        });
      } catch (err) {
        Swal.fire({
          position: "center",
          icon: "error",
          text: "Sorry! Failed to update task. Please try again later.",
          background: "#1B253B",
          color: "rgba(255, 255, 255, 0.699)",
          showConfirmButton: false,
          timer: 5000,
        });
      } finally {
        setLoadingUpdate(false);
      }
    } else {
      Swal.fire({
        position: "center",
        icon: "error",
        text: "Oops! You left the task description blank. Please enter a task.",
        background: "#1B253B",
        color: "rgba(255, 255, 255, 0.699)",
        showConfirmButton: false,
        timer: 5000,
      });
      setLoadingUpdate(false);
    }
  };
  return (
    <>
      <form
        onSubmit={(e) => {
          updateTodo(e, isUpdating);
        }}
      >
        <div
          id="todo-item"
          className="relative -mx-3 my-2 flex-wrap content-center items-stretch justify-between gap-5 rounded-lg border-[1px] bg-[#F4F6F8] px-4 py-1 text-center shadow-current hover:border-[1px] hover:border-inherit hover:bg-[#FEFEFE] dark:border-[1px] dark:border-[#232D45] dark:bg-[#313d5a31] dark:hover:bg-[#1B253B] md:flex md:px-7 md:py-3"
        >
          <div className="group my-2 flex h-fit grow items-center justify-between text-center">
            <InputField
              label="Updated Todo here..."
              className="w-full focus:border-[#F59E0B] dark:focus:border-[#F59E0B]"
              labelClassName="dark:bg-[#253049] group-hover:dark:bg-[#1B253B] peer-focus:text-[#F59E0B] peer-focus:dark:text-[#F59E0B]"
              onChange={(e) => {
                setUpdatedItemText(e.target.value);
              }}
              value={updatedItemText}
            />
          </div>
          <div className="my-2 flex h-fit items-center justify-start gap-2 pt-1 text-center">
            {loadingUpdate ? (
              <LoaderSvg className="w-6 fill-[#84cc16] stroke-none text-[#1B253B] dark:text-gray-200" />
            ) : (
              <Button
                className="group my-0 rounded-full bg-[#e7e7e7] py-1 text-slate-700 hover:!bg-[#84cc16] hover:text-[#FFFFFF] dark:!bg-[#303d5e] dark:text-[#FFFFFF] dark:hover:!bg-[#84cc16]"
                type="submit"
              >
                <EditSvg className="mr-2 w-4 overflow-visible stroke-[#84cc16] group-hover:stroke-[#fff]" />
                <span className="translate-y-[1px]">Update</span>
              </Button>
            )}
            <Button
              className="my-0 rounded-full bg-[#e7e7e7] py-1 text-slate-700 hover:!bg-[#d3d3d3] dark:!bg-[#303d5e] dark:text-[#FFFFFF] dark:hover:!bg-[#3c4c70]"
              onClick={() => {
                setIsUpdating("");
              }}
            >
              <TrashSvg className="mr-2 w-4 overflow-visible stroke-[#c2410c] " />
              <span className="translate-y-[1px]">Cancel</span>
            </Button>
          </div>
        </div>
      </form>
    </>
  );
};

export default UpdateForm;
