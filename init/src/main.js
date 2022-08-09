import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'
import Vant from 'vant';
import 'vant/lib/index.css';
import { ActionBar, ActionBarIcon, ActionBarButton,AddressEdit,CouponCell,CouponList,Empty,PullRefresh,Collapse, CollapseItem,ShareSheet } from 'vant';

// 引入mockServer.js
import '../src/mock/mockServer'


const app = createApp(App)

app.use(router)
app.use(Vant)
app.use(ActionBar);
app.use(ActionBarIcon);
app.use(ActionBarButton);
app.use(AddressEdit);
app.use(CouponCell);
app.use(CouponList);
app.use(Empty);
app.use(PullRefresh);
app.use(Collapse);
app.use(CollapseItem);
app.use(ShareSheet);


app.mount('#app')
