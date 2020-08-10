<template>
  <div class="container">
    <p>Content!</p>
  </div>
</template>

<script lang="ts">
import {Timer} from "~/models/timer";

export default {
  async asyncData({$axios, store}) {
    $axios.get('http://127.0.0.1:4010/timers?date=1959-09-28').then(data => {
      const timers: Array<Timer> = data.data
      timers.forEach((timer) => {
        store.commit('timer/add', new Timer(timer.id, timer.note))
        console.log(`Stored Timer[ID=${timer.id}]`);
      })
    })
  }
}
</script>

<style>
.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
