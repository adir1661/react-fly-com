// import $ from 'jquery';
// window.jQuery = $;
// window.$ = $;
// global.jQuery = $;
// const bootstrap = require('bootstrap');
// console.log(bootstrap)
let submitFormListener = (formElement, _this, url = 'sites') => {
    function checkInputs(formElement) {
        var required = formElement.find('input,textarea,select').filter('[required]:visible');
        var allRequired = true;
        required.each(function () {
            if ($(this).val() === '') {
                allRequired = false;
            }
        });
        return allRequired;
    }

    formElement.on('submit', (ev) => {
        ev.preventDefault();
        let allRequired = checkInputs(formElement);
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
        console.log(formDetailsObject);
        if (allRequired) {
            console.log('all required');
            //DO SOMETHING HERE... POPUP AN ERROR MESSAGE, ALERT , ETC.
            $.ajax({
                url: 'https://a3j3kyatgb.execute-api.eu-west-1.amazonaws.com/dev/' + url,
                method: "POST",
                data: JSON.stringify(formDetailsObject),
                dataType: "json",
                success: (result) => {
                    _this.modal('hide');
                },
                error: (jqXHR, textStatus, errorThrown) => {
                    console.log(errorThrown);
                }
            })
        } else {
            console.log('not all required')
        }
        return false;
    });
};
$(document).on('click', '.add-report', function (ev) {
    openReportSubscription.bind(this)(ev);
});
let openReportSubscription = function (ev) {
    let $this = $(this),
        item_Id = $this.closest('.modal-item-detail').attr('data-id');
    let $modal = $(`#${item_Id}.modal`);
    let $child = $modal.find(".modal-report");
    $child.removeClass("width-800px");
    $child.addClass("width-700px");
    $modal.html(Templates['reportSubmit']());
    renderReportDetails();
    submitFormListener($modal.find('form'), $modal, 'sites/' + item_Id + '/reports');
};
$(document).on('click', '.report-list .report-item', function (ev) {
    let $this = $(this),
        report_id = $this.attr('data-id'),
        antenna_Id = $this.closest('.modal-item-detail').attr('data-id');
    let $modal = $(`#${antenna_Id}.modal`);
    let $child = $modal.find(".modal-report");
    $child.removeClass("width-800px");
    $child.addClass("width-700px");
    let site = locations.find((item => (item.id === antenna_Id)));
    let report = site.reports.find((item) => item.reportId + '' === report_id);
    $modal.html(Templates['modalReportView'](report, antenna_Id));
    //renderReportDetails() todo: implement come back to
});
let issues = [
    {name: 'Antenna\'s intergity and screw strengthening', id: 'integrity'},
    {name: 'cabels integrity', id: 'cabels'},
    {name: 'connectors tightness', id: 'tightness'},
    {name: 'unwanted cabels', id: 'uncabels'},
    {name: 'monitor lightness', id: 'monitor_lightness'},
    {name: 'blocking', id: 'blocking'},
    {name: 'antenna\'s stickers', id: 'stickers'},
    // {name:'',id:''},
];
let chachedReports = [
    {
        created: new Date('2019-03-25'),
        rating: 45,
        title: 'report 4351',
        description: 'this is report winter cached with some crashes inside the Antenna tubes.',
        category: 'winder',
        vid: 'assets/vid/1.mp4',
        reportId: 1,
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
                issueNum: 223,
                stability: 'problematic',
                image: 'assets/img/antennas/issue2.jpg',
                description: 'problems on the vehiles, alot of cables merged together, cables unconnected',
            },
            {
                title: issues[2].name,
                rating: 49,
                issueNum: 324,
                stability: 'problematic',
                image: 'assets/img/antennas/issue3.jpg',
                description: 'problems on the connectors, alot of cables merged together,connector unconnected on right top corner',
            },
        ]
    },
    {
        created: new Date('2019-01-05'),
        rating: 70,
        title: 'report 4001',
        description: 'this is report winter chached with some screws missing.',
        category: 'winder',
        reportId: 2,
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
    {
        created: new Date('2018-08-14'),
        rating: 15,
        title: 'report 3451',
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
let openModalFromTemplates = (key, target, clusterData,) => {
    key = key.slice(1);
    if (key !== 'modalSubmit' && key !== 'modalItem') return;
    $("body").append('<div class="modal modal-external fade" id="' + target + '" tabindex="-1" role="dialog" aria-labelledby="' + target + '"><i class="loading-icon fa fa-circle-o-notch fa-spin"></i></div>');
    let $targetModal = $("#" + target + ".modal");
    $targetModal.on("show.bs.modal", function () {
        var _this = $(this);
        lastModal = _this;
        let site = locations.find((item => (item.id === target))) || {};
        if (site && (!site.reports || site.reports.length < 1)) {
            site.reports = chachedReports;
        }
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
        submitFormListener($(_this).find('form'), _this);
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
            $tse.TrackpadScrollEmulator ? $tse.TrackpadScrollEmulator() : "";
        }, 200);
    }
};


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
    modalItem: (id, site) => (`<div class="modal-item-detail modal-dialog" role="document" data-latitude="${site.latitude}" data-longitude="${ site.longitude}" data-address data-id="${id}">
    <div class="modal-content">
        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <div class="section-title">
                <h2>${site.title}                 
                <span class="location" style="margin-left: 3px;font-size: 15px;">${site.address.split(',')[1] ? site.address.split(',')[1].trim() : site.address}</span>
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
            ${site.gallery ? site.gallery.map((image) => (`<img src="${image}">`)).join('\n') : site.marker_image ? `<img src="${site.marker_image}">` : ''}
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
                        ${site.reports ? site.reports.map((report) => (`<div class="review report-item" data-id="${report.reportId}">
                                <div class="image">
                                     <div class="bg-transfer" >
                                         <div class="c100 p${Math.round(Number(report.rating))} small ${Number(report.rating) > 50 ? 'green' : Number(report.rating) > 30 ? 'orange' : 'red'}">
                                              <span>${Number(report.rating)}%</span>
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
                                        <span class="date">${report.created?new Date(report.created).toDateString():''}</span>
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
</div>`),
    reportSubmit: () => (`<div class="modal-dialog modal-report width-800px" role="document" data-latitude="40.7344458"
data-longitude="-73.86704922"
data-marker-drag="true">
<div class="modal-content">
   <div class="modal-header">
       <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
               aria-hidden="true">&times;</span></button>
       <div class="section-title">
           <h2>Report</h2>
       </div>
   </div>
   <div class="modal-body">
       <form class="form inputs-underline report-form">
           <section>
               <div class="row">
                   <div class="col-md-9 col-sm-9">
                       <div class="form-group">
                           <label for="title">Title</label>
                           <input type="text" class="form-control" name="title" id="title" placeholder="Title">
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
                   <div class="col-xs-12">
                        <div class="form-group">
                            <label for="title"><i class="fa fa-picture-o" aria-hidden="true"></i> Image Url</label>
                            <input type="text" class="form-control" name="title" id="url" placeholder="http://image.url">
                        </div>
                    </div>
               </div>

           </section>

           <section>
               <h3>Antenna</h3>
               <div class="form-group">
                   <label for="address-autocomplete">Address</label>
                   <input type="text" class="form-control" name="address" id="address-autocomplete"
                          placeholder="Address">
               </div>
           </section>
           <section class="reports">
               <h3>Report Details:</h3>
           </section>

           <hr>
           <section class="center">
               <div class="form-group">
                   <button type="submit" class="btn btn-primary btn-rounded">Add Report</button>
               </div>
           </section>
       </form>
   </div>
</div>
</div>`),
    modalReportView: (report, antennaId,) => {
        let antenna = locations.find((location) => location.id === antennaId)
        return `<div class="modal-dialog modal-report width-800px" role="document" data-marker-drag="true" 
    data-id="${antennaId}">
<div class="modal-content">
   <div class="modal-header">
       <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
               aria-hidden="true">&times;</span></button>
       <div class="section-title">
           <h2 class="pull-left">${report.title.charAt(0).toUpperCase() + report.title.slice(1)}</h2>
           <div class="pull-right"><img  src="assets/img/items/company.png" alt=""></div>
       </div>
   </div>
   <div class="modal-body">
       <section>
       <h3>Antenna:</h3>
               <div class="row small-font">
                   <div class="col-md-3 col-sm-3">
                           <h5 for="title">Site Name: ${antenna.address}</h5>
                   </div>
                   <div class="col-md-3 col-sm-3">
                         <h5 for="title">Site ID: ${antenna.title}</h5>
                   </div> 
                   ${antenna.created?`
                   <div class="col-md-3 col-sm-3">
                         <h5 for="title">Site Date: ${antenna.created}</h5>
                   </div>  `:'<div class="col-md-3 col-sm-3"></div>'}
                   <div class="col-md-3 col-sm-3">
                         <h5 for="title">Site Type: ${antenna.type}</h5>
                   </div>
                   
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
                        <video width="320" height="240" controls>
                          <source src="assets/vid/1.mp4" type="video/mp4">
                          Your browser does not support the video tag.
                        </video>                   
                   </div>` : ''}
               </div>
           </section> 
           <section class="reports">
                <div class="col-md-9 col-sm-9">
                            <h3>Report Details:</h3>
                </div>
                <div class="col-md-3 col-sm-3">
                     <h4 for="category">Category: ${report.category}</h4>
                </div>  
                ${report.issues ? report.issues.map(issue => Templates['issue'](issue)).join('') : ''}
           </section>
           <hr>
           <section class="center">
               <div class="form-group">
                   <button type="submit" class="btn btn-primary btn-rounded back-to-site">Back To Site Details</button>
               </div>
           </section>
       </form>
   </div>
</div>
</div>`
    },
    issue: (issue) => (`<div class="issue row">
    <div class="col-xs-7">
        <h3>${issue.title.charAt(0).toUpperCase() + issue.title.slice(1)}</h3>
        <div class ='issue-subtitle'style="">
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
        <img style="height: 100px"  src="${issue.image}" alt="report">
    </div>
</div>`)
};


