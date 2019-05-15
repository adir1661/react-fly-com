import React ,{Component} from 'react';
import { Link } from 'react-router-dom';

class Search extends Component{

    constructor(props) {
        super(props);
    }
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
    render(){
        return(<div>
            <div className="page-wrapper">
                <header id="page-header">
                    <nav>
                        <div className="left">
                            <a href="client/index.html" className="brand"><img src="assets/img/logo.png" alt=""/></a>
                        </div>
                        {/*// end lef*/}
                        <div className="right">
                            <div className="primary-nav has-mega-menu">
                                <ul className="navigation">
                                    <li className="active has-child"><a href="#nav-homepages">Home</a>
                                        <div className="wrapper">
                                            <div id="nav-homepages" className="nav-wrapper">
                                                <ul>
                                                    <li><a href="client/index-map-version-1.html">z</a></li>
                                                    <li><a href="client/index-map-version-2.html">Map Horizontal
                                                        Form</a></li>
                                                    <li><a href="client/index-map-version-3.html">Map Full Screen Form
                                                        in Sidebar</a></li>
                                                    <li><a href="client/index-map-version-4.html">Map Form Under</a>
                                                    </li>
                                                    <li><a href="client/index-map-version-5.html">Map Sidebar Grid</a>
                                                    </li>
                                                    <li><a href="client/index-map-version-6.html">Map Full Screen
                                                        Collapse Form</a></li>
                                                    <li><a href="client/index-hero-version-1.html">Hero One Input
                                                        Form</a></li>
                                                    <li><a href="client/index-hero-version-2.html">Hero Multiple
                                                        Inputs</a></li>
                                                    <li><a href="client/index-hero-version-3.html">Hero Form Under</a>
                                                    </li>
                                                    <li><a href="client/index-hero-version-4.html">Hero Full Screen
                                                        Slider</a></li>
                                                    <li><a href="client/index-hero-version-5.html">Hero Coupon
                                                        Slider</a></li>
                                                    <li><a href="client/index-hero-version-6.html">Hero Interactive
                                                        Slider</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="has-child"><a href="#nav-listing">Listing</a>
                                        <div className="wrapper">
                                            <div id="nav-listing" className="nav-wrapper">
                                                <ul>
                                                    <li className="has-child"><a href="#nav-grid-listing">Grid
                                                        Listing</a>
                                                        <div id="nav-grid-listing" className="nav-wrapper">
                                                            <ul>
                                                                <li><a href="client/listing-grid-right-sidebar.html">With
                                                                    Right Sidebar</a>
                                                                </li>
                                                                <li><a href="client/listing-grid-left-sidebar.html">With
                                                                    Left Sidebar</a>
                                                                </li>
                                                                <li><a href="client/listing-grid-full-width.html">Full
                                                                    Width</a></li>
                                                                <li><a href="client/listing-grid-different-widths.html">Different
                                                                    Widths</a></li>
                                                                <li><a href="client/listing-grid-3-items.html">3 Items
                                                                    in Row</a></li>
                                                                <li><a href="client/listing-grid-4-items.html">4 Items
                                                                    in Row</a></li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                    <li className="has-child"><a href="#nav-row-listing">Row Listing</a>
                                                        <div id="nav-row-listing" className="nav-wrapper">
                                                            <ul>
                                                                <li><a href="client/listing-row-right-sidebar.html">Row
                                                                    Right Sidebar</a>
                                                                </li>
                                                                <li><a href="client/listing-row-left-sidebar.html">Row
                                                                    Left Sidebar</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>

                                    <li className="mega-menu-parent has-child"><a href="#nav-pages">Pages</a>
                                        <div className="wrapper">
                                            <div className="mega-menu">
                                                <div className="nav-wrapper" id="nav-pages">
                                                    <div className="container">
                                                        <div className="row">
                                                            <div className="col-md-3 col-sm-3">
                                                                <h4 className="heading">General</h4>
                                                                <ul>
                                                                    <li><a href="client/faq.html">Faq</a></li>
                                                                    <li><a href="client/pricing.html">Pricing</a></li>
                                                                    <li><a href="client/submit.html">Submit Listing</a>
                                                                    </li>
                                                                    <li><a href="client/detail.html">Listing Detail</a>
                                                                    </li>
                                                                    <li><a href="client/detail-2.html">Listing Detail
                                                                        v2</a></li>
                                                                    <li><a href="client/agents-listing.html">Agents
                                                                        Listing</a></li>
                                                                    <li><a href="client/agent-detail.html">Agent
                                                                        Detail</a></li>
                                                                </ul>
                                                            </div>
                                                            {/*end col-md-3*/}
                                                            <div className="col-md-3 col-sm-3">
                                                                <h4 className="heading">User</h4>
                                                                <ul>
                                                                    <li><a href="client/profile.html">Profile Edit</a>
                                                                    </li>
                                                                    <li><a href="client/sign-in.html">Sign In</a></li>
                                                                    <li><a href="client/register.html">Register</a></li>
                                                                    <li><a href="client/reset-password.html">Reset
                                                                        Password</a></li>
                                                                    <li><a href="client/my-listings.html">My
                                                                        Listings</a></li>
                                                                    <li><a href="client/edit-listing.html">Edit
                                                                        Listing</a></li>
                                                                    <li><a href="client/reviews.html">Reviews</a></li>
                                                                </ul>
                                                            </div>
                                                            {/*end col-md-3*/}
                                                            <div className="col-md-3 col-sm-3">
                                                                <h4 className="heading">Other</h4>
                                                                <ul>
                                                                    <li><a href="client/elements.html">Elements /
                                                                        Shortcodes</a></li>
                                                                    <li><a href="client/404.html">404 Error Page</a>
                                                                    </li>
                                                                    <li><a href="client/sticky-footer.html">Sticky
                                                                        Footer</a></li>
                                                                    <li><a href="client/terms-and-conditions.html">Terms
                                                                        & Conditions</a>
                                                                    </li>
                                                                    <li><a href="client/grid-system.html">Grid
                                                                        System</a></li>
                                                                    <li><a href="client/how-it-works.html">How it
                                                                        Works</a></li>
                                                                    <li><a href="client/rtl.html">RTL Support</a></li>
                                                                </ul>
                                                            </div>
                                                            {/*end col-md-3*/}
                                                            <div className="col-md-3 col-sm-3">
                                                                <div className="image center overlay">
                                                                    <div className="vertical-aligned-elements">
                                                                        <div className="element">
                                                                            <a href="#"
                                                                               className="btn btn-default btn-framed">Submit
                                                                                Your Listing</a>
                                                                        </div>
                                                                    </div>
                                                                    <div className="bg-transfer"><img
                                                                        src="assets/img/items/10.jpg"
                                                                        alt=""/></div>
                                                                </div>
                                                            </div>
                                                            {/*end col-md-3*/}
                                                        </div>
                                                        {/*end row*/}
                                                    </div>
                                                    {/*end container*/}
                                                </div>
                                                {/*end collapse*/}
                                            </div>
                                            {/*end wrapper*/}
                                        </div>
                                        {/*end mega-menu*/}
                                    </li>
                                    <li className="has-child"><a href="#nav-locations">Locations</a>
                                        <div className="wrapper">
                                            <div id="nav-locations" className="nav-wrapper">
                                                <ul>
                                                    <li className="has-child"><a href="#nav-locations-new-york">New
                                                        York</a>
                                                        <div className="nav-wrapper" id="nav-locations-new-york">
                                                            <ul>
                                                                <li className="has-child"><a href="#nav-4">Manhattan</a>
                                                                    <div className="nav-wrapper" id="nav-4">
                                                                        <ul>
                                                                            <li><a href="#">1</a></li>
                                                                            <li><a href="#">2</a></li>
                                                                            <li><a href="#">3</a></li>
                                                                            <li><a href="#">4</a></li>
                                                                        </ul>
                                                                    </div>
                                                                </li>
                                                                <li><a href="#">Brooklyn</a></li>
                                                                <li><a href="#">Staten Island</a></li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                    <li className="has-child"><a href="#nav-5">London</a>
                                                        <div className="nav-wrapper" id="nav-5">
                                                            <ul>
                                                                <li><a href="#">Abbey Wood</a></li>
                                                                <li><a href="#">Bayswater</a></li>
                                                                <li><a href="#">Forestdale</a></li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                    <li className="has-child"><a href="#nav-6">Paris</a>
                                                        <div className="nav-wrapper" id="nav-6">
                                                            <ul>
                                                                <li><a href="#">Louvre</a></li>
                                                                <li><a href="#">Bourse</a></li>
                                                                <li><a href="#">Marais</a></li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            {/*end nav-wrapper*/}
                                        </div>
                                        {/*end wrapper*/}
                                    </li>
                                    <li><a href="client/blog.html">Blog</a></li>
                                    <li><a href="client/contact.html">Contact</a></li>
                                </ul>
                                end navigation
                            </div>
                            {/*end primary-nav*/}
                            <div className="secondary-nav">
                                <a href="#" data-modal-external-file="modal_sign_in.php" data-target="modal-sign-in">Sign
                                    In</a>
                                <a href="#" className="promoted" data-modal-external-file="modal_register.php"
                                   data-target="modal-register">Register</a>
                            </div>
                            {/*end secondary-nav*/}
                            <a href="#" className="btn btn-primary btn-small btn-rounded icon shadow add-listing"
                               data-modal-external-file="modal_submit.php" data-target="modal-submit"><i
                                className="fa fa-plus"></i><span>Add listing</span></a>
                            <div className="nav-btn">
                                <i></i>
                                <i></i>
                                <i></i>
                            </div>
                            {/*end nav-btn*/}
                        </div>
                        {/*end right*/}
                    </nav>
                    end nav
                </header>
                {/*end page-header*/}

                <div id="page-content">
                    <div className="container">
                        <ol className="breadcrumb">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Pages</a></li>
                            <li className="active">Contact</li>
                        </ol>
                        <div className="row">
                            <div className="col-md-3 col-sm-3">
                                <aside className="sidebar">
                                    <section>
                                        <h2>Search Filter</h2>
                                        <form className="form inputs-underline report-search-form"
                                              onSubmit="return false">
                                            <div className="form-group">
                                                <input type="text" className="form-control antenna-address-filter"
                                                       name="keyword"
                                                       placeholder="antenna address"/>
                                            </div>
                                            {/*end form-group*/}
                                            <div className="form-group">
                                                <input type="text" className="form-control report-title-filter"
                                                       name="keyword"
                                                       placeholder="report title"/>
                                            </div>
                                            {/*end form-group*/}
                                            <div className="form-group">
                                                <input type="text" className="form-control date-picker from-filter"
                                                       name="min-price"
                                                       placeholder="from"/>
                                            </div>
                                            {/*end form-group*/}
                                            <div className="form-group">
                                                <input type="text" className="form-control date-picker to-filter"
                                                       name="min-price"
                                                       placeholder="to"/>
                                            </div>
                                            {/*end form-group*/}

                                            <div className="form-group  temp-select">
                                                <br/>
                                                    <select className="form-control selectpicker filter-select"
                                                            name="category">
                                                        <option className="report-option-select" value="">Category
                                                        </option>
                                                        <option className="report-option-select" value="1">Antenna's
                                                            Intergity
                                                        </option>
                                                        <option className="report-option-select" value="2">Cabels
                                                            Integrity
                                                        </option>
                                                        <option className="report-option-select" value="3">Connectors
                                                            Tightness
                                                        </option>
                                                        <option className="report-option-select" value="4">Unwanted
                                                            Cabels
                                                        </option>
                                                        <option className="report-option-select" value="5">Monitor
                                                            Lightness
                                                        </option>
                                                        <option className="report-option-select" value="6">Blocking
                                                        </option>
                                                        <option className="report-option-select" value="7">Antenna's
                                                            Stickers
                                                        </option>
                                                    </select>
                                            </div>


                                            {/*end form-group*/}

                                            <div className="div-button">
                                                <button type="submit"
                                                        className="btn btn-primary pull-right search-button">
                                                    Search<i className="fa fa-search"></i>
                                                </button>
                                            </div>

                                            {/*end form-group*/}
                                        </form>
                                    </section>

                                    <section>
                                        <h2>Recent Items</h2>
                                        <div className="item" data-id="1">
                                            <a href="client/detail.html">
                                                <div className="description">
                                                    <figure>Average Price: $8 - $30</figure>
                                                    <div className="label label-default">Restaurant</div>
                                                    <h3>Marky’s Restaurant</h3>
                                                    <h4>63 Birch Street</h4>
                                                </div>
                                                {/*end description*/}
                                                <div className="image bg-transfer">
                                                    <img src="assets/img/antenna5.jpg" alt=""/>
                                                </div>
                                                {/*end image*/}
                                            </a>
                                            <div className="controls-more">
                                                <ul>
                                                    <li><a href="#">Add to favorites</a></li>
                                                    <li><a href="#">Add to watchlist</a></li>
                                                    <li><a href="#" className="quick-detail">Quick detail</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/*end item*/}
                                        <div className="item" data-id="2">
                                            <a href="client/detail.html">
                                                <div className="description">
                                                    <div className="label label-default">Restaurant</div>
                                                    <h3>Ironapple</h3>
                                                    <h4>4209 Glenview Drive</h4>
                                                </div>
                                                {/*end description*/}
                                                <div className="image bg-transfer">
                                                    <img src="assets/img/antenna5.jpg" alt=""/>
                                                </div>
                                                {/*end image*/}
                                            </a>
                                            <div className="controls-more">
                                                <ul>
                                                    <li><a href="#">Add to favorites</a></li>
                                                    <li><a href="#">Add to watchlist</a></li>
                                                    <li><a href="#" className="quick-detail">Quick detail</a></li>
                                                </ul>
                                            </div>
                                            {/*end controls-more*/}
                                        </div>
                                        {/*end item*/}
                                        <div className="item" data-id="15">
                                            <figure className="ribbon">Top</figure>
                                            <a href="client/detail.html">
                                                <div className="description">
                                                    <figure>Happy hour: 18:00 - 19:00</figure>
                                                    <div className="label label-default">Bar & Grill</div>
                                                    <h3>Bambi Planet Houseboat Bar& Grill </h3>
                                                    <h4>3857 Losh Lane</h4>
                                                </div>
                                                {/*end description*/}
                                                <div className="image bg-transfer">
                                                    <img src="assets/img/antenna5.jpg" alt=""/>
                                                </div>
                                                {/*end image*/}
                                            </a>
                                            <div className="controls-more">
                                                <ul>
                                                    <li><a href="#">Add to favorites</a></li>
                                                    <li><a href="#">Add to watchlist</a></li>
                                                    <li><a href="#" className="quick-detail">Quick detail</a></li>
                                                </ul>
                                            </div>
                                            {/*end controls-more*/}
                                        </div>
                                        {/*end item*/}
                                    </section>
                                </aside>
                                {/*end sidebar*/}
                            </div>
                            {/*end col-md-4*/}

                            <div className="col-md-9 col-sm-9">
                                <section className="page-title">
                                    <h1 className="head-search-title"></h1>
                                </section>
                                {/*end section-title*/}

                                <section>
                                    <div className="search-results-controls clearfix">
                                        <div className="pull-left">
                                            {/*<a href="listing-row-right-sidebar.html" class="circle-icon active">antennas</a>*/}
                                            <button type="submit"
                                                    className="btn btn-primary btn-rounded search-antennas">antennas
                                            </button>
                                            <button type="submit"
                                                    className="btn btn-primary btn-rounded search-reports">reports
                                            </button>
                                        </div>
                                        {/*end left*/}
                                        <div className="pull-right">
                                            <div className="input-group inputs-underline min-width-150px">
                                                <select className="form-control selectpicker" name="sort">
                                                    <option value="">Sort by</option>
                                                    <option value="1">Price</option>
                                                    <option value="2">Distance</option>
                                                    <option value="3">Title</option>
                                                </select>
                                            </div>
                                        </div>
                                        {/*end right*/}
                                    </div>
                                    {/*end search-results-controls*/}
                                </section>
                                <section>
                                    <div className="chip-container">
                                    </div>
                                </section>
                                <section className="search-elements">

                                </section>
                                <section>
                                    <div className="center">
                                        <nav aria-label="Page navigation">
                                            <ul className="pagination">
                                                <li className="disabled previous">
                                                    <a href="#" aria-label="Previous">
                                                        <i className="arrow_left"></i>
                                                    </a>
                                                </li>
                                                <li><a href="#">1</a></li>
                                                <li><a href="#">2</a></li>
                                                <li className="active"><a href="#">3</a></li>
                                                <li><a href="#">4</a></li>
                                                <li><a href="#">5</a></li>
                                                <li className="next">
                                                    <a href="#" aria-label="Next">
                                                        <i className="arrow_right"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </section>
                            </div>
                            {/*end col-md-9*/}
                        </div>
                        {/*end row*/}
                    </div>
                    {/*end container*/}
                </div>
                {/*end page-content*/}

                <footer id="page-footer">
                    <div className="footer-wrapper">
                        <div className="block">
                            <div className="container">
                                <div className="vertical-aligned-elements">
                                    <div className="element width-50">
                                        <p data-toggle="modal" data-target="#myModal">Lorem ipsum dolor sit amet,
                                            consectetur
                                            adipiscing elit. Quisque aliquam at neque sit amet vestibulum. <a href="#">Terms
                                                of
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
                                        <img src="assets/img/footer-bg.png" alt=""/>
                                    </div>
                                </div>
                                {/*end background-wrapper*/}
                            </div>
                        </div>
                        <div className="footer-navigation">
                            <div className="container">
                                <div className="vertical-aligned-elements">
                                    <div className="element width-50">(C) 2016 Your Company, All right reserved</div>
                                    <div className="element width-50 text-align-right">
                                        <a href="client/index.html">Home</a>
                                        <a href="client/listing-grid-right-sidebar.html">Listings</a>
                                        <a href="client/submit.html">Submit Item</a>
                                        <a href="client/contact.html">Contact</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                end page-footer
            </div>
            end page-wrapper
            <a href="#" className="to-top scroll" data-show-after-scroll="600"><i className="arrow_up"></i></a>
        </div>);
    }
}
export default Search;
