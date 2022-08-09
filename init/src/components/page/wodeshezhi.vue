<template>
  <div class="content1">
    <header></header>
    <main>
      <div>
<van-collapse v-model="activeName" accordion>
  <van-collapse-item title="标题1" name="1">
    代码是写出来给人看的，附带能在机器上运行。
  </van-collapse-item>
  <van-collapse-item title="标题2" name="2">
    技术无非就是那些开发它的人的共同灵魂。
  </van-collapse-item>
  <van-collapse-item title="标题3" name="3">
    在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。
  </van-collapse-item>
</van-collapse>
      </div>
<div class="share">
  <van-cell title="显示分享面板" @click="showShare = true" />
  <van-share-sheet
  v-model:show="showShare"
  title="立即分享给好友"
  :options="options"
/>
</div>

    </main>
    <footer>
      
    </footer>
    <!-- <van-pull-refresh v-model="loading" @refresh="onRefresh">
      <p>刷新次数: {{ count }}</p>
    </van-pull-refresh> -->
  </div>
</template>

<script type="text/javascript">
import router from "../../router";
import { ref } from "vue";
export default {
  data() {
    return {};
  },
  setup() {
    // 下拉刷新
    // const count = ref(0);
    // const loading = ref(false);
    // const onRefresh = () => {
    //   setTimeout(() => {
    //     Toast("刷新成功");
    //     loading.value = false;
    //     count.value++;
    //   }, 1000);
    // };

    const activeName = ref('1');

    // 分享列表
     const showShare = ref(false);
    const options = [
      [
        { name: '微信', icon: 'wechat' },
        { name: '朋友圈', icon: 'wechat-moments' },
        { name: '微博', icon: 'weibo' },
        { name: 'QQ', icon: 'qq' },
      ],
      [
        { name: '复制链接', icon: 'link' },
        { name: '分享海报', icon: 'poster' },
        { name: '二维码', icon: 'qrcode' },
        { name: '小程序码', icon: 'weapp-qrcode' },
      ],
    ];
    return {
      // count,
      // loading,
      // onRefresh,
      activeName,
       options,
      showShare,
    };
  },
  components: {},
};
</script>

<style lang="scss" scoped>
.content1{
  height: 100%;
}
.share{
 margin-top: 10px;
  bottom: 0;
  height: 40px;
}
</style>
