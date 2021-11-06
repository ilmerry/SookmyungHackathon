import React, {useState} from 'react';
import '../css/SelectOthers.css';
import Modal from 'react-modal';
import Calendar from 'react-calendar';
import EditText from 'react-edit-text';
import 'react-calendar/dist/Calendar.css';
import 'react-edit-text/dist/index.css';


Modal.setAppElement('#root') //
function SelectOthers() {

    const [birth, setBirth]=useState(null);
    const [name, setName ]=useState(null);
    const [mbti, setMbti ]=useState(null);
    const [color, setColor ]=useState(null);
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
                            color: '#D15593'
                        }
                    }
                }>
                
                <table>
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td  onClick={() => setMbtiModal(false)}>ISTJ</td>
                            <td>ISFJ</td>
                            <td>INFJ</td>
                            <td>INTJ</td>
                        </tr>
                        <tr>
                            <td>ISTP</td>
                            <td>ISFP</td>
                            <td>INFP</td>
                            <td>INTP</td>
                        </tr>
                        <tr>
                            <td>ESTP</td>
                            <td>ESFP</td>
                            <td>ENFP</td>
                            <td>ENTP</td>
                        </tr>
                        <tr>
                            <td>ESTJ</td>
                            <td>ESFJ</td>
                            <td>ENFJ</td>
                            <td>ENFJ</td>
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
                    <td 
                        onClick={() => setNameModal(true)}
                        >이름</td>
                    <td onClick={() => setbirthModal(true)}>생일</td>
                    <td onClick={() => setMbtiModal(true)}>mbti</td>
                </tr>
                <tr>
                    <td onClick={() => setHobbyModal(true)}>취미</td>
                    <td onClick={() => setColorModal(true)}>색상</td>
                    <td onClick={() => setCharModal(true)}>성격</td>
                </tr>
                </tbody>
                <tfoot></tfoot>
            </table>
        </div>
    )

}


export default SelectOthers;
