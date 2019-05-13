import React ,{Component} from 'react';
import { Link } from 'react-router-dom';


import logo from './logo.svg';
import './App.css';

class ScriptCache {
  constructor(scripts) {}
  onLoad(success, reject) {}
}
const cache = new ScriptCache([
  'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0-beta1/jquery.js',
  'https://cdnjs.com/some/library.js'
]).onLoad(() => {
  // everything is loaded after here
})
class  App extends Component
{
  componentDidMount() {

    console.log(new Date().toLocaleTimeString())
    const ourScripts =["assets/js/jquery-2.2.1.min.js",
      "http://maps.google.com/maps/api/js?key=AIzaSyCcw1r0WeZoTGxZDNR8ryrhHf37okOpp_U&libraries=places",
      "assets/js/jquery-migrate-1.2.1.min.js",
      "assets/js/jquery.nouislider.all.min.js","assets/bootstrap/js/bootstrap.min.js","assets/js/bootstrap-select.min.js",
      "assets/js/bootstrap-slider.min.js",
      "assets/js/richmarker-compiled.js",
      "assets/js/markerclusterer_packed.js",
      "assets/js/infobox.js",
      "assets/js/jquery.validate.min.js",
      "assets/js/jquery.fitvids.js",
      "assets/js/moment.js",
      "assets/js/bootstrap-datetimepicker.min.js",
      "assets/js/icheck.min.js",
      "assets/js/owl.carousel.min.js","assets/js/ourMain.js","assets/js/maps.js","assets/js/custom.js","assets/js/temp.js"]
    //const script =[];
    let insertScript =  function(srcs,i,cb){
      let script;
      script= document.createElement("script");
      script.src = srcs[i];
      //script[i].async = true;
      document.body.appendChild(script);
      console.log(script);
      console.log("before");
      script.onload = () => { if (i<ourScripts.length-1){insertScript(srcs,i+1,cb)}
      else {cb();}};
    }
    for (let i=0; i<ourScripts.length;i++){}
    insertScript(ourScripts,0, this.scriptLoaded);

    //script[ourScripts.length-1].onload = () => this.scriptLoaded();
  }
  scriptLoaded() {
    console.log(new Date().toLocaleTimeString())
    var optimizedDatabaseLoading = 0;
    var _latitude = 40.7344458;
    var _longitude = -73.86704922;
    var element = "map-homepage";
    var markerTarget = "modal"; // use "sidebar", "infobox" or "modal" - defines the action after click on marker
    var sidebarResultTarget = "sidebar"; // use "sidebar", "modal" or "new_page" - defines the action after click on marker
    var showMarkerLabels = true; // next to every marker will be a bubble with title
    var mapDefaultZoom = 14; // default zoom
    window.heroMap(_latitude, _longitude, element, markerTarget, sidebarResultTarget, showMarkerLabels, mapDefaultZoom);

  }
  render() {
    return (

        <div className="App">

          <div className="page-wrapper">
            <header data-component="Header" id="page-header">
              <nav data-component="Navbar">
                <div className="left">
                  <a href="index.html" className="brand"><img className="logo-icon"
                                                              src="/assets/img/logo/logo-13.png"
                                                              alt=""/><img className="logo-text"
                                                                           src="../public/assets/img/logo/logo-14.png"
                                                                           alt=""/></a>
                </div>

                <div className="right">
                  <div className="primary-nav has-mega-menu">
                    <ul className="navigation">
                      <li><a href="contact.html">Contact</a></li>
                    </ul>
                  </div>
                  <div className="secondary-nav">
                    <a href="#" data-modal-external-file="modal_sign_in.php" data-target="modal-sign-in">Sign In</a>
                    <a href="#" className="promoted" data-modal-external-file="modal_register.php"
                       data-target="modal-register">Register</a>
                  </div>
                  <div className="third-nav">

                    <a className="search-nav" href="search-main.html">Search</a>
                    <Link to={`search`} activeClassName="active">my search</Link>
                  </div>
                  <a href="#" className="btn btn-primary btn-small btn-rounded icon shadow add-listing"
                     data-modal-external-file="modal_submit.php" data-target="modal-submit">
                    <i
                        className="fa fa-plus"></i>
                    <span>Add Antenna</span>
                  </a>
                  <div className="nav-btn">
                    <i></i>
                    <i></i>
                    <i></i>
                  </div>
                </div>
              </nav>
            </header>

            <div id="page-content">
              <div className="hero-section full-screen has-map" data-component="MapWrapperContainer">
                <div className="map-wrapper" data-component="MapWrapper">
                  <div className="geo-location">
                    <i className="fa fa-map-marker"></i>
                  </div>
                  <div className="map" id="map-homepage"></div>
                </div>
                <div className="form search-form horizontal position-bottom inputs-dark" data-component="SearchForm">
                  <div className="container">
                    <form>
                      <div className="row">
                        <div className="col-md-3 col-sm-2">
                          <div className="form-group">
                            <input type="text" className="form-control" name="keyword" placeholder="Enter keyword"/>
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
                          // end form-group
                        </div>
                        <div className="col-md-2 col-sm-4">
                          <div className="form-group">
                            <input type="text" className="form-control date-picker" name="min-price"
                                   placeholder="Event Date"/>
                          </div>

                        </div>
                        <div className="col-md-1 col-sm-4">
                          <div className="form-group">
                            <button type="submit" data-ajax-response="map"
                                    data-ajax-data-file="assets/external/data_2.php" data-ajax-auto-zoom="1"
                                    className="btn btn-primary pull-right darker"><i className="fa fa-search"></i>
                            </button>
                          </div>

                        </div>
                      </div>
                      <h4 className="advanced-search-heading">
                        <a href="#advanced-search-collapse" data-toggle="collapse" aria-expanded="false"
                           aria-controls="advanced-search-collapse" className="font-color-white icon link">Advanced
                          Search <i className="fa fa-plus"></i></a>
                      </h4>
                      <div className="row collapse" id="advanced-search-collapse">
                        <div className="col-md-9 col-sm-8">
                          <ul className="checkboxes">
                            <li>
                              <div className="form-group">
                                <label className="no-margin"><input type="checkbox" name="1"/>Hotel</label>
                              </div>
                              // end form-group
                            </li>
                            <li>
                              <div className="form-group">
                                <label className="no-margin"><input type="checkbox" name="2"/>Event</label>
                              </div>
                              // end form-group
                            </li>
                            <li>
                              <div className="form-group">
                                <label className="no-margin"><input type="checkbox" name="3"/>Restaurant</label>
                              </div>
                              // end form-group
                            </li>
                            <li>
                              <div className="form-group">
                                <label className="no-margin"><input type="checkbox" name="4"/>Trip</label>
                              </div>
                              // end form-group
                            </li>
                            <li>
                              <div className="form-group">
                                <label className="no-margin"><input type="checkbox" name="5"/>Concert</label>
                              </div>
                              // end form-group
                            </li>
                            <li>
                              <div className="form-group">
                                <label className="no-margin"><input type="checkbox" name="6"/>Adrenaline</label>
                              </div>
                              // end form-group
                            </li>
                            <li>
                              <div className="form-group">
                                <label className="no-margin"><input type="checkbox" name="6"/>Wellness</label>
                              </div>
                              // end form-group
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-2">
                          <div className="ui-slider" id="price-slider" data-value-min="10" data-value-max="400"
                               data-value-type="price" data-currency="$" data-currency-placement="before">
                            <div className="values clearfix">
                              <input className="value-min" name="value-min[]" readOnly/>
                              <input className="value-max" name="value-max[]" readOnly/>
                            </div>
                            <div className="element"></div>
                          </div>
                          //end price-slider
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>


              <footer data-component="Footer" id="page-footer">
                <div className="footer-wrapper">
                  <div className="block">
                    <div className="container">
                      <div className="vertical-aligned-elements">
                        <div className="element width-50">
                          <p data-toggle="modal" data-target="#myModal">Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Quisque aliquam at neque sit amet vestibulum. <a href="#">Terms of
                              Use</a> and <a href="#">Privacy Policy</a>.</p>
                        </div>
                        <div className="element width-50 text-align-right">
                          <a href="#" className="circle-icon"><i className="social_twitter"></i></a>
                          <a href="#" className="circle-icon"><i className="social_facebook"></i></a>
                          <a href="#" className="circle-icon"><i className="social_youtube"></i></a>
                        </div>
                      </div>
                      <div className="background-wrapper">
                        <div className="bg-transfer opacity-50">
                          <img src="../public/assets/img/footer-bg.png" alt=""/>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="footer-navigation">
                    <div className="container">
                      <div className="vertical-aligned-elements">
                        <div className="element width-50">(C) 2016 Your Company, All right reserved</div>
                        <div className="element width-50 text-align-right">
                          <a href="index.html">Home</a>
                          <a href="listing-grid-right-sidebar.html">Listings</a>
                          <a href="submit.html">Submit Item</a>
                          <a href="contact.html">Contact</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </footer>
            </div>
          </div>
          <a href="#" className="to-top scroll" data-show-after-scroll="600"><i className="arrow_up"></i></a>

        </div>
    );
  }
}

export default App;
