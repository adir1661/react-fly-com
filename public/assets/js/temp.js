let idSearch;
let providerIdSearch;
let searchAdress;
let searchTitle;
let searchDate;
let searchCategory;
let searchImg;
let searchAnnIntergity;
let searchCabelIntegrity;
let searchConnectorsTightness;
let searchUnwantedCabels;
let searchMonitorLightness;
let searchBlocking;
let searchStickers;
let latitudeSearch;
let longitudeSearch;

let mainSubject = "antennas"//or reports or antennas
let optionsSelect = ["Antenna's Intergity", "Cabels Integrity", "Connectors Tightness", "Unwanted Cabels", "Monitor Lightness", "Blocking", "Antenna's Stickers"];
let filterOptions = optionsSelect.slice(0);//["Antenna's Intergity", "Cabels Integrity", "Connectors Tightness", "Unwanted Cabels", "Monitor Lightness", "Blocking", "Antenna's Stickers"];
let optionsJquery = {
    antennas_intergity: null,
    cabels_integrity: null,
    connectors_tightness: null,
    unwanted_cabels: null,
    monitor_lightness: null,
    blocking: null,
    antennas_stickers: null,
}
filterOptions.sort();
let currentNameSelect = "report-option";
let divCategoryEmpty = true;
let categoriesEmpty = false;
$(document).ready(function () {
    updateView();
    refreshSelect();
});
function updateView() {
    updateTypeButtons();
    updateMainSubject();
}
function updateMainSubject() {
    if (mainSubject === "reports") {
        $(".head-search-title").text("Search reports");
    } else if (mainSubject == "antennas") {
        $(".head-search-title").text("Search antennas");
    } else {
        throw "error";//todo take care of error
    }
}
function refreshSelect(){
    $(".report-search-form select").selectpicker("refresh");
}
function updateTypeButtons() {
    if (mainSubject === "reports") {
        $(".search-reports").prop('disabled', true);
        $(".search-antennas").prop('disabled', false);
    } else if (mainSubject == "antennas") {
        $(".search-reports").prop('disabled', false);
        $(".search-antennas").prop('disabled', true);
    } else {
        throw "error";//todo take care of error
    }
}

