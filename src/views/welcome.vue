<template>
  <div class="home">
    <!-- <h1>name:{{ $store.state.name }}</h1>
    <h2>name:{{$store.getters.nameInfo}}</h2>
  

    <button @click="select">home</button>
    <div>{{$store.getters.donetodos}}</div>-->

    <div v-for="(item,key,index) in imgs" :key="index" class="divimg">
      <img :src="item.hoverURL" alt="风景" />
    </div>
  </div>
</template>

<script>
import data from "../../static/images.json";
export default {
  data() {
    return {
      // title:'$store.state.name'
      imgs: []
    };
  },
  components: {},
  methods: {
    select() {}
  },
  mounted() {
    console.log(data);
    this.imgs = data.data;
    console.log(this.imgs);
    this.select();
  }
};
</script>

<style scoped>
.home {
  display: flex;
  justify-content: space-between;
  /* align-items:flex-start; */
  flex-direction: row;
  flex-wrap: wrap;
}

img {
  width: 400px;
  height: 600px;
  margin-left: 5px;
}
.divimg {
  width: 400px;
  height: 600px;
  margin-bottom: 20px;
}
</style>
