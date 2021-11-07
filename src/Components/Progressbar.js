import React, {useState, useEffect} from "react";
import "../css/SelectPage.css";

function Progressbar({min, max}){
    
    const [progress, setProgress]=useState(10)
    const [left, setLeft]=useState(false)
    const [right, setRight]=useState(false)

    const onChangeHandler=()=>{
        setLeft(localStorage.getItem("flag-left"))
        setRight(localStorage.getItem("flag-right"))
    
        if(right == true){
            let pgbar = document.querySelector(".js-pgbar")
            const preval = progress
            let id = setInterval(frame, 10)
        
            function frame(){
                if(progress >= preval + 30){
                    clearInterval(id);
                }else{
                    pgbar.value += 2;
                }
            }
            setProgress(max)
            console.log(max)
    
            localStorage.setItem("flag-rgiht", false)
            setRight(false)
        }else if(left == true){
            setProgress(min)
            
            localStorage.setItem("flag-left", false)
            setLeft(false)
        }

    }

    return(
        <div>
            <progress className="css-pgbar js-pgbar" max="100"
            onChange={()=>onChangeHandler()}
            value={progress}/>
        </div>
    );
}


export default Progressbar;