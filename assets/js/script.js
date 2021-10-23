setInterval(function () {
    var currentTime = moment().format("dddd, MMMM Do YYYY hh:mm:ss a");
    var timeEl = $("span");
    timeEl.text(currentTime);
}, 1000);
