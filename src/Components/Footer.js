import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

function Footer(){
    const footer={
        opacity: "0.4",
        marginTop: "10px",
        fontSize: "1.1vw",
        textAlign: "center"
    }

    const copyright = {
        paddingTop: "2px"
    }
    
    const developers={
        paddingTop: "2px"
    }

    return(
        <Container style={footer}>
            <hr/>
                <Row style={copyright}>
                    Copyright ⓒ SEEKM All Rights Reserved
                </Row>
                <Row style={developers}>
                    <Col>
                        Developers
                    </Col>
                    <Col>
                        윤다빈 최예빈 유정현 최은형
                    </Col>
                </Row>

        </Container>
    )
}

export default Footer;