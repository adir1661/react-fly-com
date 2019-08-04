import React ,{Component} from 'react';
import Select from "../react-wrappers/Select";
import {withTranslation} from "react-i18next";

class MapSearchFormNoTrans extends Component{
    constructor(props){
        super(props);
    }
    render(){
        let {t} = this.props;
        return(
            <div className="form search-form horizontal position-bottom inputs-dark"
                 data-component="SearchForm">
                <div className="container">
                    <form>
                        <div className="row">
                            <div className="col-md-3 col-sm-2">
                                <div className="form-group">
                                    <input type="text" className="form-control" name="keyword"
                                           placeholder={t('enter_keyword')}/>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-4">
                                <div className="form-group">
                                    <Select className="form-control selectpicker" name="location">
                                        <option value="">Location</option>
                                        <option value="jerusalem">Jerusalem</option>
                                        <option value="tel-aviv">Tel-Aviv</option>
                                        <option value="beer-sheva">Be'er Sheva</option>
                                        <option value="haifa">Haifa</option>
                                    </Select>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-4">
                                <div className="form-group">
                                    <Select className="form-control selectpicker" name="category">
                                        <option value="">Site Type</option>
                                        <option value="Rooftop-Site">Rooftop Site</option>
                                        <option value="Cell-Tower-Site">Cell Tower Site</option>
                                        <option value="Small-Cell">Small Cell</option>
                                        <option value="Outdoor-DAS">Outdoor DAS</option>
                                        <option value="Indoor-DAS">Indoor DAS</option>
                                    </Select>
                                </div>
                            </div>
                            <div className="col-md-2 col-sm-4">
                                {/*<div className="form-group">*/}
                                {/*<input type="text" className="form-control date-picker"*/}
                                {/*name="min-price"*/}
                                {/*placeholder="Event Date"/>*/}
                                {/*</div>*/}

                            </div>
                            <div className="col-md-1 col-sm-4">
                                <div className="form-group">
                                    <button type="submit" data-ajax-response="map"
                                            data-ajax-data-file="assets/external/data_2.php"
                                            data-ajax-auto-zoom="1"
                                            className="btn btn-primary pull-right darker">
                                        <i className="fa fa-search"></i>
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
            </div>)
    }
}
let MapSearchForm = withTranslation()(MapSearchFormNoTrans);
export default MapSearchForm;