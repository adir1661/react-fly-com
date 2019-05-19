// import $ from 'jquery';
// window.jQuery = $;
// window.$ = $;
// global.jQuery = $;
// const bootstrap = require('bootstrap');
// console.log(bootstrap)

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
                            <input type="text" class="form-control" name="title" id="provAntennaId" placeholder="Proveider Antenna's ID">
                        </div>
                        <!--end form-group-->
                    </div>
                    <!--end col-md-9-->
                    <div class="col-md-5 col-sm-3">
                        <div class="form-group">
                            <label for="category">Type</label>
                            <select class="form-control selectpicker" name="category" id="type">
                                <option value="">Antenna's Type</option>
                                <option value="1">Rooftop Site</option>
                                <option value="2">Cell Tower Site</option>
                                <option value="3">Small Cell</option>
                                <option value="4">Outdoor DAS</option>
                                <option value="5">Indoor DAS</option>
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
                            <input type="text" class="form-control" id="latitude" name="latitude" hidden="">
                            <input type="text" class="form-control" id="longitude" name="longitude" hidden="">
                        </div>
                        <p class="note">Enter the exact latitude and longtitude or drag the map marker to position</p>
                    </div>
                    <div class="col-md-6 col-sm-6">
                        <div class="form-group">
                            <label for="address-autocomplete disbaled">Address</label>
                            <input type="text" class="form-control" name="address" id="address" placeholder="Address">
                        </div>
                        <div class="form-group">
                            <label for="lat">Latitude</label>
                            <input type="number" class="form-control" name="phone" id="lat" placeholder="Phone number">
                        </div>
                        <div class="form-group">
                            <label for="lng">Longtitude</label>
                            <input type="number" class="form-control" name="phone" id="lng" placeholder="Phone number">
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
                            <label for="MultiFile1">images</label>
                            <input type="file" name="files[]" class="file-upload-input with-preview MultiFile-applied" multiple="" title="Click to add files" maxlength="10" accept="gif|jpg|png" id="MultiFile1" value="">
                            <span>Click or drag images here</span>
                        </div>
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
    modalItem: ($id, $site) => (
        `<div class="modal-item-detail modal-dialog" role="document" data-latitude="${$site.latitude}" data-longitude="${ $site.longitude}" data-address data-id="${$id}">
    <div class="modal-content">
        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <div class="section-title">
                <h2>${ $site.title }</h2>
                <div class="label label-default">Antenna</div>
                <div class="rating-passive" data-rating="$site.rating">
                        <span class="stars"></span>
                        <span class="reviews">${$site.reports ? $site.reports.length : 4}</span>
                    </div>
                <div class="controls-more">
                    <ul>
                        <li class="add-report"><a href="#">Add another issue</a></li>
                        <li class="add-report"><a href="#">Edit</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="modal-body">
            <div class="left">
            <div class="gallery">
            ${$site.gallery ? $site.gallery.map((image) => (`<img src="${image}">`)).join('\n') : `<img src="${$site.marker_image}">`}
            </div>
            <div class="map" id="map-modal"></div>
                <section>
                <h3>Contact</h3>
                <h5><i class="fa fa-map-marker"></i>${$site.location}</h5>
                <h5><i class="fa fa-phone"></i>${$site.phone}</h5>
                <h5><i class="fa fa-envelope"></i>${$site.email}</h5>
                </section>
            </div>
            <div class="right">
                <section>
                    <h3>Overview</h3>
                    <div class="read-more"><p>${$site.description}</p></div>
                </section>
                <section>
                        <h3><strong>Latest Reports</strong></h3>
                        ${$site.reports ? $site.reports.map((report) => (`<div class="review">
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
    $("body").append('<div class="modal modal-external fade" id="' + target + '" tabindex="-1" role="dialog" aria-labelledby="' + target + '"><i class="loading-icon fa fa-circle-o-notch fa-spin"></i></div>');
    let $targetModal = $("#" + target + ".modal");
    $targetModal.on("show.bs.modal", function () {
        var _this = $(this);
        lastModal = _this;
        let sites = locations.find((item => (item.id === target))) || {};
        InsertTemplate(Templates[key](target, sites), _this);
    });
    let InsertTemplate = (results, _this) => {
        _this.append(results);
        if ($('link[href="assets/css/bootstrap-select.min.css"]').length === 0) {
            $('head').append($('<link rel="stylesheet" type="text/css">').attr('href', 'assets/css/bootstrap-select.min.css'));
        }
        $(".selectpicker").selectpicker();

        if ($("input[type=file]").length||key==='modalSubmit') {
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
        socialShare(window.location + "?title=" + title.replace(/\s+/g, '-').toLowerCase());
        _this.on("hidden.bs.modal", function () {
            $(lastClickedMarker).removeClass("active");
            $(".pac-container").remove();
            _this.remove();
        });
    };
    $targetModal.modal("show");

    function timeOutActions(_this) {
        setTimeout(function () {
            if (_this.find(".map").length) {
                if (_this.find(".modal-dialog").attr("data-address")) {
                    simpleMap(0, 0, "map-modal", _this.find(".modal-dialog").attr("data-marker-drag"), _this.find(".modal-dialog").attr("data-address"));
                }
                else {
                    simpleMap(_this.find(".modal-dialog").attr("data-latitude"), _this.find(".modal-dialog").attr("data-longitude"), "map-modal", _this.find(".modal-dialog").attr("data-marker-drag"));
                }
            }
            initializeOwl();
            initializeFitVids();
            initializeReadMore();
            let $tse = $(".tse-scrollable");
            $tse.TrackpadScrollEmulator ? $tse.TrackpadScrollEmulator() : "";
            _this.addClass("show");
        }, 200);

    }
};