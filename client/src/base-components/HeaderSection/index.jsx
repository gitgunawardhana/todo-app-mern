import { useContext, useState } from "react";
import { twMerge } from "tailwind-merge";
import ProfileDropdown from "../../components/ProfileDropdown";
import { ProviderContext } from "../../components/Provider";

const HeaderSection = (props) => {
  const { token, user } = useContext(ProviderContext);
  const [showProfile, setShowProfile] = useState(false);

  return (
    <>
      <header
        className={twMerge([
          "flex w-full justify-center bg-transparent pt-8 text-center duration-100",
          props.className,
        ])}
      >
        <h1 className="py-1 pb-5 text-3xl font-bold text-[#f59e0b] dark:text-[#f59e0b]">
          {props.children}
        </h1>
        {user !== null && token !== null && (
          <div className="flex">
            <div className="absolute right-[2rem] top-[2.5rem]">
              <ProfileDropdown />
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default HeaderSection;
