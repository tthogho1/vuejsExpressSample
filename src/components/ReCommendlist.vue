<template>
  <div class="reCommendlist">
    <div>
      <div>{{ reCommend.file }}</div>
      <div><img v-bind:src="downloadUrl(reCommend.file)"></div>
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
