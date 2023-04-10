import { twMerge } from "tailwind-merge";

const FooterSection = (props) => {
  return (
    <>
      <footer
        className={twMerge([
          "w-full justify-center bg-transparent py-6 text-center duration-100 dark:text-[#94a3b8]",
          props.className,
        ])}
      >
        <h6 className="-mt-3 text-xs font-medium text-[#f59e0b] dark:text-[#f59e0b] ">
          {props.children}
        </h6>
      </footer>
    </>
  );
};

export default FooterSection;
