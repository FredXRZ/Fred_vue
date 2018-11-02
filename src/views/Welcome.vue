<template>
  <div class="hello">
    <div class="home_content">
      <img class="home_img" src="../assets/logo.png" alt="">
      <a @click="goIn" class="run_in_btn">进入</a>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
        return{
            msg: String
        }
    },
    methods:{
        goIn:function(){
        this.$router.push('/home');
        }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello{
    width: 100%;
    height: 100%;
    background: #358;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .home_img{
    width: 300px;
    height: 300px;
  }
  .home_content{
    text-align: center;
  }
  .run_in_btn{
    color: #fff;
    border: 1px solid #fff;
    display: block;
  }
</style>
