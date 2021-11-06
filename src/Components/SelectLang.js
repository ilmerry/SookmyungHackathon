import React, {useState, useEffect} from "react";
import "../css/SelectPage.css";
const API_URL = 'http://localhost:3001'

function SelectLang (){
    const [language, setLanguage]=useState(null);
    const page=2;
    var inform;

    // usecallback 써서 성능최적화 시키던가
    const onClickHandler = async (lang)=>{
        setLanguage(lang);
        
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
        <div className="css-lang">
            <div className="title">언어를 선택해주세요</div>
            <span className="btn">
                <button className="btn-kor"
                    onClick={()=>onClickHandler("kor")}>
                    한글
                </button>
                <button className="btn-eng"
                    onClick={()=>onClickHandler("en")}>
                    English
                </button>  
                
            </span>
        </div>
    )
    
}
export default SelectLang;