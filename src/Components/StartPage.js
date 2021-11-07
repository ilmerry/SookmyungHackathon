import React from 'react';
import '../css/StartPage.css';
import Footer from './Footer';


function StartPage(){
    const onClickHandler = () => {
        window.location.href = "/language"
    }

    const onclickLogo = () => {
        window.location.href = "/"
    }


    return (
        <div>
            <div style={{
                backgroundImage:'url(/assets/StartpageBG.png)',
                backgroundRepeat: "no-repeat",
                
            }} className="StartBG">
                <img 
                    src={require('../SEEKMLogo.png').default} 
                    alt='' 
                    className="logo"
                    onClick={onclickLogo}
                    style={{cursor:"pointer"}}/>
                <div className="sen1">Don't waste your time thinking about nicknames!</div>
                <div className="sen2"> 나의 또다른 숙명(宿名)</div>
                <div className="sen3">
                    Make your new nickname<br/>
                    당신의 새로운 닉네임을 추천드립니다
                </div>
            </div>
            
            <button className="StartBtn" onClick={onClickHandler}>Start</button>
            <Footer/>
        </div>
    )
    
}


export default StartPage;
