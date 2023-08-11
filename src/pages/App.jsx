import { useState } from "react";
import Profile from "../components/profiles/profile";
import Switch from "../components/switch/switch";
import Links from "../components/links/links";
import Social from "../components/sociallinks/socialLinks";

import "./app.css";

import imgDarkMode from "../img/sus.webp";
import imgLightMode from "../img/suslight.webp";
import Footer from "../components/footer/footer";

const App = () => {
  const [isLightMode, setIsLightMode] = useState(false);

  const toggleMode = () => {
    setIsLightMode((prevMode) => !prevMode);
  };

  const imgSrc = isLightMode ? imgLightMode : imgDarkMode;
  const imgAlt = isLightMode ? "imagem no modo claro" : "imagem no modo escuro";
  return (
    <div id="App" className={isLightMode ? "light" : ""}>
      <div id="container">
        <Profile imgSrc={imgSrc} imgAlt={imgAlt}>
          @Betzfer
        </Profile>
        <Switch mode={toggleMode} infoButton={isLightMode}/>
        <div id="links">
          <ul>
            <Links Link={"https://github.com"}>GitHub</Links>
            <Links Link={"https://store.steampowered.com"}>Steam</Links>
            <Links Link={"https://www.youtube.com"}>Youtube</Links>
            <Links Link={"https://www.twitch.tv"}>twitch</Links>
          </ul>
        </div>
        <div id="socialLinks">
          <Social href={"https://github.com"} icon={"logo-github"} />
          <Social href={"https://store.steampowered.com"} icon={"logo-steam"} />
          <Social href={"https://www.youtube.com"} icon={"logo-youtube"} />
          <Social href={"https://www.twitch.tv"} icon={"logo-twitch"} />
        </div>
        <Footer Link={"#"}>@Betzfer</Footer>
      </div>
    </div>
  );
};

export default App;
