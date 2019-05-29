import React ,{Component} from 'react';

class MainMap extends Component{
    constructor(props){
        super(props);
    }
    componentWillMount=()=>{

        window.heroMap  = function(_latitude, _longitude, element, markerTarget, sidebarResultTarget, showMarkerLabels, mapDefaultZoom) {
            let {mapStyle,$,RichMarker,openSidebarDetail,mapAutoZoom,
                InfoBox,
                lastClickedMarker,
                MarkerClusterer,
                automaticGeoLocation,
                autoComplete,} = window;
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
                }, 0)

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
                            loadData("https://a3j3kyatgb.execute-api.eu-west-1.amazonaws.com/dev/locations", ajaxData, "GET");
                        }
                    });
                }
                else {
                    window.google.maps.event.addListenerOnce(window.map, 'idle', function () {
                        loadData("https://a3j3kyatgb.execute-api.eu-west-1.amazonaws.com/dev/locations", null, "GET");
                    });
                }

                if (showMarkerLabels == true) {
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

                let placeMarkers = function (markers) {

                    newMarkers = [];

                    for (let i = 0; i < markers.length; i++) {

                        var marker;
                        var markerContent = document.createElement('div');
                        var thumbnailImage;
                        var color;

                        if (markers[i]["marker_image"] != undefined) {
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


                        if (markers[i]["featured"] == 1) {
                            markerContent.innerHTML =
                                '<div class="marker" data-id="' + markers[i]["id"] + '" data-url="' + markers[i]["url"] + '" data-color="' + color + '" data-i="' + i + '">' +
                                '<div class="title">' + markers[i]["title"] + '</div>' +
                                '<div class="marker-wrapper">' +
                                '<div class="tag"><i class="fa fa-check"></i></div>' +
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

                        // if( useColorMarkers === true ){
                        //     if( markers[i]["marker_color"] ){
                        //         var style = document.createElement("style");
                        //         document.head.appendChild(style);
                        //         document.styleSheets[0].insertRule('.map .marker[data-color="'  + color + '"] .marker-wrapper::before { background-color: '  + color + '}', 0);
                        //         document.styleSheets[0].insertRule('.map .marker[data-color="'  + color + '"] .marker-wrapper .pin { border-color: '  + color + '}', 0);
                        //         document.styleSheets[0].insertRule('.map .marker[data-color="'  + color + '"] .marker-wrapper .pin::before { background-color: '  + color + '}', 0);
                        //         document.styleSheets[0].insertRule('.map .marker[data-color="'  + color + '"] .marker-wrapper .pin::before { border-color: '  + color + '}', 0);
                        //         document.styleSheets[0].insertRule('.map .marker[data-color="'  + color + '"] .marker-wrapper .pin .image::after { border-color: '  + color + ' transparent transparent transparent }', 0);
                        //         document.styleSheets[0].insertRule('.map .marker[data-color="'  + color + '"] .marker-wrapper .tag { background-color: '  + color + '}', 0);
                        //         document.styleSheets[0].insertRule('.hero-section .results-wrapper .result-item[data-id="'  + markers[i]["id"] + '"] > a::before { background-color: '  + color + '}', 0);
                        //         document.styleSheets[0].insertRule('.sidebar-content[data-id="'  + markers[i]["id"] + '"] .label { background-color: '  + color + '}', 0);
                        //     }
                        // }


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
                    }

                    // Create marker using RichMarker plugin -------------------------------------------------------------------

                    function renderRichMarker(i, method) {
                        if (method == "latitudeLongitude") {
                            marker = new RichMarker({
                                position: new window.google.maps.LatLng(markers[i]["latitude"], markers[i]["longitude"]),
                                map: window.map,
                                draggable: false,
                                content: markerContent,
                                flat: true,
                                id: markers[i]["id"]
                            });
                            window.google.maps.event.addListener(marker, 'click', (function (marker, i) {
                                return function () {
                                    if (markerTarget === "sidebar") {
                                        openSidebarDetail($(this.content.firstChild).attr("data-id"));
                                    }
                                    else if (markerTarget === "infobox") {
                                        openInfobox($(this.content.firstChild).attr("data-id"), this, i);
                                    }
                                    else if (markerTarget === "modal") {
                                        window.openModal($(this.content.firstChild).attr("data-id"), "#modalItem", false, window.isFullScreen);
                                    }
                                }
                            })(marker, i));
                            newMarkers.push(marker);
                        }
                        else if (method == "address") {
                            a = i;
                            var geocoder = new window.google.maps.Geocoder();
                            var geoOptions = {
                                address: markers[i]["address"]
                            };
                            geocoder.geocode(geoOptions, geocodeCallback(markerContent));

                        }

                        if (mapAutoZoom == 1) {
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

                                if (lastInfobox != undefined) {
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
                            if (status == window.google.maps.GeocoderStatus.OK) {
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
                                if (mapAutoZoom == 1) {
                                    var bounds = new window.google.maps.LatLngBounds();
                                    for (var i = 0; i < newMarkers.length; i++) {
                                        bounds.extend(newMarkers[i].getPosition());
                                    }
                                    window.map.fitBounds(bounds);
                                }
                                window.google.maps.event.addListener(marker, 'click', (function (marker, i) {
                                    return function () {
                                        if (markerTarget == "sidebar") {
                                            openSidebarDetail($(this.content.firstChild).attr("data-id"));
                                            //console.log(this);
                                        }
                                        else if (markerTarget == "infobox") {
                                            openInfobox($(this.content.firstChild).attr("data-id"), this, 0);
                                        }
                                        else if (markerTarget == "modal") {
                                            window.openModal($(this.content.firstChild).attr("data-id"), "#modalItem", false, window.isFullScreen);
                                        }

                                    }
                                })(marker, i));

                            } else {
                                console.log("Geocode failed " + status);
                            }
                        }
                    }

                    // sidebar function

                    // Highlight result in sidebar on marker hover -------------------------------------------------------------

                    $(".marker").live("mouseenter", function () {
                        var id = $(this).attr("data-id");
                        $(".results-wrapper .results-content .result-item[data-id=" + id + "] a").addClass("hover-state");
                        //console.log( $(this).parent("div").parent("div").parent("div") );
                        $(this).closest("[style]").css("z-index", 1);
                    })
                        .live("mouseleave", function () {
                            var id = $(this).attr("data-id");
                            $(".results-wrapper .results-content .result-item[data-id=" + id + "] a").removeClass("hover-state");
                            $(this).closest("[style]").css("z-index", 0);
                        });

                    $(".marker").live("click", function () {
                        var id = $(this).attr("data-id");
                        $(lastClickedMarker).removeClass("active");
                        $(this).addClass("active");
                        lastClickedMarker = $(this);
                        markerCounter = $(this).attr("data-i");
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
                                window.openModal("multi-choice", "modal_marker_cluster.php", markerClusterArray, window.isFullScreen);
                            }
                        }
                        else {
                            e.markerClusterer_.zoomOnClick_ = true;
                        }
                    });

                    function checkIfSame(key, arr) {
                        var uniq = $.unique(arr);
                        if (uniq.length == 1 && uniq[0] == key) {
                            return true;
                        }
                        else {
                            return false;
                        }
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
                }

                /* Check if Google Maps are in fullscree mode */

                window.google.maps.event.addListener(window.map, 'bounds_changed', onBoundsChanged);

                // noinspection JSAnnotator
                function onBoundsChanged() {
                    if ($(window.map.getDiv()).children().eq(0).height() === window.innerHeight &&
                        $(window.map.getDiv()).children().eq(0).width() === window.innerWidth) {
                        window.isFullScreen = true;
                    }
                    else {
                        window.isFullScreen = false;
                    }
                }

                $("[data-ajax-response='map']").on("click", function (e) {//search form on map....
                    e.preventDefault();
                    var dataFile = $(this).attr("data-ajax-data-file");
                    window.searchClicked = 1;
                    if ($(this).attr("data-ajax-auto-zoom") == 1) {
                        window.mapAutoZoom = 1;
                    }
                    var form = $(this).closest("form");
                    var ajaxData = form.serialize();
                    markerCluster.clearMarkers();
                    loadData(dataFile, ajaxData);
                });

                // noinspection JSAnnotator
                function loadData(url, ajaxData, methud = 'POST') {
                    $.ajax({
                        url: url,
                        dataType: "json",
                        method: methud,
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

                // Geo Location ------------------------------------------------------------------------------------------------

                // noinspection JSAnnotator
                function success(position) {
                    var center = new window.google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                    window.map.panTo(center);
                    $('#map').removeClass('fade-map');
                }

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

                if (automaticGeoLocation == true) {
                    navigator.geolocation.getCurrentPosition(success);
                }

                // Autocomplete

                autoComplete(window.map);
                //window.assignValues();
            }
            else {
                console.error("No map element");
            }

        }
    };
    componentDidMount=()=>{
        console.log('assigned');
        document.addEventListener('initializeScripts',()=>{
            console.log('executed');
            let location = {   latitude: 32.1553593733,
                longtitude: 34.825565815};
            var optimizedDatabaseLoading = 0;
            var _latitude = location.latitude;
            var _longitude = location.longtitude;
            var element = "map-homepage";
            var markerTarget = "modal"; // use "sidebar", "infobox" or "modal" - defines the action after click on marker
            var sidebarResultTarget = "sidebar"; // use "sidebar", "modal" or "new_page" - defines the action after click on marker
            var showMarkerLabels = true; // next to every marker will be a bubble with title
            var mapDefaultZoom = 10; // default zoom
            window.heroMap(_latitude, _longitude, element, markerTarget, sidebarResultTarget, showMarkerLabels, mapDefaultZoom);
        })
    }
    render(){
        return(
            <div className="map" id="map-homepage"></div>
        )
    }
}

export default MainMap;