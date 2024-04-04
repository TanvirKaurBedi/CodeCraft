import React from "react"
import { Row, Col, Image } from "react-bootstrap"
import CmsImg from "../assets/CMS.png"
import "../css/Cms.css"


const CMS = () => {
    return (
        <>
            <div className="cms_outermost">
                <Row>
                    <Col md={6}>
                        <h2>Why You Should
                            Use a <br></br> Content Management System ?
                        </h2>
                        <p>Savings her pleased are several started females met.
                            short her not among being any.Things of judge fruit charms views do.Miles mr an forty along as he.She education get middleton day agreement
                        </p>
                        <ul style={{ listStyleType: 'none' }}>
                            <li ><span>&#10003;</span> Speedily say has suitable disposal add boy.On forth doubt miles of child.Exercise joy man children rejoiced yet uncommonly</li>
                            <li ><span>&#10003;</span> There could can widen ten she any.As so we smart that money in.Am wrote up wholse so tears sense oh absolute required</li>
                            <li ><span>&#10003;</span> There could can widen n she any.As so we smart that money in.Am wrote up whole so tears sense oh absolute required</li>
                            <li><span>&#10003;</span>
                                Debating me breeding be answered he.Spoil event was words her off cause any.Tears woman which no is world miles woody
                            </li>
                            <li>Explore More</li>
                        </ul>

                    </Col>
                    <Col md={6}>
                        <Image className="img" src={CmsImg}></Image>
                    </Col>
                </Row>
            </div>
        </>
    )
}
export default CMS