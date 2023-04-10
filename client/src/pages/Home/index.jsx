import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import HeadingTitle from "../../base-components/HeadingTitle";
import ParaText from "../../base-components/ParaText";
import LoaderSvg from "../../base-components/SvgIcon/LoaderSvg";
import InputForm from "../../components/InputForm";
import { ProviderContext } from "../../components/Provider";
import TodoItem from "../../components/TodoItem";
import UpdateForm from "../../components/UpdateForm";

const RenderTodo = ({ data, title }) => {
  const { isUpdating } = useContext(ProviderContext);
  if (data?.length > 0) {
    return data.map((todo) => (
      <div key={todo._id}>
        {isUpdating === todo._id ? (
          <UpdateForm />
        ) : (
          <TodoItem id={todo._id}>{todo.item}</TodoItem>
        )}
      </div>
    ));
  }

  return <ParaText className="text-xl font-bold uppercase">{title}</ParaText>;
};

const Main = () => {
  const { todoList, setTodoList } = useContext(ProviderContext);
  const [loading, setLoading] = useState(false);

  // Fetch all Todos
  const fetchTodos = async () => {
    setLoading(true);
    try {
      const res = await axios.get("http://localhost:5500/api/item");
      setTodoList(res.data.data.reverse());
    } catch (err) {
      Swal.fire({
        position: "center",
        icon: "error",
        text: "Unable to load tasks. Please check your internet connection and try again later.",
        background: "#1B253B",
        color: "rgba(255, 255, 255, 0.699)",
        showConfirmButton: false,
        timer: 5000,
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="bg-transparent text-left dark:bg-transparent">
      <HeadingTitle
        bottomDescription="Simplify Your Life with Easy Task Management."
        topDescription="Organized Efficiency"
      >
        Your Todo List
      </HeadingTitle>
      <div className="mb-3 mt-9 bg-transparent">
        <ParaText>
          Welcome to Your Todo List! Here you can easily manage and organize all
          your tasks and stay on top of your daily to-dos. Simply add your tasks
          using the input field below, and they will appear on your list. You
          can edit or delete your tasks at any time, and mark them as complete
          when you've finished them. Plus, our app is designed to be
          user-friendly and accessible, so you can easily manage your tasks from
          any device. So why wait? Start organizing your life today with Your
          Todo List!
        </ParaText>
      </div>
      <div className="mb-3 mt-9 bg-transparent pb-6 ">
        <InputForm />
      </div>
      <div className="mb-3 mt-9 bg-transparent">
        {loading ? (
          <div className="flex items-center justify-center">
            <LoaderSvg className="fill-[#F59E0B] stroke-none text-[#1B253B] dark:text-gray-200" />
          </div>
        ) : (
          <RenderTodo data={todoList} title="No posts found" />
        )}
      </div>
    </div>
  );
};

export default Main;
