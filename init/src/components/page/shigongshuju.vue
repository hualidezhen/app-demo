<template>
  <div>
    <header>
      <!-- 优惠券单元格 -->
      <van-coupon-cell
        :coupons="coupons"
        :chosen-coupon="chosenCoupon"
        @click="showList = true"
      />
      <!-- 优惠券列表 -->
      <van-popup
        v-model:show="showList"
        round
        position="bottom"
        style="height: 90%; padding-top: 4px"
      >
        <van-coupon-list
          :coupons="coupons"
          :chosen-coupon="chosenCoupon"
          :disabled-coupons="disabledCoupons"
          @change="onChange"
          @exchange="onExchange"
        />
      </van-popup>
    </header>
    <main>
      <!-- 通用错误 -->
      <van-empty image="error" description="描述文字" />
      <!-- 网络错误 -->
      <van-empty image="network" description="描述文字" />
      <!-- 搜索提示 -->
      <van-empty image="search" description="描述文字" />
    </main>
  </div>
</template>

<script type="text/javascript">
import router from "../../router";
import { ref } from "vue";
export default {
  setup() {
    // 兑换券
    const coupon = {
      available: 1,
      condition: "无门槛\n最多优惠12元",
      reason: "",
      value: 150,
      name: "优惠券名称",
      startAt: 1489104000,
      endAt: 1514592000,
      valueDesc: "1.5",
      unitDesc: "元",
    };
    // 空状态
    const coupons = ref([coupon]);
    const showList = ref(false);
    const chosenCoupon = ref(-1);

    const onChange = (index) => {
      showList.value = false;
      chosenCoupon.value = index;
    };
    const onExchange = (code) => {
      coupons.value.push(coupon);
    };



    return {
      coupons,
      showList,
      onChange,
      onExchange,
      chosenCoupon,
      disabledCoupons: [coupon],
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
