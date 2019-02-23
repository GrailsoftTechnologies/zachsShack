import React, { Component } from "react";
import "./styles.css";

class GoogleMapFrame extends Component {
  constructor(props){
    super(props);
    this.state = {
      height: (parseInt(window.innerHeight * .65, 10)) + "px", // 10 is for radix
      width: "80%"
    }
  }
  render() {
    return (
      <iframe
				title="googleMap"
        height= {this.state.height}
        width= {this.state.width}
        frameBorder="0"
        styles="margin:auto"
        src={"https://www.google.com/maps/embed/v1/place?key=" + process.env.REACT_APP_GOOGLE_MAPS_API + "&q=" + this.props.name + "," + this.props.location + "&zoom=" + this.props.zoom}
        allowFullScreen>
      </iframe>
    );
  }
}

GoogleMapFrame.defaultProps = {
  name: "Starday+Tavern",
  location: "Portland+OR",
  zoom: 14
}

export default GoogleMapFrame;
