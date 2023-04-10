import HeadingTitle from "../../base-components/HeadingTitle";
import ParaText from "../../base-components/ParaText";
import SubHeadingTitle from "../../base-components/SubHeadingTitle";

function Main() {
  return (
    <div className="divide-y divide-inherit bg-transparent text-left dark:divide-slate-800 dark:bg-transparent">
      <div className="">
        <HeadingTitle
          bottomDescription="Achieve more, stress less."
          topDescription="Get things done"
        >
          About
        </HeadingTitle>
      </div>
      <div className="my-4 w-full flex-row items-center justify-center md:w-1/2">
        <div className="mb-3 mt-9 bg-transparent">
          <SubHeadingTitle>Mission Statement</SubHeadingTitle>
          <ParaText className="my-1 bg-transparent text-left text-slate-500 antialiased dark:text-slate-400">
            At Todoist, we believe in helping people stay organized and
            productive. Our app provides a simple yet powerful way to manage
            tasks and stay on top of to-do lists.
          </ParaText>
        </div>
        <div className="mb-3 mt-9 bg-transparent">
          <SubHeadingTitle>Contact Information</SubHeadingTitle>
          <ParaText className="my-1 bg-transparent text-left text-slate-500 antialiased dark:text-slate-400">
            Email: support@todoist.com
          </ParaText>
          <ParaText className="my-1 bg-transparent text-left text-slate-500 antialiased dark:text-slate-400">
            Phone: 555-555-5555
          </ParaText>
        </div>
        <div className="mb-3 mt-9 bg-transparent">
          <SubHeadingTitle>Features</SubHeadingTitle>
          <ParaText className="my-1 bg-transparent text-left text-slate-500 antialiased dark:text-slate-400">
            - Create tasks.
          </ParaText>
          <ParaText className="my-1 bg-transparent text-left text-slate-500 antialiased dark:text-slate-400">
            - Update tasks.
          </ParaText>
          <ParaText className="my-1 bg-transparent text-left text-slate-500 antialiased dark:text-slate-400">
            - Delete tasks.
          </ParaText>
        </div>
        <div className="mb-3 mt-9 bg-transparent">
          <SubHeadingTitle>Future Plans</SubHeadingTitle>
          <ParaText className="my-1 bg-transparent text-left text-slate-500 antialiased dark:text-slate-400">
            We're always working to improve Todoist and make it an even better
            tool for productivity. In the future, we plan to add even more
            features and integrations to help our users stay on top of their
            tasks and get things done.
          </ParaText>
        </div>
        <div className="mb-3 mt-9 bg-transparent">
          <SubHeadingTitle>Social Media</SubHeadingTitle>
          <ParaText className="my-1 bg-transparent text-left text-slate-500 antialiased dark:text-slate-400">
            GitHub:{" "}
            <a href="https://github.com/gitgunawardhana" target="_blank">
              github.com/todoist
            </a>
          </ParaText>
          <ParaText className="my-1 bg-transparent text-left text-slate-500 antialiased dark:text-slate-400">
            Facebook: facebook.com/todoist
          </ParaText>
        </div>
      </div>
    </div>
  );
}

export default Main;
