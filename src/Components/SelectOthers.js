import React from 'react';


function SelectOthers() {
    return (
        <div>
            <div style={{
                textAlign: "center"
            }} className="tellMe">
                나에 대해 알려주세요
            </div>

            <table>
                <tr>
                    <td>이름</td>
                    <td>생일</td>
                    <td>mbti</td>
                </tr>
                <tr>
                    <td>취미</td>
                    <td>색상</td>
                    <td>성격</td>
                </tr>
            </table>
        </div>
    )

}


export default SelectOthers;