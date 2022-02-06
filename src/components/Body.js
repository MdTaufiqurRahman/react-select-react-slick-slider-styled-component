import React from 'react';
import {Container, Row, ProgressBar } from 'react-bootstrap';
import { FaHtml5, FaReact, FaJsSquare } from "react-icons/fa";
import { IconContext } from 'react-icons';

const Body = () => {
    return (
        <IconContext.Provider value = {{ color:'blue', size:'40px'}}>
        <Container>
            <Row>
            <div>
            <FaHtml5/>
            <ProgressBar variant="info" animated now={90} />
            <FaJsSquare/>
            <ProgressBar variant="warning" animated now={80} />
            
            <FaReact/>
            <ProgressBar variant="danger" animated now={75} />
            </div>
            </Row>
        </Container>
        </IconContext.Provider>
    );
};

export default Body;