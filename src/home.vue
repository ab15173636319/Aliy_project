<script setup>
import { reactive } from "vue"
import NavCom from "./components/nav.vue"
import * as cla from "./js/classify"
import * as goods from "./js/goods"
const obj = reactive({
    o_visible: false
})


console.log(goods.goods);

</script>


<template>
    <div class="alldiv">
        <NavCom></NavCom>

        <div class="header">
            <div class="search_zone">
                <div class="input_group">
                    <div class="input_div"><input placeholder="搜索" type="text" class="input"></div>
                    <div class="btn"><span class="iconfont icon-sousuo">搜索</span></div>
                </div>
                <ul class="classify">
                    <li><a href="#">洗衣机</a></li>
                    <li><a href="#">保鲜膜</a></li>
                    <li><a href="#">袜子</a></li>
                    <li><a href="#">手机</a></li>
                    <li><a href="#">洗面奶</a></li>
                    <li><a href="#">枕头</a></li>
                    <li><a href="#">卫衣</a></li>
                    <li><a href="#">手机壳</a></li>
                    <li><a href="#">护发素</a></li>
                </ul>
            </div>
        </div>

        <div class="all">
            <div class="goods_box">
                <div class="top_classify" @mouseleave="obj.o_visible = false">
                    <div class="left_classify">
                        <div class="left_classify_content" v-for="c in cla.classify" @mouseover="obj.o_visible = true">
                            <div class="left_classify_left">
                                <span class="iconfont icon-xiangji"></span>
                                {{ c.value }}
                            </div>
                            <div class="left_classify_right">
                                <span v-for="cc in c.children[0]">
                                    <a href="#">{{ cc.value }}</a>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="center_img">

                        <el-carousel trigger="click" height="280px">
                            <el-carousel-item v-for="item in 2" :key="item">
                                <a href="#">
                                    <img src="https://gw.alicdn.com/imgextra/i4/O1CN01ZaP2Or1ZzsLJJb4Wg_!!6000000003266-0-tps-800-450.jpg" alt="">
                                </a>
                            </el-carousel-item>
                        </el-carousel>
                        <div class="other_classify" v-if="obj.o_visible">
                            <div class="other_classify_item">
                                <div class="left_classify_content2" v-for="c in cla.classify">
                                    <div class="left_classify_left">
                                        <span class="iconfont icon-xiangji"></span>
                                        {{ c.value }}
                                    </div>
                                    <div class="left_classify_right">
                                        <span v-for="cc in c.children[0]">
                                            <a href="#">{{ cc.value }}</a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    .
                </div>
                <div class="goods_list_container">
                    <div class="goods_title">猜你喜欢</div>
                    <div class="box_content">
                        <div class="box" v-for="g in goods.goods" :class="{ active: g.id % 5 != 0 }">
                            <img class="img_item" :src="g.img">
                            <div class="goods_name">
                                <p>{{ g.name }}</p>
                            </div>
                            <div class="goods_price pre">
                                <span class="price-label" style="font-size: 12px;">原价</span>
                                <span class="pre_price" style="font-size: 12px;">￥{{ g.price }}</span>
                            </div>
                            <div class="goods_price">
                                <span class="price-label">价格</span>
                                <span class="price">￥{{ g.price }}</span>
                            </div>
                            <div class="box_btn_group">
                                <div class="car">加入购物车</div>
                                <div class="pay">立即购买</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
@import url(./css/home.css);
</style>