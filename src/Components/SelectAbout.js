import React from "react";
import "../Assets/SelectPage.css";

class SelectAbout extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        };

        //this.KorHoverHandler = this.KorHoverHandler.bind(this);
    }
    render(){
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
}

export default SelectAbout;