import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { capitalize } from "../../utils";
import Button from "../InputForm/Button";

function DropdownButton(props) {
  const [showDrop, setShowDrop] = useState(false);

  const handleDrop = () => {
    setShowDrop(!showDrop);
  };

  return (
    <>
      <Button
        id={props.id}
        dataDropdownToggle="dropdown"
        className={twMerge([props.buttonClassName])}
        onClick={handleDrop}
      >
        <div className="flex justify-start text-center">
          <div className="left-1 mr-2 justify-start">
            {props.icon && props.icon}
          </div>
          <div className="justify-items-center py-1 text-center text-xs font-semibold group-hover:text-[#f59e0b]">
            {props.label && capitalize(props.label)}
          </div>
        </div>
      </Button>
      {showDrop && (
        <div
          id="dropdown"
          className={twMerge([
            "z-10 w-fit divide-y divide-gray-100 overflow-hidden rounded-lg border-[1px] border-gray-300 bg-white shadow-lg dark:border-gray-800 dark:bg-gray-700",
            props.className,
          ])}
        >
          <ul
            className="text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby={props.id}
          >
            {props.children}
          </ul>
        </div>
      )}
    </>
  );
}

const LI = (props) => {
  return <li className={twMerge([props.className])}>{props.children}</li>;
};

DropdownButton.LI = LI;
export default DropdownButton;
