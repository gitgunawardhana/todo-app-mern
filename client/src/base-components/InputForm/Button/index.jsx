import { twMerge } from "tailwind-merge";

const Button = (props) => {
  return (
    <>
      <button
        id={props.id && props.id}
        data-dropdown-toggle={
          props.dataDropdownToggle && props.dataDropdownToggle
        }
        type={props.type ? props.type : "button"}
        onClick={props.onClick && props.onClick}
        className={twMerge([
          "flex items-center justify-between rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium leading-5 text-white hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700",
          props.className,
        ])}
      >
        {props.children}
      </button>
    </>
  );
};

export default Button;
