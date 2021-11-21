import React from "react";

class HotelCard extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="HotelCard">
                <img src={this.props.hotelImage} />
                <h2>{this.props.hotelName}</h2>
            </div>
        )
    }
}

export default HotelCard;