<template>
    <keep-alive>
    <component :is="DataTreeComponent" />
  </keep-alive>
<DataTreeComponent></DataTreeComponent>
</template>

<script>
import DataTreeComponent from './components/DataTreeComponent.vue';

export default {
    components: { DataTreeComponent }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}

.flip-list-move {
  transition: transform 0.5s;
}
</style>
