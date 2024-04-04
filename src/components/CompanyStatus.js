import React from "react"
import "../css/Status.css"

const CompanyStatus = () => {
    return (
        <>
            <div className="outermost_div column">
                <h3 className="header_text">Best Growing Agency</h3>
                <p className="subheader_text">Savings her pleased are several started females met. short her not being any.</p>
                <div className="center">
                    <div>
                        <p className="status_digits">100%</p>
                        <p>Satisfaction</p>
                    </div>
                    <div>
                        <p className="status_digits">+122K</p>
                        <p>Clients</p>
                    </div>
                    <div>
                        <p className="status_digits">55K</p>
                        <p>properties</p>
                    </div>
                    <div>
                        <p className="status_digits">3,587+</p>
                        <p>Rooms</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CompanyStatus