function press(event) {

    $.ajax(
        {
            url: 'https://30s59by7og.execute-api.us-east-1.amazonaws.com/dev/views/search_modal',
            //url: "../backend/functions/database.json",
            type: "GET",
            dataType: "json",
            contentType: "text/plain",
            success: (result) => {
                console.log(result);
                //console.log("here2");
            }, complete: function () {

            },
            error: function (xhr, status, err) {
                console.log("error:\n", err);
            }
        }
    );

}
function getSearchData(){
    const data = getLocalData();
    let anntenas=[]
    let reports=[]
    let anntena = {
        id: null,
        idProvider: null,
        address: null,
        latitude: null,
        longitude: null,
        img: null,
        rating: null,
        description: null,
        reports:[],
    }
    let report = {
        imgReport: null,
        description: null,
        title: null,
        date: null,
        category: null,
        img: null,
        cabelsIntegrity: {
            status: null,
            issueNum: null,
            describle: null,
            rating: null
        },
        connectorsTightness: {
            status: null,
            issueNum: null,
            describle: null,
            rating: null
        },
        unwantedCabels: {
            status: null,
            issueNum: null,
            describle: null,
            rating: null
        },
        monitorLightness: {
            status: null,
            issueNum: null,
            describle: null,
            rating: null
        },
        blocking: {
            status: null,
            issueNum: null,
            describle: null,
            rating: null
        },
        stickers: {
            status: null,
            issueNum: null,
            describle: null,
            rating: null
        }

    }
    // let report = {
    //     id: null,
    //     idProvider: null,
    //     address: null,
    //     latitude: null,
    //     longitude: null,
    //     imgAnntena:null,
    //     imgReport: null,
    //     anntenaRating: null,
    //     description: null,
    //     title: null,
    //     date: null,
    //     category: null,
    //     img: null,
    //     cabelsIntegrity: {
    //         status: null,
    //         issueNum: null,
    //         describle: null,
    //         rating: null
    //     },
    //     connectorsTightness: {
    //         status: null,
    //         issueNum: null,
    //         describle: null,
    //         rating: null
    //     },
    //     unwantedCabels: {
    //         status: null,
    //         issueNum: null,
    //         describle: null,
    //         rating: null
    //     },
    //     monitorLightness: {
    //         status: null,
    //         issueNum: null,
    //         describle: null,
    //         rating: null
    //     },
    //     blocking: {
    //         status: null,
    //         issueNum: null,
    //         describle: null,
    //         rating: null
    //     },
    //     stickers: {
    //         status: null,
    //         issueNum: null,
    //         describle: null,
    //         rating: null
    //     }
    //
    // }
    let searchFilter = {
        id: null,
        idProvider: null,
        address: null,
        title: null,
        latitude: null,
        longitude: null,
        date: null,
        category: null,
        img: null,
        antennaIntergity: {
            status: null,
            issueNum: null,
            describle: null,
            rating: null
        },
        cabelsIntegrity: {
            status: null,
            issueNum: null,
            describle: null,
            rating: null
        },
        connectorsTightness: {
            status: null,
            issueNum: null,
            describle: null,
            rating: null
        },
        unwantedCabels: {
            status: null,
            issueNum: null,
            describle: null,
            rating: null
        },
        monitorLightness: {
            status: null,
            issueNum: null,
            describle: null,
            rating: null
        },
        blocking: {
            status: null,
            issueNum: null,
            describle: null,
            rating: null
        },
        stickers: {
            status: null,
            issueNum: null,
            describle: null,
            rating: null
        }
    };
    data.antennas.forEach(function (ann) {
        anntena = new Object();
        anntena.reports=[];
        anntena.id = ann.id;
        anntena.idProvider = ann.providerId;
        anntena.address = ann.address;
        anntena.latitude = ann.latitude;
        anntena.longitude =ann.longitude;
        anntena.img = ann.img;
        anntena.rating = ann.rating;
        anntena.description = ann.description;
        ann.reports.forEach(function (rep) {
            report=new Object();
            report.title =rep.title;
            report.date = rep.date;
            report.category  =rep.category;
            report.img = rep.img;
            report.cabelsIntegrity = rep.cabelsIntegrity;
            report.connectorsTightness = rep.connectorsTightness;
            report.unwantedCabels = rep.unwantedCabels;
            report.monitorLightness = rep.monitorLightness;
            report.blocking = rep.blocking;
            report.stickers = rep.stickers;
            report.imgReport =rep.img;
            anntena.reports.push(report);
        })
        anntenas.push(anntena);
    })
    return anntenas;
}
function anntenaView(anntena) {
   return $(`<div id="${anntena.id}" class="item item-row" data-id="${anntena.id}" data-latitude="${anntena.latitude}"
                             data-longitude="${anntena.longitude}">
                            <a href="detail.html">
                                <div class="image bg-transfer">
                                    <figure>Average Price: $8 - $30</figure>
                                    <img src="${anntena.img}" alt="">
                                </div>
                                <!--end image-->
                                <div class="map"></div>
                                <div class="description">
                                    <h3 class="address">${anntena.address}</h3>
                                    <h4 class="description-anntena">${anntena.description}</h4>
                                    <div class="label label-default">Restaurant</div>
                                </div>
                                <!--end description-->
                                <div class="additional-info">
                                    <div class="rating-passive" data-rating="${anntena.rating}">
                                        <span class="stars"></span>
                                        <span class="reviews">${anntena.reports.length}</span>
                                    </div>
                                </div>
                                <!--end additional-info-->
                            </a>
                            <div class="controls-more">
                                <ul>
                                    <li><a href="#">Add to favorites</a></li>
                                    <li><a href="#">Add to watchlist</a></li>
                                    <li><a href="#" class="quick-detail">Quick detail</a></li>
                                </ul>
                            </div>
                            <!--end controls-more-->
                        </div>

<!--<script type="text/javascript" src="assets/js/custom.js"></script>-->

`);
}
function reportView(anntena) {

}
function setReports(anntenas) {
    anntenas.forEach(function (anntena) {
        reportView(anntena);
    })

}
function setAnntenas(anntenas,contanier) {
    anntenas.forEach(function (anntena) {
        let anntenaViewElement = null;
        anntenaViewElement=anntenaView(anntena);
        console.log(anntenaViewElement);
        contanier.append(anntenaViewElement);
        //anntenaViewElement.selectPicker("refresh");
    });
    updateAfterSearch();

}
function updateAfterSearch(){
    equalHeight(".container");
    ratingPassive("body");
    bgTransfer();
    responsiveNavigation();
    $(".item.item-row").each(function () {
        var element = "map" + $(this).attr("data-id");
        var place;
        $(this).find(".map").attr("id", element);
        var _latitude = $(this).attr("data-latitude");
        var _longitude = $(this).attr("data-longitude");
        if ($(this).attr("data-address")) {
            place = $(this).attr("data-address");
        }
        else {
            place = false;
        }
        simpleMap(_latitude, _longitude, element, false, place);
    });
}
function search(event) {
    updateFilterVar();
    let container = $(".search-elements");
    let anntenas =  getSearchData();
    if (mainSubject === "reports") {
        setReports(anntenas,container);
    } else if (mainSubject == "antennas") {
        setAnntenas(anntenas,container);
    } else {
        throw "error";//todo take care of error
    }

}
function updateFilterAntennas() {
    searchAdress;
    searchTitle;
    searchDate;
    searchCategory;
    searchImg;
    searchAnnIntergity;
    searchCabelIntegrity;
    searchConnectorsTightness;
    searchUnwantedCabels;
    searchMonitorLightness;
    searchBlocking;
    searchStickers;
}

