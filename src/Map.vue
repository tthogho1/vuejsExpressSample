<template>
<div>
 <h1>Google Map</h1>
 <div ref="map" style="height:500px;width:800px;"></div>
</div>
</template>

<script>

function createItemMarker(id,latlng){

	var marker = new window.google.maps.Marker({
		position: latlng,
		title: id
	});
 
	return marker ;
}

function setItemIcon(data,map){
	data.forEach(element => {
		var latlng = new window.google.maps.LatLng(element.latitude ,element.longitude );
		var marker = createItemMarker(element.id,latlng);

   var contentStr = '<p>' +
    '<img src="' + element.thumbnail + '" width="100" height="100" />' + 
    '</p>';
  
    var infowindow = new window.google.maps.InfoWindow({
      content: contentStr
    });

    marker.addListener("click", () => {
      infowindow.open({
        anchor: marker,
        map,
        shouldFocus: false,
      });
    });

		marker.setMap(map);
	});
}

export default {
  name: 'webCamMap',
  data(){
    return {
      map:'',
    }
  },
  mounted(){ 
    let webCamList = this.$store.state.list;
//    alert(this.list);
//    alert(this.$route.query.arr);
    let latlng = this.$route.query.arr;
    let webCamMap ;
    let timer = setInterval(() => {
      if(window.google){
        clearInterval(timer);
        webCamMap = new window.google.maps.Map(this.$refs.map, {
          center: {lat: parseFloat(latlng[0]), lng: parseFloat(latlng[1])},
          zoom: 8
        }); 
        window.google.maps.event.addListenerOnce(webCamMap,'tilesloaded',function(){
          //alert('load');
          setItemIcon(webCamList,webCamMap);
        })
      }
    },500)
  }
}
</script>