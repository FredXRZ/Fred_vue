<template>
    <div class="recommend" >
        <swiper :options="swiperOption"  ref="mySwiper">
			<!-- 这部分放你要渲染的那些内容 -->
			<swiper-slide v-for="(item,index) in picArr" :key="index">
                <img src="{{item}}" alt="">
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
                msg:'welcom',
                picArr:[
                    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545674364624&di=e03d36e732ce67891705871eeb33602b&imgtype=0&src=http%3A%2F%2Fnews.k618.cn%2Fkx%2F201509%2F.%2FW020150906541777914878.jpg',
                    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1546269139&di=41aa1ab75e7ac11b148039c53ca8dca9&imgtype=jpg&er=1&src=http%3A%2F%2Fimg3.mtime.com%2Fmg%2F2007%2F44%2F26d8cc64-7007-4e87-8cf5-334d718347e4.jpg',
                    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545674453685&di=9fbf10ddf24d7b270201798d5cbcee1a&imgtype=0&src=http%3A%2F%2F5.133998.com%2F2014%2Fpic%2F000%2F357%2Ff5f51ab0fc8f1ae83dd074e6ecf90402.jpg',
                    'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3487534919,314333585&fm=26&gp=0.jpg',
                    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545674550650&di=2f4ff205256781d69d34aaaed944c1b8&imgtype=0&src=http%3A%2F%2Fwww.hinews.cn%2Fpic%2F0%2F12%2F51%2F13%2F12511391_171276.jpg'
                ]
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

