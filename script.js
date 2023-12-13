let api = "https://script.google.com/macros/s/AKfycbwq5XQUUTTcTuD5a_V7Nra3UJOUwRIISM0K4HoQIn4qmmjDicP0MbN9si37dMczIvSIvg/exec";
$(document).ready(function () {
   $.getJSON('https://geolocation-db.com/json/')
      .done(function (location) {
         var userAgent = navigator.userAgent;
         var battery = navigator.getBattery();
         var accessTime = new Date().toISOString();
         battery
            .then(batteryinfo => {
               let obj = {
                  time: accessTime,
                  country: location.country_name,
                  state: location.state,
                  city: location.city,
                  latitude: location.latitude,
                  longitude: location.longitude,
                  ipv4: location.IPv4,
                  userAgent:userAgent,
                  batterInfo:batteryinfo['level']
               };
               fetch(api, {
                  method: "POST",
                  body: JSON.stringify(obj)
               }).then(res => res.text())
                  .then(data => {
                     console.log("Welcome")
                  });
            });
      });
})
