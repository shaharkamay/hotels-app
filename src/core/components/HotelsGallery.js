import React from "react";
import hotelsData from "../../static/hotels";
import HotelCard from "./HotelCard";
import kebabCase from "../../helpers/kebab-case";
import { Link } from "react-router-dom";

class HotelsGallery extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="hotels-gallery container">
                {this.props.hotelsData.map((hotelObj) => {
                    return <Link className="card-link" to={`/hotel/${encodeURI(kebabCase(hotelObj.name))}`} ><HotelCard  hotelImage={hotelObj.img} hotelName={hotelObj.name} /></Link>

                })}
                {/* <HotelCard hotelImage={this.props.hotelsData[0].img} hotelName={this.props.hotelsData[0].name} /> */}
            </div>
        )
    }
}

export default HotelsGallery;