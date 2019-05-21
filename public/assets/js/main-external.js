// import $ from 'jquery';
// window.jQuery = $;
// window.$ = $;
// global.jQuery = $;
// const bootstrap = require('bootstrap');
// console.log(bootstrap)
let submitFormListener = (formElement,_this) => {
    function checkInputs(formElement) {
        var required = formElement.find('input,textarea,select').filter('[required]:visible');
        var allRequired = true;
        required.each(function () {
            if ($(this).val() == '') {
                allRequired = false;
            }
        });
        return allRequired;
    }

    formElement.on('submit', (ev) => {
        ev.preventDefault();
        let formDetails = formElement.serializeArray();
        let allRequired = checkInputs(formElement);
        let formDetailsObject = {};
        formDetails.forEach((detail) => {
            if(detail.name !== "longtitude" && detail.name !== "latitude" ){
                formDetailsObject[detail.name] = detail.value;
            }else{
                if(!formDetailsObject.location){
                    formDetailsObject.location = {};
                }
                formDetailsObject['location'][detail.name ==="latitude"?"lat":"lng"]=detail.value;
            }
        });
        var CurrentDate = moment().format();
        formDetailsObject.created = CurrentDate;
        console.log(formDetailsObject);
        if (allRequired) {
            console.log('all required')
            //DO SOMETHING HERE... POPUP AN ERROR MESSAGE, ALERT , ETC.
            $.ajax({
                url: 'https://a3j3kyatgb.execute-api.eu-west-1.amazonaws.com/dev/sites',
                method: "POST",
                data: JSON.stringify(formDetailsObject),
                dataType: "json",
                success:(result)=>{
                    _this.modal('hide');                },
                error:(jqXHR,textStatus,errorThrown )=>{
                    console.log(errorThrown);
                }
            })
        } else {
            console.log('not all required')
        }
        return false;
    });
}
$(document).on('click', '.add-report', function (ev) {
    let $this = $(this),
        item_Id = $this.closest('.modal-item-detail').attr('data-id');
    $.ajax(
        {
            url: 'assets/external/modal_report.php',
            success: (result) => {
                let $modal = $(`#${item_Id}.modal`);
                let $child = $modal.find(".modal-report");
                $child.removeClass("width-800px");
                $child.addClass("width-700px");
                $modal.html(result);
                renderReportDetails()
            }
        }
    )
});


