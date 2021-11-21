import React from "react";
import hotelsData from "../../static/hotels";
import HotelCard from "./HotelCard";

class HotelsGallery extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="hotels-gallery">
                {this.props.hotelsData.map((hotelObj) => {
                    return <HotelCard hotelImage={hotelObj.img} hotelName={hotelObj.name} />
                })}
                {/* <HotelCard hotelImage={this.props.hotelsData[0].img} hotelName={this.props.hotelsData[0].name} /> */}
            </div>
        )
    }
}

export default HotelsGallery;