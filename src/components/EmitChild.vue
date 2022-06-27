<template>
  <div class="m-5">
    <button
      class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
      @click="$emit('eventTest1')"
    >testButton1</button>
    <button
      class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded ml-2"
      @click="$emit('eventTest2', 'パラメータ！')"
    >testButton2</button>
    <button
      class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded ml-2"
      @click="execEmit"
    >testButton3</button>
  </div>
</template>
<script>
export default({
  setup(props, context) {
    const execEmit = () => {
      context.emit('eventTest2', 'パラメータ1', 'パラメータ2');
    }

    return {
      execEmit
    }
  }
})
</script>