let Templates = {
    modalSubmit: () => (`<div class="modal-dialog width-800px" role="document" data-latitude="31.771959" data-longitude="35.217018" data-marker-drag="true" >
<div class="modal-content" >
    <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <div class="section-title">
            <h2>Site</h2>
        </div>
    </div>
    <div class="modal-body">
        <form class="form inputs-underline">
            <section>
                <div class="row">
                    <div class="col-md-7 col-sm-9">
                        <div class="form-group">
                            <label for="title">Antenna's ID</label>
                            <input type="text" class="form-control" required name="provAntennaId" id="provAntennaId" placeholder="Proveider Antenna's ID">
                        </div>
                        <!--end form-group-->
                    </div>
                    <!--end col-md-9-->
                    <div class="col-md-5 col-sm-3">
                        <div class="form-group">
                            <label for="category">Type</label>
                            <select class="form-control selectpicker" name="type" id="type" required>
                                <option value="">Antenna's Type</option>
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
                            <input type="number" step="0.0000000001" class="form-control" name="latitude" id="lat" placeholder="Phone number" required>
                        </div>
                        <div class="form-group">
                            <label for="lng">Longtitude</label>
                            <input type="number" step="0.0000000001" class="form-control" name="longtitude" id="lng" placeholder="Phone number" required>
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
                            <input type="file" name="files[]" class="file-upload-input with-preview" multiple title="Click to add files" maxlength="10" accept="jpg|png">
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
</div>`),
    modalItem: (id, site) => (
        `<div class="modal-item-detail modal-dialog" role="document" data-latitude="${site.latitude}" data-longitude="${ site.longitude}" data-address data-id="${id}">
    <div class="modal-content">
        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <div class="section-title">
                <h2>${site.title}                 
                <span class="location" style="margin-left: 3px;font-size: 15px;">${site.address.split(',')[1]?site.address.split(',')[1].trim():site.address}</span>
                </h2>
                <div class="label label-default">${site.type}</div>
                <div class="rating-passive" data-rating="${site.rating}">
                        <span class="stars"></span>
                        <span class="reviews">${site.reports ? site.reports.length : 4}</span>
                       

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
            ${site.gallery ? site.gallery.map((image) => (`<img src="${image}">`)).join('\n') : site.marker_image?`<img src="${site.marker_image}">`:''}
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
                <section>
                        <h3><strong>Latest Reports</strong></h3>
                        ${site.reports ? site.reports.map((report) => (`<div class="review">
                                <div class="image">
                                    <div class="bg-transfer" style="background-image: url('${report.author_image}')"></div>
                                </div>
                                <div class="description">
                                    <figure>
                                        <div class="rating-passive" data-rating="${report.rating}">
                                            <span class="stars"></span>
                                        </div>
                                        <span class="date">${report.created}</span>
                                    </figure>
                                    <h5>${report.title}</h5>
                                    <p>${report.description}</p>
                                </div>
                            </div>
                            `)).join('\n') : 'No Reports in this site...'}
                        </section>
                </div>
        </div>
    </div>
</div>`)
};
let openModalFromTemplates = (key, target, clusterData,) => {
    key = key.slice(1);
    if(key !=='modalSubmit' && key !=='modalItem') return;
    $("body").append('<div class="modal modal-external fade" id="' + target + '" tabindex="-1" role="dialog" aria-labelledby="' + target + '"><i class="loading-icon fa fa-circle-o-notch fa-spin"></i></div>');
    let $targetModal = $("#" + target + ".modal");
    $targetModal.on("show.bs.modal", function () {
        var _this = $(this);
        lastModal = _this;
        let site = locations.find((item => (item.id === target))) || {};
        InsertTemplate(Templates[key](target, site), _this);
    });
    let InsertTemplate = (results, _this) => {
        _this.append(results);
        if ($('link[href="assets/css/bootstrap-select.min.css"]').length === 0) {
            $('head').append($('<link rel="stylesheet" type="text/css">').attr('href', 'assets/css/bootstrap-select.min.css'));
        }
        $(".selectpicker").selectpicker();

        if ($("input[type=file]").length || key === 'modalSubmit') {
            $.getScript("assets/js/jQuery.MultiFile.min.js", function (data, textStatus, jqxhr) {
                $("input.file-upload-input").MultiFile({
                    list: ".file-upload-previews"
                });
            });
        }

        if ($(".date-picker").length) {
            $.getScript("assets/js/bootstrap-datetimepicker.min.js", function () {
                initializeDateTimePicker();
            });
        }

        if (clusterData) {
            _this.find(".result-item").children("a").on("click", function (e) {
                e.preventDefault();
                openModal($(this).parent().attr("data-id"), "modal_item.php", false, mapsFullScreen);
            });
        }

        $.getScript("assets/js/jquery.trackpad-scroll-emulator.min.js");

        _this.find(".gallery").addClass("owl-carousel");

        ratingPassive(_this);

        var img = _this.find(".gallery img:first")[0];
        if (img) {
            $(img).load(function () {
                timeOutActions(_this);
            });
        }
        else {
            timeOutActions(_this);
        }
        var title = $(results).find("h2").text();
        socialShare(window.location + "?title=" + title.replace(/\s+/g, '-').toLowerCase());// todo figure out what is social share
        _this.on("hidden.bs.modal", function () {
            $(lastClickedMarker).removeClass("active");
            $(".pac-container").remove();
            _this.remove();
        });
        submitFormListener($(_this).find('form'),_this);
    };
    $targetModal.modal("show");
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
                        (marker,map) => {
                            onLatLngChange(marker);
                            setTimeout(()=> {
                                google.maps.event.trigger(map, 'resize');
                            },1000);
                        },
                        {fullscreenControl:true,
                            mapTypeControl: true,}
                    );
                }
            }
            initializeOwl();
            initializeFitVids();
            initializeReadMore();
            let $tse = $(".tse-scrollable");
            $tse.TrackpadScrollEmulator ? $tse.TrackpadScrollEmulator() : "";
        }, 200);
    }
};

