import React from "react";
import "../css/BenefitsDescription.css"
import { Row, Col, Button } from 'react-bootstrap'
import { FaGlobe } from 'react-icons/fa';
import { BiTransfer } from 'react-icons/bi';
// import { IoIosAddCircle } from 'react-icons/io';
import { AiOutlineCloudUpload } from 'react-icons/ai';

const BenefitsDescription = () => {
    return (
        <>
            <div className="outermost">
                <Row>
                    <Col md={4} className="column">
                        <div className="globe_icon center">
                            <FaGlobe size={32} color="white" />
                        </div>
                        <div>
                            <h2>Powerful Modern Idea</h2>
                        </div>
                        <div>
                            <p>Drawings me opinions returned absolute in.<br>
                            </br>Otherwise therefore are are unfeeling <br></br> something.Certain be ye amiable</p>
                        </div>
                    </Col>
                    <Col md={4} className="column">
                        <div className="cloud_icon center">
                            <AiOutlineCloudUpload strokeWidth={3} size={32} color="white" />
                        </div>
                        <div>
                            <h2>Easy Data Analytics</h2>
                        </div>
                        <div>
                            <p>Drawings me opinions returned absolute in.<br>
                            </br>Otherwise therefore are are unfeeling <br></br> something.Certain be ye amiable</p>
                        </div>
                    </Col>
                    <Col md={4} className="column">
                        <div className="swap_icon center">
                            <BiTransfer strokeWidth={3} size={32} color="white" />
                        </div>
                        <div>
                            <h2>Best Software Developer</h2>
                        </div>
                        <div>
                            <p>Drawings me opinions returned absolute in.<br>
                            </br>Otherwise therefore are are unfeeling <br></br> something.Certain be ye amiable</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button>
                            Download
                        </Button>
                    </Col>
                </Row>
            </div>
        </>
    )
}
export default BenefitsDescription