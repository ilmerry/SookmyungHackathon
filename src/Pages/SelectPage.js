import React from "react";
import Progressbar from "../Components/Progressbar";
import SelectLang from "../Components/SelectLang";
import SelectNum from "../Components/SelectNum";
import SelectAbout from "../Components/SelectAbout";

const backgroundStyle = {
        backgroundImage: 'url(/images/selectLangBackground.png)',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh"
}

function SelectPage(){
    return (
        <div style={backgroundStyle}>
            <Progressbar />
            <SelectNum />
        </div>
    );
}

export default SelectPage;