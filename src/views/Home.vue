<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <div>
      <p>Fred的blog</p>
    </div>
    <div>
      <ul class="tab_list">
        <li @click="backHome">首页</li>
        <li>个人介绍</li>
        <li>作品展示</li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  data(){
    return{

    }
  },
  methods:{
    backHome:function(){
      this.$router.push('/')
    }
  }
}
</script>
<style>
  .home{
    width: 100%;
    height: 100%;
  }
  .tab_list{
    width: 100%;
    overflow: hidden;
    background: #358;
  }
  .tab_list>li{
    width: 100px;
    height: 30px;
    line-height: 30px;
    float: left;
    list-style: none;
    background: #626;
    color: #fff;
    margin-right: 20px;
    cursor: pointer;
  }
</style>
