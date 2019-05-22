import React ,{Component} from 'react';
import { Link } from 'react-router-dom';
import "./ourSearch.css";
class Search extends Component{
    test(){
        fetch("https://a3j3kyatgb.execute-api.eu-west-1.amazonaws.com/dev/locations").then(response=>(response.json())).then(sites=>{
            console.log(sites);
            console.log(window.locations);
        });
    }
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
        this.test= this.test.bind(this);
    }
    submit(e){
        e.preventDefault();
    }
    componentDidMount() {
        console.log('here');
        document.addEventListener('initializeScripts moveToSearch',(event)=> {
            const ourScripts = "assets/js/temp.js";
            let script;
            script = document.createElement("script");
            script.src = ourScripts;
            document.body.appendChild(script);
            script.onload = () => {
                window.refreshSelect();
                this.test();
            };
            document.removeEventListener('initializeScripts', event);
        });

    }
    render(){
        return(<div>
            <div className="page-wrapper">
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
                                              onSubmit={this.submit}>
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
                                                        className="btn btn-primary pull-right search-button" >
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
