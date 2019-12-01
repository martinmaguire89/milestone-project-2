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
          content:'<h3>Malmasion Hotel</h3>' +
                '<p>See link to your favourite doggy Hotel: <a target="_blank " href="https://www.malmaison.com">' +
				'https://www.malmaison.com</a></p>'
         },
         {
          coords:{lat:54.329310,lng:-7.618948},
          content:'<h3>Killyhevlin Lakeside Hotel & Lodges</h3>' +
                '<p>See link to your favourite doggy Hotel: <a target="_blank " href="https://www.killyhevlin.com/">' +
				'https://www.killyhevlin.com/</a></p>'
         },
          {
          coords:{lat:55.196346,lng:-6.678567},
          content:'<h3>Inn on the coast Portrush</h3>' +
                '<p>See link to your favourite doggy Hotel: <a target="_blank " href="https://www.innonthecoastportrush.com/">' +
				'https://www.innonthecoastportrush.com/</a></p>'
         },
          {
          coords:{lat:55.236304,lng:-6.357919},
          content:'<h3>Fullerton Arms</h3>' +
                '<p>See link to your favourite doggy Hotel: <a target="_blank " href="http://www.fullerton-arms.com/">' +
				'http://www.fullerton-arms.com/</a></p>'
         },
         {
          coords:{lat:54.342322,lng:-7.627002},
          content:'<h3>Belmore Court and Motel</h3>' +
                '<p>See link to your favourite doggy Hotel: <a target="_blank " href="http://www.motel.co.uk/">' +
				'http://www.motel.co.uk/</a></p>'
         },
          {
          coords:{lat:5.205038,lng:-6.240255},
          content:'<h3>Marine Hotel Ballycastle</h3>' +
                '<p>See link to your favourite doggy Hotel: <a target="_blank " href="http://www.marinehotelballycastle.com/">' +
				'http://www.marinehotelballycastle.com/</a></p>'
         }, {
          coords:{lat:54.384806,lng:-7.310076},
          content:'<h3>Blessingbourne Courtyard Apartments</h3>' +
                '<p>See link to your favourite doggy Hotel: <a target="_blank " href="http://www.blessingbourne.com/">' +
				'http://www.blessingbourne.com/</a></p>'
         },
         {
          coords:{lat:55.037191,lng:-6.603107},
          content:'<h3>Brown Trout Golf And Country Inn</h3>' +
                '<p>See link to your favourite doggy Hotel: <a target="_blank " href="http://www.browntroutinn.com/">' +
				'http://www.browntroutinn.com/</a></p>'
         },
          {
          coords:{lat:54.507336,lng:-7.833441},
          content:'<h3>Lusty Beg Island</h3>' +
                '<p>See link to your favourite doggy Hotel: <a target="_blank " href="https://www.lustybegisland.com/en/">' +
				'https://www.lustybegisland.com/en/</a></p>'
         }, {
          coords:{lat:54.969268,lng:-7.270147},
          content:'<h3>Beech Hill Country House</h3>' +
                '<p>See link to your favourite doggy Hotel: <a target="_blank " href="https://www.beech-hill.com/">' +
				'https://www.beech-hill.com/</a></p>'
         },
         {
          coords:{lat:55.001403,lng:-5.987280},
          content:'<h3>Largy coastal apartments</h3>' +
                '<p>See link to your favourite doggy Hotel: <a target="_blank " href="https://www.largycoastalapartments.com/">' +
				'https://www.largycoastalapartments.com/</a></p>'
         },
          {
          coords:{lat:54.384825,lng:-7.310065},
          content:'<h3>Blessing Bourne</h3>' +
                '<p>See link to your favourite doggy Hotel: <a target="_blank " href="https://www.blessingbourne.com/">' +
				'https://www.blessingbourne.com/</a></p>'
         }, {
          coords:{lat:54.665890,lng:-5.666549},
          content:'<h3>sThe Salty Dog Bangor</h3>' +
                '<p>See link to your favourite doggy Hotel: <a target="_blank " href="https://saltydogbangor.com/">' +
				'https://saltydogbangor.com/</a></p>'
         },
         {
          coords:{lat:54.344790,lng:-6.650646},
          content:'<h3>Armagh City Hotel</h3>' +
                '<p>See link to your favourite doggy Hotel: <a target="_blank " href="https://www.armaghcityhotel.com/">' +
				'https://www.armaghcityhotel.com/</a></p>'
         },
          {
          coords:{lat:54.176386,lng:-6.340309},
          content:'<h3>Canal Court Hotel</h3>' +
                '<p>See link to your favourite doggy Hotel: <a target="_blank " href="https://www.belmontbanbridge.co.uk/">' +
				'https://www.belmontbanbridge.co.uk/</a></p>'
         },
         {
          coords:{lat:54.999668,lng:-7.321759},
          content:'<h3>travel Lodge</h3>' +
                '<p>See link to your favourite doggy Hotel: <a target="_blank " href="http://www.travelodge.ie/hotels/225/Derry-hotel">' +
				'http://www.travelodge.ie/hotels/225/Derry-hotel</a></p>'
         },
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
