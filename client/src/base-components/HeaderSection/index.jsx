import { twMerge } from "tailwind-merge";

const HeaderSection = (props) => {
  return (
    <>
      <header
        className={twMerge([
          "w-full justify-center bg-transparent pt-8 text-center duration-100 ",
          props.className,
        ])}
      >
        <h1 className="py-1 pb-5 text-3xl font-bold text-[#f59e0b] dark:text-[#f59e0b]">
          {props.children}
        </h1>
      </header>
    </>
  );
};

export default HeaderSection;
