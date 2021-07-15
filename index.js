var hour = document.getElementById("hour");
var minute = document.getElementById("minute");
var second = document.getElementById("second");
var size = document.getElementById("size");



// var timeZone =document.getElementById("timezone");

var clock = setInterval(
    function time() {
        var date_now = new Date();
        var hr = date_now.getHours();
        var min = date_now.getMinutes();
        var sec = date_now.getSeconds();
        // var am = date_now.get();
        // console.log(min)
        if(hr>12){
            hr = hr - 12;
        }
        if (hr < 10) {
            hr = "0" + hr;
        }
        if (min < 10) {
            min = "0" + min;
        }
        if (sec < 10) {
            sec = "0" + sec;
        }
            // timeZone.textContent = am;
            hour.textContent = hr;
            minute.textContent = min;
            second.textContent = sec;
        


    },1000
);