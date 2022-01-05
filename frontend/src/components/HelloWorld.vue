<template>

  <div >
    <div class="grid">
  <Tab />
  <Tree/>
  </div>
  </div>

</template>

<script>

import Tab from "./tabs.vue";
import Tree from "./tree.vue";

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  components: {
    Tab,
    Tree,
  }
};
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
