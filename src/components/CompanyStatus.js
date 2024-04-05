import React from "react"
import "../css/Status.css"
import CountUp from 'react-countup';

const CompanyStatus = () => {
    return (
        <>
            <div className="outermost_div column">
                <h3 className="header_text">Best Growing Agency</h3>
                <p className="subheader_text">Savings her pleased are several started females met. short her not being any.</p>
                <div className="center">
                    <div>
                        <p className="status_digits"><CountUp start={1} end={100} duration={5} />%</p>
                        <p>Satisfaction</p>
                    </div>
                    <div>
                        <p className="status_digits">+<CountUp start={1} end={122} duration={6} />K</p>
                        <p>Clients</p>
                    </div>
                    <div>
                        <p className="status_digits"><CountUp start={1} end={55} duration={5} />K</p>
                        <p>properties</p>
                    </div>
                    <div>
                        <p className="status_digits"><CountUp start={1} end={3587} duration={3} />+</p>
                        <p>Rooms</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CompanyStatus