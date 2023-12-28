import axios from "axios";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { twMerge } from "tailwind-merge";
import BadgeAvatars from "../../base-components/BadgeAvatars";
import Button from "../../base-components/InputForm/Button";
import InputField from "../../base-components/InputForm/InputField";
import LoaderSvg from "../../base-components/SvgIcon/LoaderSvg";
import { convertToBase64 } from "../../utils";

const LoginForm = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAvatarUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    console.log(typeof base64);
    setAvatar(base64);
  };

  // user register
  const register = async (e) => {
    e.preventDefault();
    setLoading(true);
    const userData = {
      name: name,
      email: email,
      password: password,
      avatar: avatar,
    };
    try {
      const res = await axios.post(
        `https://todo-app-mern-5dc7.onrender.com/api/auth/register`,
        userData
      );

      if (res.data.message === "New User Created") {
        Swal.fire({
          position: "center",
          icon: "success",
          text: "Success! You are now registered in.",
          background: "#1B253B",
          color: "rgba(255, 255, 255, 0.699)",
          showConfirmButton: false,
          timer: 5000,
        });
        navigate("/login");
      }
    } catch (err) {
      Swal.fire({
        position: "center",
        icon: "error",
        text: "Registration Error! User already exists or server issue. Please try again later.",
        background: "#1B253B",
        color: "rgba(255, 255, 255, 0.699)",
        showConfirmButton: false,
        timer: 5000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={register}>
        <div className="flex-wrap justify-between gap-2 md:flex">
          <div className="mb-6 grow">
            <br />
            <div className="-mb-4 flex h-[90px] w-full">
              <label
                htmlFor="avatar"
                className={twMerge([
                  "z-10 mt-1 min-w-[120px] origin-[0] -translate-y-3 scale-75 transform bg-transparent px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-1 peer-focus:-translate-y-3 peer-focus:scale-75 peer-focus:px-2  dark:bg-transparent dark:text-gray-400",
                ])}
              >
                Profile Picture
              </label>
              <InputField
                id="avatar"
                name="avatar"
                type="file"
                accept=".jpeg, .png, .jpg"
                label={
                  <div className="flex justify-start">
                    <BadgeAvatars
                      className="w-24"
                      border="-ml-20 border-4 border-indigo-200 border-t-indigo-500"
                      avatar={avatar}
                      size="!h-24 !w-24"
                    />
                  </div>
                }
                className="hidden !translate-x-9 focus:border-[#F59E0B] dark:focus:border-[#F59E0B]"
                labelClassName="dark:bg-transparent peer-focus:text-[#F59E0B] peer-focus:dark:text-[#F59E0B] mt-2"
                onChange={(e) => handleAvatarUpload(e)}
              />
            </div>
            <InputField
              id="name"
              name="name"
              label="Full Name"
              type="text"
              className="focus:border-[#F59E0B] dark:focus:border-[#F59E0B]"
              labelClassName="dark:bg-[#232D45] peer-focus:text-[#F59E0B] peer-focus:dark:text-[#F59E0B]"
              helperText={`Enter your email address to log in. We'll keep it secure and never share it with others.`}
              onChange={(e) => {
                setName(e.target.value);
              }}
              value={name}
            />
            <br />
            <InputField
              id="email"
              name="email"
              label="Email"
              type="email"
              className="focus:border-[#F59E0B] dark:focus:border-[#F59E0B]"
              labelClassName="dark:bg-[#232D45] peer-focus:text-[#F59E0B] peer-focus:dark:text-[#F59E0B]"
              helperText={`Enter your email address to log in. We'll keep it secure and never share it with others.`}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
            />
            <br />
            <InputField
              id="password"
              name="password"
              label="Password"
              type="password"
              className="focus:border-[#F59E0B] dark:focus:border-[#F59E0B]"
              labelClassName="dark:bg-[#232D45] peer-focus:text-[#F59E0B] peer-focus:dark:text-[#F59E0B]"
              helperText={`Enter your password to access your account. Make sure it's strong and unique for added security.`}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
            />
            <br />
            <div>
              {loading ? (
                <LoaderSvg className="fill-[#F59E0B] stroke-none text-[#1B253B] dark:text-gray-200" />
              ) : (
                <div className="flex gap-2">
                  <Button
                    type="submit"
                    className="bg-[#f59e0b] hover:bg-[#fbbf24] active:!bg-[#fbbf24] dark:bg-[#fbbf24] dark:text-[#232D45] hover:dark:bg-[#fcd34d]"
                  >
                    Register
                  </Button>
                  <NavLink to="/login">
                    <Button className="bg-[#f59e0b] hover:bg-[#fbbf24] active:!bg-[#fbbf24] dark:bg-[#fbbf24] dark:text-[#232D45] hover:dark:bg-[#fcd34d]">
                      Login
                    </Button>
                  </NavLink>
                </div>
              )}
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
