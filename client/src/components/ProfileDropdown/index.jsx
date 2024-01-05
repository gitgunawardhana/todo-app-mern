import { useContext } from "react";
import { twMerge } from "tailwind-merge";
import BadgeAvatars from "../../base-components/BadgeAvatars";
import DropdownButton from "../../base-components/DropdownButton";
import HomeSvg from "../../base-components/SvgIcon/HomeSvg";
import ProfileSvg from "../../base-components/SvgIcon/ProfileSvg";
import { Modes } from "../../constants";
import DropdownOptions from "../DropdownOptions";
import { ProviderContext } from "../Provider";

const ProfileDropdown = () => {
  const { theme, setTheme } = useContext(ProviderContext);

  const profileSvg = (
    <ProfileSvg
      className={twMerge([
        "w-4 stroke-[#94A3B8] group-hover:stroke-[#f59e0b]",
        theme === Modes.LIGHT && "stroke-[#f59e0b]",
      ])}
    />
  );

  const homeSvg = (
    <HomeSvg
      className={twMerge([
        "w-4 stroke-[#94A3B8] group-hover:stroke-[#f59e0b]",
        theme === Modes.DARK && "stroke-[#f59e0b]",
      ])}
    />
  );

  const profileOptionList = [
    {
      icon: homeSvg,
      text: "Home",
      to: "/todo-app-mern",
    },
    {
      icon: profileSvg,
      text: "Profile",
      to: "/todo-app-mern/profile",
    },
  ];
  return (
    <div>
      <DropdownButton
        id="profileSetting"
        items={profileOptionList}
        buttonClassName="!bg-red z-50 inline-flex items-center text-center focus:outline-none focus:ring-0 hover:bg-transparent dark:!bg-transparent dark:hover:!bg-transparent !bg-transparent"
        icon={<BadgeAvatars online size="!h-12 !w-12" />}
        className="absolute right-0 top-16 z-50"
      >
        {profileOptionList.map((item) => (
          <DropdownButton.LI key={item.text} className="group z-50 w-fit">
            <DropdownOptions
              to={item.to}
              className="w-28"
              label={item.text}
              icon={item.icon}
            />
          </DropdownButton.LI>
        ))}
      </DropdownButton>
    </div>
  );
};

export default ProfileDropdown;
