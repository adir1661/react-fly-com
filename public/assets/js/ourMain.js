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

