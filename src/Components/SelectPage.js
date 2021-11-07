import React, { useState } from "react";
import Progressbar from "./Progressbar";
import SelectLang from "./SelectLang";
import SelectNum from "./SelectNum";
import SelectOthers from "./SelectOthers";
import Paging from "./Paging";

const backgroundStyle = {
        backgroundImage: 'url(/images/selectLangBackground.png)',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh"
}

const pageList = [SelectLang, SelectNum, SelectOthers]
let idx = 0;

function SelectPage(){
    const [page, setPage]=useState(pageList[idx])

    const PageRenderer = ()=>{
        idx++
        return page
    }

    const nextPage = ()=>{
        console.log(1)
        setPage(page)
    }

    return (
        <div style={backgroundStyle}>
            <Progressbar />
            <div className="main">
                <PageRenderer />
            </div>
            <Paging />
        </div>
    );
}

export default SelectPage;