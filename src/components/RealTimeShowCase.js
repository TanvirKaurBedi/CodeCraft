import React from "react";
import "../css/RealTimeCom.css"
import { Row, Col, Button,Image } from "react-bootstrap"
import Graph from "../assets/Graph.png"
const RealTimeShowCase = () => {
    return (
        <>
            <div>
                <Row>
                    <Col md={6}>
                    <Image className='Graph' src={Graph} fluid />
                    </Col>
                    <Col md={6}>
                        <p>Performance App</p>
                        <h2>Realtime Application &Fast Server</h2>
                        <p>juvenile proposal betrayed he an informed weddings followed.Precaution day see imprudence sympathize principles.At full leaf give quit to in they up</p>
                        <Button>Try For Free</Button>
                    </Col>
                </Row>
            </div>
        </>
    )
}
export default RealTimeShowCase