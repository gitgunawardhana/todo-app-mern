import { useContext } from "react";
import { twMerge } from "tailwind-merge";
import DropdownButton from "../../base-components/DropdownButton";
import { darkModeSetup, getDarkModeOptionList } from "../../darkModeUtils";
import DropdownOptions from "../DropdownOptions";
import { ProviderContext } from "../Provider";

const DarkModeSwitch = (props) => {
  const { theme, setTheme } = useContext(ProviderContext);

  darkModeSetup(theme);

  const { darkModeOptionList, currentOptionIcon } = getDarkModeOptionList();

  return (
    <>
      <div
        className={twMerge(["z-50 w-fit p-0", props.className])}
        title="Change theme"
      >
        <DropdownButton
          id="themeChange"
          icon={currentOptionIcon}
          items={darkModeOptionList}
          buttonClassName="relative z-50 bg-transparent dark:bg-transparent focus:ring-0 focus:outline-none text-center inline-flex items-center hover:bg-transparent dark:hover:bg-transparent"
          className="absolute -top-32 left-2"
        >
          {darkModeOptionList?.map((item) => (
            <DropdownButton.LI key={item.text} className="group z-50 w-fit">
              <DropdownOptions
                onClick={() => {
                  setTheme(item.text);
                }}
                className="w-28"
                icon={item.icon}
                label={item.text}
              />
            </DropdownButton.LI>
          ))}
        </DropdownButton>
      </div>
    </>
  );
};

export default DarkModeSwitch;
