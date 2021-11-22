import React from "react";

class CallNowButton extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <button className="callBtn">התקשר עכשיו {this.props.hotel.phone}</button>
        )
    }
}

export default CallNowButton;