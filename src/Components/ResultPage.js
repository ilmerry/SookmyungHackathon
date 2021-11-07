import React from 'react';
import '../css/ResultPage.css';
import '../css/StartPage.css';
import { AiOutlineReload } from "react-icons/ai";
import { BsPersonCircle } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { AiFillMail } from "react-icons/ai";
import { IoGameControllerOutline } from "react-icons/io5";


function ResultPage(){
    const onclickLogo = () => {
        window.location.href = "/"
    }
    
    return(
        <div>
            <div style={{
               backgroundImage:'url(/assets/svgresultBGBG.svg)',
               backgroundRepeat: "no-repeat",
                backgroundSize: "100%",
                height: "100vh",

            }}>
                <img 
                    src={require('../SEEKMLogo.png').default} 
                    alt='' 
                    className="logo"
                    onClick={onclickLogo}
                    style={{cursor:"pointer"}}
                    />
                <div style={{
                    backgroundImage: 'url(/assets/resultBG.png)',
                    
                }} className="resultBG">
                    <div className="name">
                        <BsPersonCircle className="nameIcon"/>
                        <span className="ko_name">올리비아</span>  &nbsp;
                        <span className="eng_name">Olivia</span>
                        
                    </div>

                    <div className="other_names">
                        <div className="insta_name">
                            <BsInstagram style={{width:"30px"}}/>&nbsp; @turkish_rose_olivia
                        </div>

                        <div className="email_name">
                            <AiFillMail style={{width:"30px"}}/>&nbsp; roselivia624@example.com
                        </div>

                        <div className="game_name">
                            <IoGameControllerOutline style={{width:"30px"}}/> &nbsp;turkishRoselivia
                        </div>
                    </div>
                </div>

               <div className="copy_sen">
                    *닉네임을 누르면 복사됩니다 
                </div> 
               
                <button className="otherBtn">
                    <AiOutlineReload /> &nbsp; 다른 조합을 볼래요
                </button>
            </div>
            
        </div>
    )


}

export default ResultPage;