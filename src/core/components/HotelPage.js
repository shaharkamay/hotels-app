import React from "react";
import '../../hotel-page.scss'
import CallNowButton from "./CallNowButton";
import ThemeContext from "../../Context/ThemeContext";


class HotelPage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={`hotel-page-container`}>
                <div className="hotel-content-container ">
                    <h1>{this.props.hotel.name}</h1>
                    <hr/>
                    <img className="hotelImg" src={this.props.hotel.img} />
                    <p>רחוב: {this.props.hotel["street name"]}</p>
                    <p>לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית ושבעגט ליבם סולגק. בראיט ולחת צורק מונחף, בגורמי מגמש. תרבנך וסתעד לכנו סתשם השמה - לתכי מורגם בורק? לתיג ישבעס.</p>
                    <CallNowButton hotel={this.props.hotel} />
                    {/* <Context.Consumer>
                        
                        {(value) => <span>{value}</span>}
                        
                    </Context.Consumer> */}
                </div>
            </div>
        )
    }
}

export default HotelPage;