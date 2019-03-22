<template>
  <div>
    <button>&lt;</button>
    <select @onchange="getStyle" id="styleChoose">
      <option value ="easy">简单</option>
      <option value ="normal">普通</option>
      <option value="hard">困难</option>
    </select>
    <button v-show="isHard" @click="Pause">暂停</button>
    <div></div>
    <button @click="reStart">重新开始</button>
    <div></div>
  </div>
</template>
<style>
@import "../assets/css/component.css";
</style>
<script>

export default {
  name: 'mineSweeping',
  data () {
    return {
      isHard:false,

    }
  },
  methods: {
    getStyle(){

    },
    Pause(){

    },
    reStart(){

    }
  },
  mounted: function(){
    
  }
}
</script>