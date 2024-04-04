import React from "react";
import "../css/RealTimeCom.css"
import { Row, Col, Button, Image } from "react-bootstrap"
import Graph from "../assets/Graph.png"
const RealTimeShowCase = () => {
    return (
        <>
            <div className="real_time_outermost_div">
                <Row>
                    <Col md={6}>
                        <Image className='Graph' src={Graph} fluid />
                    </Col>
                    <Col md={6} className="column align-items-start">
                        <p style={{ color: '#F33A6A', marginBottom: '20px' }}>Performance App</p>
                        <h2>Realtime Application & </h2> <h2>Fast Server</h2>
                        <p>juvenile proposal betrayed he an informed weddings followed.</p>
                        <p>
                            Precaution day see imprudence sympathize principles.At full leaf give </p>
                        <p>quit to in they up</p>
                        <Button className='try_btn'>Try For Free</Button>
                    </Col>
                </Row>
            </div>
        </>
    )
}
export default RealTimeShowCase