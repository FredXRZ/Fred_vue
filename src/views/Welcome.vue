<template>
    <div>
      
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
    },
    components:{

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>
