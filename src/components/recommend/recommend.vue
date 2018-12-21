<template>
    <div class="recommend" >
        <swiper :options="swiperOption"  ref="mySwiper">
			<!-- 这部分放你要渲染的那些内容 -->
			<swiper-slide v-for="(item,index) in items" :key="index">

			</swiper-slide>
			<!-- 这是轮播的小圆点 -->
			<div class="swiper-pagination" slot="pagination"></div>
		</swiper>
    </div>
</template>
<script>
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    export default {
        data() {
            return {
                msg:'welcom'
            }
        },
        components: {
			swiper,
			swiperSlide
		}
    }
</script>
<style lang="scss" scoped>

</style>

