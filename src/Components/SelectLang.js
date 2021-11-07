import React, {useState, useEffect} from "react";
import Progressbar from "./Progressbar";
import Paging from "./Paging";
import "../css/SelectPage.css";
const API_URL = 'http://localhost:3001'

function SelectLang (){
    const [language, setLanguage]=useState(null);
    const page=2;
    var inform;

    // usecallback 써서 성능최적화 시키던가
    const onClickHandler = async (lang)=>{
        // 다음버튼 활성화
        let arrowRgiht = document.querySelector(".arrow-right")
        arrowRgiht.style.color = "#710273"
        arrowRgiht.classList.remove("clickunable")
        arrowRgiht.classList.add("clickable")

        // 눌린 버튼 디자인 변경
        let korBtn = document.querySelector(".btn-kor")
        let engBtn = document.querySelector(".btn-eng")
        if(lang === "kor"){
            korBtn.style.backgroundColor = "#6C60BF"
            korBtn.style.color = "white"
            engBtn.style.backgroundColor = "white"
            engBtn.style.color = "#6C60BF"
        }else{
            engBtn.style.backgroundColor = "#6C60BF"
            engBtn.style.color = "white"
            korBtn.style.backgroundColor = "white"
            korBtn.style.color = "#6C60BF"
        }

        setLanguage(language)
        inform = {language: language};
        fetch(`${API_URL}/language`, {
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
    }
   
    // language가 Null이 아니면 화살표 활성화하는 함수 (근데 수행 타이밍을 못찾겠음 - 변수가 바뀔때마다 검사하게 하는건 ㅇㄸ)
    // <Link to="/maxlength"></Link>
    
    return(
        <div>
            <div style={{
                backgroundImage: 'url(/assets/selectBG.svg)',
                backgroundRepeat: "no-repeat",
                
            }} className="lang_bg">
                <div className="css-lang">
                    <Progressbar min={10} max={40}/>

                    <div className="title">언어를 선택해주세요</div>

                    <span className="btn">
                        <button className="btn-kor"
                            onClick={()=>onClickHandler("kor")}>
                            한글
                        </button>
                        <button className="btn-eng"
                            onClick={()=>onClickHandler("eng")}>
                            English
                        </button>  
                    </span>

                    <Paging/>
                </div>
            </div>
        </div>
    )
    
}
export default SelectLang;