function updateFilterReports() {
    searchAdress;
    searchTitle;
    searchDate;
    searchCategory;
    searchImg;
    searchAnnIntergity;
    searchCabelIntegrity;
    searchConnectorsTightness;
    searchUnwantedCabels;
    searchMonitorLightness;
    searchBlocking;
    searchStickers;
}

function updateFilterVar() {
    updateFilterAntennas();
    updateFilterReports();
}


function addPress(event) {
    let chipName = getCategory($(event.target).attr('class'));
    let className = chipName.replace(" ", "-").replace("'", "").toLowerCase();
    let jnameContainer = `.${className}-container`;
    for (var key in optionsJquery) {
        if (optionsJquery.hasOwnProperty(key)) {
            if (key === className.replace("-", "_")) {
                optionsJquery[key] = $(jnameContainer);
                $(jnameContainer).remove()
                addChip(chipName, className);
                removeCategoryView();
                appendSelectCategory(className);
                divCategoryEmpty = true;
                //refreshSelect(); in the original we need to able this

            }
        }
    }

}
function refreshSelect(){
    $(".report-search-form select").selectpicker("refresh");
}
function removeCategoryView() {
    $(`.temp-select`).remove();
}

function addChip(chipName, className) {
    $(".chip-container").append(` <div class="chip chip-${className}">

                                <div class="chip-content">${chipName}</div>
                                <div  class="chip-close ${className}">
                                    <svg  class="chip-svg" focusable="false"  viewBox="0 0 24 24" ><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"></path></svg>
                                  
                                </div>`);
    //$('.chip-svg').click(false);
    //$('path').click(false);
}

