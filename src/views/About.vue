<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p @click="changeMessage" class="my_msg">{{msg}}</p>
    <ul v-if="showList">
      <li v-for="item in arr" :key="item.id">{{item}}</li>
    </ul>
    <button @click="changeArr">修改数组</button>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        msg:`This is Fred's message!`,
        arr:[0,1,2,3,4,5,6],
        showList:true
      }
    },
    methods:{
      changeMessage:function(){
        this.msg = `I have changed my message!`
      },
      changeArr:function(){
        this.arr.reverse();
      }
    }
  }
</script>
<style>
  .my_msg{
    font-size: 30px;
    color: #626;
    background: #358;
    border: 1px solid #f00;
    border-radius: 10px;
  }
</style>


