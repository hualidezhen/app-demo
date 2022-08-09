<template>
  <div class="content">
    <header>
      <van-notice-bar left-icon="volume-o" :scrollable="false">
        <van-swipe
          vertical
          class="notice-swipe"
          :autoplay="3000"
          :show-indicators="false"
        >
          <van-swipe-item>明月直入，无心可猜。</van-swipe-item>
          <van-swipe-item>仙人抚我顶，结发受长生。</van-swipe-item>
          <van-swipe-item>今人不见古时月，今月曾经照古人。</van-swipe-item>
        </van-swipe>
      </van-notice-bar>
    </header>
    <main>
      <van-cell-group>
        <div class="RotationImgs">
          <van-swipe :autoplay="3000" lazy-render>
            <van-swipe-item v-for="image in images" :key="image">
              <img class="imgs" :src="image.imgUrl" />
            </van-swipe-item>
          </van-swipe>
        </div>
      </van-cell-group>
      <van-grid square>
        <van-grid-item
          v-for="value in 8"
          :key="value"
          icon="photo-o"
          text="文字"
        />
      </van-grid>

      <div class="test">这是一个测试混合的div盒子
     
      </div>
         <div class="test1">
          继承盒子
        </div>
      <!-- <div class="test">这是一个测试混合的div盒子</div> -->

      <div class="test2">这是一个测试继承的div盒子</div>
    </main>

    <footer></footer>
  </div>
</template>
<script>
import router from "../../router";
import { ref } from "vue";
import { Toast } from "vant";
import { reqBannerList } from "../../api/index";

export default {
  setup() {
    const images = ref([]); //vue3定义
    // 获取图片url
    reqBannerList().then((res) => {
      // vue3赋值
      images.value = res.data;
    });
    return { images };
  },
};
</script>
<style lang="scss">
// 定义css属性变量、-和_ 两者形式是写法都能兼容
$height-data: 40px;
$height: 150px;

//混合器 //有先后顺序 先定义混合器再引入
@mixin rounded-corners {
  background-color: #39a9ed;
  color: red;
  &:hover {
    background-color: bisque;
  }
}

// 混合传参
@mixin link-colors($normal, $hover) {
  color: $normal;
  &:hover {
    color: $hover;
  }
}

// 符合选择器可以通过嵌套规则实现 如 .content .RotationImgs 和 .content .imgs
.content {
  height: 100%;
  background-color: #fff;

  .RotationImgs {
    // height: 150px;
    height: $height;
  }

  .imgs {
    width: 100%;
    // height: 150px;
    height: $height;
    object-fit: cover;
  }
}

.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  line-height: $height;
  text-align: center;
  background-color: #39a9ed;
}

.notice-swipe {
  // height: 40px;
  // line-height: 40px;
  height: $height-data;
  line-height: $height_data;

  @include rounded-corners;

  // 父选择器的标识符&;
  // &:hover {
  //   background-color: aqua;
  // }

  // @include rounded-corners;
}

// 嵌套属性的规则是这样的：把属性名从中划线-的地方断开，在根属性后边添加一个冒号:，紧跟一个{ }块，把子属性部分写在这个{ }块中。
.test {
  width: 100px;
  height: 100px;
  margin-left: 35%;
  margin-top: 5%;
  
  // margin :{
  //   letf:35%;
  // }


  border: 2px solid #ccc {
    left: 0px;
    right: 0px;
  }

  // @include rounded-corners;

  // @include link-colors(green, pink);

  // 相当于
  // border: 1px solid #ccc;
  // border-left: 0px;
  // border-right: 0px;

  // font:{
  //   size:18px;
  //   weight: 600;
  //   family: "微软雅黑"
  // }
}

 .test1{
  width: 50px;
  height: 50px;
  border: 1px solid #39a9ed;
}

.test2 {
  width: 100px;
  height: 100px;
  margin-left: 35%;
  margin-top: 25%;
  border: 2px solid #ccc {
    left: 0px;
    right: 0px;
  }

  // 继承test
  // @extend .test 
  @extend .test1 
}
</style>
