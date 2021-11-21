import React from "react";
import '../../hotel-page.scss'

class HotelPage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                {this.props.hotel.name}
            </div>
        )
    }
}

export default HotelPage;