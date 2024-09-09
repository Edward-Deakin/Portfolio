function displayTime() {
    var date = new Date();
    var time = date.toLocaleTimeString("en-GB", {
        timeZone: "Europe/London"
    });
    var currentTime = time;
    document.getElementById('current-time').innerHTML = currentTime;
}

setInterval(displayTime, 1000);