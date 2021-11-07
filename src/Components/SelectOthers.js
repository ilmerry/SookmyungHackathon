import React, {useState, useEffect} from 'react';
import '../css/SelectOthers.css';
import Modal from 'react-modal';
import Calendar from 'react-calendar';
import {EditText} from 'react-edit-text';
import { HexColorPicker, HexColorInput  } from "react-colorful";
import 'react-calendar/dist/Calendar.css';
import 'react-edit-text/dist/index.css';
const API_URL = 'http://localhost:3001'
import Progressbar from './Progressbar';
import Paging from './Paging';
import "../css/SelectPage.css";

const backgroundStyle = {
    backgroundImage: 'url(/assets/selectBG.svg)',
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
    
}

Modal.setAppElement('#root') //
function SelectOthers() {

    const [birth, setBirth]=useState(new Date());
    const [name, setName ]=useState("클릭하여 이름 입력");
    const [mbti, setMbti ]=useState(null);
    const [color, setColor ]=useState(null);
   

    // 4개중에 2개 이하가 Null 일때 결과보기 버튼 활성화

    const generateNick = ()=>{

        const inform = {birth, name, mbti, color};
        fetch(`${API_URL}/result`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(inform),  
        })
        .then(async res => { 
            try {
                const jsonRes = await res.json();
                // 닉네임으로 응답이 오면 받고 다음페이지로 넘어가는 코드 수행
                console.log(jsonRes.newNick)
                console.log(jsonRes.transNick)
                console.log(jsonRes.instaId)
                console.log(jsonRes.new_email)
                console.log(jsonRes.new_gameId)
            } catch (err) {
                console.log(err);
            };
        });
    }

    const [color, setColor ]=useState("#D15593");
    const page=4;

    const onClickName = ()=>{
        console.log(name)
    }
    
    const onClickBirth = ()=>{
    }

    const onClickColor = ()=>{
    }

    
    // 정상
    const getName = ()=>{
        setNameModal(false)
        let userName = document.querySelector(".js-name")

        if(userName == null)
            console.log(1)
        else
            setName(userName.innerText)
        console.log(name)
    }
    useEffect(() => {
        getName()
    }, [name])
    
    // 정상
    const getBirth = ()=>{
        setbirthModal(false)
        setBirth(birth)
        console.log(birth)
    }
    useEffect(() => {
        getBirth()
    }, [birth])

    // 정상
    const getMbti = (value)=>{
        setMbtiModal(false)
        setMbti(value)
        console.log(mbti)
    }
    useEffect(() => {
        getMbti()
    }, [mbti])
    
    // 정상
    const getColor = ()=>{
        setColor(color)
        console.log(color)
    }
    useEffect(() => {
        getColor()
    }, [color])
    
    const [nameModal, setNameModal] = useState(false)
    const [birthModal, setbirthModal] = useState(false)
    const [mbtiModal, setMbtiModal] = useState(false)
    const [colorModal, setColorModal] = useState(false)

    return (
        <div style={backgroundStyle} className="css-lang">
            <Progressbar min={70} max={100}/>
            <div className="tellMe">
                나에 대해 알려주세요
            </div>

            <Modal 
                isOpen={nameModal} 
                onRequestClose={() => setNameModal(false)}
                style={
                    {
                        overlay: {
                            backgroundColor: 'grey'
                        },
                        content: {
                            color: 'orange'
                        }
                    }
                }>
                <div className="title">나의 이름은</div>
                <div className="css-modal-name">
                    <EditText 
                    className="css-et js-name" 
                    placeholder="클릭하여 이름 입력"
                    onChange={setName}
                    />
                    <button className="css-submit" onClick={()=>getName()}>확인</button>
                </div>
            </Modal>

            <Modal 
                isOpen={birthModal} 
                onRequestClose={() => setbirthModal(false)}
                style={
                    {
                        overlay: {
                            backgroundColor: 'grey'
                        },
                        content: {
                            color: 'orange'
                        }
                    }
                }>
                <div className="title">내가 태어난 날</div>
                <div className="css-modal-birth">
                    <Calendar className="css-cal"
                        onChange={setBirth}
                        value={birth}
                        maxDate={new Date()}
                        onClickDay={()=>getBirth()}
                    />
                </div>
            </Modal>

            <Modal 
                isOpen={mbtiModal} 
                onRequestClose={() => setMbtiModal(false)}
                style={
                    {
                        overlay: {
                            backgroundColor: 'grey'
                        },
                        content: {
                            color: '#D15593',
                            width: "60%",
                            position: "fixed",
                            left: "18%",
                        }
                    }
                    
                }
                >
                <div className="title" style={{color:'orange'}}>
                    나의 MBTI
                </div>
                <table>
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td className="mbti_t" onClick={() => getMbti("ISTJ")}>ISTJ</td>
                            <td className="mbti_t" onClick={() => getMbti("ISFJ")}>ISFJ</td>
                            <td className="mbti_t" onClick={() => getMbti("INFJ")}>INFJ</td>
                            <td className="mbti_t" onClick={() => getMbti("INTJ")}>INTJ</td>
                        </tr>
                        <tr>
                            <td className="mbti_t" onClick={() => getMbti("ISTP")}>ISTP</td>
                            <td className="mbti_t" onClick={() => getMbti("ISFP")}>ISFP</td>
                            <td className="mbti_t" onClick={() => getMbti("INFP")}>INFP</td>
                            <td className="mbti_t" onClick={() => getMbti("INTP")}>INTP</td>
                        </tr>
                        <tr>
                            <td className="mbti_t" onClick={() => getMbti("ESTP")}>ESTP</td>
                            <td className="mbti_t" onClick={() => getMbti("ESFP")}>ESFP</td>
                            <td className="mbti_t" onClick={() => getMbti("ENFP")}>ENFP</td>
                            <td className="mbti_t" onClick={() => getMbti("ENTP")}>ENTP</td>
                        </tr>
                        <tr>
                            <td className="mbti_t" onClick={() => getMbti("ESTJ")}>ESTJ</td>
                            <td className="mbti_t" onClick={() => getMbti("ESFJ")}>ESFJ</td>
                            <td className="mbti_t" onClick={() => getMbti("ENTJ")}>ENTJ</td>
                            <td className="mbti_t" onClick={() => getMbti("ENFJ")}>ENFJ</td>
                        </tr>
                    </tbody>
                    <tfoot></tfoot>
                </table>
                
            </Modal>

            <Modal 
                isOpen={colorModal} 
                onRequestClose={() => setColorModal(false)}
                style={
                    {
                        overlay: {
                            backgroundColor: 'grey'
                        },
                        content: {
                            color: 'orange'
                        }
                    }
                }>
                <div className="title">내가 좋아하는 컬러는</div>
                <div className="css-modal-color">
                    <HexColorPicker className="css-picker"
                    color={color} onChange={setColor} />
                    <div className="css-hex" >
                        {color}
                    </div>
                    <button className="css-submit-color" onClick={()=>getColor()}>확인</button>
                </div>
            </Modal>

            <table>
                <thead></thead>
                <tbody>
                <tr>
                    <td className="select"
                        onClick={() => setNameModal(true)}
                        >이름</td>
                    <td className="select" onClick={() => setbirthModal(true)}>생일</td>
                </tr>
                <tr>
                    <td className="select" onClick={() => setMbtiModal(true)}>mbti</td>
                    <td className="select" onClick={() => setColorModal(true)}>색상</td>
                </tr>
                </tbody>
                <tfoot></tfoot>
            </table>
            <button onClick={()=>{generateNick()}}>결과</button>
            <Paging/>
        </div>
    )

}


export default SelectOthers;
