import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import BadgeAvatars from "../../base-components/BadgeAvatars";
import Button from "../../base-components/InputForm/Button";
import InputField from "../../base-components/InputForm/InputField";
import LoaderSvg from "../../base-components/SvgIcon/LoaderSvg";
import { convertToBase64 } from "../../utils";
import { ProviderContext } from "../Provider";

const ProfileInfo = () => {
  const { user } = useContext(ProviderContext);

  const { uname, uemail, uavatar } = user;

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [avatar, setAvatar] = useState(user.avatar);
  const [disabled, setDisabled] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setName(user.name);
    setEmail(user.email);
    setAvatar(user.avatar);
  }, [user]);

  const handleAvatarUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    setAvatar(base64);
  };

  const handleEdit = () => {
    setDisabled(!disabled);
  };

  // Update a User
  const updateUser = async (e) => {
    e.preventDefault();
    setDisabled(true);
    setLoading(true);

    try {
      const token = sessionStorage.getItem("access_token");

      const headers = {
        Authentication: `Bearer ${token}`,
        Authorization: `Bearer ${token}`,
        access_token: token,
        "Content-Type": "application/json",
      };

      const updatedUser = {
        name: name,
        email: email,
        avatar: avatar,
      };
      console.log(updatedUser);

      const res = await axios.put(
        `http://localhost:8000/api/users/me`,
        updatedUser,
        {
          headers: headers,
        }
      );

      Swal.fire({
        position: "center",
        icon: "success",
        text: "User information updated successfully.",
        background: "#1B253B",
        color: "rgba(255, 255, 255, 0.699)",
        showConfirmButton: false,
        timer: 5000,
      });
    } catch (err) {
      Swal.fire({
        position: "center",
        icon: "error",
        text: "Oops! Email already exists or server issue. Please try again later.",
        background: "#1B253B",
        color: "rgba(255, 255, 255, 0.699)",
        showConfirmButton: false,
        timer: 5000,
      });
    } finally {
      setLoading(false);
    }
  };

  // Update a Todo
  const updateTodo = async (e, id) => {
    e.preventDefault();
    setLoadingUpdate(true);
    if (updatedItemText) {
      try {
        const token = sessionStorage.getItem("access_token");

        const headers = {
          Authentication: `Bearer ${token}`,
          Authorization: `Bearer ${token}`,
          access_token: token,
          "Content-Type": "application/json",
        };

        const data = {
          title: updatedItemText,
        };
        const res = await axios.put(
          `http://localhost:8000/api/tasks/${id}`,
          data,
          {
            headers: headers,
          }
        );

        todoList[updatedItemIndex].title = updatedItemText;
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
    <form onSubmit={updateUser}>
      <div className="flex-wrap justify-between gap-2 md:flex">
        <div className="mb-6 grow">
          <div className="-ml-2 mb-20 mt-11 flex justify-start">
            <InputField
              id="avatar"
              name="avatar"
              type="file"
              accept=".jpeg, .png, .jpg"
              disabled={disabled}
              label={
                <div className="flex justify-start">
                  <BadgeAvatars
                    className="w-32"
                    border="mb-4 border-4 border-indigo-200 border-t-indigo-500"
                    avatar={avatar}
                    size="!h-32 !w-32"
                  />
                </div>
              }
              className="hidden !translate-x-9 focus:border-[#F59E0B] dark:focus:border-[#F59E0B]"
              labelClassName="dark:bg-transparent peer-focus:text-[#F59E0B] peer-focus:dark:text-[#F59E0B] mt-2"
              onChange={(e) => handleAvatarUpload(e)}
            />
          </div>

          <InputField
            label="Name"
            type="text"
            className="focus:border-[#F59E0B] dark:focus:border-[#F59E0B]"
            labelClassName="dark:bg-[#232D45] peer-focus:text-[#F59E0B] peer-focus:dark:text-[#F59E0B]"
            helperText={`Enter your email address to log in. We'll keep it secure and never share it with others.`}
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
            disabled={disabled}
          />
          <br />
          <InputField
            label="Email"
            type="email"
            className="focus:border-[#F59E0B] dark:focus:border-[#F59E0B]"
            labelClassName="dark:bg-[#232D45] peer-focus:text-[#F59E0B] peer-focus:dark:text-[#F59E0B]"
            helperText={`Enter your email address to log in. We'll keep it secure and never share it with others.`}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            disabled={disabled}
          />
          <br />
          <div className="flex gap-2">
            {disabled ? (
              <Button
                className="bg-[#f59e0b] hover:bg-[#fbbf24] active:!bg-[#fbbf24] dark:bg-[#fbbf24] dark:text-[#232D45] hover:dark:bg-[#fcd34d]"
                onClick={handleEdit}
              >
                Edit
              </Button>
            ) : (
              <Button
                className="bg-[#f59e0b] hover:bg-[#fbbf24] active:!bg-[#fbbf24] dark:bg-[#fbbf24] dark:text-[#232D45] hover:dark:bg-[#fcd34d]"
                onClick={handleEdit}
              >
                Cancel
              </Button>
            )}
            {loading ? (
              <LoaderSvg className="fill-[#F59E0B] stroke-none text-[#1B253B] dark:text-gray-200" />
            ) : (
              <Button
                type="submit"
                className="bg-[#f59e0b] hover:bg-[#fbbf24] active:!bg-[#fbbf24] dark:bg-[#fbbf24] dark:text-[#232D45] hover:dark:bg-[#fcd34d]"
                disabled={disabled}
              >
                Update
              </Button>
            )}
          </div>
        </div>
      </div>
    </form>
  );
};

export default ProfileInfo;
