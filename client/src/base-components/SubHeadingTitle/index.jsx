import { twMerge } from "tailwind-merge";

const SubHeadingTitle = (props) => {
  return (
    <>
      <h3
        className={twMerge([
          "mt-10 whitespace-pre-wrap text-xl font-semibold dark:text-[#e2e8f0]",
          ,
          props.className,
        ])}
      >
        {props.children}
      </h3>
    </>
  );
};

export default SubHeadingTitle;
