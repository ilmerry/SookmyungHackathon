import React, {useState} from 'react';
import '../css/SelectOthers.css';
import Modal from 'react-modal';


Modal.setAppElement('#root') //
function SelectOthers() {
    const [nameModal, setNameModal] = useState(false)
    const [birthModal, setbirthModal] = useState(false)
    const [mbtiModal, setMbtiModal] = useState(false)
    const [hobbyModal, setHobbyModal] = useState(false)
    const [colorModal, setColorModal] = useState(false)
    const [charModal, setCharModal] = useState(false)
    
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
                            color: 'orange'
                        }
                    }
                }>
                <div>mbti</div>
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
                    <td onClick={() => setNameModal(true)}>이름</td>
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
