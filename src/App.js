import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import styled from "styled-components";
import Sidebar from "./Components/Sidebar";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ProjectsPage from "./Pages/ProjectsPage";
import ReferencesPage from "./Pages/ReferencesPage";
import ContactPage from "./Pages/ContactPage";
import { Switch as Switching, Route } from "react-router";
import BrightnessMediumIcon from "@material-ui/icons/BrightnessMedium";
import Switch from "@material-ui/core/Switch";
import MenuIcon from "@material-ui/icons/Menu";
import { IconButton } from "@material-ui/core";

function App() {
  const [theme, setTheme] = useState("dark-theme");
  const [checked, setChecked] = useState(false);
  const [navToggle, setNavToggle] = useState(false);

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const themeToggler = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
      setChecked(false);
    } else {
      setTheme("light-theme");
      setChecked(true);
    }
  };

  return (
    <AppStyled>
      <div className="main-content">
        <Sidebar navToggle={navToggle} />

        <div className="theme">
          <div className="light-dark-mode">
            <div className="left-content">
              <BrightnessMediumIcon />
            </div>
            <div className="right-content">
              <Switch
                value=""
                checked={checked}
                inputProps={{ "aria-label": "" }}
                size="medium"
                onClick={themeToggler}
              />
            </div>
          </div>
        </div>

        <div className="hamburger-menu">
          <IconButton onClick={() => setNavToggle(!navToggle)}>
            <MenuIcon />
          </IconButton>
        </div>

        <MainContentStyled>
          <div className="lines">
            <div className="line-1"></div>
            <div className="line-2"></div>
            <div className="line-3"></div>
            <div className="line-4"></div>
          </div>
          <Switching>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/about" exact>
              <AboutPage />
            </Route>
            <Route path="/projects" exact>
              <ProjectsPage />
            </Route>
            <Route path="/references" exact>
              <ReferencesPage />
            </Route>
            <Route path="/contact" exact>
              <ContactPage />
            </Route>
          </Switching>
        </MainContentStyled>
      </div>
    </AppStyled>
  );
}

const MainContentStyled = styled.main`
  position: relative;
  margin-left: 16.3rem;
  min-height: 100vh;
  @media screen and (max-width: 1200px) {
    margin-left: 0;
  }
  .lines {
    position: absolute;
    min-height: 100%;
    // width: 100%;
    display: flex;
    justify-content: space-evenly;
    .line-1,
    .line-2,
    .line-3,
    .line-4 {
      width: 1px;
      min-height: 100vh;
      background-color: var(--border-color);
      opacity: 0.18;
    }
  }
`;
const AppStyled = styled.div``;

export default App;
