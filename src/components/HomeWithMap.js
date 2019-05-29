import React ,{Component} from 'react';
import Footer from "./Footer";
import MainMap from "./MainMap";

class HomeWithMap extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div id="page-content">
                <div className="hero-section full-screen has-map" data-component="MapWrapperContainer">
                    <div className="map-wrapper" data-component="MapWrapper">
                        <div className="geo-location" style={{top:'60px'}}>
                            <i className="fa fa-map-marker"></i>
                        </div>
                        <MainMap/>
                    </div>
                    <div className="form search-form horizontal position-bottom inputs-dark"
                         data-component="SearchForm">
                        <div className="container">
                            <form>
                                <div className="row">
                                    <div className="col-md-3 col-sm-2">
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="keyword"
                                                   placeholder="Enter keyword"/>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-4">
                                        <div className="form-group">
                                            <select className="form-control selectpicker" name="city">
                                                <option value="">Location</option>
                                                <option value="1">New York</option>
                                                <option value="2">Washington</option>
                                                <option value="3">London</option>
                                                <option value="4">Paris</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-4">
                                        <div className="form-group">
                                            <select className="form-control selectpicker" name="category">
                                                <option value="">Category</option>
                                                <option value="restaurant">Restaurant</option>
                                                <option value="car rental">Car Rental</option>
                                                <option value="relax">Relax</option>
                                                <option value="sport">Sport</option>
                                                <option value="wellness">Wellness</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-2 col-sm-4">
                                        <div className="form-group">
                                            <input type="text" className="form-control date-picker"
                                                   name="min-price"
                                                   placeholder="Event Date"/>
                                        </div>

                                    </div>
                                    <div className="col-md-1 col-sm-4">
                                        <div className="form-group">
                                            <button type="submit" data-ajax-response="map"
                                                    data-ajax-data-file="assets/external/data_2.php"
                                                    data-ajax-auto-zoom="1"
                                                    className="btn btn-primary pull-right darker"><i
                                                className="fa fa-search"></i>
                                            </button>
                                        </div>

                                    </div>
                                </div>
                                <h4 className="advanced-search-heading">
                                    <a href="#advanced-search-collapse" data-toggle="collapse"
                                       aria-expanded="false"
                                       aria-controls="advanced-search-collapse"
                                       className="font-color-white icon link">Advanced
                                        Search <i className="fa fa-plus"></i></a>
                                </h4>
                                <div className="row collapse" id="advanced-search-collapse">
                                    <div className="col-md-9 col-sm-8">
                                        <ul className="checkboxes">
                                            <li>
                                                <div className="form-group">
                                                    <label className="no-margin"><input type="checkbox"
                                                                                        name="1"/>Hotel</label>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="form-group">
                                                    <label className="no-margin"><input type="checkbox"
                                                                                        name="2"/>Event</label>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="form-group">
                                                    <label className="no-margin"><input type="checkbox"
                                                                                        name="3"/>Restaurant</label>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="form-group">
                                                    <label className="no-margin"><input type="checkbox"
                                                                                        name="4"/>Trip</label>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="form-group">
                                                    <label className="no-margin"><input type="checkbox"
                                                                                        name="5"/>Concert</label>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="form-group">
                                                    <label className="no-margin"><input type="checkbox"
                                                                                        name="6"/>Adrenaline</label>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="form-group">
                                                    <label className="no-margin"><input type="checkbox"
                                                                                        name="6"/>Wellness</label>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="ui-slider" id="price-slider" data-value-min="10"
                                             data-value-max="400"
                                             data-value-type="price" data-currency="$"
                                             data-currency-placement="before">
                                            <div className="values clearfix">
                                                <input className="value-min" name="value-min[]" readOnly/>
                                                <input className="value-max" name="value-max[]" readOnly/>
                                            </div>
                                            <div className="element"></div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>


                <Footer/>
            </div>
        )
    }
}

export default HomeWithMap;