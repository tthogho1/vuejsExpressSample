<template>
  <div class="webCamList">
    <div class="row">
      <div class="col-2">{{ webCam.id }}</div>
      <div class="col-3"><img v-bind:src="webCam.thumbnail" ></div>
      <div class="col-4"><a href='#' v-on:click="openPlayer(webCam.player,webCam.thumbnail)" >{{webCam.player}}</a></div>
    </div>
  </div>
</template>

<script>
import config from '../const/const.js'

export default {
  name: 'webCamList',
  props: {
      webCam: {
        id:String,
        thumbnail:String,
        player:String
      }
  },
  emits:['getRecommend'],
  methods:{
    openPlayer : async function(link,imgUrl){
      const url = config.IMG_SERVER_HOST + "getSimilarImageUrl";
      //const url = "http://127.0.0.1:56653/file_upload/getSimilarImageUrl";
      //const querystring = require("querystring");
      try {
        /*const res = await this.axios.post(url,
          querystring.stringify({
             imgUrl: imgUrl, //gave the values directly for testing
        }), {
          headers: { 
           "Content-Type": "application/x-www-form-urlencoded"
          }
        }); */
      
        let params = new URLSearchParams();
        params.append('imgUrl', imgUrl);
        let save = this;
        this.axios.post(url,params)
        .then((res) => {
          // response.data;
          let recolist = res.data;
          save.$emit('getRecommend', recolist)   
        }) 

        //let recolist = res.data;
        //this.$emit('getRecommend', recolist)
      }catch(e){ 
        console.log(e);
        // alert(e);
      }
      window.open(link); 
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