function getLocalData() {
    let obj = {
        "antennas": [
            {
            "id": "1",
            "rating": 3,
            "providerId": "7028765",
            "latitude": 40.7344458,
            "longitude": -73.86704922,
            "img": "assets/img/antenna5.jpg",
            "description": "bla bla bla in bla",
            "address": "Queens, NY 11373 New York, Lefrak City Queens, Elmhurst New York United States",
            "reports": [{
                "title": "the april problem",
                "date": "29.4.2019",
                "category": "winter",
                "img": "assets/img/items/2.jpg",
                "antennaIntergity": {
                    "status": "stable",
                    "issueNum": 1243,
                    "describle": "the antenna power is very low",
                    "img": "assets/img/antenna5.jpg",
                    "rating": 57
                },


                "cabelsIntegrity": {
                    "status": "stable",
                    "issueNum": 1243,
                    "describle": "the antenna power is very low",
                    "img": "assets/img/antenna5.jpg",
                    "rating": 57
                },

                "connectorsTightness": {
                    "status": "stable",
                    "issueNum": 1243,
                    "describle": "the antenna power is very low",
                    "img": "assets/img/antenna5.jpg",
                    "rating": 57
                },
                "unwantedCabels": {
                    "status": "stable",
                    "issueNum": 1243,
                    "describle": "the antenna power is very low",
                    "img": "assets/img/antenna5.jpg",
                    "rating": 57
                },

                "monitorLightness": {
                    "status": "stable",
                    "issueNum": 1243,
                    "describle": "the antenna power is very low",
                    "img": "assets/img/antenna5.jpg",
                    "rating": 57
                },
                "blocking": {
                    "status": "stable",
                    "issueNum": 1243,
                    "describle": "the antenna power is very low",
                    "img": "assets/img/antenna5.jpg",
                    "rating": 57
                },
                "stickers": {
                    "status": "stable",
                    "issueNum": 1243,
                    "describle": "the antenna power is very low",
                    "img": "assets/img/antenna5.jpg",
                    "rating": 57
                },
            },
                {
                    "title": "the april problem",
                    "date": "29.4.2019",
                    "category": "winter",
                    "img": "assets/img/items/2.jpg",
                    "antennaIntergity": {
                        "status": "stable",
                        "issueNum": 1243,
                        "describle": "the antenna power is very low",
                        "img": "assets/img/antenna5.jpg",
                        "rating": 57
                    },


                    "cabelsIntegrity": {
                        "status": "stable",
                        "issueNum": 1243,
                        "describle": "the antenna power is very low",
                        "img": "assets/img/antenna5.jpg",
                        "rating": 57
                    },

                    "connectorsTightness": {
                        "status": "stable",
                        "issueNum": 1243,
                        "describle": "the antenna power is very low",
                        "img": "assets/img/antenna5.jpg",
                        "rating": 57
                    },
                    "unwantedCabels": {
                        "status": "stable",
                        "issueNum": 1243,
                        "describle": "the antenna power is very low",
                        "img": "assets/img/antenna5.jpg",
                        "rating": 57
                    },

                    "monitorLightness": {
                        "status": "stable",
                        "issueNum": 1243,
                        "describle": "the antenna power is very low",
                        "img": "assets/img/antenna5.jpg",
                        "rating": 57
                    },
                    "blocking": {
                        "status": "stable",
                        "issueNum": 1243,
                        "describle": "the antenna power is very low",
                        "img": "assets/img/antenna5.jpg",
                        "rating": 57
                    },
                    "stickers": {
                        "status": "stable",
                        "issueNum": 1243,
                        "describle": "the antenna power is very low",
                        "img": "assets/img/antenna5.jpg",
                        "rating": 57
                    },
                },
                {
                    "title": "the april problem",
                    "date": "29.4.2019",
                    "category": "winter",
                    "img": "assets/img/items/2.jpg",
                    "antennaIntergity": {
                        "status": "stable",
                        "issueNum": 1243,
                        "describle": "the antenna power is very low",
                        "img": "assets/img/antenna5.jpg",
                        "rating": 57
                    },


                    "cabelsIntegrity": {
                        "status": "stable",
                        "issueNum": 1243,
                        "describle": "the antenna power is very low",
                        "img": "assets/img/antenna5.jpg",
                        "rating": 57
                    },

                    "connectorsTightness": {
                        "status": "stable",
                        "issueNum": 1243,
                        "describle": "the antenna power is very low",
                        "img": "assets/img/antenna5.jpg",
                        "rating": 57
                    },
                    "unwantedCabels": {
                        "status": "stable",
                        "issueNum": 1243,
                        "describle": "the antenna power is very low",
                        "img": "assets/img/antenna5.jpg",
                        "rating": 57
                    },

                    "monitorLightness": {
                        "status": "stable",
                        "issueNum": 1243,
                        "describle": "the antenna power is very low",
                        "img": "assets/img/antenna5.jpg",
                        "rating": 57
                    },
                    "blocking": {
                        "status": "stable",
                        "issueNum": 1243,
                        "describle": "the antenna power is very low",
                        "img": "assets/img/antenna5.jpg",
                        "rating": 57
                    },
                    "stickers": {
                        "status": "stable",
                        "issueNum": 1243,
                        "describle": "the antenna power is very low",
                        "img": "assets/img/antenna5.jpg",
                        "rating": 57
                    },
                },
            ]
        },
            {
            "id": "2",
            "rating": 2,
            "providerId": "70102365",
            "address": "4232 Albany Street, Albany, NY 12205\n" +
                "Albany Colonie, Albany New York United States",
            "latitude": 42.7344458,
            "longitude": -73.86704922,
            "img": "assets/img/antenna2.jpg",
            "description": "bla bla bla in bla222",
            "reports": [{
                "title": "the april problem",
                "date": "29.4.2019",
                "category": "winter",
                "img": "assets/img/items/2.jpg",
                "antennaIntergity": {
                    "status": "stable",
                    "issueNum": 1243,
                    "describle": "the antenna power is very low",
                    "img": "assets/img/antenna5.jpg",
                    "rating": 57
                },


                "cabelsIntegrity": {
                    "status": "stable",
                    "issueNum": 1243,
                    "describle": "the antenna power is very low",
                    "img": "assets/img/antenna5.jpg",
                    "rating": 57
                },

                "connectorsTightness": {
                    "status": "stable",
                    "issueNum": 1243,
                    "describle": "the antenna power is very low",
                    "img": "assets/img/antenna5.jpg",
                    "rating": 57
                },
                "unwantedCabels": {
                    "status": "stable",
                    "issueNum": 1243,
                    "describle": "the antenna power is very low",
                    "img": "assets/img/antenna5.jpg",
                    "rating": 57
                },

                "monitorLightness": {
                    "status": "stable",
                    "issueNum": 1243,
                    "describle": "the antenna power is very low",
                    "img": "assets/img/antenna5.jpg",
                    "rating": 57
                },
                "blocking": {
                    "status": "stable",
                    "issueNum": 1243,
                    "describle": "the antenna power is very low",
                    "img": "assets/img/antenna5.jpg",
                    "rating": 57
                },
                "stickers": {
                    "status": "stable",
                    "issueNum": 1243,
                    "describle": "the antenna power is very low",
                    "img": "assets/img/antenna5.jpg",
                    "rating": 57
                },
            },
                {
                    "title": "the april problem",
                    "date": "29.4.2019",
                    "category": "winter",
                    "img": "assets/img/items/2.jpg",
                    "antennaIntergity": {
                        "status": "stable",
                        "issueNum": 1243,
                        "describle": "the antenna power is very low",
                        "img": "assets/img/antenna5.jpg",
                        "rating": 57
                    },


                    "cabelsIntegrity": {
                        "status": "stable",
                        "issueNum": 1243,
                        "describle": "the antenna power is very low",
                        "img": "assets/img/antenna5.jpg",
                        "rating": 57
                    },

                    "connectorsTightness": {
                        "status": "stable",
                        "issueNum": 1243,
                        "describle": "the antenna power is very low",
                        "img": "assets/img/antenna5.jpg",
                        "rating": 57
                    },
                    "unwantedCabels": {
                        "status": "stable",
                        "issueNum": 1243,
                        "describle": "the antenna power is very low",
                        "img": "assets/img/antenna5.jpg",
                        "rating": 57
                    },

                    "monitorLightness": {
                        "status": "stable",
                        "issueNum": 1243,
                        "describle": "the antenna power is very low",
                        "img": "assets/img/antenna5.jpg",
                        "rating": 57
                    },
                    "blocking": {
                        "status": "stable",
                        "issueNum": 1243,
                        "describle": "the antenna power is very low",
                        "img": "assets/img/antenna5.jpg",
                        "rating": 57
                    },
                    "stickers": {
                        "status": "stable",
                        "issueNum": 1243,
                        "describle": "the antenna power is very low",
                        "img": "assets/img/antenna5.jpg",
                        "rating": 57
                    },
                },
                {
                    "title": "the april problem",
                    "date": "29.4.2019",
                    "category": "winter",
                    "img": "assets/img/items/2.jpg",
                    "antennaIntergity": {
                        "status": "stable",
                        "issueNum": 1243,
                        "describle": "the antenna power is very low",
                        "img": "assets/img/antenna5.jpg",
                        "rating": 57
                    },


                    "cabelsIntegrity": {
                        "status": "stable",
                        "issueNum": 1243,
                        "describle": "the antenna power is very low",
                        "img": "assets/img/antenna5.jpg",
                        "rating": 57
                    },

                    "connectorsTightness": {
                        "status": "stable",
                        "issueNum": 1243,
                        "describle": "the antenna power is very low",
                        "img": "assets/img/antenna5.jpg",
                        "rating": 57
                    },
                    "unwantedCabels": {
                        "status": "stable",
                        "issueNum": 1243,
                        "describle": "the antenna power is very low",
                        "img": "assets/img/antenna5.jpg",
                        "rating": 57
                    },

                    "monitorLightness": {
                        "status": "stable",
                        "issueNum": 1243,
                        "describle": "the antenna power is very low",
                        "img": "assets/img/antenna5.jpg",
                        "rating": 57
                    },
                    "blocking": {
                        "status": "stable",
                        "issueNum": 1243,
                        "describle": "the antenna power is very low",
                        "img": "assets/img/antenna5.jpg",
                        "rating": 57
                    },
                    "stickers": {
                        "status": "stable",
                        "issueNum": 1243,
                        "describle": "the antenna power is very low",
                        "img": "assets/img/antenna5.jpg",
                        "rating": 57
                    },
                },
            ]
        }, {
            "id": "3",
            "rating": 5,
            "providerId": "701056565",
            "address": "Pittsfield, VT 05762\n" +
                "Pittsfield Vermont United States",
            "description": "bla bla bla in bla333",
            "latitude": 43.7344458,
            "longitude": -72.86704922,
            "img": "assets/img/antenna6.jpg",
            "reports": [{
                "title": "the april problem",
                "date": "29.4.2019",
                "category": "winter",
                "img": "assets/img/items/2.jpg",
                "antennaIntergity": {
                    "status": "stable",
                    "issueNum": 1243,
                    "describle": "the antenna power is very low",
                    "img": "assets/img/antenna5.jpg",
                    "rating": 57
                },


                "cabelsIntegrity": {
                    "status": "stable",
                    "issueNum": 1243,
                    "describle": "the antenna power is very low",
                    "img": "assets/img/antenna5.jpg",
                    "rating": 57
                },

                "connectorsTightness": {
                    "status": "stable",
                    "issueNum": 1243,
                    "describle": "the antenna power is very low",
                    "img": "assets/img/antenna5.jpg",
                    "rating": 57
                },
                "unwantedCabels": {
                    "status": "stable",
                    "issueNum": 1243,
                    "describle": "the antenna power is very low",
                    "img": "assets/img/antenna5.jpg",
                    "rating": 57
                },

                "monitorLightness": {
                    "status": "stable",
                    "issueNum": 1243,
                    "describle": "the antenna power is very low",
                    "img": "assets/img/antenna5.jpg",
                    "rating": 57
                },
                "blocking": {
                    "status": "stable",
                    "issueNum": 1243,
                    "describle": "the antenna power is very low",
                    "img": "assets/img/antenna5.jpg",
                    "rating": 57
                },
                "stickers": {
                    "status": "stable",
                    "issueNum": 1243,
                    "describle": "the antenna power is very low",
                    "img": "assets/img/antenna5.jpg",
                    "rating": 57
                },
            },
                {
                    "title": "the april problem",
                    "date": "29.4.2019",
                    "category": "winter",
                    "img": "assets/img/items/2.jpg",
                    "antennaIntergity": {
                        "status": "stable",
                        "issueNum": 1243,
                        "describle": "the antenna power is very low",
                        "img": "assets/img/antenna5.jpg",
                        "rating": 57
                    },


                    "cabelsIntegrity": {
                        "status": "stable",
                        "issueNum": 1243,
                        "describle": "the antenna power is very low",
                        "img": "assets/img/antenna5.jpg",
                        "rating": 57
                    },

                    "connectorsTightness": {
                        "status": "stable",
                        "issueNum": 1243,
                        "describle": "the antenna power is very low",
                        "img": "assets/img/antenna5.jpg",
                        "rating": 57
                    },
                    "unwantedCabels": {
                        "status": "stable",
                        "issueNum": 1243,
                        "describle": "the antenna power is very low",
                        "img": "assets/img/antenna5.jpg",
                        "rating": 57
                    },

                    "monitorLightness": {
                        "status": "stable",
                        "issueNum": 1243,
                        "describle": "the antenna power is very low",
                        "img": "assets/img/antenna5.jpg",
                        "rating": 57
                    },
                    "blocking": {
                        "status": "stable",
                        "issueNum": 1243,
                        "describle": "the antenna power is very low",
                        "img": "assets/img/antenna5.jpg",
                        "rating": 57
                    },
                    "stickers": {
                        "status": "stable",
                        "issueNum": 1243,
                        "describle": "the antenna power is very low",
                        "img": "assets/img/antenna5.jpg",
                        "rating": 57
                    },
                },
                {
                    "title": "the april problem",
                    "date": "29.4.2019",
                    "category": "winter",
                    "img": "assets/img/items/2.jpg",
                    "antennaIntergity": {
                        "status": "stable",
                        "issueNum": 1243,
                        "describle": "the antenna power is very low",
                        "img": "assets/img/antenna5.jpg",
                        "rating": 57
                    },


                    "cabelsIntegrity": {
                        "status": "stable",
                        "issueNum": 1243,
                        "describle": "the antenna power is very low",
                        "img": "assets/img/antenna5.jpg",
                        "rating": 57
                    },

                    "connectorsTightness": {
                        "status": "stable",
                        "issueNum": 1243,
                        "describle": "the antenna power is very low",
                        "img": "assets/img/antenna5.jpg",
                        "rating": 57
                    },
                    "unwantedCabels": {
                        "status": "stable",
                        "issueNum": 1243,
                        "describle": "the antenna power is very low",
                        "img": "assets/img/antenna5.jpg",
                        "rating": 57
                    },

                    "monitorLightness": {
                        "status": "stable",
                        "issueNum": 1243,
                        "describle": "the antenna power is very low",
                        "img": "assets/img/antenna5.jpg",
                        "rating": 57
                    },
                    "blocking": {
                        "status": "stable",
                        "issueNum": 1243,
                        "describle": "the antenna power is very low",
                        "img": "assets/img/antenna5.jpg",
                        "rating": 57
                    },
                    "stickers": {
                        "status": "stable",
                        "issueNum": 1243,
                        "describle": "the antenna power is very low",
                        "img": "assets/img/antenna5.jpg",
                        "rating": 57
                    },
                },
            ]
        }]
    };
    // let newObj  = JSON.parse(obj);
    return obj;
    //console.log(obj.antennas[0].reports[0][1].name);
}

