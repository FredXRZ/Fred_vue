<template>
    <div class="header_container">
        <h1 class="text">Music</h1>
        <router-link to="" class="mine" tag="div">
            <i class="iconfont icon-menu"></i>
        </router-link>
        <router-link to="" class="search" tag="div">
            <i class="iconfont icon-search"></i>
        </router-link>
    </div>
</template>
<script>
    export default {

    }
</script>

<style lang="scss" scoped>
    .header_container{
        width: 100%;
        height: 44px;
        position: relative;
        background: #d44439;
        .text{
            line-height: 44px;
            font-weight: 700;
            color: #f1f1f1;
            letter-spacing: 3px;
            font-size: 100%;
        }
        .mine{
            position: absolute;
            top: -1.5px;
            left: 0;
            .iconfont {
                display: block;
                padding: 11px;
                font-size: 22px;
                color: #f1f1f1;
            }
        }
         .search {
            position: absolute;
            top: 0;
            right: 2px;
            .iconfont {
                display: block;
                padding: 11px;
                font-size: 18px;
                color: #f1f1f1;
            }
        }
    }
</style>