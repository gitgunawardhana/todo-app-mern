import axios from "axios";
import { useContext, useState } from "react";
import Swal from "sweetalert2";
import Button from "../../base-components/InputForm/Button";
import InputField from "../../base-components/InputForm/InputField";
import LoaderSvg from "../../base-components/SvgIcon/LoaderSvg";
import { ProviderContext } from "../Provider";

const InputForm = () => {
  const [itemText, setItemText] = useState("");
  const { todoList, setTodoList } = useContext(ProviderContext);
  const [loading, setLoading] = useState(false);

  // Add a Todo
  const addTodo = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (itemText) {
      try {
        const token = sessionStorage.getItem("access_token");

        const headers = {
          Authentication: `Bearer ${token}`,
          Authorization: `Bearer ${token}`,
          access_token: token,
          "Content-Type": "application/json",
        };

        const data = {
          title: itemText,
        };
        const res = await axios.post("http://localhost:8000/api/tasks/", data, {
          headers: headers,
        });

        setTodoList((prev) => [res.data, ...prev]);
        setItemText("");
        Swal.fire({
          position: "center",
          icon: "success",
          text: "New task added! Keep up the great work!",
          background: "#1B253B",
          color: "rgba(255, 255, 255, 0.699)",
          showConfirmButton: false,
          timer: 5000,
        });
      } catch (err) {
        Swal.fire({
          position: "center",
          icon: "error",
          text: "Uh-oh! Failed to add task. Please try again later.",
          background: "#1B253B",
          color: "rgba(255, 255, 255, 0.699)",
          showConfirmButton: false,
          timer: 5000,
        });
      } finally {
        setLoading(false);
      }
    } else {
      Swal.fire({
        position: "center",
        icon: "error",
        text: "Hold on! Task description cannot be empty. Please enter a task.",
        background: "#1B253B",
        color: "rgba(255, 255, 255, 0.699)",
        showConfirmButton: false,
        timer: 5000,
      });
      setLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={addTodo}>
        <div className="flex-wrap justify-between gap-2 md:flex">
          <div className="mb-6 grow">
            <InputField
              label="Todo here..."
              className="focus:border-[#F59E0B] dark:focus:border-[#F59E0B]"
              labelClassName="dark:bg-[#232D45] peer-focus:text-[#F59E0B] peer-focus:dark:text-[#F59E0B]"
              helperText={`Enter tasks you need to complete today & use short and clear descriptions for your tasks.`}
              onChange={(e) => {
                setItemText(e.target.value);
              }}
              value={itemText}
            />
          </div>
          <div>
            {loading ? (
              <LoaderSvg className="fill-[#F59E0B] stroke-none text-[#1B253B] dark:text-gray-200" />
            ) : (
              <Button
                type="submit"
                className="bg-[#f59e0b] hover:bg-[#fbbf24] active:!bg-[#fbbf24] dark:bg-[#fbbf24] dark:text-[#232D45] hover:dark:bg-[#fcd34d]"
              >
                Add
              </Button>
            )}
          </div>
        </div>
      </form>
    </>
  );
};

export default InputForm;
