<template>
  <div class="webCamList">
    <div class="row">
      <div class="col-3">{{ webCam.id }}</div>
      <div class="col-3"><img v-bind:src="webCam.thumbnail" ></div>
      <div class="col-3"><a v-bind:href="webCam.player" ></a></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'webCamList',
  props: {
      webCam: {
        id:String,
        thumbnail:String,
        player:String
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
