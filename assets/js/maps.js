function initMap() {
    // Map options
      var options = {
        zoom:8,
        center:{lat:54.787716,lng:-6.492314}
      }
      

      // New map
      var map = new google.maps.Map(document.getElementById('map'), options);
        //buttons added to change the center of the map to specific county. code solution found on stack overflow//
      google.maps.event.addDomListener(document.getElementById('antrim'), 'click', function () {

        map.setCenter(new google.maps.LatLng(54.980650,-6.119997));
        map.setZoom(9);
        });

         google.maps.event.addDomListener(document.getElementById('armagh'), 'click', function () {

        map.setCenter(new google.maps.LatLng(54.351817,-6.654049));
        map.setZoom(10);
        });

         google.maps.event.addDomListener(document.getElementById('derry'), 'click', function () {

        map.setCenter(new google.maps.LatLng(54.917585,-6.916701));
        map.setZoom(10);
        });

         google.maps.event.addDomListener(document.getElementById('down'), 'click', function () {

        map.setCenter(new google.maps.LatLng(54.378840, -5.750582));
        map.setZoom(10);
        });

         google.maps.event.addDomListener(document.getElementById('fermanagh'), 'click', function () {

        map.setCenter(new google.maps.LatLng(54.420865,-7.594607));
        map.setZoom(10);
        });

         google.maps.event.addDomListener(document.getElementById('tyrone'), 'click', function () {

        map.setCenter(new google.maps.LatLng(54.603471, -7.300509));
        map.setZoom(10);
        });
        //buttons added to chnage the center of the map to specific county. code solution found on stack overflow//
      
      // Array of markers showing places to stay that are dog friendly
      var markers = [
        {
          coords:{lat:54.600783,lng:-5.923918},
          content:'<h6>Malmasion Hotel</h6>' +
                '<p>See link to your favourite doggy Hotel: <a target="_blank " href="https://www.malmaison.com">' +
				'https://www.malmaison.com</a></p>'
         },
         {
          coords:{lat:54.329310,lng:-7.618948},
          content:'<h6>Killyhevlin Lakeside Hotel & Lodges</h6>' +
                '<p>See link to your favourite doggy Hotel: <a target="_blank " href="https://www.killyhevlin.com/">' +
				'https://www.killyhevlin.com/</a></p>'
         },
          {
          coords:{lat:55.196346,lng:-6.678567},
          content:'<h6>Inn on the coast Portrush</h6>' +
                '<p>See link to your favourite doggy Hotel: <a target="_blank " href="https://www.innonthecoastportrush.com/">' +
				'https://www.innonthecoastportrush.com/</a></p>'
         },
          {
          coords:{lat:55.236304,lng:-6.357919},
          content:'<h6>Fullerton Arms</h6>' +
                '<p>See link to your favourite doggy Hotel: <a target="_blank " href="http://www.fullerton-arms.com/">' +
				'http://www.fullerton-arms.com/</a></p>'
         },
         {
          coords:{lat:54.342322,lng:-7.627002},
          content:'<h6>Belmore Court and Motel</h6>' +
                '<p>See link to your favourite doggy Hotel: <a target="_blank " href="http://www.motel.co.uk/">' +
				'http://www.motel.co.uk/</a></p>'
         },
          {
          coords:{lat:5.205038,lng:-6.240255},
          content:'<h6>Marine Hotel Ballycastle</h6>' +
                '<p>See link to your favourite doggy Hotel: <a target="_blank " href="http://www.marinehotelballycastle.com/">' +
				'http://www.marinehotelballycastle.com/</a></p>'
         }, {
          coords:{lat:54.384806,lng:-7.310076},
          content:'<h6>Blessingbourne Courtyard Apartments</h6>' +
                '<p>See link to your favourite doggy Hotel: <a target="_blank " href="http://www.blessingbourne.com/">' +
				'http://www.blessingbourne.com/</a></p>'
         },
         {
          coords:{lat:55.037191,lng:-6.603107},
          content:'<h6>Brown Trout Golf And Country Inn</h6>' +
                '<p>See link to your favourite doggy Hotel: <a target="_blank " href="http://www.browntroutinn.com/">' +
				'http://www.browntroutinn.com/</a></p>'
         },
          {
          coords:{lat:54.507336,lng:-7.833441},
          content:'<h6>Lusty Beg Island</h6>' +
                '<p>See link to your favourite doggy Hotel: <a target="_blank " href="https://www.lustybegisland.com/en/">' +
				'https://www.lustybegisland.com/en/</a></p>'
         }, {
          coords:{lat:54.969268,lng:-7.270147},
          content:'<h6>Beech Hill Country House</h6>' +
                '<p>See link to your favourite doggy Hotel: <a target="_blank " href="https://www.beech-hill.com/">' +
				'https://www.beech-hill.com/</a></p>'
         },
         {
          coords:{lat:55.001403,lng:-5.987280},
          content:'<h6>Largy coastal apartments</h6>' +
                '<p>See link to your favourite doggy Hotel: <a target="_blank " href="https://www.largycoastalapartments.com/">' +
				'https://www.largycoastalapartments.com/</a></p>'
         },
          {
          coords:{lat:54.384825,lng:-7.310065},
          content:'<h6>Blessing Bourne</h6>' +
                '<p>See link to your favourite doggy Hotel: <a target="_blank " href="https://www.blessingbourne.com/">' +
				'https://www.blessingbourne.com/</a></p>'
         }, {
          coords:{lat:54.665890,lng:-5.666549},
          content:'<h6>sThe Salty Dog Bangor</h6>' +
                '<p>See link to your favourite doggy Hotel: <a target="_blank " href="https://saltydogbangor.com/">' +
				'https://saltydogbangor.com/</a></p>'
         },
         {
          coords:{lat:54.344790,lng:-6.650646},
          content:'<h6>Armagh City Hotel</h6>' +
                '<p>See link to your favourite doggy Hotel: <a target="_blank " href="https://www.armaghcityhotel.com/">' +
				'https://www.armaghcityhotel.com/</a></p>'
         },
          {
          coords:{lat:54.176386,lng:-6.340309},
          content:'<h6>Canal Court Hotel</h6>' +
                '<p>See link to your favourite doggy Hotel: <a target="_blank " href="https://www.belmontbanbridge.co.uk/">' +
				'https://www.belmontbanbridge.co.uk/</a></p>'
         },
         {
          coords:{lat:54.999668,lng:-7.321759},
          content:'<h6>travel Lodge</h6>' +
                '<p>See link to your favourite doggy Hotel: <a target="_blank " href="http://www.travelodge.ie/hotels/225/Derry-hotel">' +
				'http://www.travelodge.ie/hotels/225/Derry-hotel</a></p>'
         },
      ];
      // Array of markers showing places to stay that are dog friendly//

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
    // js was found form a youtube vide form traverysmedia//