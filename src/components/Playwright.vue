<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>Playwirght</h3>
    <ul>
      <button @click="process">Process</button>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Playwright',
  props: {
    msg: String
  },
  methods: {
    process() {
      const { ipcRenderer } = window.require("electron");
      const returnValue = ipcRenderer.sendSync('sync-process', '');
      console.log(returnValue);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
