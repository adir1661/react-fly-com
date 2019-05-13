import React from "react";
import MapWrapper from "./MapWrapper";
import SearchForm from "./SearchForm";

class MapWrapperContainer extends React.Component {
  render() {
    return (
      <div className="hero-section full-screen has-map">
        <MapWrapper />
        {}
        <SearchForm />
        {}
      </div>
    );
  }
}

export default MapWrapperContainer;
