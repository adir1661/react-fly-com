import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import FormSearch from "./FormSearch";
import ChipContainer from "./ChipContainer";
import "./ourSearch.css";
import ReactDOM from "react-dom";

let optionsSelect = ["Antenna's Intergity", "Cabels Integrity", "Connectors Tightness", "Unwanted Cabels", "Monitor Lightness", "Blocking", "Antenna's Stickers"];
let antennas=[];
let reports=[];
class Search extends Component {
    constructor(props) {
        super(props);
        //this.formSearchElement = React.createRef();
        //this.chipSearchElement = React.createRef();
        this.submit = this.submit.bind(this);
        this.initSearchData = this.initSearchData.bind(this);
        this.state = {
            antennas :[],
            filterOptions: optionsSelect.slice(0),
            searchObjects: [],
            chipsNames: [],
            antennasRes:'',
            reportsSearchRes:[],
            reports:[],
            inputValue:'',
        };
        this.updateSearch = this.updateSearch.bind(this);
        this.takeCareDeleteChip = this.takeCareDeleteChip.bind(this);
        this.removeFilter = this.removeFilter.bind(this);
        this.getCategory = this.getCategory.bind(this);
        this.deleteChip = this.deleteChip.bind(this);
        this.removeSearchObjects = this.removeSearchObjects.bind(this);
        this.searchPressed = this.searchPressed.bind(this);
        this.fit = this.fit.bind(this);
        this.checkIfAddresFit=this.checkIfAddresFit.bind(this);

    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        // //Only if the search update
        // if (this.state.needInit) {
        //     window.initSliders();
        //     //window.refreshSelect();
        // }
        // this.state.needInit = false;
        window.updateAfterSearch();
    }

    searchPressed() {
        var address = document.getElementsByClassName('address-filter')[0].value;
        var title="",from="",to="";
         if(typeof document.getElementsByClassName('report-title-filter')[0] !=='undefined'){
         title = document.getElementsByClassName('report-title-filter')[0].value;
         from = document.getElementsByClassName('from-filter')[0].value;
         to = document.getElementsByClassName('to-filter')[0].value;
         console.log("in");
         }
        var antennasResult=[];

        var searchObj={address:address,
        title:title,
        from:from,
        to:to,
        categories: this.state.searchObjects}
        antennas.forEach((aItem)=>{
            if(this.fit(aItem,searchObj,"antenna")){
                    let obj = JSON.parse(JSON.stringify(aItem));
                    antennasResult.push(obj);
            }

        });

        this.setState({
            antennasRes:antennasResult.slice(0)
        });
    }
    checkIfAddresFit(currentObject,ourObject,type){
        return (ourObject.address==="" || currentObject.address.toLowerCase().includes(ourObject.address.toLowerCase()));
    }
    fit(currentObject,ourObject,type){
        if(type==="antenna"){
            if(this.checkIfAddresFit(currentObject,ourObject)) {
                return true
            }
            return false;
        }
        else if(type==="report"){

        }
        return false
    }
    removeElementFromList(list, element) {
        var index = list.indexOf(element);
        if (index > -1) {
            list.splice(index, 1);
        }
    }


    getCategory(names) {
        let result = "";
        optionsSelect.forEach(function (element) {
            if (names.includes(element.replace(" ", "-").toLowerCase().replace("'", ""))) {
                result = element;
            }
        });
        return result;
    }

    initSearchData() {
        fetch("https://0zx2os04v7.execute-api.eu-west-1.amazonaws.com/dev/locations").then(response => (response.json())).then(sites => {
            this.setState({antennas:sites});
            console.log("sites", sites);
        });
        // fetch("https://a3j3kyatgb.execute-api.eu-west-1.amazonaws.com/dev/reports").then(response=>(response.json())).then(reps=>{
        // reports=reps.slice(0);
        //  console.log("reports",reports);
        // });

    }

    deleteChip(name) {
        var chips = this.state.chipsNames.slice(0);
        this.removeElementFromList(chips, name);
        this.setState({
            chipsNames: chips
        });
        //this.chipSearchElement.current.updateChips(chips.slice(0));
    }

    addFilter(name) {
        let filter = [];
        if (this.state.filterOptions.length !== 0) {
            filter = this.state.filterOptions.slice(0);
        }
        filter.push(name);
        this.setState({filterOptions: filter.slice(0)});
        //this.formSearchElement.current.searchUpdateFilter(filter.slice(0));
    }

    takeCareDeleteChip(name) {
        this.deleteChip(name);
        this.addFilter(name);
        this.removeSearchObjects(name);

    }

