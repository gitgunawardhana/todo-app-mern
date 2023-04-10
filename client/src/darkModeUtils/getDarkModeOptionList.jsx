import { useContext } from "react";
import { twMerge } from "tailwind-merge";
import { MoonSvg, SunSvg, SystemSvg } from "../base-components/SvgIcon";
import { ProviderContext } from "../components/Provider";
import { Modes } from "../constants";

function getDarkModeOptionList() {
  const { theme, setTheme } = useContext(ProviderContext);

  const sunSvg = (
    <SunSvg
      className={twMerge([
        "w-4  stroke-[#94A3B8] group-hover:stroke-[#f59e0b]",
        theme === Modes.LIGHT && "stroke-[#f59e0b]",
      ])}
    />
  );

  const moonSvg = (
    <MoonSvg
      className={twMerge([
        "w-4  stroke-[#94A3B8] group-hover:stroke-[#f59e0b]",
        theme === Modes.DARK && "stroke-[#f59e0b]",
      ])}
    />
  );

  const systemSvg = (
    <SystemSvg
      className={twMerge([
        "w-4  stroke-[#94A3B8] group-hover:stroke-[#f59e0b]",
        theme === Modes.SYSTEM && "stroke-[#f59e0b]",
      ])}
    />
  );

  const darkModeOptionList = [
    {
      icon: sunSvg,
      text: Modes.LIGHT,
    },
    {
      icon: moonSvg,
      text: Modes.DARK,
    },
    {
      icon: systemSvg,
      text: Modes.SYSTEM,
    },
  ];

  let currentOptionIcon;
  switch (theme) {
    case Modes.LIGHT:
      currentOptionIcon = sunSvg;
      return { darkModeOptionList, currentOptionIcon };
    case Modes.DARK:
      currentOptionIcon = moonSvg;
      return { darkModeOptionList, currentOptionIcon };
    case Modes.SYSTEM:
      currentOptionIcon = systemSvg;
      return { darkModeOptionList, currentOptionIcon };
    default:
      return;
  }
}

export default getDarkModeOptionList;
