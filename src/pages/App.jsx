import { useState } from "react";
import Profile from "../components/profiles/profile";
import Switch from "../components/switch/switch";
import Links from "../components/links/links";
import Social from "../components/sociallinks/socialLinks"

import "./app.css";

import imgDarkMode from "../img/sus.webp";
import imgLightMode from "../img/suslight.webp";

const App = () => {
  const [isLightMode, setIsLightMode] = useState(false);

  const imgSrc = isLightMode ? imgLightMode : imgDarkMode;
  const imgAlt = isLightMode ? "imagem no modo claro" : "imagem no modo escuro";
  return (
    <div id="container">
      <Profile imgSrc={imgSrc} imgAlt={imgAlt}>
        @Betzfer
      </Profile>
      <Switch></Switch>
      <div id="links">
        <ul>
          <Links Link={"https://github.com"}>GitHub</Links>
          <Links Link={"https://store.steampowered.com"}>Steam</Links>
          <Links Link={"https://www.youtube.com"}>Youtube</Links>
          <Links Link={"https://www.twitch.tv"}>twitch</Links>
        </ul>
      </div>
      <div id="socialLinks">
        <Social href={"https://github.com"} icon={"logo-github"}/>
        <Social href={"https://store.steampowered.com"} icon={"logo-steam"}/>
        <Social href={"https://www.youtube.com"} icon={"logo-youtube"}/>
        <Social href={"https://www.twitch.tv"} icon={"logo-twitch"}/>
      </div>
    </div>
  );
};

export default App;