    removeSearchObjects(name) {
        var searchObjects = this.state.searchObjects.slice(0);
        var result = [];
        var classN = name.replace(" ", "-").replace("'", "").toLowerCase();
        searchObjects.forEach((item) => {
            let obj = JSON.parse(JSON.stringify(item));
            if (classN !== obj.className) {
                result.push(obj);
            }
        });
        this.setState({
            searchObjects: result.slice(0)
        });
    }

    removeFilter(name) {
        var filter = this.state.filterOptions.slice(0);
        this.removeElementFromList(filter, this.getCategory(name));
        this.setState({
            filterOptions: filter.slice(0)
        });
       // this.formSearchElement.current.searchUpdateFilter(Array.from(filter.slice(0)));
    }

    updateSearch(element) {
        let obj = JSON.parse(JSON.stringify(element));
        let chips = [];
        let myObjects = [];
        if (this.state.searchObjects.length !== 0) {
            myObjects = this.state.searchObjects.slice(0);
            chips = this.state.chipsNames.slice(0);
        }
        myObjects.push(obj);
        chips.push(this.getCategory(element.className));
        this.setState({
            searchObjects: myObjects.slice(0),
            chipsNames: chips.slice(0)
        });
        //this.chipSearchElement.current.updateChips(chips.slice(0));

    }

    submit(e) {
        e.preventDefault();
    }

