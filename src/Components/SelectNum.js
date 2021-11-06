import React from "react";
import "../Assets/SelectPage.css";

class SelectNum extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        };

        //this.KorHoverHandler = this.KorHoverHandler.bind(this);
    }

    

    render(){
        return(
            <div className="css-num">
                <div className="title">최대 <span>N</span>글자까지 생성합니다</div>
                <div>
                    <tr>
                        <td><button className="keypad">1</button></td>
                        <td><button className="keypad">2</button></td>
                        <td><button className="keypad">3</button></td>
                    </tr>
                    <tr>
                        <td><button className="keypad">4</button></td>
                        <td><button className="keypad">5</button></td>
                        <td><button className="keypad">6</button></td>
                    </tr>
                    <tr>
                        <td><button className="keypad">7</button></td>
                        <td><button className="keypad">8</button></td>
                        <td><button className="keypad">9</button></td>
                    </tr>
                    <tr>
                        <td><button className="keypad">0</button></td>
                        <td><button className="keypad">00</button></td>
                        <td><button className="keypad">000</button></td>
                    </tr>
                </div>
            </div>
        );
    }
}

export default SelectNum;