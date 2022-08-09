<template>
  <div class="content">
    <header>
      <div class="title">
        <span>隧道动态设计系统</span>
      </div>
    </header>
    <main>
      <!-- 加载动画 -->
      <van-loading type="spinner" color="#1989fa" class="loading" v-show="show"
        >登录中。。。。</van-loading
      >
      <van-cell-group inset>
        <van-form @submit="onSubmit">
          <van-cell-group inset>
            <van-field
              v-model="username"
              name="username"
              label="用户名"
              placeholder="请填写用户名"
              :rules="[{ required: true, message: '请填写用户名' }]"
            />
            <van-field
              v-model="password"
              type="password"
              name="password"
              label="密码"
              placeholder="请填写密码"
              :rules="[{ required: true, message: '请填写密码' }]"
            />
          </van-cell-group>
          <div style="margin: 16px">
            <van-button round block type="primary" native-type="submit">
              登录
            </van-button>
          </div>
        </van-form>
      </van-cell-group>
    </main>
  </div>
  <!-- 登录页面遮罩层 -->
  <van-overlay :show="show" />
</template>

<script>
import router from "../router";
import { reqBannerList } from "../api/index";
import { Notify } from "vant";
import axios from "axios";

export default {
  data() {
    return {
      username: "",
      password: "",
      show: false, //是否显示遮罩
    };
  },
  methods: {
    onSubmit() {
      if (this.username != "wangzhen" || this.password != "123456") {
        Notify({ type: "warning", message: "用户名或密码输入错误！" });
        return;
      }
      reqBannerList().then((res) => {
        this.show = true;
        if (res.code == 200) {
          // 本地存储保存用户的基本信息和token值
          // console.log(res);
          sessionStorage.setItem("username", this.username);
          sessionStorage.setItem("password", this.password);
          sessionStorage.setItem("token", res.token);
          setTimeout(() => {
            this.show = false;
            // 跳转到首页主页
            router.push("/about");
          }, 2000);
        }
      });
      // axios.get('http://127.0.0.1:5173/mock/banner').then(res =>{
      //   console.log(res);
      // })
    },
  },
};
</script>

<style lang="scss" scoped >
.content {
  height: 100%;
  background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng5d82024bbc7f2bf6e749ad638524e0dd7a665104d5bc19e24fc66e8514f106ed)
    100% no-repeat;

  .loading {
    position: absolute;
    top: 100%;
    left: 35%;
    z-index: 9999;
  }
}

.title {
  height: 120px;
  text-align: center;
  font-size: 24px;
  color: black;
  padding: 40px;
}

// 修改一下登录页的遮罩颜色
.van-overlay {
  background-color: rgba(0, 0, 0, 0.1);
}
</style>
