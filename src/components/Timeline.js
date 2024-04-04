import React from "react"
import "../css/TimelineStyle.css"
import { Row, Col } from "react-bootstrap"
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const TimeLine = () => {
    return (
        <>
            <div className="timeline_outermost-div">
                <p  style={{color:'#F33A6A',fontWeight:'500'}}>Timeline</p>
                <h1 style={{fontWeight:'bolder',marginBottom:'40px'}}>Company Timeline</h1>
                <VerticalTimeline lineColor="grey">
                    <VerticalTimelineElement
                        className="vertical-timeline-element"
                        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date="Jan 2018 Company Established"
                        dateClassName="date-black"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<i className="fas fa-code" />}
                    >
                        <h3 className="vertical-timeline-element-title">Development</h3>
                        <p>
                            Creative direction, user experience, visual design, project management, team leading
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element"
                        contentStyle={{ background: 'yellow', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  yellow' }}
                        date="March 2020 New Building in California"
                        iconStyle={{ background: 'yellow', color: '#fff' }}
                        icon={<i color="yellow" className="fas fa-code" />}
                    >
                        <h3 className="vertical-timeline-element-title">IT Solution</h3>
                        <p>
                            Creative direction, user experience, visual design, project management, team leading
                        </p>
                    </VerticalTimelineElement>
                    {/*  */}
                    <VerticalTimelineElement
                        className="vertical-timeline-element"
                        contentStyle={{ background: 'blue', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date="April 2021 First Production Launch"
                        dateClassName="date-black"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<i className="fas fa-code" />}
                    >
                        <h3 className="vertical-timeline-element-title">Product marketing</h3>
                        <p>
                            Creative direction, user experience, visual design, project management, team leading
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element"
                        contentStyle={{ background: 'pink', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  pink' }}
                        date="September 2022 Entering Big Market"
                        iconStyle={{ background: 'pink', color: '#fff' }}
                        icon={<i color="yellow" className="fas fa-code" />}
                    >
                        <h3 className="vertical-timeline-element-title">IT Solution</h3>
                        <p>
                            Creative direction, user experience, visual design, project management, team leading
                        </p>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        </>
    )
}
export default TimeLine