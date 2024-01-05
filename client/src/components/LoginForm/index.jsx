import axios from "axios";
import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Button from "../../base-components/InputForm/Button";
import InputField from "../../base-components/InputForm/InputField";
import LoaderSvg from "../../base-components/SvgIcon/LoaderSvg";
import { ProviderContext } from "../Provider";

const LoginForm = () => {
  const { user, setUser, setToken } = useContext(ProviderContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // login
  const login = async (e) => {
    e.preventDefault();
    setLoading(true);
    const userData = {
      email: email,
      password: password,
    };
    try {
      const res = await axios.post(
        `https://todo-app-mern-5dc7.onrender.com/api/auth/login`,
        userData
      );
      const { name, email, access_token } = res.data;
      setUser({ name: name, email: email });
      sessionStorage.setItem("access_token", JSON.stringify(access_token));
      setToken(sessionStorage.getItem("access_token"));
      Swal.fire({
        position: "center",
        icon: "success",
        text: "Success! You are now logged in.",
        background: "#1B253B",
        color: "rgba(255, 255, 255, 0.699)",
        showConfirmButton: false,
        timer: 5000,
      });
      navigate("/todo-app-mern");
    } catch (err) {
      try {
        if (err.response.data.message === "User not found with the email") {
          Swal.fire({
            position: "center",
            icon: "error",
            text: "Account not found. Please verify your credentials and try again.",
            background: "#1B253B",
            color: "rgba(255, 255, 255, 0.699)",
            showConfirmButton: false,
            timer: 5000,
          });
        } else {
          Swal.fire({
            position: "center",
            icon: "error",
            text: "Failed to connect to the server. Please try again later.",
            background: "#1B253B",
            color: "rgba(255, 255, 255, 0.699)",
            showConfirmButton: false,
            timer: 5000,
          });
        }
      } catch (e) {
        Swal.fire({
          position: "center",
          icon: "error",
          text: "Failed to connect to the server. Please try again later.",
          background: "#1B253B",
          color: "rgba(255, 255, 255, 0.699)",
          showConfirmButton: false,
          timer: 5000,
        });
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <form onSubmit={login}>
        <div className="flex-wrap justify-between gap-2 md:flex">
          <div className="mb-6 grow">
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
            />
            <br />
            <InputField
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
                    Login
                  </Button>
                  <NavLink to="/register">
                    <Button className="bg-[#f59e0b] hover:bg-[#fbbf24] active:!bg-[#fbbf24] dark:bg-[#fbbf24] dark:text-[#232D45] hover:dark:bg-[#fcd34d]">
                      Register
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
