<template>
  <div>
    <button>&lt;</button>
    <select @onchange="getStyle" id="styleChoose">
      <option value ="easy">简单</option>
      <option value ="normal">普通</option>
      <option value="hard">困难</option>
    </select>
    <button v-show="isHard" @click="Pause">暂停</button>
    <div><text>{{truetime}}</text></div>
    <button @click="reStart">重新开始</button>
    <canvas id="sandbox"></canvas>
  </div>
</template>
<style>
@import "../assets/css/mineSweeping.css";
</style>
<script>

export default {
  name: 'mineSweeping',
  data () {
    return {
      isHard:false,
      time:300,
      truetime:0,
    }
  },
  methods: {
    getStyle(){

    },
    Pause(){
      
    },
    reStart(){
      window.clearInterval(subtractTime);
      this.time = 300;
      let subtractTime = window.setInterval(function(){
          time--;
          this.truetime=Math.ceil(time/60);
        },1000);
      };

  },
  mounted: function(){
    
  }
}
</script>