function removeElementFromList(list, element) {
    var index = list.indexOf(element);
    if (index > -1) {
        list.splice(index, 1);
    }

}

function selectStatus(value) {
    return $(' <div class="form-group ' + value + '">\n' +
        '                                    <select class="form-control selectpicker after-select ' + value + '" name="add category">\n' +
        '<option value="">Status</option>' +
        '<option value="1">Stable</option>' +
        '<option value="2">Problematic</option>' +
        '                                    </select>\n' +
        '                                </div>\n');
}

function slider(value) {
    return $('  <div class="form-group ' + value + '">\n' +
        '<br><p>Rating:</p>' +
        '                                    <div class="ui-slider slider-' + value + '" id="price-slider" data-value-min="10" data-value-max="400">\n' +
        '                                        <div class="values clearfix">\n' +
        '                                            <input class="value-min" name="value-min[]" readonly>\n' +
        '                                            <input class="value-max" name="value-max[]" readonly>\n' +
        '                                        </div>\n' +
        '                                      <div class="element"></div>\n' +
        '                                    </div>\n' +
        '                                    <!--end price-slider-->\n' +
        '                                </div>\n' +
        '                                <!--end form-group-->');
}

function numIssue(value) {
    return $('<div class="form-group ' + value + '">\n' +
        '        <input type="number" class="form-control report-num-filter ' + value + '"  name="keyword"\n' +
        '    placeholder="Issue Num.">\n' +
        '        </div>');

}

