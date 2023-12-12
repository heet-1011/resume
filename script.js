let api = "https://script.google.com/macros/s/AKfycbwGEAJH7DzT8hSl4ATScTnuemnyfplRe8dhF8n2mXj0ZFkvh6bcv7zWFuoAYpA6Sd0/exec";
$(document).ready(function () {
   $.getJSON('https://geolocation-db.com/json/')
      .done(function (location) {
         var accessTime = new Date().toISOString();
         let obj = {
            time: accessTime,
            country: location.country_name,
            state: location.state,
            city: location.city,
            latitude: location.latitude,
            longitude: location.longitude,
            ipv4: location.IPv4
         };
         fetch(api, {
            method: "POST",
            body: JSON.stringify(obj)
         }).then(res => res.text())
            .then(data => {
               console.log("Welcome");
            });
      });
})
