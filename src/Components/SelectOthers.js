import React, {useState, useEffect} from 'react';
import '../css/SelectOthers.css';
import Modal from 'react-modal';
import Calendar from 'react-calendar';
import {EditText} from 'react-edit-text';
import { HexColorPicker, HexColorInput  } from "react-colorful";
import 'react-calendar/dist/Calendar.css';
import 'react-edit-text/dist/index.css';
import Progressbar from './Progressbar';
import Paging from './Paging';

const backgroundStyle = {
    backgroundImage: 'url(/images/selectLangBackground.png)',
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100vh"
}

Modal.setAppElement('#root') //
function SelectOthers() {

    const [birth, setBirth]=useState(new Date());
    const [name, setName ]=useState(null);
    const [mbti, setMbti ]=useState(null);
    const [color, setColor ]=useState("#aabbcc");
    const page=4;

    const onClickBirth = ()=>{
        
    }

    const onClickName = ()=>{
        
    }

    const onClickColor = ()=>{
        
    }
    
    const [nameModal, setNameModal] = useState(false)
    const [birthModal, setbirthModal] = useState(false)
    const [mbtiModal, setMbtiModal] = useState(false)
    const [hobbyModal, setHobbyModal] = useState(false)
    const [colorModal, setColorModal] = useState(false)
    const [charModal, setCharModal] = useState(false)

    const getDay=() => {
        // 생일 입력 반박자 늦게 받아짐
        console.log(birth)
    }
    useEffect(() => {
        getDay()
    }, [birth])

    return (
        <div style={backgroundStyle}>
            <Progressbar/>
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
                <div>이름</div>
                <div>
                    <EditText placeholder="본명 혹은 자주 쓰던 닉네임"
                    value={name}
                    onChange={setName}/>
                </div>
                <button onClick={() => setNameModal(false)}> 닫기</button>
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
                <div>생일</div>
                <div className="css-calDiv">
                    <Calendar className="css-cal"
                        onChange={setBirth}
                        value={birth}
                        maxDate={new Date()}
                        onClickDay={()=>getDay()}
                    />
                </div>
                <button onClick={() => setbirthModal(false)}> 닫기</button>
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
                
                <table>
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td className="mbti_t" onClick={() => setMbtiModal(false)}>ISTJ</td>
                            <td className="mbti_t">ISFJ</td>
                            <td className="mbti_t">INFJ</td>
                            <td className="mbti_t">INTJ</td>
                        </tr>
                        <tr>
                            <td className="mbti_t">ISTP</td>
                            <td className="mbti_t">ISFP</td>
                            <td className="mbti_t">INFP</td>
                            <td className="mbti_t">INTP</td>
                        </tr>
                        <tr>
                            <td className="mbti_t">ESTP</td>
                            <td className="mbti_t">ESFP</td>
                            <td className="mbti_t">ENFP</td>
                            <td className="mbti_t">ENTP</td>
                        </tr>
                        <tr>
                            <td className="mbti_t">ESTJ</td>
                            <td className="mbti_t">ESFJ</td>
                            <td className="mbti_t">ENFJ</td>
                            <td className="mbti_t">ENFJ</td>
                        </tr>
                    </tbody>
                    <tfoot></tfoot>
                </table>
                
            </Modal>

            <Modal 
                isOpen={hobbyModal} 
                onRequestClose={() => setHobbyModal(false)}
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
                <div>취미</div>
                <button onClick={() => setHobbyModal(false)}> 닫기</button>
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
                <div>색상</div>
                <div>
                <HexColorPicker color={color} onChange={setColor} />;
                <HexColorInput color={color} onChange={setColor} prefixed alpha />
                </div>
                <button onClick={() => setColorModal(false)}> 닫기</button>
            </Modal>

            <Modal 
                isOpen={charModal} 
                onRequestClose={() => setCharModal(false)}
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
                <div>성격</div>
                <button onClick={() => setCharModal(false)}> 닫기</button>
            </Modal>

            <table>
                <thead></thead>
                <tbody>
                <tr>
                    <td className="select"
                        onClick={() => setNameModal(true)}
                        >이름</td>
                    <td className="select" onClick={() => setbirthModal(true)}>생일</td>
                    <td className="select" onClick={() => setMbtiModal(true)}>mbti</td>
                </tr>
                <tr>
                    <td className="select" onClick={() => setHobbyModal(true)}>취미</td>
                    <td className="select" onClick={() => setColorModal(true)}>색상</td>
                    <td className="select" onClick={() => setCharModal(true)}>성격</td>
                </tr>
                </tbody>
                <tfoot></tfoot>
            </table>
            <Paging/>
        </div>
    )

}


export default SelectOthers;
