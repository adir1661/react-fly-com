import React, {Component} from "react";
import $ from 'jquery';
import * as ReactDOM from "react-dom";


// const $ = window.$;
//
let optionsSelect = ["Antenna's Intergity", "Cabels Integrity", "Connectors Tightness", "Unwanted Cabels", "Monitor Lightness", "Blocking", "Antenna's Stickers"];
let filterOptionsStatus = ["Stable", "Problematic"];

class FormSearch extends Component {

    addPress(name) {

        var className = this.state.currentName;
        var status="";
        if(this.state.currentCategoryStatus.toLowerCase()!=="status"){
         status = this.state.currentCategoryStatus;
        }
        var min = document.getElementsByClassName('value-min')[0].value;
        var max = document.getElementsByClassName('value-max')[0].value;
        var issueName = document.getElementsByClassName('report-num-filter')[0].value;
        var element = {
            className: className,
            status: status,
            rating: {min: min, max: max},
            issueName: issueName,
        };
        this.props.update(element);
        this.setState({
            currentName: "",
            disabled: false,
            needInit: false,
            currentCategoryStatus: "Status",
            placeholderIfHave: "bs-placeholder",
            currentCategory: "Add category"

        });

    }

    removePress(name) {

    }

    selectChangedStatus(e) {
        var selected = e.currentTarget.className;
        this.setState({
            currentCategoryStatus: selected,
        });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        // If we have a snapshot value, we've just added new items.
        // Adjust scroll so these new items don't push the old ones out of view.
        // (snapshot here is the value returned from getSnapshotBeforeUpdate)
        if (this.state.needInit) {
            window.initSliders();
            //window.refreshSelect();
        }
        this.state.needInit = false;
    }

    removeElementFromList(list, element) {
        var index = list.indexOf(element);
        if (index > -1) {
            list.splice(index, 1);
        }

    }

