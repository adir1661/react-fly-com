import React from "react";

class MapWrapper extends React.Component {
  render() {
    return (
      <div className="map-wrapper">
        <div className="geo-location">
          <i className="fa fa-map-marker" />
        </div>
        <div className="map" id="map-homepage" />
      </div>
    );
  }
}

export default MapWrapper;
