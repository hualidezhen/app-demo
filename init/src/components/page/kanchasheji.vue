<template>
  <div class="content2">
    <header></header>
    <main>
   <van-address-list
      v-model="chosenAddressId"
      :list="list"
      :disabled-list="disabledList"
      disabled-text="以下地址超出配送范围"
      default-tag-text="默认"
      @add="onAdd"
      @edit="onEdit"
    />
    </main>
 <footer></footer>
  </div>
</template>

<script type="text/javascript">
import router from "../../router";
import { ref } from "vue";
import { Toast } from "vant";
export default {
  data() {
    return {};
  },
  setup() {
    const onClickIcon = () => Toast("点击图标");
    const onClickButton = () => Toast("点击按钮");

    //
    const chosenAddressId = ref("1");
    const list = [
      {
        id: "1",
        name: "张三",
        tel: "13000000000",
        address: "浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室",
        isDefault: true,
      },
      {
        id: "2",
        name: "李四",
        tel: "1310000000",
        address: "浙江省杭州市拱墅区莫干山路 50 号",
      },
    ];
    const disabledList = [
      {
        id: "3",
        name: "王五",
        tel: "1320000000",
        address: "浙江省杭州市滨江区江南大道 15 号",
      },
    ];

    const onAdd = () => Toast("新增地址");
    const onEdit = (item, index) => Toast("编辑地址:" + index);

    return {
      onClickIcon,
      onClickButton,
      list,
      onAdd,
      onEdit,
      disabledList,
      chosenAddressId,
    };
  },
  components: {},
};
</script>

<style lang="scss" scoped>
.content2 {
  height: 100%;
}

::v-deep .van-address-list__bottom{
  position: absolute;
}
</style>