    initSlider(value) {
        let sliderClassName = "." + "slider-" + value;
        if ($(sliderClassName).length > 0) {
            $(sliderClassName).each(function () {
                if ($("body").hasClass("rtl")) var rtl = "rtl";
                else rtl = "ltr";
                var step;
                if ($(this).attr('data-step')) {
                    step = parseInt($(this).attr('data-step'));
                } else {
                    step = 10;
                }
                var sliderElement = $(this).attr('id');
                var element = $('#' + sliderElement);
                var valueMin = parseInt($(this).attr('data-value-min'));
                var valueMax = parseInt($(this).attr('data-value-max'));
                $(this).noUiSlider({
                    start: [valueMin, valueMax],
                    connect: true,
                    direction: rtl,
                    range: {
                        'min': valueMin,
                        'max': valueMax
                    },
                    step: step
                });
                if ($(this).attr('data-value-type') == 'price') {
                    if ($(this).attr('data-currency-placement') == 'before') {
                        $(this).Link('lower').to($(this).children('.values').children('.value-min'), null, window.wNumb({
                            prefix: $(this).attr('data-currency'),
                            decimals: 0,
                            thousand: '.'
                        }));
                        $(this).Link('upper').to($(this).children('.values').children('.value-max'), null, window.wNumb({
                            prefix: $(this).attr('data-currency'),
                            decimals: 0,
                            thousand: '.'
                        }));
                    } else if ($(this).attr('data-currency-placement') == 'after') {
                        $(this).Link('lower').to($(this).children('.values').children('.value-min'), null, window.wNumb({
                            postfix: $(this).attr('data-currency'),
                            decimals: 0,
                            thousand: ' '
                        }));
                        $(this).Link('upper').to($(this).children('.values').children('.value-max'), null, window.wNumb({
                            postfix: $(this).attr('data-currency'),
                            decimals: 0,
                            thousand: ' '
                        }));
                    }
                } else {
                    $(this).Link('lower').to($(this).children('.values').children('.value-min'), null, window.wNumb({decimals: 0}));
                    $(this).Link('upper').to($(this).children('.values').children('.value-max'), null, window.wNumb({decimals: 0}));
                }
            });
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

    selectChanged(e) {
        var selected = e.currentTarget.className;
        var current, placeHolder, disabled, filter, needInit;
        filter = this.state.filterOptions.slice(0);
        if (selected === "add-category") {
            current = "Add category";
            placeHolder = "bs-placeholder";
            disabled = false;
        } else {
            current = this.getCategory(selected);
            placeHolder = "";
            disabled = true;
            this.props.removeFilter(selected);
            needInit = true;
        }
        this.setState({
            currentCategory: current,
            placeholderIfHave: placeHolder,
            disabled: disabled,
            currentName: selected,
            needInit: needInit
        });

    }

    searchUpdateFilter(filOptions) {
        //console.log(filOptions);
        this.setState({
            filterOptions: filOptions
        });
    }

    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
        this.selectChanged = this.selectChanged.bind(this);
        this.getCategory = this.getCategory.bind(this);
        this.removeElementFromList = this.removeElementFromList.bind(this);
        this.addPress = this.addPress.bind(this);
        this.removePress = this.removePress.bind(this);
        this.initSlider = this.initSlider.bind(this);
        this.searchUpdateFilter = this.searchUpdateFilter.bind(this);
        this.selectChangedStatus = this.selectChangedStatus.bind(this);
        this.state = {
            filterOptions: optionsSelect.slice(0),
            currentCategory: "Add category",
            placeholderIfHave: "bs-placeholder",
            disabled: false,
            currentName: "",
            needInit: false,
            currentCategoryStatus: "Status"
        }
    }

    submit(e) {
        e.preventDefault();
    }

    render() {
        let moreViews;
        let categorySelect;
        if (this.state.filterOptions.length !== 0) {
            categorySelect = <div className="form-group  temp-select">
                <br/>
                <div className="btn-group bootstrap-select form-control filter-select">
                    <button type="button" disabled={this.state.disabled}
                            className={"btn dropdown-toggle  btn-default " + this.state.placeholderIfHave}
                            data-toggle="dropdown" role="button" title="Category"><span
                        className="filter-option pull-left">{this.state.currentCategory}</span>&nbsp;<span
                        className="bs-caret"><span
                        className="caret"></span></span></button>

                    <div className="dropdown-menu open" role="combobox">
                        <ul className="dropdown-menu inner" role="listbox" aria-expanded="false">
                            <li onClick={this.selectChanged} data-original-index="0" className="add-category">
                                <a tabIndex="0"
                                   className="report-option-select"
                                   style={{}} data-tokens="null"
                                   role="option" aria-disabled="false"
                                   aria-selected="true"><span
                                    className="text">Add category</span><span
                                    className="glyphicon glyphicon-ok check-mark"></span></a></li>
                            {this.state.filterOptions.map((item,i) => {
                                return <li key={'select_'+i}
                                    onClick={this.selectChanged}
                                           className={item.replace(" ", "-").replace("'", "").toLowerCase()}
                                           data-original-index={1 + this.state.filterOptions.indexOf(item)}>
                                    <a tabIndex="0" className="report-option-select" style={{}}
                                       data-tokens="null" role="option" aria-disabled="false"
                                       aria-selected="false"><span className="text">{item}</span><span
                                        className="glyphicon glyphicon-ok check-mark"></span></a></li>
                            })}
                        </ul>
                    </div>

                </div>
            </div>
        }
        if (this.state.disabled) {
            moreViews = <div className={+this.state.currentName + "-container"}>

                <div className="btn-group bootstrap-select form-control status-select">
                    <button type="button"
                            className={"btn dropdown-toggle  btn-default"}
                            data-toggle="dropdown" role="button" title="Category"><span
                        className="filter-option pull-left">{this.state.currentCategoryStatus}</span>&nbsp;<span
                        className="bs-caret"><span
                        className="caret"></span></span></button>

                    <div className="dropdown-menu open" role="combobox">
                        <ul className="dropdown-menu inner" role="listbox" aria-expanded="false">
                            {filterOptionsStatus.map((item,i) => {
                                return <li key={'select_'+i} onClick={this.selectChangedStatus}
                                           className={item.toLowerCase()}
                                           data-original-index={filterOptionsStatus.indexOf(item)}>
                                    <a tabIndex="0" className="status-option-select" style={{}}
                                       data-tokens="null" role="option" aria-disabled="false"
                                       aria-selected="false"><span className="text">{item}</span><span
                                        className="glyphicon glyphicon-ok check-mark"></span></a></li>
                            })}
                        </ul>
                    </div>
                </div>



                <div className={"form-group "+this.state.currentName}>
                    <br/><p>Rating:</p>
                    <div className={"ui-slider slider"+this.state.currentName} id="price-slider" data-value-min="10"
                         data-value-max="400">
                        <div className="values clearfix">
                            <input className="value-min" name="value-min[]" readOnly/>
                            <input className="value-max" name="value-max[]" readOnly/>
                        </div>
                        <div className="element"></div>
                    </div>

                    {/*end price-slider*/}
                </div>
                {/*end form-group*/}
                <div className={"form-group "}>
                    <input type="number" className={"form-control report-num-filter "}
                           name="keyword" placeholder="Issue Num."/>
                </div>
                <div>
                    <div className={"form-group inline "}>
                        <br/>
                        <a href="#"
                           className={"btn btn-primary btn-framed btn-rounded add-search-button btn-light-frame  add-button"}
                           onClick={() => this.addPress(this.state.currentName)}>Add</a>
                    </div>
                    <div className="form-group inline antennas-intergity">
                        <a href="#"
                           className={"btn btn-primary btn-framed btn-rounded remove-search-button btn-light-frame  remove-button"}
                           onClick={() => this.addPress(this.state.currentName)}>Remove</a>
                    </div>
                </div>
            </div>

        }





        return (
            <section>
                <h2>Search Filter</h2>
                <form className="form inputs-underline report-search-form"
                      onSubmit={this.submit}>
                    <div className="form-group">
                        <input type="text" className="form-control address-filter"
                               name="keyword"
                               placeholder="antenna address" onChange={this.props.change}/>
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


                    {categorySelect}


                    {/*end form-group*/}


                    {moreViews}

                    <div className="div-button">
                        <button type="submit"
                                className="btn btn-primary pull-right search-button">
                            Search<i className="fa fa-search"></i>
                        </button>
                    </div>

                    {/*end form-group*/}
                </form>
            </section>
        );
        }
        }

        export default FormSearch;