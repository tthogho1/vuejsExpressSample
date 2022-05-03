<template>
<div>
 <h1>Google Map</h1>
 <div ref="map" style="height:500px;width:800px;"></div>
</div>
</template>

<script>
export default {
  name: 'webCamMap',
  data(){
    return {
      map:'',
    }
  },
  mounted(){
    //alert(this.$route.query.arr);
    let latlng = this.$route.query.arr;
    let timer = setInterval(() => {
      if(window.google){
        clearInterval(timer);
        this.map = new window.google.maps.Map(this.$refs.map, {
          center: {lat: parseFloat(latlng[0]), lng: parseFloat(latlng[1])},
          zoom: 8
        });       
      }
    },500)
  }
}
</script>