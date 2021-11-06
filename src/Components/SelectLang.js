import React from "react";
import "../Assets/SelectPage.css";

class SelectLang extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            click: "none"
        };

        this.KorHoverHandler = this.KorHoverHandler.bind(this);
        this.EngHoverHandler = this.EngHoverHandler.bind(this);
        this.KorLeavHandler = this.KorLeavHandler.bind(this);
        this.EngLeaveHandler = this.EngLeaveHandler.bind(this);
        this.KorClickHandler = this.KorClickHandler.bind(this);
        this.EngClickHandler = this.EngClickHandler.bind(this);
    }

    // 한글 버튼 애니메이션
    KorHoverHandler(e){
    }

    KorLeavHandler(e){
    }

    KorClickHandler(e){
    }

    // English 버튼 애니메이션
    EngHoverHandler(e){
    }

    EngLeaveHandler(e){
    }

    EngClickHandler(e){
    }

    render(){
        return(
            <div className="css-lang">
                <div className="title">언어를 선택해주세요</div>
                <span className="btn">
                    <button className="btn-kor"
                        onMouseOver={this.KorHoverHandler}
                        onMouseLeave={this.KorLeavHandler}
                        onClick={this.KorClickHandler}>
                        한글
                    </button>
                    <button className="btn-eng"
                        onMouseOver={this.EngHoverHandler}
                        onMouseLeave={this.EngLeaveHandler}
                        onClick={this.EngClickHandler}>
                        English
                    </button>
                </span>
            </div>
        );
    }
}

export default SelectLang;