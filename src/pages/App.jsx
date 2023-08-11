import Profile from "../components/profiles/profile";
import  "./app.css";

import imgDarkMode from "../img/sus.webp";
import imgLightMode from "../img/suslight.webp";
import { useState } from "react";


    const App = () => {
        const [isLightMode,setIsLightMode] = useState(false);

        const imgSrc = isLightMode ? imgLightMode : imgDarkMode;
        const imgAlt = isLightMode ? "imagem no modo claro" : "imagem no modo escuro";
return(
    <div>
        <Profile imgSrc={imgSrc} imgAlt={imgAlt}>
          @Betzfer
        </Profile>
    </div>
);
    };

export default App;