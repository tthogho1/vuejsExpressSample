<template>
  <div id="app">
    <div>
      <router-link to="/"   class="btn btn-primary mx-2">
      </router-link>
      <router-link to="/map" class="btn btn-warning">
      </router-link>
    </div>  
  </div>
  <hr>
  
  <router-view></router-view>
</template>

<script>
export default {
  name: 'App',
  created(){
    console.log("created !")
  },
  mounted(){
    console.log("mounted !")
  },
  data(){
    return {
       title:'Router'
    }
  }
}
</script>

<style>
</style>
