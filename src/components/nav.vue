<script setup>
import { reactive, watch } from "vue"
import { countrylist } from "../js/country.js"


const obj = reactive({
    country: countrylist,
    first_contry: 3,
    country_title: ""
})

function getFirstTitle() {
    obj.country.forEach(element => {
        if (obj.first_contry == element.id) {
            obj.country_title = element.value
        }
    });
}
getFirstTitle()

function changeCountry(id) {
    obj.first_contry = id
    getFirstTitle()
}


</script>

<template>
    <header>
        <nav>
            <div class="left">
                <ul>
                    <li class="left_item c-menu-top black">
                        <div>{{ obj.country_title }} <span class="iconfont icon-xia"></span></div>
                        <div class="c-menu">
                    <li v-for="c in obj.country" @click="changeCountry(c.id)">
                        {{ c.value }}
                    </li>
            </div>
            </li>
            <li class="left_item user_info">
                <a class="f22e00" href="#">登录</a>
                <a href="#">注册</a>
            </li>
            </ul>
            </div>
            <div class="right">
                <ul>
                    <li class="right_item">
                        <a href="#">首页</a>
                    </li>
                    <li class="right_item user_info">
                        <a href="#">商品分类</a>
                        <a href="#">免费开店</a>
                    </li>
                    <li class="right_item">
                        <a href="">我</a>
                    </li>
                    <li class="right_item">
                        <a href="#">购物车</a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<style>
@import url(./css/nav.css);
</style>