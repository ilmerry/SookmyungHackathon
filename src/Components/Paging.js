import React, {useState, useEffect} from "react";
import {Link} from 'react-router-dom';
import "../css/SelectPage.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
const API_URL = 'http://localhost:3001'

const linkList = ["/", "/language", "/maxlen", "/others", "/result"]
let curPage=1

function Paging(){

    const [left, setLeft ]=useState(linkList[curPage-1])
    const [right, setRight ]=useState(linkList[curPage+1])

    const pagbarAnimation = ()=>{
        let pgbar = document.querySelector(".js-pgbar")
        const preval = pgbar.value
        let id = setInterval(frame, 10)
    
        function frame(){
            if(pgbar.value >= preval + 30){
                clearInterval(id);
            }else{
                pgbar.value += 2;
            }
        }
    }

    const onClickLeft = ()=>{
        curPage--
        if(curPage<1) curPage=1
        setLeft(linkList[curPage-1])
        setRight(linkList[curPage+1])
    }

    const onClickRight = ()=>{
        pagbarAnimation()
        curPage++
        if(curPage>3) curPage=3
        setLeft(linkList[curPage-1])
        setRight(linkList[curPage+1])
    }

    
    return(
        <div>
            <span className="css-paging">
                <Link to={left}>
                    <FaArrowLeft className="arrow arrow-left" size={45} onClick={()=>onClickLeft()}/>
                </Link>
                <Link to={right}>
                    <FaArrowRight className="arrow arrow-right clickunable" size={45} onClick={()=>onClickRight()}/>
                </Link>
            </span>
        </div>
    );
    
}

export default Paging;