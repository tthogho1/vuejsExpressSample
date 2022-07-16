<template>
  <div class="reCommendlist">
    <div>
      <div>{{ reCommend.file }}</div>
      <div><img v-bind:src="downloadUrl(reCommend.file)" v-on:click="openWindow(reCommend.file)"></div>
    </div>
  </div>
</template>

<script>
import config from '../const/const.js'

export default {
  name: 'reCommendlist',
  props: {
      reCommend: {
        file:String,
        similarity:String
      }
  },
  computed:{
    downloadUrl(){
      const base = config.IMG_SERVER_HOST + "download/";
      //const base = "http://127.0.0.1:56653/file_upload/download/";
      return function(file){
        return base + file;
      }
    }
  },
  methods:{
    openWindow: function(name) {
      let webcamid = name.replace('.jpg','');
      let params = new URLSearchParams();
      params.append('id', webcamid);
      
      this.axios.post("/api/getbyid",params)
      .then((response) => {
          let list = []
          list = response.data;
          window.open(list[0].player);
      })
    }      
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
