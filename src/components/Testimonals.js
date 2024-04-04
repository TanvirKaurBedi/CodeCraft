import React from "react"
import  "../css/TestimonalStyle.css"
import { Card, Image } from 'react-bootstrap';
import girlAvatar from "../assets/girlAvatar.jpg"
import { BsStarFill, BsDot } from 'react-icons/bs';
const Testimonals = () => {
    return (
        <>
            <div className="column parent_div">
                <p>Feedback</p>
                <h1>What Customers Think About Us?</h1>
                <Card style={{ width: '53rem' }} className="center">
                    <Image src={girlAvatar} roundedCircle style={{ width: '100px', height: '100px' }} />
                    <p>Kristen Johnson</p>
                    <div className="center">
                        <BsStarFill style={{ color: 'pink' }}></BsStarFill>     <BsStarFill style={{ color: 'pink' }}></BsStarFill>     <BsStarFill style={{ color: 'pink' }}></BsStarFill>     <BsStarFill style={{ color: 'pink' }}></BsStarFill>     <BsStarFill style={{ color: 'pink' }}></BsStarFill>
                    </div>
                    <Card.Text>
                        "Sentiments two occasional affronting solicitude travelling and one contrasted Fortune day out married parties.Happiness remainder joy but earnestly for off.Took sold add play may none him fews.If as increasing Sentiments two occasional affronting solicitude travelling and one contrasted.Fortune day out married parties"
                    </Card.Text>
                    <div className="center">
                        <BsDot size={60} color="pink"></BsDot> <BsDot size={60} color="pink"></BsDot>
                    </div>
                </Card>
            </div>
        </>
    )
}
export default Testimonals