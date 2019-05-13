<?php

echo

'<div class="modal-dialog modal-report width-800px" role="document" data-latitude="40.7344458"
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
       <form class="form inputs-underline">
           <section>
               <h3>About</h3>
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
</div>';