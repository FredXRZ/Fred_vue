<template>
    <div class="tab" >
        <router-link tag="div" class="tab_items" to="/home" >
            <span>推荐</span>
        </router-link>
        <router-link tag="div" class="tab_items" to="/about" >
            <span>排行</span>
        </router-link>
        <router-link tag="div" class="tab_items" to="/" >
            <span>歌手</span>
        </router-link>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    .tab{
        width: 100%;
        height: 44px;
        line-height: 44px;
        display:flex;
        font-size:14px;
        background: #d44439;
        .tab_items{
            // 如果所有项目的flex-grow属性都为1，则它们将等分剩余空间（如果有的话）
            flex: 1;
            // 垂直
            text-align: center;
            color: #e4e4e4;
            span{
                padding-bottom: 3px;
            }
            &.router-link-active{
                span {
                    font-weight: bold;
                    color: #f1f1f1;
                    border-bottom: 2px solid #f1f1f1;
                }
            }
        }
    }
</style>

