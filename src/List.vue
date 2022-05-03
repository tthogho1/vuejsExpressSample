<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-2"><label for="select1">Country Code</label></div>
      <div class="col-2">
        <select id="select1" v-model="countrycd">
          <option>JP</option>
          <option>AL</option>
          <option>DZ</option>
          <option>US</option>
        </select>
      </div>
      <div class="col-2">
        <router-link :to="{name: 'map', query: {arr:[avgLat,avgLng]} }" class="btn btn-warning"></router-link>
      </div>
      <div class="col-3">
        <button type="button" class="btn btn-primary" v-on:click="getWebCamList()">Search </button>
      </div>
      <div class="col-3">
        <button type="button" class="btn btn-primary" v-on:click="prevWebCamList()">Prev</button>
        <button type="button" class="btn btn-primary" v-on:click="nextWebCamList()">Next</button>
      </div>
    </div>
    <div class="row">
      <div class="card col-2 text-center bg-secondary">ID</div>
      <div class="card col-3 text-center bg-secondary">ThumbNail</div>
      <div class="card col-4 text-center bg-secondary">Player URL</div>
    </div>
    <webCamList v-for="item in list"  v-bind:key="item" v-bind:webCam="item" />
  </div>
</template>

<script>
import webCamList from './components/WebCamList.vue'

export default {
  name: 'ImgList',
  data(){
    return {
       list:[],
       countrycd:'',
       savedcountrycd:'',
       avgLat:'',
       avgLng:''
    }
  },
  components: {
    webCamList
  },
  methods: {
    getWebCamList:function() {
      this.savedcountrycd = this.countrycd;
      this.axios.get("/api/list",{
        params:{
          countrycd : this.countrycd
        }
      }).then((response) => {
        this.list=response.data;
        this.lastid= this.list[this.list.length-1].id
        let sumLat = 0;
        let sumLng = 0;
        this.list.forEach(element => {
          sumLat += parseInt(element.latitude) ;
          sumLng += parseInt(element.longitude) ;                         
        });
        if (sumLat != 0){
          this.avgLat = sumLat / this.list.length;
        }
        if (sumLng != 0){
          this.avgLng = sumLng / this.list.length;
        }
      })
    },
    nextWebCamList:function() {
      this.axios.get("/api/list",{
        params:{
          countrycd : this.savedcountrycd,
          lastid : this.list[this.list.length-1].id
        }
      }).then((response) => {
        // console.log(response.data);
        this.list=response.data;
      })
    },
    prevWebCamList:function() {
      this.axios.get("/api/prev",{
        params:{
          countrycd : this.savedcountrycd,
          lastid : this.list[0].id
        }
      }).then((response) => {
        // console.log(response.data);
        this.list=response.data;
      })
    }
  }
}
</script>

<style>
</style>
