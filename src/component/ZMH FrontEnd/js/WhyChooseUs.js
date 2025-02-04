import { FaArrowLeft, FaDolly, FaShippingFast } from "react-icons/fa";

function WhyChooseUs() {
    return (
        <div>
            <div className="Why-Choose-Us-Infos">
                <div className="Why-Choose-Us-left">
                    <h4>WHY CHOOSE US</h4>
                    <span className="text-divider"></span>
                </div>
                <div className="Why-Choose-Us-right">
                    <div className="reasons">
                        <div className="reasons-cont">
                            <div>
                                <FaShippingFast className="reason1-icon" />
                            </div>
                            <div>
                                <h2>Fast Delivery</h2>
                            </div>
                        </div>
                    </div>
                    <div className="reasons">
                        <div className="reasons-cont">
                            <div>
                                <FaDolly className="reason2-icon" />
                            </div>
                            <div>
                                <h2>Quality Products</h2>
                            </div>
                        </div>
                    </div>
                    <div className="reasons">
                        <div className="reasons-cont">
                            <div>
                                <FaArrowLeft className="reason3-icon" />
                            </div>
                            <div>
                                <h2>Easy Returns</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WhyChooseUs;