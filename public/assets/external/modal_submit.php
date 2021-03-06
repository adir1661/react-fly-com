<?php

echo

'<div class="modal-dialog width-800px" role="document" data-latitude="40.7344458" data-longitude="-73.86704922" data-marker-drag="true" >
<div class="modal-content" >
    <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <div class="section-title">
            <h2>Antenna</h2>
        </div>
    </div>
    <div class="modal-body">
        <form class="form inputs-underline">
            <section>
                <h3>About</h3>
                <div class="row">
                    <div class="col-md-9 col-sm-9">
                        <div class="form-group">
                            <label for="title">Title</label>
                            <input type="text" class="form-control" name="title" id="title" placeholder="Title">
                        </div>
                        <!--end form-group-->
                    </div>
                    <!--end col-md-9-->
                    <div class="col-md-3 col-sm-3">
                        <div class="form-group">
                            <label for="category">Category</label>
                            <select class="form-control selectpicker" name="category" id="category">
                                <option value="">Category</option>
                                <option value="1">Restaurant</option>
                                <option value="2">Event</option>
                                <option value="3">Adrenaline</option>
                                <option value="4">Sport</option>
                                <option value="5">Wellness</option>
                            </select>
                        </div>
                        <!--end form-group-->
                    </div>
                    <!--col-md-3-->
                </div>
                <div class="form-group">
                    <label for="description">Description</label>
                    <textarea class="form-control" id="description" rows="4" name="description" placeholder="Describe the Antenna for deep undrestanding"></textarea>
                </div>

            </section>
            <section>
                <h3>Area</h3>
                <div class="row">
                    <div class="col-md-6 col-sm-6">
                        <div class="form-group">
                            <label for="address-autocomplete">Address</label>
                            <input type="text" class="form-control" name="address" id="address-autocomplete" placeholder="Address">
                        </div>
                        <!--end form-group-->
                        <div class="map height-200px shadow" id="map-modal"></div>
                        <!--end map-->
                        <div class="form-group hidden">
                            <input type="text" class="form-control" id="latitude" name="latitude" hidden="">
                            <input type="text" class="form-control" id="longitude" name="longitude" hidden="">
                        </div>
                        <p class="note">Enter the exact address or drag the map marker to position</p>
                    </div>
                    <div class="col-md-6 col-sm-6">
                        <div class="form-group">
                            <label for="region">Antenna\'s Region</label>
                            <select class="form-control selectpicker" name="region" id="region">
                                <option value="">Select Region</option>
                                <option value="1">New York</option>
                                <option value="2">Washington</option>
                                <option value="3">London</option>
                                <option value="4">Paris</option>
                                <option value="5">Isreal</option>
                                </select>
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

            <hr>
            <section class="center">
                <div class="form-group">
                    <button type="submit" class="btn btn-primary btn-rounded">Add Antenna</button>
                </div>
            </section>
        </form>
    </div>
</div>
</div>';