    componentDidMount() {
        if (this.props.isMainScritsLoaded === false) {
            document.addEventListener('initializeScripts', (event) => {
                const ourScripts = "assets/js/temp.js";
                let script;
                script = document.createElement("script");
                script.src = ourScripts;
                document.body.appendChild(script);
                script.onload = () => {
                    window.refreshSelect();
                    this.initSearchData();
                };
                document.removeEventListener('initializeScripts', event);
            });
        } else {
            const ourScripts = "assets/js/temp.js";
            let script;
            script = document.createElement("script");
            script.src = ourScripts;
            document.body.appendChild(script);
            script.onload = () => {
                window.refreshSelect();

            };
        }
    }
    mainSearch(ev){
        let text = ev.target.value;
        console.log(text);
        this.setState({inputValue: text});
    }
    filterByInput(site){
        let input = this.state.inputValue.toLowerCase();
        return site.address.toLowerCase().includes(input)||site.title.toLowerCase().includes(input);
    }
    render() {
        let searchElements;
        if (this.state.antennas.length > 0) {

            searchElements = <section className="search-elements">
                {this.state.antennas.filter(this.filterByInput.bind(this)).map((item, i) => {
                    return <div key={"anntena_" + item.id} id={item.title.replace(" ", "").toLowerCase()}
                                className={"item item-row "} data-id={item.id}
                                data-latitude={item.latitude}
                                data-longitude={item.longitude}>
                        <a href={'/#'+item.id}>
                            <div className="image bg-transfer">
                                <figure>{item.address}</figure>
                                <img src={item.marker_image} alt=""/>
                            </div>
                            {/*end image*/}
                            <div className="map"></div>
                            <div className="description">
                                <h3 className="address">{item.title}</h3>
                                <h4 className="description-anntena">{item.description?item.description.length>120?item.description.slice(0,120)+'...':item.description:"No desctiprtion for this Site.."}</h4>
                                <div className="label label-default">{item.type.replace("-"," ")}</div>
                            </div>
                            {/*end description*/}
                            <div className="additional-info">
                                <div className="rating-passive">
                                    <span className="reviews">{item.reports.length}</span>
                                </div>
                            </div>
                            {/*end additional-info*/}
                        </a>
                        {/*<div className="controls-more">*/}
                            {/*<ul>*/}
                                {/*<li><a href="#">Add to favorites</a></li>*/}
                                {/*<li><a href="#">Add to watchlist</a></li>*/}
                                {/*<li><a href="#" className="quick-detail">Quick detail</a></li>*/}
                            {/*</ul>*/}
                        {/*</div>*/}
                        {/*end controls-more*/}
                    </div>
                })}
            </section>
        }
        return (<div>
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
                                    <FormSearch update={this.updateSearch} filterOptions={this.state.filterOptions} change={this.searchPressed} removeFilter={this.removeFilter}/>

                                    {/*<section>*/}
                                        {/*<h2>Recent Items</h2>*/}
                                        {/*<div className="item" data-id="1">*/}
                                            {/*<a href="client/detail.html">*/}
                                                {/*<div className="description">*/}
                                                    {/*<figure>Average Price: $8 - $30</figure>*/}
                                                    {/*<div className="label label-default">Restaurant</div>*/}
                                                    {/*<h3>Marky’s Restaurant</h3>*/}
                                                    {/*<h4>63 Birch Street</h4>*/}
                                                {/*</div>*/}
                                                {/*/!*end description*!/*/}
                                                {/*<div className="image bg-transfer">*/}
                                                    {/*<img src="assets/img/antenna5.jpg" alt=""/>*/}
                                                {/*</div>*/}
                                                {/*/!*end image*!/*/}
                                            {/*</a>*/}
                                            {/*<div className="controls-more">*/}
                                                {/*<ul>*/}
                                                    {/*<li><a href="#">Add to favorites</a></li>*/}
                                                    {/*<li><a href="#">Add to watchlist</a></li>*/}
                                                    {/*<li><a href="#" className="quick-detail">Quick detail</a></li>*/}
                                                {/*</ul>*/}
                                            {/*</div>*/}
                                        {/*</div>*/}
                                        {/*/!*end item*!/*/}
                                        {/*<div className="item" data-id="2">*/}
                                            {/*<a href="client/detail.html">*/}
                                                {/*<div className="description">*/}
                                                    {/*<div className="label label-default">Restaurant</div>*/}
                                                    {/*<h3>Ironapple</h3>*/}
                                                    {/*<h4>4209 Glenview Drive</h4>*/}
                                                {/*</div>*/}
                                                {/*/!*end description*!/*/}
                                                {/*<div className="image bg-transfer">*/}
                                                    {/*<img src="assets/img/antenna5.jpg" alt=""/>*/}
                                                {/*</div>*/}
                                                {/*/!*end image*!/*/}
                                            {/*</a>*/}
                                            {/*<div className="controls-more">*/}
                                                {/*<ul>*/}
                                                    {/*<li><a href="#">Add to favorites</a></li>*/}
                                                    {/*<li><a href="#">Add to watchlist</a></li>*/}
                                                    {/*<li><a href="#" className="quick-detail">Quick detail</a></li>*/}
                                                {/*</ul>*/}
                                            {/*</div>*/}
                                            {/*/!*end controls-more*!/*/}
                                        {/*</div>*/}
                                        {/*/!*end item*!/*/}
                                        {/*<div className="item" data-id="15">*/}
                                            {/*<figure className="ribbon">Top</figure>*/}
                                            {/*<a href="client/detail.html">*/}
                                                {/*<div className="description">*/}
                                                    {/*<figure>Happy hour: 18:00 - 19:00</figure>*/}
                                                    {/*<div className="label label-default">Bar & Grill</div>*/}
                                                    {/*<h3>Bambi Planet Houseboat Bar& Grill </h3>*/}
                                                    {/*<h4>3857 Losh Lane</h4>*/}
                                                {/*</div>*/}
                                                {/*/!*end description*!/*/}
                                                {/*<div className="image bg-transfer">*/}
                                                    {/*<img src="assets/img/antenna5.jpg" alt=""/>*/}
                                                {/*</div>*/}
                                                {/*/!*end image*!/*/}
                                            {/*</a>*/}
                                            {/*<div className="controls-more">*/}
                                                {/*<ul>*/}
                                                    {/*<li><a href="#">Add to favorites</a></li>*/}
                                                    {/*<li><a href="#">Add to watchlist</a></li>*/}
                                                    {/*<li><a href="#" className="quick-detail">Quick detail</a></li>*/}
                                                {/*</ul>*/}
                                            {/*</div>*/}
                                            {/*/!*end controls-more*!/*/}
                                        {/*</div>*/}
                                        {/*/!*end item*!/*/}
                                    {/*</section>*/}
                                </aside>
                                {/*end sidebar*/}
                            </div>
                            {/*end col-md-4*/}

                            <div className="col-md-9 col-sm-9">
                                <section className="page-title">
                                    <h1 className="head-search-title">Search Sites</h1>
                                    <div className="form-group">
                                        <input type="text" className="form-control address-filter"
                                               name="keyword"
                                               placeholder="antenna address" onChange={(ev)=>{this.mainSearch.bind(this)(ev)}}/>
                                    </div>
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

                                    <ChipContainer chips={this.state.chipsNames} update={this.takeCareDeleteChip}/>

                                </section>
                                {searchElements}
                                <section>
                                    <div className="center">
                                        <nav aria-label="Page navigation">
                                            <ul className="pagination">
                                                {this.state.isntFirstPage?<li className="disabled previous">
                                                    <a href="#" aria-label="Previous">
                                                        <i className="arrow_left"></i>
                                                    </a>
                                                </li>:''}
                                                <li className="active"><a href="#">1</a></li>
                                                <li><a href="#">2</a></li>
                                                <li><a href="#">3</a></li>
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
            </div>
            <a href="#" className="to-top scroll" data-show-after-scroll="600"><i className="arrow_up"></i></a>
        </div>);
    }
}

export default Search;
