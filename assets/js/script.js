var modalEl = $("#exampleModal");
var timeEl = $("span");

setInterval(function () {
    var currentTime = moment().format("dddd, MMMM Do YYYY hh:mm:ss a");
    timeEl.text(currentTime);
}, 1000);

$('#instructions-modal').on('click', function () {
    console.log("hello")
    modalEl.attr("aria-hidden", false);
    console.log(modalEl)

  })