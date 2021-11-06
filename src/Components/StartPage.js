import React from 'react';
import '../css/StartPage.css';


function StartPage(){
    
    return (
        <div>
            <div style={{
                backgroundImage:'url(/assets/StartpageBG.png)',
                backgroundRepeat: "no-repeat",
                backgroundSize: "100%",
                height: "70vh"
            }}>
                <div className="sen1">Don't waste your time thinkingabout nicknames!</div>
                <div className="sen2"> 나의 또다른 숙명(宿名)</div>
                <div className="sen3">
                    Make your new nickname<br/>
                    당신의 새로운 닉네임을 추천드립니다
                </div>
            </div>

            <button className="StartBtn" >Start</button>
        </div>
    )
    
}


export default StartPage;
