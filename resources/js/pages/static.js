import "slider-pro";
import "owl.carousel/dist/owl.carousel.min";
import RunCommon from "./../common/run_common";
var Static = {
    init() {
        $(".js-menu-cate").mouseenter(function() {
            $("#menu-main").show();
        });
        $("#menu-main").mouseleave(function() {
            $("#menu-main").hide();
        });
    }
};
$(function() {
    Static.init();
    RunCommon.init();
});
