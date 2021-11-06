import React from "react";
import "../css/SelectPage.css";

class Progressbar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: 10
        };

        this.ProgressbarAnimation = this.ProgressbarAnimation.bind(this);
    }

    ProgressbarAnimation(){
        const pgbar = document.querySelector(".js-pgbar");
        const preval = pgbar.value;
        let id = setInterval(frame, 10);
    
        function frame(){
            if(pgbar.value >= preval + 30){
                clearInterval(id);
            }else{
                pgbar.value += 2;
            }
        }
    }

    render(){
        return(
            <div>
                <progress className="css-pgbar js-pgbar" max="100" value={this.state.value}/>
                <button onClick={this.ProgressbarAnimation}>Click</button>
            </div>
        );
    }
}

export default Progressbar;