<template>
  <button type="button" class="btn btn-primary" v-on:click="getWebCamList()">Search </button>
  <div class="container-fluid">
    <webCamList v-for="item in list"  v-bind:key="item" v-bind:webCam="item" />
  </div>
</template>

<script>
import webCamList from './components/WebCamList.vue'

export default {
  name: 'App',
  data(){
    return {
       list:[]
    }
  },
  components: {
    webCamList
  },
  methods: {
    getWebCamList:function() {
      this.axios.get("/api/list").then((response) => {
        console.log(response.data);
        this.list=response.data;
      })
    }
  }
}
</script>

<style>
</style>
