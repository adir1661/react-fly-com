import React, {Component, Suspense} from 'react';
import {Modal} from 'react-bootstrap';
import {filesToBase64} from "../helper/image";
import { withTranslation } from 'react-i18next';


const useCahcedReportsForView = true;

class MainMap extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount = () => {
        let self = this;
        window.t = this.props.t;
        let emailList = [
            {email:'adir1551@gmail.com',name:'adir'},
            // {email:'ASAFCH@cellcom.co.il',name:'asaf'},
            // {email:'YOSSIMAT@cellcom.co.il@gmail.com',name:'yossi'},
            // {email:'AVIGI@cellcom.co.il',name:'avi'},
            {email:'Moshe@flycomm.co',name:'moshe ha\'boss ha\'gever'},
        ];
        emailList =[emailList[0]];
        let singleEmail = (reportObj,email ,name) => {
            let title = reportObj.title.replace(/\D/g, "");
            let subject ='Report num. '+title+' had been added to the System';
            let content = `New report with ID:${reportObj.title}, added to a Site with ID:${window.locations.find(site => site.id===reportObj.site).title}`;
            let dataObj = {email, name, content,subject};

            window.$.ajax({
                url: 'https://aut4pawf7k.execute-api.eu-west-1.amazonaws.com/dev/email',
                method: 'POST',
                data: JSON.stringify(dataObj),
                dataType:'json',
                success: (result) => {

                },
                error: (hxr, status, error) => {
                    console.log(error);
                }
            })
        };
        let distributeEmails = (reportObj,emailList)=>{
            emailList.forEach(email =>{
                singleEmail(reportObj,email.email,email.name);
            })
        };
        window.distributeEmails = distributeEmails;
        window.singleEmail = singleEmail;
        let applyMultiFileFields = (itemsLength) => {
            let {$} = window;
            $("input.file-upload-input:not(.item)").MultiFile({
                list: ".file-upload-previews:not(.item)"
            });
            if (itemsLength) {
                for (let i = 0; i < itemsLength; i++) {
                    $("input#file-upload_" + i).MultiFile({
                        list: "#image-preview_" + i
                    });
                }
            }
        };
        let issues = [
            {name: 'issue0', id: 'issue0'},
            {name: 'issue1', id: 'issue1'},
            {name: 'issue2', id: 'issue2'},
            {name: 'issue3', id: 'issue3'},
            {name: 'issue4', id: 'issue4'},
            {name: 'issue5', id: 'issue5'},
            {name: 'issue6', id: 'issue6'},
        ];
        let chachedReports = [
            {
                _id: '1',
                created: new Date('2019-01-05'),
                rating: 70,
                title: '4001',
                description: 'this is report winter chached with some screws missing.',
                category: 'winder',
                reportId: 2,
                providerLogo: 'assets/img/cellcom_logo.png',
                issues: [
                    {
                        title: issues[0].name,
                        rating: 80,
                        issueNum: 112,
                        image: 'assets/img/antennas/cellcom1.jpg',
                        stability: 'stable',
                        description: 'Looks Good!',
                    },
                    {
                        title: issues[1].name,
                        rating: 14,
                        issueNum: 223,
                        stability: 'problematic',
                        image: 'assets/img/antennas/cellcom8.jpg',
                        description: 'problems on the vehiles, alot of cables merged together, cables unconnected',
                    },
                    {
                        title: issues[2].name,
                        rating: 49,
                        issueNum: 324,
                        stability: 'problematic',
                        image: 'assets/img/antennas/cellcom7.jpg',
                        description: 'problems on the connectors, alot of cables merged together,connector unconnected on right top corner',
                    },

                ]
            },
            {
                _id: '2',
                created: new Date('2019-03-25'),
                rating: 45,
                title: '4351',
                description: 'this is report winter cached with some crashes inside the Antenna tubes.',
                category: 'winder',
                vid: 'https://s3-eu-west-1.amazonaws.com/sis-flycomm-images/pelephone-cut2.mp4',
                reportId: 1,
                providerLogo: 'assets/img/items/company.png',
                issues: [
                    {
                        title: issues[0].name,
                        rating: 80,
                        issueNum: 112,
                        image: 'assets/img/antennas/issue1.jpg',
                        stability: 'stable',
                        description: 'Looks Good!',
                    },
                    {
                        title: issues[1].name,
                        rating: 14,
                        image: 'assets/img/antennas/issue4.jpeg',
                        issueNum: 223,
                        stability: 'problematic',
                        description: 'problems on the vehiles, alot of cables merged together, cables unconnected',
                    },
                    {
                        title: issues[2].name,
                        rating: 49,
                        issueNum: 324,
                        stability: 'problematic',
                        image: 'assets/img/antennas/issue2.jpg',
                        description: 'problems on the connectors, alot of cables merged together,connector unconnected on right top corner',
                    },
                ]
            },
            {
                _id: '3',

                created: new Date('2018-08-14'),
                rating: 15,
                title: '3451',
                description: 'this is report winter chached with birds nests all over the place.',
                category: 'winder',
                reportId: 3,
                issues: [
                    {
                        title: issues[0].name,
                        rating: 80,
                        issueNum: 112,
                        image: 'assets/img/antennas/3.png',
                        stability: 'stable',
                        description: 'Looks Good!',
                    },
                    {
                        title: issues[1].name,
                        rating: 14,
                        issueNum: 223,
                        stability: 'problematic',
                        image: 'assets/img/antennas/4.JPG',
                        description: 'problems on the vehiles, alot of cables merged together, cables unconnected',
                    },
                    {
                        title: issues[2].name,
                        rating: 49,
                        issueNum: 324,
                        stability: 'problematic',
                        image: 'assets/img/antennas/1.png',
                        description: 'problems on the connectors, alot of cables merged together,connector unconnected on right top corner',
                    },
                ]
            },
        ];
        let attachListeners = ()=> {
            let {$} = window;
            $(document).on('click', '.modal-dialog button.back', function (ev) {
                let $this = $(this);
                let modal = $this.closest('.modal-dialog');
                let siteId = modal.attr('data-id');
                modal.modal('hide');
                modal.find("button.close").click();
                setTimeout(() => {
                    $('.modal-backdrop').remove();
                    modal.remove();
                    window.openModalFromTemplates("#modalItem", siteId, false, window.isFullScreen);//todo make function to handle specific modal open / reopen
                }, 500);
            })
        };
        let redirected = false;
        let redirectToHash = (site)=>{
            console.log(site.longtitude,site.latitude);
            if(!redirected) {
                window.moveToLocation(site.latitude,site.longitude,13);
                window.openModalFromTemplates("#modalItem", site.id, false, window.isFullScreen);
                redirected = true;
            }
        };
        window.handleReportSaved = function (_this, result) {
            _this.modal('hide');
            if (result.site) {
                result.site = result.site._id;
            }
            console.log('successfuly updated site and added Report.\nreport:', result);
            let site = window.locations.find(site => site.id === result.site);
            site.reports.push(result);
            setTimeout(() => {
                window.openModalFromTemplates("#modalItem", result.site, false, window.isFullScreen);//todo make function to handle specific modal open / reopen
            }, 300);
            window.distributeEmails(result,emailList);
        };
        function moveToLocation(lat, lng,zoom =12 ) {
            let lngNum = Number(lng);
            let latNum = Number(lat);
            if (isNaN(latNum) || isNaN(lngNum)) {
                return console.log('error with lat lng values, values : \nlat:', lat, '\nlng:', lng);
            }
            var center = new window.google.maps.LatLng(latNum, lngNum);
            console.log(center.lat(), center.lng());
            window.map.panTo(center);
            setTimeout(() => {
                window.map.setZoom(zoom);
                let bounds = new window.google.maps.LatLngBounds();
                bounds.extend(center);
            }, 400)
        }
        window.moveToLocation= moveToLocation;
        window.heroMap = function (_latitude, _longitude, element, markerTarget, sidebarResultTarget, showMarkerLabels, mapDefaultZoom) {
            attachListeners();
            let placeMarkers = function (markers) {

                newMarkers = [];

                for (let i = 0; i < markers.length; i++) {

                    var marker;
                    var markerContent = document.createElement('div');
                    var thumbnailImage;
                    var color;

                    if (markers[i]["marker_image"] !== undefined) {
                        thumbnailImage = markers[i]["marker_image"];
                    }
                    else {
                        thumbnailImage = "assets/img/items/default.png";
                    }

                    if (markers[i]["marker_color"]) {
                        color = markers[i]["marker_color"];
                    }
                    else {
                        color = "";
                    }


                    if (markers[i]["featured"] === 1) {
                        markerContent.innerHTML =
                            '<div class="marker" data-id="' + markers[i]["id"] + '" data-url="' + markers[i]["url"] + '" data-color="' + color + '" data-i="' + i + '">' +
                            '<div class="title">' + markers[i]["title"] + '</div>' +
                            '<div class="marker-wrapper">' +
                            '<div class="tag"><i class="fa fa-check"/></div>' +
                            '<div class="pin">' +
                            '<div class="image" style="background-image: url(' + thumbnailImage + ');"></div>' +
                            '</div>' +
                            '</div>' +
                            '</div>';
                    }
                    else {
                        markerContent.innerHTML =
                            '<div class="marker" data-id="' + markers[i]["id"] + '" data-url="' + markers[i]["url"] + '"  data-color="' + color + '" data-i="' + i + '">' +
                            '<div class="title">' + markers[i]["title"] + '</div>' +
                            '<div class="marker-wrapper">' +
                            '<div class="pin">' +
                            '<div class="image" style="background-image: url(' + thumbnailImage + ');"></div>' +
                            '</div>' +
                            '</div>';
                    }


                    // Latitude, Longitude and Address

                    if (markers[i]["latitude"] && markers[i]["longitude"] && markers[i]["address"]) {
                        renderRichMarker(i, "latitudeLongitude");
                    }

                    // Only Address

                    else if (markers[i]["address"] && !markers[i]["latitude"] && !markers[i]["longitude"]) {
                        renderRichMarker(i, "address");
                    }

                    // Only Latitude and Longitude

                    else if (markers[i]["latitude"] && markers[i]["longitude"] && !markers[i]["address"]) {
                        renderRichMarker(i, "latitudeLongitude");
                    }

                    // No coordinates
                    else {
                        console.log("No location coordinates for marker: ", markers[i].title);
                    }

                    if(window.location.hash){
                        let hash = window.location.hash;
                        console.log(hash);
                        let redirectedSite = window.locations.find(site=>site.id===hash.slice(1));
                        if(redirectedSite){
                            redirectToHash(redirectedSite);
                        }

                    }
                }

                // Create marker using RichMarker plugin -------------------------------------------------------------------

                function renderRichMarker(index, method) {
                    if (method === "latitudeLongitude") {
                        marker = new RichMarker({
                            position: new window.google.maps.LatLng(markers[index]["latitude"], markers[index]["longitude"]),
                            map: window.map,
                            draggable: false,
                            content: markerContent,
                            flat: true,
                            id: markers[index]["id"]
                        });
                        window.google.maps.event.addListener(marker, 'click', (function (marker, i) {
                            return function () {
                                if (markerTarget === "modal") {
                                    window.openModalFromTemplates("#modalItem", $(this.content.firstChild).attr("data-id"), false, window.isFullScreen);
                                }
                            }
                        })(marker, index));
                        newMarkers.push(marker);
                    }
                    else if (method === "address") {
                        a = index;
                        var geocoder = new window.google.maps.Geocoder();
                        var geoOptions = {
                            address: markers[index]["address"]
                        };
                        geocoder.geocode(geoOptions, geocodeCallback(markerContent));

                    }

                    if (mapAutoZoom === 1) {
                        var bounds = new window.google.maps.LatLngBounds();
                        for (var i = 0; i < newMarkers.length; i++) {
                            bounds.extend(newMarkers[i].getPosition());
                        }
                        window.map.fitBounds(bounds);
                    }
                }

                var markerId;

                $("h2").on("click", function () {
                    if (markerCounter < visibleMarkersOnMap.length - 1) {
                        showNextOrPreviousItem(markerCounter++);
                    }
                });
                $("h3").on("click", function () {
                    if (markerCounter > 0) {
                        showNextOrPreviousItem(markerCounter--);
                    }
                });

                function showNextOrPreviousItem() {
                    markerId = visibleMarkersOnMap[markerCounter].id;
                }

                // Ajax loading of infobox -------------------------------------------------------------------------------------

                var lastInfobox;

                function openInfobox(id, _this, i) {
                    $.ajax({
                        url: "assets/external/infobox.php",
                        dataType: "html",
                        data: {id: id},
                        method: "POST",
                        success: function (results) {
                            let infoboxOptions = {
                                content: results,
                                disableAutoPan: false,
                                pixelOffset: new window.google.maps.Size(-135, -50),
                                zIndex: null,
                                alignBottom: true,
                                boxClass: "infobox-wrapper",
                                enableEventPropagation: true,
                                closeBoxMargin: "0px 0px -8px 0px",
                                closeBoxURL: "assets/img/close-btn.png",
                                infoBoxClearance: new window.google.maps.Size(1, 1)
                            };

                            if (lastInfobox !== undefined) {
                                lastInfobox.close();
                            }

                            newMarkers[i].infobox = new InfoBox(infoboxOptions);
                            newMarkers[i].infobox.open(window.map, _this);
                            lastInfobox = newMarkers[i].infobox;

                            setTimeout(function () {
                                //$("div#"+ id +".item.infobox").parent().addClass("show");
                                $(".item.infobox[data-id=" + id + "]").parent().addClass("show");
                            }, 10);

                            window.google.maps.event.addListener(newMarkers[i].infobox, 'closeclick', function () {
                                $(lastClickedMarker).removeClass("active");
                            });
                        },
                        error: function () {
                            console.log("error");
                        }
                    });
                }

                // Geocoder callback ---------------------------------------------------------------------------------------

                function geocodeCallback(markerContent) {
                    return function (results, status) {
                        if (status === window.google.maps.GeocoderStatus.OK) {
                            marker = new RichMarker({
                                position: results[0].geometry.location,
                                map: window.map,
                                draggable: false,
                                content: markerContent,
                                flat: true,
                                id: parseInt($(markerContent.innerHTML).attr("data-id"))
                            });
                            newMarkers.push(marker);
                            markerCluster.addMarker(marker, true);
                            renderResults();
                            if (mapAutoZoom === 1) {
                                var bounds = new window.google.maps.LatLngBounds();
                                for (var i = 0; i < newMarkers.length; i++) {
                                    bounds.extend(newMarkers[i].getPosition());
                                }
                                window.map.fitBounds(bounds);
                            }
                            window.google.maps.event.addListener(marker, 'click', (function (marker, i) {
                                return function () {
                                    if (markerTarget === "sidebar") {
                                        openSidebarDetail($(this.content.firstChild).attr("data-id"));
                                        //console.log(this);
                                    }
                                    else if (markerTarget === "infobox") {
                                        openInfobox($(this.content.firstChild).attr("data-id"), this, 0);
                                    }
                                    else if (markerTarget === "modal") {
                                        window.openModal($(this.content.firstChild).attr("data-id"), "#modalItem", false, window.isFullScreen);
                                    }

                                }
                            })(marker, i));

                        } else {
                            console.log("Geocode failed: " + status);
                        }
                    }
                }

                // sidebar function

                // Highlight result in sidebar on marker hover -------------------------------------------------------------
                let $marker = $(".marker");
                $marker.live("mouseenter", function () {
                    $(this).closest("[style]").css("z-index", 1);
                });
                $marker.live("mouseleave", function () {
                    $(this).closest("[style]").css("z-index", 0);
                });
                $marker.live("click", function () {
                    //let id = $(this).attr("data-id");
                    $('.marker').removeClass("active");
                    $(this).addClass("active");
                    window.lastClickedMarker = $(this);
                    markerCounter = $(this).attr("data-i");
                    setTimeout(() => {
                        $(this).removeClass("active");
                    }, 800)
                });

                // Marker clusters -----------------------------------------------------------------------------------------

                var clusterStyles = [
                    {
                        url: 'assets/img/cluster.png',
                        height: 36,
                        width: 36
                    }
                ];
                markerCluster = new MarkerClusterer(window.map, newMarkers, {
                    styles: clusterStyles,
                    maxZoom: 16,
                    ignoreHidden: true
                });

                window.google.maps.event.addListener(markerCluster, 'click', function (e) {
                    var markerClusterArray = [];
                    var markerPositionLatitude = [];
                    var markerPositionLongitude = [];

                    for (i = 0; i < e.markers_.length; i++) {
                        markerClusterArray.push($(e.markers_[i].content.innerHTML).attr("data-id"));
                        markerPositionLatitude.push(e.markers_[i].position.lat());
                        markerPositionLongitude.push(e.markers_[i].position.lng());
                    }

                    if (checkIfSame(e.markers_[0].position.lat(), markerPositionLatitude) === true) {
                        if (checkIfSame(e.markers_[0].position.lng(), markerPositionLongitude) === true) {
                            e.markerClusterer_.zoomOnClick_ = false;
                            // window.openModal("multi-choice", "modal_marker_cluster.php", markerClusterArray, window.isFullScreen);
                        }
                    }
                    else {
                        e.markerClusterer_.zoomOnClick_ = true;
                    }
                });

                function checkIfSame(key, arr) {
                    var uniq = $.unique(arr);
                    return uniq.length === 1 && uniq[0] === key;
                }

                // Show results in sidebar after map is moved --------------------------------------------------------------

                window.google.maps.event.addListener(window.map, 'idle', function () {
                    renderResults();
                });
                renderResults();

                // Results in the sidebar ----------------------------------------------------------------------------------
                function renderResults() {
                    resultsArray = [];
                    visibleMarkersId = [];
                    visibleMarkersOnMap = [];

                    for (var i = 0; i < newMarkers.length; i++) {
                        if (window.map.getBounds().contains(newMarkers[i].getPosition())) {
                            visibleMarkersOnMap.push(newMarkers[i]);
                            visibleMarkersId.push($(newMarkers[i].content.firstChild).attr("data-id"));
                            newMarkers[i].setVisible(true);
                        }
                        else {
                            newMarkers[i].setVisible(false);
                        }
                    }
                    markerCluster.repaint();
                }
            };

            function onBoundsChanged() {
                window.isFullScreen = $(window.map.getDiv()).children().eq(0).height() === window.innerHeight &&
                    $(window.map.getDiv()).children().eq(0).width() === window.innerWidth;
            }

            // Geo Location ------------------------------------------------------------------------------------------------
            function success(position) {
                var center = new window.google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                window.map.panTo(center);
                $('#map').removeClass('fade-map');
            }

            function loadData(url, ajaxData, method = 'POST') {
                $.ajax({
                    url: url,
                    dataType: "json",
                    method: method,
                    data: ajaxData,
                    cache: false,
                    success: function (results) {
                        for (let i = 0; i < newMarkers.length; i++) {
                            newMarkers[i].setMap(null);
                        }
                        allMarkers = results;
                        window.locations = results;
                        placeMarkers(results);
                    },
                    error: function (e) {
                        console.log(e);
                    }
                });
            }

            let {
                mapStyle, $, RichMarker, openSidebarDetail, mapAutoZoom,
                InfoBox, lastClickedMarker, MarkerClusterer, automaticGeoLocation,
                autoComplete,
            } = window;
            if (document.getElementById(element) != null) {
                // Create google map first -------------------------------------------------------------------------------------
                if (!mapDefaultZoom) {
                    mapDefaultZoom = 14;
                }

                if (!optimizedDatabaseLoading) {
                    var optimizedDatabaseLoading = 0;
                }
                window.map = new window.google.maps.Map(document.getElementById(element), {
                    zoom: mapDefaultZoom,
                    scrollwheel: true,
                    center: new window.google.maps.LatLng(_latitude, _longitude),
                    //mapTypeId: "roadmap",
                    styles: [mapStyle]
                });
                setTimeout(() => {
                    window.map.setOptions({styles: mapStyle, scrollwheel: true,})
                }, 0);

                var allMarkers;

                //  When optimization is enabled, map will load the data in Map Bounds every time when it's moved. Otherwise will load data at once

                if (optimizedDatabaseLoading === 1) {
                    window.google.maps.event.addListener(window.map, 'idle', function () {
                        if (window.searchClicked !== 1) {
                            var ajaxData = {
                                optimized_loading: 1,
                                north_east_lat: window.map.getBounds().getNorthEast().lat(),
                                north_east_lng: window.map.getBounds().getNorthEast().lng(),
                                south_west_lat: window.map.getBounds().getSouthWest().lat(),
                                south_west_lng: window.map.getBounds().getSouthWest().lng()
                            };
                            if (markerCluster !== undefined) {
                                markerCluster.clearMarkers();
                            }
                            loadData("https://0zx2os04v7.execute-api.eu-west-1.amazonaws.com/dev/locations", ajaxData, "GET");
                        }
                    });
                }
                else {
                    window.google.maps.event.addListenerOnce(window.map, 'idle', function () {
                        loadData("https://0zx2os04v7.execute-api.eu-west-1.amazonaws.com/dev/locations", null, "GET");
                    });
                }

                if (showMarkerLabels === true) {
                    $(".hero-section .map").addClass("show-marker-labels");
                }

                // Create and place markers function ---------------------------------------------------------------------------

                var i;
                var a;
                var newMarkers = [];
                var resultsArray = [];
                var visibleMarkersId = [];
                var visibleMarkersOnMap = [];
                var markerCluster;
                var markerCounter = -1;


                /* Check if Google Maps are in fullscree mode */

                window.google.maps.event.addListener(window.map, 'bounds_changed', onBoundsChanged);

                let nextIndexSite = 0;
                $("[data-ajax-response='map']").on("click", function (e) {//search form on map click listener....
                    e.preventDefault();


                    let locationFields = [
                        {name:'haifa',lat:32.794273,lng:34.989132},
                        {name:'jerusalem',lat:31.767698,lng: 35.212793},
                        {name:'tel-aviv',lat:32.064062,lng: 34.777986},
                        {name:'beer-sheva',lat:31.252010, lng:34.787117},
                        ];
                    // return moveToLocation(locationFields[0].lat,locationFields[0].lng,10);
                    // var dataFile = $(this).attr("data-ajax-data-file");
                    window.searchClicked = 1;
                    if ($(this).attr("data-ajax-auto-zoom") === 1) {
                        window.mapAutoZoom = 1;
                    }
                    var form = $(this).closest("form");
                    var ajaxData = form.getForm2obj();
                    let siteId = ajaxData['keyword'];
                    let locationValue = ajaxData['location'];
                    let categoryValue = ajaxData['category'];
                    let sitesResult = window.locations.filter(site => (site.title.toLowerCase().includes(("" + siteId).toLowerCase())));
                    console.log(sitesResult);
                    if (sitesResult.length > 0&&(siteId||!siteId&&!locationValue&&!categoryValue)) {
                        if (!sitesResult[nextIndexSite]) {
                            nextIndexSite = 0;
                        }
                        let {latitude, longitude} = sitesResult[nextIndexSite];
                        window.moveToLocation(latitude, longitude,13);
                        nextIndexSite++;
                        return;
                    }
                    if(locationValue){
                        let locationResult = locationFields.find(field => field.name===locationValue);
                        moveToLocation(locationResult.lat,locationResult.lng,10);
                        return;
                    }
                    let categoryResult = window.locations.filter(site =>site.type.replace(' ', '-').toLowerCase()===categoryValue.toLowerCase());

                    if(categoryResult.length>0&&categoryValue){
                        if (!categoryResult[nextIndexSite]) {
                            nextIndexSite = 0;
                        }
                        let {latitude, longitude} = categoryResult[nextIndexSite];
                        moveToLocation(latitude, longitude,14);
                        nextIndexSite++;
                        return;
                    }
                });

                // Geo Location on button click --------------------------------------------------------------------------------
                $(".geo-location").on("click", function () {
                    if (navigator.geolocation) {
                        $('#map').addClass('fade-map');
                        navigator.geolocation.getCurrentPosition(success);
                    } else {
                        console.log('Geo Location is not supported');
                    }
                });

                // Automatic Geo Location

                if (automaticGeoLocation === true) {
                    navigator.geolocation.getCurrentPosition(success);
                }

                // Autocomplete

                autoComplete(window.map);
                //window.assignValues();
            }
            else {
                console.error("No map element");
            }
        };
        window.openReportSubscription = function (ev) {
            let {$, submitFormListener} = window;
            let $this = $(this),
                item_Id = $this.closest('.modal-item-detail').attr('data-id');
            let $modal = $(`#${item_Id}.modal`);
            let $child = $modal.find(".modal-report");
            $child.removeClass("width-800px");
            $child.addClass("width-700px");
            let site = window.locations.find(site => (site.id === item_Id));
            $modal.html(window.Templates['reportSubmit'](site));
            let issuesLength = renderReportDetails().length;
            applyMultiFileFields(issuesLength);
            submitFormListener($modal.find('form'), $modal, 'sites/' + item_Id + '/reports');
        };
        window.openModalFromTemplates = (key, target, clusterData,) => {
            let {
                $, Templates, mapsFullScreen, socialShare, lastClickedMarker, submitFormListener, google, simpleMap,
                initializeOwl, initializeFitVids, initializeReadMore,
            } = window;
            window.lastClickedMarker = lastClickedMarker;
            window.mapsFullScreen = mapsFullScreen;
            key = key.slice(1);
            // if(true)return;
            if (key !== 'modalSubmit' && key !== 'modalItem') return;
            $("body").append('<div class="modal modal-external fade" id="' + target + '" tabindex="-1" data-backdrop="static" role="dialog" aria-labelledby="' + target + '"><i class="loading-icon fa fa-circle-o-notch fa-spin"/></div>');
            let $targetModal = $("#" + target + ".modal");
            $targetModal.on("show.bs.modal", function () {
                let _this = $(this);
                window.lastModal = _this;
                let site = window.locations.find((item => (item.id === target))) || {};
                if (useCahcedReportsForView && (!site.reports || site.reports.length < 1)) {
                    site.reports = chachedReports;
                }
                InsertTemplate(Templates[key](target, site), _this);
            });
            let InsertTemplate = (results, _this) => {
                let {initializeDateTimePicker, openModal, mapsFullScreen, socialShare, lastClickedMarker, submitFormListener} = window;
                lastClickedMarker = window.lastClickedMarker;
                _this.append(results);
                if ($('link[href="assets/css/bootstrap-select.min.css"]').length === 0) {
                    $('head').append($('<link rel="stylesheet" type="text/css">').attr('href', 'assets/css/bootstrap-select.min.css'));
                }
                $(".selectpicker").selectpicker();
                if ($("input[type=file]").length || key === 'modalSubmit') {
                    applyMultiFileFields();
                }
                if ($(".date-picker").length) {
                    $.getScript("assets/js/bootstrap-datetimepicker.min.js", function () {
                        initializeDateTimePicker();
                    });
                }
                if (clusterData) {
                    _this.find(".result-item").children("a").on("click", function (e) {
                        e.preventDefault();
                    });
                }
                _this.find(".gallery").addClass("owl-carousel");
                window.ratingPassive(_this);
                var img = _this.find(".gallery img:first")[0];
                if (img) {
                    $(img).load(function () {
                        timeOutActions(_this);
                    });
                } else {
                    timeOutActions(_this);
                }
                var title = $(results).find("h2").text();
                socialShare(window.location + "?title=" + title.replace(/\s+/g, '-').toLowerCase());// todo figure out what is social share
                _this.on("hidden.bs.modal", function () {
                    $(window.lastClickedMarker).removeClass("active");
                    $(".pac-container").remove();
                    _this.remove();
                });
                submitFormListener($(_this).find('form'), _this);
            };
            let onLatLngChange = (marker) => {
                $('#lat,#lng').on('blur', () => {
                    let lat = $('#lat').val();
                    let lng = $('#lng').val();
                    if (!!lat && !!lng) {
                        marker.setPosition(new google.maps.LatLng(lat, lng));
                        google.maps.event.trigger(marker, 'dragend');
                    }
                });
            };

            function timeOutActions(_this) {
                _this.addClass("show");

                setTimeout(function () {
                    if (_this.find(".map").length) {
                        if (_this.find(".modal-dialog").attr("data-address")) {
                            simpleMap(0, 0, "map-modal", _this.find(".modal-dialog").attr("data-marker-drag"),
                                _this.find(".modal-dialog").attr("data-address"));
                        }
                        else {
                            simpleMap(_this.find(".modal-dialog").attr("data-latitude"), _this.find(".modal-dialog").attr("data-longitude"),
                                "map-modal", _this.find(".modal-dialog").attr("data-marker-drag"), null,
                                (marker, map) => {
                                    onLatLngChange(marker);
                                    setTimeout(() => {
                                        google.maps.event.trigger(map, 'resize');
                                    }, 1000);
                                },
                                {
                                    fullscreenControl: true,
                                    mapTypeControl: true,
                                }
                            );
                        }
                    }
                    initializeOwl();
                    initializeFitVids();
                    initializeReadMore();
                    let $tse = $(".tse-scrollable");
                    if (typeof $tse.TrackpadScrollEmulator === 'function') {
                        $tse.TrackpadScrollEmulator()
                    }
                }, 200);
            }

            $targetModal.modal("show");

        };
        window.submitFormListener = (formElement, _this, url = 'sites') => {
            formElement.on('submit', (ev) => {
                let assignToArray = (arr, items) => {
                    arr = arr || [];
                    arr = arr.concat(items);
                    return arr;
                };
                let ajaxCall = (formDetailsObject) => {
                    $.ajax({
                        url: 'https://0zx2os04v7.execute-api.eu-west-1.amazonaws.com/dev/' + url,
                        method: "POST",
                        data: JSON.stringify(formDetailsObject),
                        dataType: "json",
                        success: (result) => {
                            let urlArray = url.split('/');
                            if (urlArray.length === 3 && urlArray[2] === 'reports') {
                                window.handleReportSaved(_this, result);
                            }
                        },
                        error: (jqXHR, textStatus, errorThrown) => {
                            console.log(errorThrown);
                        }
                    })
                };
                let {moment, $} = window;
                ev.preventDefault();
                let formDetailsObject = formElement.getForm2obj();
                if (formDetailsObject.issues && formDetailsObject.issues[0]) {
                    let array = [];
                    let i = 0;
                    while (formDetailsObject.issues[i]) {
                        array.push(formDetailsObject.issues[i]);
                        i++;
                    }
                    formDetailsObject.issues = array;
                }
                formDetailsObject.created = moment().format();
                // console.log(formDetailsObject);
                let fileInput = formElement.find('input[type="file"]');
                if (fileInput.length > 0) {
                    let filePromises = [];
                    for (let i = 0; i < fileInput.length; i++) {
                        filePromises.push(filesToBase64(fileInput[i].files, fileInput[i]));
                    }
                    Promise.all(filePromises).then((result) => {
                        result.forEach((item) => {
                            let $item = $(item.input);
                            if ($item.hasClass('item')) {
                                formDetailsObject.issues[$item.attr('name')[7]].gallery = assignToArray(formDetailsObject.issues[$item.attr('name')[7]].gallery, item.files);
                            } else {
                                formDetailsObject.gallery = assignToArray(formDetailsObject.gallery, item.files);
                            }
                        });
                        ajaxCall(formDetailsObject);
                        console.log("filesToBase64 success:", formDetailsObject);
                    }).catch(e => {
                        console.log(e);
                    });
                }
                else {
                    ajaxCall(formDetailsObject);
                }
                return false;
            });
        };
        window.Templates = {
            modalSubmit: () => {
                return `<div class="modal-dialog width-800px" role="document" data-latitude="31.771959" data-longitude="35.217018" data-marker-drag="true" >
<div class="modal-content" >
    <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <div class="section-title">
            <h2>${window.t('Site_submit_title')}</h2>
        </div>
    </div>
    <div class="modal-body">
        <form class="form inputs-underline">
            <section>
                <div class="row">
                    <div class="col-md-7 col-sm-9">
                        <div class="form-group">
                            <label for="title">${window.t('SITE_ID')}</label>
                            <input type="text" class="form-control" required name="provAntennaId" id="provAntennaId" placeholder="Proveider Antenna's ID">
                        </div>
                        <!--end form-group-->
                    </div>
                    <!--end col-md-9-->
                    <div class="col-md-5 col-sm-3">
                        <div class="form-group">
                            <label for="category">${window.t('SITE_TYPE_TITLE')}</label>
                            <select class="form-control selectpicker" name="type" id="type" required>
                                <option value="">Site Type</option>
                                <option value="Rooftop-Site">Rooftop Site</option>
                                <option value="Cell-Tower-Site">Cell Tower Site</option>
                                <option value="Small-Cell">Small Cell</option>
                                <option value="Outdoor-DAS">Outdoor DAS</option>
                                <option value="Indoor-DAS">Indoor DAS</option>
                            </select>
                        </div>
                        <!--end form-group-->
                         
                    </div>
                    <!--col-md-3-->
                    <div class="col-sm-12">
                        <div class="form-group">
                            <label for="description">Description</label>
                            <textarea class="form-control dectiption-add-site" style="resize:vertical" id="description" rows="4" name="description" placeholder="Describe the Antenna for deep undrestanding"></textarea>
                        </div>
                    </div>
                    

                </div>
               
            </section>
            
            <section>
                <h3>Area</h3>
                <div class="row">
                    <div class="col-md-6 col-sm-6">
                        <div class="form-group">
                            
                        </div>
                        <!--end form-group-->
                        <div class="map height-200px shadow" id="map-modal"></div>
                        <!--end map-->
                        <div class="form-group hidden">
                            <!--<input type="text" class="form-control" id="latitude" name="latitude" hidden="">-->
                            <!--<input type="text" class="form-control" id="longitude" name="longitude" hidden="">-->
                        </div>
                        <p class="note">Enter the exact latitude and longtitude or drag the map marker to position</p>
                    </div>
                    <div class="col-md-6 col-sm-6">
                        <div class="form-group">
                            <label for="lat">Latitude</label>
                            <input type="number" step="0.0000000001" class="form-control" name="location[lat]" id="lat" placeholder="Phone number" required>
                        </div>
                        <div class="form-group">
                            <label for="lng">Longtitude</label>
                            <input type="number" step="0.0000000001" class="form-control" name="location[lng]" id="lng" placeholder="Phone number" required>
                        </div>
                        <div class="form-group">
                            <label for="address-autocomplete disbaled">Address</label>
                            <input type="text" readonly="readonly" class="form-control" name="address" id="address" placeholder="Address" required>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <h3>Details</h3>
                <div class="row">
                    <div class="col-md-6 col-sm-12">
                        <label for="contact">Contact Deliver</label>
                        <input type="email" class="form-control" name="contact" id="contact" placeholder="example@email.com">
                    </div>
                    <div class="col-md-12 col-sm-12">
                        <div class="file-upload">
                            <input type="file" name="files[]" class="file-upload-input with-preview" multiple="multiple" title="Click to add files" maxlength="10" accept="jpg|png">
                            <span>Click or drag images here</span>
                        </div>
                        <div class="file-upload-previews"></div>
                    </div>
                </div>
            </section>
            <hr>
            <section class="center">
                <div class="form-group">
                    <button type="submit" class="btn btn-primary btn-rounded">Add Site</button>
                </div>
            </section>
        </form>
    </div>
</div>
</div>`
            },
            modalItem: (id, site) => {
                function compareDates(a, b) {
                    a = new Date(a.created);
                    b = new Date(b.created);
                    return a > b ? -1 : a < b ? 1 : 0;
                }

                return `<div class="modal-item-detail modal-dialog" role="document" data-latitude="${site.latitude}" data-longitude="${site.longitude}" data-address data-id="${id}">
    <div class="modal-content">
        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <div class="section-title">
                <h2>${site.title}                 
                <span class="location" style="margin-left: 3px;font-size: 15px;">${site.address.split(',').length > 1 ? site.address.split(',')[site.address.split(',').length - 2].trim() : site.address}</span>
                </h2>
                <div class="label label-default">${site.type}</div>
                <div class="rating-passive" data-rating="${site.rating}">
                        <span class="stars"></span>
                        <span class="reviews">${site.reports && false ? site.reports.length : 4}</span>
                       

                    </div>
                <div class="controls-more">
                    <ul>
                        <li class="add-report"><a href="#">Add New Report</a></li>
                        <li class="edit-site"><a href="#">Edit Site Profile</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="modal-body">
            <div class="left">
            <div class="gallery">
            ${site.gallery.length > 0 ? site.gallery.map((image) => (`<img src="${image}">`)).join('\n') : site.marker_image ? `<img src="${site.marker_image}">` : ''}
            </div>
                <div class="map height-200px shadow" id="map-modal"></div>
                <section>
                <h3>Contact</h3>
                <h5><i class="fa fa-map-marker"></i>${site.address}</h5>
                <h5><i class="fa fa-phone"></i>${`Lng: ${site.longitude}, Lat:${site.latitude}`}</h5>
                <h5><i class="fa fa-envelope"></i>${site.contact}</h5>
                </section>
            </div>
            <div class="right">
                <section>
                    <h3>Overview</h3>
                    <div class="read-more"><p>${site.description}</p></div>
                </section>
                <section class="report-list">
                        <h3><strong>Latest Reports</strong></h3>
                        ${site.reports ? site.reports.sort(compareDates).map((report) => (`<div class="review report-item" data-id="${report._id}" title="${report.description}">
                                <div class="image">
                                     <div class="bg-transfer" >
                                         <div class="c100 p${Math.round(Number(report.rating))} small ${Number(report.rating) > 50 ? 'green' : Number(report.rating) > 30 ? 'orange' : 'red'}">
                                              <span>${Number(report.rating).toFixed(0)}%</span>
                                              <div class="slice">
                                                   <div class="bar"></div>
                                                   <div class="fill"></div>
                                              </div>
                                         </div>
                                     </div>
                                </div>
                                <div class="description">
                                    <figure>
                                        <div class="rating-passive" data-rating="${(Number(report.rating) * 5) / 100}">
                                            <span class="stars"></span>
                                        </div>
                                        <span class="date">${report.created ? new Date(report.created).toDateString() : ''}</span>
                                    </figure>
                                    <h5>${report.title}</h5>
                                    <p>${report.description ? (report.description.length > 70 ? report.description.slice(0, 66) + '...' : report.description) : 'no description to this report'}</p>
                                </div>
                            </div>
                            `)).join('\n') : 'No Reports in this site...'}
                        </section>
                </div>
        </div>
    </div>
</div>`
            },
            reportSubmit: (site) => {
                return`<div class="modal-dialog modal-report width-800px" role="document" data-marker-drag="true" data-id="${site.id}">
<div class="modal-content">
    <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>
    <section>
        <div class="section-title" style="overflow: auto;height: auto">
            <div class="col-xs-10">
                <h2>New Report</h2>
            </div>
            <div class="pull-right" >
                    <button type="button" class="back" />
            </div>
        </div>
        <div>
            <h3 style="margin-bottom: 10px">Site:</h3>
            <div class="row small-font">
                <div class="col-md-2 col-sm-2">
                    <h5 for="title"><strong>Site Name</strong>: <br>${site.address}</h5>
                </div>
                <div class="col-md-2 col-sm-2">
                     <h5 for="title"><strong>Site ID</strong>: <br>${site.title}</h5>
                </div> 
                ${site.created ? `
                <div class="col-md-2 col-sm-2">
                     <h5 for="title"><strong>Site Date</strong>: <br>${new Date(site.created).toLocaleDateString()}</h5>
                </div>  ` : '<div class="col-md-2 col-sm-2"></div>'}
                <div class="col-md-2 col-sm-2">
                   <h5 for="title"><strong>Site Type</strong>: <br>${site.type}</h5>
                </div>
            </div>
        </div>
    </section>
    <hr>
 
    <div class="modal-body">
        <form class="form inputs-underline report-form">
            <section>
                <div class="row">
                    <div class="col-xs-9">
                        <div class="form-group">
                            <label for="title"><i class="fa fa-picture-o" aria-hidden="true"></i> Image</label>
                            <div class="file-upload">
                                <input type="file" name="files[]" class="file-upload-input with-preview" multiple="multiple" title="Click to add files" maxlength="10" accept="jpg|png">
                                <span>Click or drag images here</span>
                            </div>
                        <div class="file-upload-previews"></div>                        
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-3">
                       <div class="form-group">
                           <label for="category">Category</label>
                           <select class="form-control selectpicker" name="category" id="category">
                               <option value="">Category</option>
                               <option value="1">Winter</option>
                               <option value="2">Summer</option>
                           </select>
                       </div>
                    </div>
                   
                </div>

            </section>
            <section class="reports">
                <h3>Report Details:</h3>
            </section>
            <section>
                <div class="row left">
                    <div class="col-md-9 col-sm-9">
                       <div class="form-group">
                           <label for="title">Filled By: </label>
                           <input type="text" class="form-control" name="filledBy" id="title" placeholder="name">
                       </div>
                    </div>
                    <div class="col-sm-12">
                        <div class="form-group">
                            <label for="description">Report Summary</label>
                            <textarea class="form-control" style="resize:vertical" id="description" rows="4" name="description" placeholder="Summary to indicate report issues."/>
                        </div>
                    </div>
                </div>
            </section>
            <section class="center">
                
                <div class="form-group">
                    <button type="submit" class="btn btn-primary btn-rounded">Add Report</button>
                </div>
            </section>
        </form>
    </div>
</div>
</div>`
            },
            modalReportView: (report, antennaId,) => {
                let {t } = window;
                let antenna = window.locations.find((location) => location.id === antennaId);
                return `<div class="modal-dialog modal-report width-800px" role="document" data-marker-drag="true" 
    data-id="${antennaId}">
<div class="modal-content">
   <div class="modal-header">
       <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
               aria-hidden="true">&times;</span></button>
       <div class="section-title">
           <h2 class="pull-left">${report.category ? report.category.charAt(0).toUpperCase() + report.category.slice(1) : ''} ${report.title ? 'Report ' + report.title.charAt(0).toUpperCase() + report.title.slice(1) : ' - no ID.'}</h2>
           <div class="pull-right">
                    <img  src="${report.providerLogo}" alt="">
                    <button type="button" class="back"></button>
           </div>
       </div>
   </div>
   <div class="modal-body">
       <section>
       <h3 style="margin-bottom: 10px">${t('site_title')}:</h3>
               <div class="row small-font">
                   <div class="col-md-2 col-sm-2">
                           <h5 for="title"><strong>${t('site_name')}</strong>: <br>${antenna.address}</h5>
                   </div>
                   <div class="col-md-2 col-sm-2">
                         <h5 for="title"><strong>${t('site_id')}</strong>: <br>${antenna.title}</h5>
                   </div> 
                   ${antenna.created ? `
                   <div class="col-md-2 col-sm-2">
                         <h5 for="title"><strong>${t('site_date')}</strong>: <br>${new Date(antenna.created).toLocaleDateString()}</h5>
                   </div>  ` : '<div class="col-md-2 col-sm-2"></div>'}
                   <div class="col-md-2 col-sm-2">
                         <h5 for="title"><strong>${t('site_type')}</strong>: <br>${antenna.type}</h5>
                   </div>
                    ${antenna.contact ? `
                   <div class="col-md-2 col-sm-2">
                         <h5 for="title"><strong>${t('filled_by')}</strong>: <br>${report.filledBy || 'Not Assigned'}</h5>
                   </div>  ` : '<div class="col-md-2 col-sm-2"></div>'}
               </div>
           </section>
           <hr>
           <section>
               <div class="row">
                  <!-- <div class="col-md-9 col-sm-9">
                       <div class="form-group">
                           <h2 for="title">${'Report Details'}</h2>
                       </div>
                   </div>-->
                   ${report.vid ? `<div class="col-xs-12 report-video">
                        <h6>${t('site_video')}:</h6>
                        <video width="320" height="240" controls>
                          <source src="${report.vid}" type="video/mp4">
                          Your browser does not support the video tag.
                        </video>                   
                   </div>` : ''}
               </div>
           </section> 
           <section class="reports">
                <div class="col-md-9 col-sm-9">
                            <h3>${t('report_details')}:</h3>
                </div>
                <div class="col-md-3 col-sm-3">
                     <h4 for="category"></h4>
                </div>  
                ${report.issues ? report.issues.map(issue => window.Templates['issue'](issue)).join('') : ''}
                ${report.description ? `<div class=col-xs-12>
                    <h3>Summary:</h3>
                    <div class="col-xs-10">
                        <p>${report.description}</p>
                    </div>
                    <div class="col-xs-2">`:''}
                    <h6>Overall Rating</h6>
                        <div class="c100 p${Math.round(Number(report.rating))} small ${Number(report.rating) > 50 ? 'green' : Number(report.rating) > 30 ? 'orange' : 'red'}">
                             <span>${Number(report.rating)}%</span>
                             <div class="slice">
                                  <div class="bar"></div>
                                  <div class="fill"></div>
                             </div>
                        </div>
                    </div>
                    
                </div>
           </section>
           <hr>
           <section class="center">
               <div class="form-group">
                   <button type="submit" class="btn btn-primary btn-rounded back-to-site">${t('back_to_site_button')}</button>
               </div>
           </section>
       </form>
   </div>
</div>
</div>`     },
            issue: (issue) => {
                let {t} = window;
                return `<div class="issue row">
    <div class="col-xs-7">
        <h3>${t(issue.title)}</h3>
        <div class ='issue-subtitle' style="">
            <h5>Issue Number: ${issue.issueNum}</h5>
            <p>${issue.description}</p>
        </div>
    </div>
    <div class="col-xs-2 " >
        <div class="c100 p${Math.round(Number(issue.rating))} small ${Number(issue.rating) > 50 ? 'green' : Number(issue.rating) > 30 ? 'orange' : 'red'}">
             <span>${Number(issue.rating)}%</span>
             <div class="slice">
                  <div class="bar"></div>
                  <div class="fill"></div>
             </div>
        </div>
    </div>
    <div class="col-xs-3" style="height:100%;border-left: 1px solid var(--light-grey);text-align: right;overflow: hidden">
        <a href="${issue.gallery && issue.gallery[0] ? issue.gallery[0] : issue.image ? issue.image : 'https://via.placeholder.com/150x100/000000/FFFFFF/?text=No+Image+Placed+Here'}" 
        data-lightbox="image-issues" data-title="${issue.title.charAt(0).toUpperCase() + issue.title.slice(1)}">
            <img style="height: 100px"  src="${issue.gallery && issue.gallery[0] ? issue.gallery[0] : issue.image ? issue.image : 'https://via.placeholder.com/150x100/000000/FFFFFF/?text=No+Image+Placed+Here'}" alt="report">
        </a>
    </div>
</div>`
            },
            issueSubmit: (issueName, id, i) => {
                let {$,t} = window;
                let template = $(
                    `<div class="form-group detail">
                        <div class="flex-wrap-form-group">
                        <label for="integrity">${t(issueName)}</label>
                  <select class="form-control selectpicker" name="issues[${i}][stability]" id="${id}" required>
                      <option value="Not Relevant">Not Relevant</option>
                      <option value="Stable">Stable</option>
                      <option value="Problematic">Problematic</option>
                  </select>
                  <input class="input" type="number" placeholder="Issue Num." name="issues[${i}][issueNum]" value="100">
                  <input type="hidden" name="issues[${i}][title]" value="${t(issueName)}" />
                        </div>
                  
                  <textarea class="form-control" id="'${id}_desc" rows="4" name="issues[${i}][description]"
                                placeholder="describle the issue"/>
                <div class="url-input">
                    <label><i class="fa fa-picture-o" aria-hidden="true"/> Image</label>
                    <div class="file-upload">
                        <input id="file-upload_${i}" type="file" name="issues[${i}][image]" class="file-upload-input item with-preview" multiple="multiple" title="Click to add files" maxlength="10" accept="jpg|png">
                        <span>Click or drag images here</span>
                    </div>
                    <div id="image-preview_${i}" class="file-upload-previews item"></div>
                    <label>Rating</label>
                    <input id="${id}_slider" class="slider" data-slider-id="${id}_slider" type="number" data-slider-min="1" data-slider-max="100" 
                           name="issues[${i}][rating]" data-slider-step="1" data-slider-value="100"/>
                </div>
            </div>`
                );
                let slider = template.find("#" + id + "_slider");
                slider.slider({tooltip: 'always',});
                slider.trigger('slide');
                return template;
            },
        };

//  Render report details-----------------------------------------------------------------------------------------------
        function renderReportDetails() {
            let {$} = window;
            let {issueSubmit} = window.Templates;

            let $reports = $('.reports');
            issues.forEach((issue, i) => {
                $reports.append(issueSubmit(issue.name + ":", issue.id, i));
            });
            return issues;
        }
    };
    componentDidMount = () => {
        console.log('assigned');
        document.addEventListener('initializeScripts', () => {
            let {$, locations, Templates} = window;
            window.locations = locations;
            console.log('executed');
            let location = {
                latitude: 31.9523593733,
                longtitude: 34.925565815
            };
            var optimizedDatabaseLoading = 0;
            var _latitude = location.latitude;
            var _longitude = location.longtitude;
            var element = "map-homepage";
            var markerTarget = "modal"; // use "sidebar", "infobox" or "modal" - defines the action after click on marker
            var sidebarResultTarget = "sidebar"; // use "sidebar", "modal" or "new_page" - defines the action after click on marker
            var showMarkerLabels = true; // next to every marker will be a bubble with title
            var mapDefaultZoom = 10; // default zoom
            window.heroMap(_latitude, _longitude, element, markerTarget, sidebarResultTarget, showMarkerLabels, mapDefaultZoom);
            $(document).on('click', '.add-report', function (ev) {
                window.openReportSubscription.bind(this)(ev);
            });
            $(document).on('click', '.report-list .report-item', function (ev) {
                let $this = $(this),
                    report_id = $this.attr('data-id'),
                    antenna_Id = $(this).closest('.modal-item-detail').attr('data-id');
                let $modal = $(`#${antenna_Id}.modal`);
                let $child = $modal.find(".modal-report");
                $child.removeClass("width-800px");
                $child.addClass("width-700px");
                let site = window.locations.find((item => (item.id === antenna_Id)));
                let report = site.reports.find((item) => item._id + '' === report_id);
                // console.log("site:",site,"\nreport: ", report_id);
                $modal.html(Templates['modalReportView'](report, antenna_Id));
                //renderReportDetails() todo: implement come back to
            });
        })
    };
    componentDidUpdate = () =>{
    };
    render() {
        // noinspection CheckTagEmptyBody
        return (
            <div className="map" id="map-homepage"></div>
        )
    }
}
let MainMapTranslated = withTranslation()(MainMap);
export default MainMapTranslated;