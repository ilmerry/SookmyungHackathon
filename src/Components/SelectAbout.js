import React, {useState} from "react";
import "../css/SelectPage.css";
const API_URL = 'http://localhost:3001'

function SelectAbout(){

    const [birth, setBirth]=useState(null);
    const [name, setName ]=useState(null);
    const [mbti, setMbti ]=useState(null);
    const [color, setColor ]=useState(null);
    const page=4;

    const onClickBirth = ()=>{
        
    }

    const onClickName = ()=>{
        
    }

    const onClickColor = ()=>{
        
    }


    return(
        <div className="css-about">
            <div className="title">나에 대해 알려주세요</div>
            <div>
                <tr>
                    <td className="category">이름</td>
                    <td className="category">생일</td>
                    <td className="category">MBTI</td>
                </tr>
                <tr>
                    <td className="category">취미</td>
                    <td className="category">색상</td>
                </tr>
            </div>
        </div>
    );
    
}

export default SelectAbout;