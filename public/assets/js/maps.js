//var mapStyles = [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"lightness":20},{"color":"#ececec"}]},{"featureType":"landscape.man_made","elementType":"all","stylers":[{"visibility":"on"},{"color":"#f0f0ef"}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#f0f0ef"}]},{"featureType":"landscape.man_made","elementType":"geometry.stroke","stylers":[{"visibility":"on"},{"color":"#d4d4d4"}]},{"featureType":"landscape.natural","elementType":"all","stylers":[{"visibility":"on"},{"color":"#ececec"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"lightness":21},{"visibility":"off"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#d4d4d4"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color":"#303030"}]},{"featureType":"poi","elementType":"labels.icon","stylers":[{"saturation":"-100"}]},{"featureType":"poi.attraction","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"poi.business","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"poi.government","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"poi.medical","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"poi.park","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"featureType":"poi.place_of_worship","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"poi.school","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"poi.school","elementType":"geometry.stroke","stylers":[{"lightness":"-61"},{"gamma":"0.00"},{"visibility":"off"}]},{"featureType":"poi.sports_complex","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#dadada"},{"lightness":17}]}];
//var mapStyles = [{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#d3d3d3"}]},{"featureType":"transit","stylers":[{"color":"#808080"},{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"visibility":"on"},{"color":"#b3b3b3"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"weight":1.8}]},{"featureType":"road.local","elementType":"geometry.stroke","stylers":[{"color":"#d7d7d7"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#ebebeb"}]},{"featureType":"administrative","elementType":"geometry","stylers":[{"color":"#a7a7a7"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#efefef"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#696969"}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"visibility":"on"},{"color":"#737373"}]},{"featureType":"poi","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"color":"#d6d6d6"}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"color":"#dadada"}]}];
//var mapStyles = [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#dde6e8"},{"visibility":"on"}]}];
// import $ from 'jquery';
// window.jQuery = $;
// window.$ = $;
// global.jQuery = $;
// const bootstrap = require('bootstrap');
// console.log(bootstrap);
var automaticGeoLocation = false;
var useColorMarkers = true;
const google = window.google;
var lastClickedMarker;
var searchClicked;
var mapAutoZoom;
var map;
var isFullScreen;
var locations;
var mapStyle = [
    {
        featureType: "administrative.land_parcel",
        stylers: [
            {
                visibility: "off"
            }
        ]
    },
    {
        featureType: "administrative.neighborhood",
        stylers: [
            {
                visibility: "off"
            }
        ]
    },
    {
        featureType: "poi",
        elementType: "labels.text",
        stylers: [
            {
                visibility: "off"
            }
        ]
    },
    {
        featureType: "road",
        elementType: "labels",
        stylers: [
            {
                visibility: "off"
            }
        ]
    },
    {
        featureType: "water",
        elementType: "labels.text",
        stylers: [
            {
                visibility: "off"
            }
        ]
    }
];

// Hero Map on Home ----------------------------------------------------------------------------------------------------

