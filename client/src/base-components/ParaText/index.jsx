import { twMerge } from "tailwind-merge";

const ParaText = (props) => {
  return (
    <>
      <p
        className={twMerge([
          "my-5 bg-transparent text-left text-slate-500 antialiased dark:text-slate-400",
          props.className,
        ])}
      >
        {props.children}
      </p>
    </>
  );
};

export default ParaText;
