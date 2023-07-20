import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import Button from "../../base-components/InputForm/Button";
import { Modes } from "../../constants";
import { capitalize } from "../../utils";
import { ProviderContext } from "../Provider";

const DropdownOptions = (props) => {
  const { theme, setTheme } = useContext(ProviderContext);
  return (
    <>
      {props.to ? (
        <NavLink to={props.to}>
          <Button
            onClick={props.onClick}
            className={twMerge([
              "text-medium m-0 rounded-none border-solid bg-[#F4F6F8] px-4 py-2 text-slate-900 shadow-md hover:!bg-[#F8FAFC] dark:bg-[#1B253B] dark:text-slate-200 dark:hover:!bg-slate-700",
              theme === Modes.DARK && "border-orange-600",
              props.className,
            ])}
          >
            <div className="relative flex justify-start text-center">
              <div className="left-1 mr-2 justify-start">{props.icon}</div>
              <div className="justify-items-center py-1 text-center text-xs font-semibold group-hover:text-[#f59e0b]">
                {capitalize(props.label)}
              </div>
            </div>
          </Button>
        </NavLink>
      ) : (
        <Button
          onClick={props.onClick}
          className={twMerge([
            "text-medium m-0 rounded-none border-solid bg-[#F4F6F8] px-4 py-2 text-slate-900 shadow-md hover:!bg-[#F8FAFC] dark:bg-[#1B253B] dark:text-slate-200 dark:hover:!bg-slate-700",
            theme === Modes.DARK && "border-orange-600",
            props.className,
          ])}
        >
          <div className="relative flex justify-start text-center">
            <div className="left-1 mr-2 justify-start">{props.icon}</div>
            <div className="justify-items-center py-1 text-center text-xs font-semibold group-hover:text-[#f59e0b]">
              {capitalize(props.label)}
            </div>
          </div>
        </Button>
      )}
    </>
  );
};

export default DropdownOptions;
