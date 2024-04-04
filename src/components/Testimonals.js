import React from "react"
import "../css/TestimonalStyle.css"
import { Card, Image } from 'react-bootstrap';
import girlAvatar from "../assets/girlAvatar.jpg"
import { BsStarFill, BsDot } from 'react-icons/bs';
const Testimonals = () => {
    return (
        <>
            <div className="column parent_div">
                <p style={{ color: '#F33A6A', fontWeight: '500' }}>Feedback</p>
                <h1>What Customers Think About Us?</h1>
                <Card elevation={10} style={{ width: '57rem' }} className="center custom_card">
                    <Image src={girlAvatar} roundedCircle style={{ width: '100px', height: '100px' }} />
                    <p>Kristen Johnson</p>
                    <div className="center">
                        <BsStarFill style={{ color: '	#F33A6A', marginRight: '4px' }}></BsStarFill>     <BsStarFill style={{ color: '#F33A6A', marginRight: '4px' }}></BsStarFill>     <BsStarFill style={{ color: '#F33A6A', marginRight: '4px' }}></BsStarFill>     <BsStarFill style={{ color: '#F33A6A', marginRight: '4px' }}></BsStarFill>     <BsStarFill style={{ color: '#F33A6A', marginRight: '4px' }}></BsStarFill>
                    </div>
                    <Card.Text className='card_text'>
                        "Sentiments two occasional affronting solicitude travelling and one contrasted Fortune day out married parties.Happiness remainder joy but earnestly for off. Took sold add play may none him fews.  If as increasing Sentiments two occasional affronting solicitude travelling and one contrasted. Fortune day out married parties"
                    </Card.Text>
                    <div className="center">
                        <BsDot style={{ marginRight: '-15px' }} size={50} color="#F33A6A"></BsDot> <BsDot style={{ marginLeft: '-15px' }} size={50} color="bisque"></BsDot>
                    </div>
                </Card>
            </div>
        </>
    )
}
export default Testimonals