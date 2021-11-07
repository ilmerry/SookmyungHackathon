import React from 'react';
import '../css/StartPage.css';
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';


function StartPage(){
    const onClickHandler = () => {
        // 구현하자
        <Link to="/select"></Link>
    }


    return (
        <div>
            <div style={{
                backgroundImage:'url(/assets/StartpageBG.png)',
                backgroundRepeat: "no-repeat",
                
            }} className="StartBG">
                <div className="sen1">Don't waste your time thinking about nicknames!</div>
                <div className="sen2"> 나의 또다른 숙명(宿名)</div>
                <div className="sen3">
                    Make your new nickname<br/>
                    당신의 새로운 닉네임을 추천드립니다
                </div>
            </div>
            <Link to="/language" style={{textDecoration: "none"}}>
            <Button className="StartBtn" onClick={onClickHandler}>Start</Button>
            </Link>
        </div>
    )
    
}


export default StartPage;
