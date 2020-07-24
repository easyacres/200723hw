$(document).ready(function() {
var userCitySearchInput = document.getElementById("")


queryLatLonURL = "https"
cityInput = ""

$.ajax({
    url: 'https://api.positionstack.com/v1/forward',
    data: {
      access_key: 'YOUR_ACCESS_KEY',
      query: '1600 Pennsylvania Ave NW - Washington',
      limit: 1
    }
  }).done(function(data) {
    console.log(JSON.parse(data));
  });

})