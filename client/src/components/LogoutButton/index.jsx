import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { twMerge } from "tailwind-merge";
import Button from "../../base-components/InputForm/Button";
import LoaderSvg from "../../base-components/SvgIcon/LoaderSvg";
import LogoutSvg from "../../base-components/SvgIcon/LogoutSvg";
import { ProviderContext } from "../Provider";

const LogoutButton = (props) => {
  const navigate = useNavigate();
  const [loadingLogout, setLoadingLogout] = useState(false);
  const { token, setToken, setUser } = useContext(ProviderContext);

  const logout = async () => {
    setLoadingLogout(true);
    try {
      const res = await axios.post(`http://localhost:8000/api/auth/logout`);
      if (res.data.message === "logout success") {
        sessionStorage.clear();
        setToken(null);
        setUser({
          name: "",
          email: "",
          avatar: "https://randomuser.me/api/portraits/men/62.jpg",
        });
        Swal.fire({
          position: "center",
          icon: "success",
          text: "Logout successful. Have a great day!",
          background: "#1B253B",
          color: "rgba(255, 255, 255, 0.699)",
          showConfirmButton: false,
          timer: 5000,
        });
        navigate("/login");
      }
    } catch (err) {
      console.log(err);
      Swal.fire({
        position: "center",
        icon: "error",
        text: "Oops! Something went wrong during the logout process. Please try again.",
        background: "#1B253B",
        color: "rgba(255, 255, 255, 0.699)",
        showConfirmButton: false,
        timer: 5000,
      });
    } finally {
      setLoadingLogout(false);
    }
  };
  return (
    <div
      title="Logout"
      className={twMerge(["z-50 w-fit p-0", props.className])}
    >
      {loadingLogout ? (
        <LoaderSvg className="w-6 fill-[#df580a] stroke-none text-[#1B253B] dark:text-gray-200" />
      ) : (
        <Button type="submit" className="!bg-transparent" onClick={logout}>
          <LogoutSvg
            fill="#df580a"
            className="mr-2 w-5 overflow-visible stroke-[#df580a] group-hover:stroke-[#fff]"
          />
        </Button>
      )}
    </div>
  );
};

export default LogoutButton;
