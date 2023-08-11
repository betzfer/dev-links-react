import { useState } from "react";
import Profile from "../components/profiles/profile";
import Switch from "../components/switch/switch";

import  "./app.css";

import imgDarkMode from "../img/sus.webp";
import imgLightMode from "../img/suslight.webp";


    const App = () => {
        const [isLightMode,setIsLightMode] = useState(false);

        const imgSrc = isLightMode ? imgLightMode : imgDarkMode;
        const imgAlt = isLightMode ? "imagem no modo claro" : "imagem no modo escuro";
return(
    <div id="container">
        <Profile imgSrc={imgSrc} imgAlt={imgAlt}>
          @Betzfer
        </Profile>
        <Switch></Switch>
    </div>
 );
};

export default App;