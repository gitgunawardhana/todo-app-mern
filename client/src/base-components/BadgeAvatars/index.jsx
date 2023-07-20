import { useContext } from "react";
import { twMerge } from "tailwind-merge";
import { ProviderContext } from "../../components/Provider";

const BadgeAvatars = (props) => {
  const { user } = useContext(ProviderContext);

  return (
    <div>
      <div className="flex justify-center">
        <div
          className={twMerge([
            "relative mr-2 flex h-11 w-11 -translate-y-2 items-center justify-center rounded-full bg-transparent text-xl text-white",
            props.className,
          ])}
        >
          <img
            className={twMerge([
              "rounded-full !object-cover",
              props.border,
              props.size,
            ])}
            alt="A"
            src={
              user.avatar
                ? user.avatar
                : "https://randomuser.me/api/portraits/men/62.jpg"
            }
          />
          {/* <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full border border-red-600  bg-green-500"></div> */}

          {props.online && (
            <span className="absolute bottom-0 right-0 flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#a1ff6a] opacity-75"></span>
              <span className="absolute bottom-0 right-0 inline-flex h-3 w-3 rounded-full bg-[#44B700]"></span>
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default BadgeAvatars;
