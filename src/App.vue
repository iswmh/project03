<template>
  <div class="app">
    App
    <div>
      <router-link to="/main">main</router-link>
      <router-link to="/login">login</router-link>
      <router-view></router-view>
      <div>{{ countStore.count }}</div>
      <button @click="btnclick">click</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import useCountStore from '@/stores/count'
const countStore = useCountStore()

function btnclick() {
  countStore.addcount()
}

</script>

<style scoped></style>