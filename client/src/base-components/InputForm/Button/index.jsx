import { twMerge } from "tailwind-merge";

const Button = (props) => {
  return (
    <>
      <button
        id={props.id && props.id}
        type={props.type ? props.type : "button"}
        onClick={props.onClick && props.onClick}
        className={twMerge([
          "flex items-center justify-between rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium leading-5 text-white hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700",
          props.className,
          props.disabled && "disabled opacity-50 hover:!bg-[#fbbf24]",
        ])}
        disabled={props.disabled && props.disabled}
      >
        {props.children}
      </button>
    </>
  );
};

export default Button;
