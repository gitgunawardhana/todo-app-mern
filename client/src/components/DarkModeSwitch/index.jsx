import { useContext } from "react";
import { twMerge } from "tailwind-merge";
import DropdownButton from "../../base-components/DropdownButton";
import { darkModeSetup, getDarkModeOptionList } from "../../darkModeUtils";
import { ProviderContext } from "../Provider";
import SwitchDropdownButton from "./SwitchDropdownButton";

const DarkModeSwitch = (props) => {
  const { theme, setTheme } = useContext(ProviderContext);

  darkModeSetup(theme);

  const { darkModeOptionList, currentOptionIcon } = getDarkModeOptionList();

  return (
    <>
      <div className={twMerge(["z-50 w-fit p-0", props.className])}>
        <DropdownButton
          icon={currentOptionIcon}
          items={darkModeOptionList}
          className=""
          buttonClassName="z-50 bg-transparent dark:bg-transparent focus:ring-0 focus:outline-none text-center inline-flex items-center hover:bg-transparent dark:hover:bg-transparent"
        >
          {darkModeOptionList?.map((item) => (
            <DropdownButton.LI key={item.text} className="group z-50 w-fit">
              <SwitchDropdownButton
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
