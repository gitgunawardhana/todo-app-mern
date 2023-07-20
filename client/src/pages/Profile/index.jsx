import HeadingTitle from "../../base-components/HeadingTitle";
import ParaText from "../../base-components/ParaText";
import ProfileInfo from "../../components/ProfileInfo";

const Main = () => {
  return (
    <div>
      <div className="relative bg-transparent text-left dark:bg-transparent">
        <HeadingTitle
          className=""
          bottomDescription="Simplify Your Life with Easy Task Management."
          topDescription="Organized Efficiency"
        >
          Profile Info
        </HeadingTitle>

        <div className="mb-3 mt-9 bg-transparent pb-6 ">
          <ProfileInfo />
        </div>

        <div className="mt-9 bg-transparent">
          <ParaText className="">
            Effortlessly manage and organize your tasks. Log in now to stay on
            top of your to-dos. Add, edit, and delete tasks with ease.
            Experience seamless task management across all devices. Start
            maximizing your productivity today with Your Todo List!
          </ParaText>
        </div>
      </div>
    </div>
  );
};

export default Main;
