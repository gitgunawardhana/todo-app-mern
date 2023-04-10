import { twMerge } from "tailwind-merge";

const ContentSection = (props) => {
  return (
    <>
      <div
        className={twMerge([
          "mx-2 my-4 overflow-y-scroll rounded-2xl border-[1px] border-inherit bg-[#FFFFFF] px-4 py-3 scrollbar-none dark:border-[#232D45] dark:bg-[#232D45] sm:mx-4 sm:my-3 sm:px-6 sm:py-4 md:mx-6 md:my-3 lg:mx-8 lg:my-4 lg:px-8 lg:py-4",
          props.className && props.className,
        ])}
        style={{ height: props.height, width: props.width }}
      >
        {props.children}
      </div>
    </>
  );
};

export default ContentSection;
