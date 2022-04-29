<template>
  <div class="alert alert-primary">
    <h1>{{data.title}}</h1>
    <p class="mt-3 h5">{{data.msg}}</p>
  </div>
</template>

<script>
import { reactive } from 'vue'

export default {
  name: 'WebCamMap',
  setup(){
    const data = reactive({
      title : 'map',
      msg: 'thi is map'
    })
    return {
      data
    }
  }
}
</script>

<style>
</style>