function appendSelectCategory(value) {
    let indexMaker = 1;
    let selectMakerStr = '';
    filterOptions.forEach(function (name) {
        selectMakerStr += '<option class="report-option report-option-select ' + value + '-select" value="' + indexMaker + '">' + name + '</option>\n'
        indexMaker += 1;
    });
    if (selectMakerStr !== '') {
        let selectElement = $(' <div class="form-group temp-select">\n' +
            '                                   <br>   <select class="form-control selectpicker filter-select after-select" name="category">\n' +
            '                                        <option class="report-option" value="">Add Category</option>\n' +
            selectMakerStr +
            '                                    </select>\n' +
            '                                </div>');
        let searchDiv = $(`.div-button`);
        selectElement.insertBefore(searchDiv);

    }
}

function checkSelectCategoryEmpty() {
    return filterOptions.length === 0;
}

function checkAddUpdateSelectCategory(className) {

    categoriesEmpty = checkSelectCategoryEmpty();
    addToFilter(getCategory(className));

    if (categoriesEmpty) {
        appendSelectCategory(className);
        $(".report-search-form select").selectpicker("refresh");
    } else {
        removeCategoryView();
        appendSelectCategory(className);
        $(".report-search-form select").selectpicker("refresh");
    }
    // if (categoriesEmpty) {
    //     appendSelectCategory(className);
    //     $(".report-search-form select").selectpicker("refresh");
    // }
    // else {
    //     updateSelect(className);
    // }
}

