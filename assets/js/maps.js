function initMap() {
    // Map options
      var options = {
        zoom:8,
        center:{lat:54.787716,lng:-6.492314}
      }

      // New map
      var map = new google.maps.Map(document.getElementById('map'), options);
      //54.600783, -5.923918
      // Array of markers
      var markers = [
        {
          coords:{lat:54.600783,lng:-5.923918},
          content:'<h1>https://www.malmaison.com/locations/belfast/</h1>'
         },
        {
          coords:{lat:42.8584,lng:-70.9300},
          content:'<h1>Amesbury MA</h1>'
        },
        {
          coords:{lat:42.7762,lng:-71.0773}
        }
      ];

      // Loop through markers
      for(var i = 0;i < markers.length;i++){
        // Add marker
        addMarker(markers[i]);
      }

      // Add Marker Function
      function addMarker(props){
        var marker = new google.maps.Marker({
          position:props.coords,
          map:map,
        });

        // Check content
        if(props.content){
          var infoWindow = new google.maps.InfoWindow({
            content:props.content
          });

          marker.addListener('click', function(){
            infoWindow.open(map, marker);
          });
        }
      }
    }