(function ($) {
    $.fn.getForm2obj = function () {
        var _ = {}, _t = this;
        this.c = function (k, v) {
            eval("c = typeof " + k + ";");
            if (c == 'undefined') _t.b(k, v);
        };
        this.b = function (k, v, a = 0) {
            console.log("v:",v);
            if(v.charAt(0)==="'"){
                v = v.charAt(0)+ v.slice(1,-1).replace("'","\\'")+v.charAt(v.length-1);
            }
            console.log("v:",v);
            console.log("k:",k);
            if (a) eval(k + ".push(" + v + ");"); else eval(k + "=" + v + ";");
        };
        $.map(this.serializeArray(), function (n) {
            if (n.name.indexOf('[') > -1) {
                var keys = n.name.match(/[a-zA-Z0-9_]+|(?=\[\])/g), le = Object.keys(keys).length, tmp = '_';
                $.map(keys, function (key, i) {
                    if (key == '') {
                        eval("ale = Object.keys(" + tmp + ").length;");
                        if (!ale) _t.b(tmp, '[]');
                        if (le == (i + 1)) _t.b(tmp, "'" + n['value'] + "'", 1);
                        else _t.b(tmp += "[" + ale + "]", '{}');
                    } else {
                        _t.c(tmp += "['" + key + "']", '{}');
                        if (le == (i + 1)) _t.b(tmp, "'" + n['value'] + "'");
                    }
                });
            } else _t.b("_['" + n['name'] + "']", "'" + n['value'] + "'");
        });
        return _;

    }
})(jQuery);