function heroMap1(_latitude, _longitude, element, markerTarget, sidebarResultTarget, showMarkerLabels, mapDefaultZoom) {
    if (document.getElementById(element) != null) {

        // Create google map first -------------------------------------------------------------------------------------

        if (!mapDefaultZoom) {
            mapDefaultZoom = 14;
        }

        if (!optimizedDatabaseLoading) {
            var optimizedDatabaseLoading = 0;
        }

        map = new google.maps.Map(document.getElementById(element), {
            zoom: mapDefaultZoom,
            scrollwheel: true,
            center: new google.maps.LatLng(_latitude, _longitude),
            //mapTypeId: "roadmap",
            styles: [mapStyle]
        });
        setTimeout(() => {
            map.setOptions({styles: mapStyle, scrollwheel: true,})
        }, 0)

        var allMarkers;

        //  When optimization is enabled, map will load the data in Map Bounds every time when it's moved. Otherwise will load data at once

        if (optimizedDatabaseLoading === 1) {
            google.maps.event.addListener(map, 'idle', function () {
                if (searchClicked !== 1) {
                    var ajaxData = {
                        optimized_loading: 1,
                        north_east_lat: map.getBounds().getNorthEast().lat(),
                        north_east_lng: map.getBounds().getNorthEast().lng(),
                        south_west_lat: map.getBounds().getSouthWest().lat(),
                        south_west_lng: map.getBounds().getSouthWest().lng()
                    };
                    if (markerCluster !== undefined) {
                        markerCluster.clearMarkers();
                    }
                    loadData("https://0zx2os04v7.execute-api.eu-west-1.amazonaws.com/dev/locations", ajaxData, "GET");
                }
            });
        }
        else {
            google.maps.event.addListenerOnce(map, 'idle', function () {
                loadData("https://0zx2os04v7.execute-api.eu-west-1.amazonaws.com/dev/locations", null, "GET");
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
                        position: new google.maps.LatLng(markers[i]["latitude"], markers[i]["longitude"]),
                        map: map,
                        draggable: false,
                        content: markerContent,
                        flat: true,
                        id: markers[i]["id"]
                    });
                    google.maps.event.addListener(marker, 'click', (function (marker, i) {
                        return function () {
                            if (markerTarget === "sidebar") {
                                openSidebarDetail($(this.content.firstChild).attr("data-id"));
                            }
                            else if (markerTarget === "infobox") {
                                openInfobox($(this.content.firstChild).attr("data-id"), this, i);
                            }
                            else if (markerTarget === "modal") {
                                openModal($(this.content.firstChild).attr("data-id"), "#modalItem", false, isFullScreen);
                            }
                        }
                    })(marker, i));
                    newMarkers.push(marker);
                }
                else if (method == "address") {
                    a = i;
                    var geocoder = new google.maps.Geocoder();
                    var geoOptions = {
                        address: markers[i]["address"]
                    };
                    geocoder.geocode(geoOptions, geocodeCallback(markerContent));

                }

                if (mapAutoZoom == 1) {
                    var bounds = new google.maps.LatLngBounds();
                    for (var i = 0; i < newMarkers.length; i++) {
                        bounds.extend(newMarkers[i].getPosition());
                    }
                    map.fitBounds(bounds);
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
                            pixelOffset: new google.maps.Size(-135, -50),
                            zIndex: null,
                            alignBottom: true,
                            boxClass: "infobox-wrapper",
                            enableEventPropagation: true,
                            closeBoxMargin: "0px 0px -8px 0px",
                            closeBoxURL: "assets/img/close-btn.png",
                            infoBoxClearance: new google.maps.Size(1, 1)
                        };

                        if (lastInfobox != undefined) {
                            lastInfobox.close();
                        }

                        newMarkers[i].infobox = new InfoBox(infoboxOptions);
                        newMarkers[i].infobox.open(map, _this);
                        lastInfobox = newMarkers[i].infobox;

                        setTimeout(function () {
                            //$("div#"+ id +".item.infobox").parent().addClass("show");
                            $(".item.infobox[data-id=" + id + "]").parent().addClass("show");
                        }, 10);

                        google.maps.event.addListener(newMarkers[i].infobox, 'closeclick', function () {
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
                    if (status == google.maps.GeocoderStatus.OK) {
                        marker = new RichMarker({
                            position: results[0].geometry.location,
                            map: map,
                            draggable: false,
                            content: markerContent,
                            flat: true,
                            id: parseInt($(markerContent.innerHTML).attr("data-id"))
                        });
                        newMarkers.push(marker);
                        markerCluster.addMarker(marker, true);
                        renderResults();
                        if (mapAutoZoom == 1) {
                            var bounds = new google.maps.LatLngBounds();
                            for (var i = 0; i < newMarkers.length; i++) {
                                bounds.extend(newMarkers[i].getPosition());
                            }
                            map.fitBounds(bounds);
                        }
                        google.maps.event.addListener(marker, 'click', (function (marker, i) {
                            return function () {
                                if (markerTarget == "sidebar") {
                                    openSidebarDetail($(this.content.firstChild).attr("data-id"));
                                    //console.log(this);
                                }
                                else if (markerTarget == "infobox") {
                                    openInfobox($(this.content.firstChild).attr("data-id"), this, 0);
                                }
                                else if (markerTarget == "modal") {
                                    openModal($(this.content.firstChild).attr("data-id"), "#modalItem", false, isFullScreen);
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

            markerCluster = new MarkerClusterer(map, newMarkers, {
                styles: clusterStyles,
                maxZoom: 16,
                ignoreHidden: true
            });

            google.maps.event.addListener(markerCluster, 'click', function (e) {
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
                        openModal("multi-choice", "modal_marker_cluster.php", markerClusterArray, isFullScreen);
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

            google.maps.event.addListener(map, 'idle', function () {
                renderResults();
            });

            renderResults();

            // Results in the sidebar ----------------------------------------------------------------------------------

            function renderResults() {
                resultsArray = [];
                visibleMarkersId = [];
                visibleMarkersOnMap = [];

                for (var i = 0; i < newMarkers.length; i++) {
                    if (map.getBounds().contains(newMarkers[i].getPosition())) {
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

        google.maps.event.addListener(map, 'bounds_changed', onBoundsChanged);

        function onBoundsChanged() {
            if ($(map.getDiv()).children().eq(0).height() === window.innerHeight &&
                $(map.getDiv()).children().eq(0).width() === window.innerWidth) {
                isFullScreen = true;
            }
            else {
                isFullScreen = false;
            }
        }

        $("[data-ajax-response='map']").on("click", function (e) {//search form on map....
            e.preventDefault();
            var dataFile = $(this).attr("data-ajax-data-file");
            searchClicked = 1;
            if ($(this).attr("data-ajax-auto-zoom") == 1) {
                mapAutoZoom = 1;
            }
            var form = $(this).closest("form");
            var ajaxData = form.serialize();
            markerCluster.clearMarkers();
            loadData(dataFile, ajaxData);
        });

        function loadData(url, ajaxData, methud = 'POST') {
            $.ajax({
                url: url,
                dataType: "json",
                method: methud,
                data: ajaxData,
                cache: false,
                success: function (results) {
                    for (var i = 0; i < newMarkers.length; i++) {
                        newMarkers[i].setMap(null);
                    }
                    allMarkers = results;
                    locations = results;
                    placeMarkers(results);
                },
                error: function (e) {
                    console.log(e);
                }
            });
        }

        // Geo Location ------------------------------------------------------------------------------------------------

        function success(position) {
            var center = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            map.panTo(center);
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

        autoComplete(map);

    }
    else {
        console.error("No map element");
    }

}

function reloadMap() {
    //google.maps.event.trigger(map, 'resize');
}


// Simple map ----------------------------------------------------------------------------------------------------------

function simpleMap(_latitude, _longitude, element, markerDrag, place, callback, options) {

    if (!markerDrag) {
        markerDrag = false;
    }
    var mapCenter, geocoder, geoOptions;

    if (place) {
        geocoder = new google.maps.Geocoder();
        geoOptions = {
            address: place
        };
        geocoder.geocode(geoOptions, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                mapCenter = new google.maps.LatLng(results[0].geometry.location.lat(), results[0].geometry.location.lng());
                let {marker, map} = drawMap(mapCenter, options);
                if (typeof  callback === 'function') {
                    callback(marker, map);
                }
            } else {
                console.log("Geocode failed");
            }
        });
    }
    else {
        mapCenter = new google.maps.LatLng(_latitude, _longitude);
        let {marker, map} = drawMap(mapCenter, options);
        if (typeof  callback === 'function') {
            callback(marker, map);
        }
    }

    function drawMap(mapCenter, options) {
        var mapOptions = {
            zoom: 14,
            center: mapCenter,
            disableDefaultUI: true,
            fullscreenControl: options ? options.fullscreenControl : false,
            mapTypeControl: options ? options.mapTypeControl : false,
            scrollwheel: true,
            styles: [mapStyle]
        };
        var mapElement = document.getElementById(element);
        var map = new google.maps.Map(mapElement, mapOptions);
        var marker = new RichMarker({
            position: mapCenter,
            map: map,
            draggable: markerDrag,
            content: "<img src='assets/img/marker.png'>",
            flat: true
        });
        google.maps.event.addListener(marker, "dragend", function () {
            var latitude = Number(this.position.lat().toFixed(10));
            var longitude = Number(this.position.lng().toFixed(10));
            map.setCenter(new google.maps.LatLng(latitude, longitude));
            $('#latitude, #lat').val(latitude);
            $('#longitude , #lng').val(longitude);
            geocoder = new google.maps.Geocoder();
            geocoder.geocode({'location': {lat: latitude, lng: longitude}}, function (results, status) {
                if (status === 'OK') {
                    if (results[0]) {
                        $('#address').val(results[0].formatted_address);
                    } else {
                        window.alert('No results found');
                    }
                } else {
                    window.alert('Geocoder failed due to: ' + status);
                }
            })

        });

        autoComplete(map, marker);
        return {marker, map};
    }

}

//Autocomplete ---------------------------------------------------------------------------------------------------------

function autoComplete(map, marker) {
    if ($("#address-autocomplete").length) {
        if (!map) {
            map = new google.maps.Map(document.getElementById('address-autocomplete'));
        }
        var input = document.getElementById('address-autocomplete');
        var autocomplete = new google.maps.places.Autocomplete(input);
        autocomplete.bindTo('bounds', map);
        google.maps.event.addListener(autocomplete, 'place_changed', function () {
            var place = autocomplete.getPlace();
            if (!place.geometry) {
                return;
            }
            if (place.geometry.viewport) {
                map.fitBounds(place.geometry.viewport);
            } else {
                map.setCenter(place.geometry.location);
                map.setZoom(17);
            }
            if (marker) {
                marker.setPosition(place.geometry.location);
                marker.setVisible(true);
                $('#latitude').val(marker.getPosition().lat());
                $('#longitude').val(marker.getPosition().lng());
            }
            var address = '';
            if (place.address_components) {
                address = [
                    (place.address_components[0] && place.address_components[0].short_name || ''),
                    (place.address_components[1] && place.address_components[1].short_name || ''),
                    (place.address_components[2] && place.address_components[2].short_name || '')
                ].join(' ');
            }
        });

        function success(position) {
            map.setCenter(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));
            //initSubmitMap(position.coords.latitude, position.coords.longitude);
            $('#latitude').val(position.coords.latitude);
            $('#longitude').val(position.coords.longitude);
        }

        $(".geo-location").on("click", function () {
            if (navigator.geolocation) {
                $('#' + element).addClass('fade-map');
                navigator.geolocation.getCurrentPosition(success);
            } else {
                console.log('Geo Location is not supported');
            }
        });
    }
}

function openSidebarDetail(id) {
    $.ajax({
        url: "assets/external/sidebar_detail.php",
        data: {id: id},
        method: "POST",
        success: function (results) {

            $(".sidebar-wrapper").html(results);
            $(".results-wrapper").removeClass("loading");
            initializeOwl();
            ratingPassive(".sidebar-wrapper .sidebar-content");
            initializeFitVids();
            var title = $(results).find("h2").text();
            socialShare(window.location + "?title=" + title.replace(/\s+/g, '-').toLowerCase());
            initializeReadMore();
            $(".sidebar-wrapper .back").on("click", function () {
                $(".results-wrapper").removeClass("show-detail");
                $(lastClickedMarker).removeClass("active");
            });

            $(".results-wrapper").addClass("show-detail");
        },
        error: function (e) {
            console.log("error " + e);
        }
    });
}
