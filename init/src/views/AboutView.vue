<template>
  <div class="content3">
    <header>
      <van-nav-bar
        :title="title ||'首页主页'"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
      />
    </header>
    <main>
      <router-view></router-view>
    </main>
      <footer>
    <van-tabbar v-model="active">
    <template v-for="(item,index) in this.$route.matched[0].children[1].children" :key="index">
      <van-tabbar-item :icon="item.meta.icon" @click="Torouter(item.path,item)" >{{item.meta.title}}</van-tabbar-item>
    </template>
    </van-tabbar>
  </footer>
  </div>

</template>
<script>
import router from "../router";
import { ref } from 'vue';
export default {
  data(){
    return{
      title:''
    }
  },
  setup() {
    const active = ref(0);//默认第一个
    const onClickLeft = () => {
      router.push("/");
    };
    return { active, onClickLeft,};
  },
  methods:{
     // tabs切换跳转页面函
    Torouter(path,route){
       router.push(path);
      this.title = route.meta.title;
    }
  }
};
</script>
<style lang="scss">
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
    background-color: #fff;
  }
}

.content3 {
  height: 100%;
  background-color: #fff;

  .RotationImgs {
    height: 150px;
  }

  .imgs {
    width: 100%;
    height: 150px;
    object-fit: cover;
  }
}

.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
</style>
