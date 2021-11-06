import React from "react";
import Progressbar from "./Progressbar";
import SelectLang from "./SelectLang";
import SelectNum from "./SelectNum";
import SelectOthers from "./SelectOthers";

const backgroundStyle = {
        backgroundImage: 'url(/images/selectLangBackground.png)',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh"
}

function SelectPage(){
    return (
        <div className="main"style={backgroundStyle}>
            <Progressbar />
            <SelectOthers />
        </div>
    );
}

export default SelectPage;