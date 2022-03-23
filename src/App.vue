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
      <div class="col-3">
        <button type="button" class="btn btn-primary" v-on:click="getWebCamList()">Search </button>
      </div>
    </div>
    <div class="row">
      <div class="col-3">ID</div>
      <div class="col-3">thumbnail</div>
      <div class="col-4">URL</div>
    </div>
    <webCamList v-for="item in list"  v-bind:key="item" v-bind:webCam="item" />
  </div>
</template>

<script>
import webCamList from './components/WebCamList.vue'

export default {
  name: 'App',
  data(){
    return {
       list:[],
       countrycd:''
    }
  },
  components: {
    webCamList
  },
  methods: {
    getWebCamList:function() {
      this.axios.get("/api/list",{
        params:{
          countrycd : this.countrycd
        }
      }).then((response) => {
        console.log(response.data);
        this.list=response.data;
      })
    }
  }
}
</script>

<style>
</style>
