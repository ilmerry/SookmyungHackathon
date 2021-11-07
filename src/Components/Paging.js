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

    const BtnRenderer = ()=>{
        if(curPage == 3){
            return(
                <button style={{
                    position:"absolute",
                    borderRadius: "50px",
                    margin: "20px",
                    cursor: 'pointer',
                    width: "20vw",
                    fontSize: "15px",
                    backgroundColor: "#9ACDD9",
                    color: "white",
                    border: "0px"
                }}>닉네임 생성하기</button>
            );
        }else{
            return (
                <FaArrowRight className="arrow arrow-right clickunable" size={45} onClick={()=>onClickRight()}/>);
        }
    }

    const onClickLeft = ()=>{

        curPage--
        if(curPage<1) curPage=1
        setLeft(linkList[curPage-1])
        setRight(linkList[curPage+1])
    }

    const onClickRight = ()=>{

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
                    <BtnRenderer />
                </Link>
            </span>
        </div>
    );
    
}

export default Paging;