function appendSearchButton(className, divContainer) {
    $(".div-button").remove();
    divContainer.append('<div class="div-button"><button type="submit" class="btn btn-primary pull-right search-button">Search<i\n' +
        '                                            class="fa fa-search"></i></button></div>\n' +
        '                                <!--end form-group-->');

}

function removeButton(className, name) {

    return $('<div class="form-group inline ' + className + '">\n' +
        '        <a href="#" class="btn btn-primary btn-framed btn-rounded remove-search-button btn-light-frame ' + className + ' remove-' + className + '">Remove</a>\n' +
        '    </div>');
}

function addButton(className, name) {
    return $('<div class="form-group inline ' + className + '">\n' +
        '         <br>\n' +
        '        <a href="#" class="btn btn-primary btn-framed btn-rounded add-search-button btn-light-frame ' + className + ' add-' + className + '">Add</a>\n' +
        '    </div>');
}

function addRemoveButtons(className, name) {
    let contain = $('<div></div>');
    contain.append(addButton(className, name));
    contain.append(removeButton(className, name));
    return contain;
}

function appendItems(name, className, divContainer) {
    divContainer.append(selectStatus(className));
    divContainer.append(slider(className));
    divContainer.append(numIssue(className));
    divContainer.append(addRemoveButtons(className, name));

}

function initViews(className, divContainer) {
    let fatherElement = $(".report-search-form");
    let divSearchButton = $(`.div-button`);
    fatherElement.append(divSearchButton);
    divContainer.insertBefore(divSearchButton);
}

function addCategory(name) {
    var className = name.replace(" ", "-").toLowerCase().replace("'", "");
    let divContainer = $(`<div class="${className}-container"></div>`);
    initViews(className, divContainer);
    appendItems(name, className, divContainer);//if you want to add items add here
    //addSelectCategory(className);
    //appendSearchButton(className,divContainer);
    initSlider(className);
    $(".report-search-form select").selectpicker("refresh");

}

