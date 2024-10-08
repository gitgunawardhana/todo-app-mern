import { useContext, useState } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import "./App.css";
import ContentSection from "./base-components/ContentSection";
import FooterSection from "./base-components/FooterSection";
import HeaderSection from "./base-components/HeaderSection";
import DarkModeSwitch from "./components/DarkModeSwitch";
import LogoutButton from "./components/LogoutButton";
import { ProviderContext } from "./components/Provider";
import { FooterText } from "./constants";
import Router from "./router";
import { getWindowSize } from "./utils";

function App() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  const { token, setToken } = useContext(ProviderContext);
  getWindowSize(setWindowSize);

  return (
    <div className="bg-[#FEFEFE] dark:bg-[#1B253B]">
      <BrowserRouter>
        <HeaderSection>
          <Link to="/todo-app-mern">Task Wise</Link>
        </HeaderSection>
        <ContentSection height={windowSize.height}>
          <Router />
        </ContentSection>
        <FooterSection>
          {`© ${FooterText.CURRENT_YEAR} `}
          <Link to="/todo-app-mern/about">{`${FooterText.WEBSITE_NAME}`}</Link>
          {`. All rights reserved.`}
        </FooterSection>
        <DarkModeSwitch className="fixed bottom-0" />
        {token !== null && <LogoutButton className="fixed bottom-0 right-0" />}
      </BrowserRouter>
    </div>
  );
}

export default App;
