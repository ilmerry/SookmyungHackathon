import React, {useState} from 'react';
import '../css/SelectOthers.css';
import Modal from 'react-modal';
import Calendar from 'react-calendar';
import EditText from 'react-edit-text';
import 'react-calendar/dist/Calendar.css';
import 'react-edit-text/dist/index.css';
const API_URL = 'http://localhost:3001'

Modal.setAppElement('#root') //
function SelectOthers() {

    const [birth, setBirth]=useState(null);
    const [name, setName ]=useState(null);
    const [mbti, setMbti ]=useState(null);
    const [color, setColor ]=useState(null);
   

    // 4개중에 2개 이하가 Null 일때 결과보기 버튼 활성화

    const generateNick = ()=>{

        const inform = {birth, name, mbti, color};
        fetch(`${API_URL}/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(inform),  
        })
        .then(async res => { 
            try {
                // 닉네임으로 응답이 오면 받고 다음페이지로 넘어가는 코드 수행

            } catch (err) {
                console.log(err);
            };
        });
    }

    const [nameModal, setNameModal] = useState(false)
    const [birthModal, setbirthModal] = useState(false)
    const [mbtiModal, setMbtiModal] = useState(false)
    const [hobbyModal, setHobbyModal] = useState(false)
    const [colorModal, setColorModal] = useState(false)
    const [charModal, setCharModal] = useState(false)
    
    const [birthCal, setBirthCal] = useState(new Date());

    const getDay=() => {
        // 생일 입력 받아옴
        console.log(birthCal);
        setbirthModal(false);
    }

    return (
        <div>

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
                    maxDate={new Date()}
                    onClickDay={() => getDay()} />
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
                            width: "70%",
                            position: "fixed",
                            left: "13%",
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
                <button onClick={() => setMbtiModal(false)}> 닫기</button>
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

            <button onClick={()=>{generateNick()}}>결과</button>
        </div>
    )

}


export default SelectOthers;
