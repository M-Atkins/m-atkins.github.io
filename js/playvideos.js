$(document).ready(function() {
    $("#img1").mouseover(function() {
        $('#firstvid').get(0).play();
    });
    $("#img1").mouseout(function() {
        $('#firstvid').get(0).pause();
    });
    $("#img2").mouseover(function() {
        $('#secondvid').get(0).play();
    });
    $("#img2").mouseout(function() {
        $('#secondvid').get(0).pause();
    });
    $("#img3").mouseover(function() {
        $('#thirdvid').get(0).play();
    });
    $("#img3").mouseout(function() {
        $('#thirdvid').get(0).pause();
    });
    $("#img4").mouseover(function() {
        $('#fourthvid').get(0).play();
    });
    $("#img4").mouseout(function() {
        $('#fourthvid').get(0).pause();
    });
});	