function initSlider(value) {
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
                    $(this).Link('lower').to($(this).children('.values').children('.value-min'), null, wNumb({
                        prefix: $(this).attr('data-currency'),
                        decimals: 0,
                        thousand: '.'
                    }));
                    $(this).Link('upper').to($(this).children('.values').children('.value-max'), null, wNumb({
                        prefix: $(this).attr('data-currency'),
                        decimals: 0,
                        thousand: '.'
                    }));
                } else if ($(this).attr('data-currency-placement') == 'after') {
                    $(this).Link('lower').to($(this).children('.values').children('.value-min'), null, wNumb({
                        postfix: $(this).attr('data-currency'),
                        decimals: 0,
                        thousand: ' '
                    }));
                    $(this).Link('upper').to($(this).children('.values').children('.value-max'), null, wNumb({
                        postfix: $(this).attr('data-currency'),
                        decimals: 0,
                        thousand: ' '
                    }));
                }
            } else {
                $(this).Link('lower').to($(this).children('.values').children('.value-min'), null, wNumb({decimals: 0}));
                $(this).Link('upper').to($(this).children('.values').children('.value-max'), null, wNumb({decimals: 0}));
            }
        });
    }
}
function initSliders() {
    if ($('.ui-slider').length > 0) {
        $('.ui-slider').each(function () {
            if ($("body").hasClass("rtl")) var rtl = "rtl";
            else rtl = "ltr";

            var step;
            if ($(this).attr('data-step')) {
                step = parseInt($(this).attr('data-step'));
            }
            else {
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
                    $(this).Link('lower').to($(this).children('.values').children('.value-min'), null, wNumb({
                        prefix: $(this).attr('data-currency'),
                        decimals: 0,
                        thousand: '.'
                    }));
                    $(this).Link('upper').to($(this).children('.values').children('.value-max'), null, wNumb({
                        prefix: $(this).attr('data-currency'),
                        decimals: 0,
                        thousand: '.'
                    }));
                }
                else if ($(this).attr('data-currency-placement') == 'after') {
                    $(this).Link('lower').to($(this).children('.values').children('.value-min'), null, wNumb({
                        postfix: $(this).attr('data-currency'),
                        decimals: 0,
                        thousand: ' '
                    }));
                    $(this).Link('upper').to($(this).children('.values').children('.value-max'), null, wNumb({
                        postfix: $(this).attr('data-currency'),
                        decimals: 0,
                        thousand: ' '
                    }));
                }
            }
            else {
                $(this).Link('lower').to($(this).children('.values').children('.value-min'), null, wNumb({decimals: 0}));
                $(this).Link('upper').to($(this).children('.values').children('.value-max'), null, wNumb({decimals: 0}));
            }
        });
    }
}
function selectPress() {

    var value = "";
    //var check = "." + currentNameSelect + "-select:selected";
    var check = ".report-option-select:selected";
    $(check).each(function () {
        value += $(this).text();
    });
    if (value !== "") {
        currentNameSelect = value.replace(" ", "-").toLowerCase().replace("'", "");
    }

    if (String(value).includes("Add Category") === false)//if some element is choosen
    {
        $(".filter-select").prop('disabled', true);//your select that trigger the view.
        if (filterOptions.includes(value) !== false) {
            removeElementFromList(filterOptions, value);
            addCategory(value);
            divCategoryEmpty = false;
        }
    } else {

    }
}

function enableCheckFirstCategory() {
    if (filterOptions.length === optionsSelect.length) {
        $(".filter-select").attr("disabled", false);
    }
}

function getCategory(names) {
    let result = "";
    optionsSelect.forEach(function (element) {
        if (names.includes(element.replace(" ", "-").toLowerCase().replace("'", ""))) {
            result = element;
        }
    });
    return result;
}

// function removeCategory(event){
//     let cName=getCategory($(event.target).attr('class'));
//     let jlastName = ".remove-search-button";
//     let temp=$(jlastName).last().attr("class");
//     let jname="."+cName.replace(" ","-").replace("'","").toLowerCase();
//     if(getCategory(temp).replace(" ","-").replace("'","").toLowerCase()===(cName).replace(" ","-").replace("'","").toLowerCase())
//     {
//         $(jname).remove();
//         temp=$(jlastName).last().attr("class");
//         console.log(temp);
//     }
//     else{
//         $(jname).remove();
//         console.log(getCategory(temp).replace(" ","-").replace("'","").toLowerCase()===getCategory(cName).replace(" ","-").replace("'","").toLowerCase());
//         console.log(getCategory(temp).replace(" ","-").replace("'","").toLowerCase());
//         console.log(cName);
//     }
//     currentNameSelect=getCategory(temp).replace(" ","-").replace("'","").toLowerCase();
//     filterOptions.push(cName);
//     filterOptions.sort();
//     $(".temp-select").remove();
//     appendSelectCategory(getCategory(temp).replace(" ","-").replace("'","").toLowerCase());
//     appendSearchButton();
//     $(".report-search-form select").selectpicker("refresh");
//     enableCheckFirstCategory();
// }
function addToFilter(name) {
    filterOptions.push(name);
    filterOptions.sort();
}

function updateSelect(className) {
    let indexMaker = filterOptions.length;
    $(".report-search-form select").append($('<option class="report-option ' + className + '-select" value="' + indexMaker + '">' + getCategory(className) + '</option>\n'))
        .selectpicker("refresh");//.selectpicker("refresh");
}

function chipXpress(event) {

    let $this = $(this);
    let className = getCategory($this.attr("class")).replace(" ", "-").replace("'", "").toLowerCase();
    let jnameContainer = $(`.chip-${className}`);
    for (var key in optionsJquery) {
        if (optionsJquery.hasOwnProperty(key)) {
            if (key === className.replace("-", "_")) {
                optionsJquery[key] = null;
                checkAddUpdateSelectCategory(className);
                jnameContainer.remove();

            }
        }
    }
    //todo check if the category place is empty if yes appendSelectCategory(className);
    //todo return to if chip press , if the x press check what to do.
}

//$(document).on("click", ".add-search-button", addPress); //in the rgular need
//$(document).on("click", ".search-button", search); in the rgular need
//$(document).on("click", ".remove-search-button", removeCategory);

//$(document).on("click", ".chip-close", chipXpress); in the rgular need
//$(document).on("click", ".chip-button", chipXpress);
//$(document).on("change", 'select.filter-select', selectPress); //in the rgular need
