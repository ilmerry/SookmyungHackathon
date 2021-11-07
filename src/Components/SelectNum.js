import React, {useState, useEffect} from "react";
import {Link} from 'react-router-dom';
import Progressbar from "./Progressbar";
import Paging from "./Paging";
import "../css/SelectPage.css";
const API_URL = 'http://localhost:3001'

const backgroundStyle = {
    backgroundImage: 'url(/assets/selectBG.svg)',
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
    height: "100vh"
}
let flag=false;

function SelectNum(){

    // maxlength : string으로 넘길것. 버튼눌렀을때 기능 구현
    const [maxlength, setMaxlength ]=useState(null);
    const page=3;

    const onClickHandler = (len)=>{
        // 다음버튼 활성화
        let arrowRgiht = document.querySelector(".arrow-right")
        arrowRgiht.style.color = "#710273"
        arrowRgiht.classList.remove("clickunable")
        arrowRgiht.classList.add("clickable")

        setMaxlength(len)
        var inform = {'maxlength':maxlength}
        fetch(`${API_URL}/maxlength`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(inform),  
        })
        .then(async res => { 
            try {
                const jsonRes = await res.json();
                if (res.status === 200) {
                    console.log(jsonRes.message);
                }
            } catch (err) {
                console.log(err);
            };
        });
        // 페이지 전환
    }

    const numButt = (num)=>{
        flag=true;
        
        if (maxlength==null){
            setMaxlength(num)
        }
        else{
            if (parseInt(maxlength)>=20){
                setMaxlength("20")
            }
            else{setMaxlength(maxlength+num)}
        }
        
    }

    useEffect(() => {
        if (parseInt(maxlength)>=20){
            setMaxlength("20")
        }
    }, [maxlength])

    const delButt=()=>{
        if(maxlength==null){
            setMaxlength(null)
        }else if(maxlength.length === 1 && flag){
            flag=false
        }
        else{
            setMaxlength(maxlength.substring(0, maxlength.length -1))
        }
    }   

    
    return(
        <div style={{
            backgroundImage: 'url(/assets/selectBG.svg)',
            backgroundRepeat: "no-repeat",
            
        }} className="lang_bg">
            <div className="css-num">
            <Progressbar min={40} max={70} style={{width: "100%"}}/>
            <div className="num_title" style={{marginBottom: "0px", marginTop: "25px"}}>최대 <span className="N">{!flag? "N" :maxlength}</span>글자까지 생성합니다</div>
            <div>
                <tr>
                    <td><button className="keypad" onClick={()=>numButt("1")}>1</button></td>
                    <td><button className="keypad" onClick={()=>numButt("2")}>2</button></td>
                    <td><button className="keypad" onClick={()=>numButt("3")}>3</button></td>
                </tr>
                <tr>
                    <td><button className="keypad" onClick={()=>numButt("4")}>4</button></td>
                    <td><button className="keypad" onClick={()=>numButt("5")}>5</button></td>
                    <td><button className="keypad" onClick={()=>numButt("6")}>6</button></td>
                </tr>
                <tr>
                    <td><button className="keypad" onClick={()=>numButt("7")}>7</button></td>
                    <td><button className="keypad" onClick={()=>numButt("8")}>8</button></td>
                    <td><button className="keypad" onClick={()=>numButt("9")}>9</button></td>
                </tr>
                <tr>
                    <td><button className="keypad" onClick={()=>{delButt()}}>삭제</button></td> 
                    <td><button className="keypad" onClick={()=>numButt("0")}>0</button></td>
                    <td>
                        <button className="keypad" onClick={()=>onClickHandler(maxlength)}>확인</button>
                    </td>
                </tr>
            </div>
            <Paging />
            </div>
        </div>
    );
    
}

export default SelectNum;