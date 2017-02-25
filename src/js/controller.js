import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import VueResource from 'vue-resource';
import routes from './routes.js';
import Main from './../template/Main.vue';
import state from './store/states.js';
import getters from './store/getters.js';
import actions from './store/actions.js';
import mutations from './store/mutations.js';

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(Vuex);
Vue.config.devtools = false;    // ConsoleにDev Toolのテキストを表示しない


/** Vuexのストア生成 **/
const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations
});

/** ルーターの設定 **/
const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes: routes,
  scrollBehavior (to, from, savedPosition) {
    // 遷移時のスクロール位置指定
    let position = savedPosition;   // 本来ならsavedPositionに次や前のページのスクロール位置が入っているが、スタイル状別の値を使用する
    if (null === position) {
      // 新しい遷移
      position = { x: 0, y: 0 };
    } else {
      // 次へや前へ
      position = store.getters.beforeMainPosition;
    }
    store.dispatch('transitionScroll', position); // スクロール位置指定
    return position;  // returnした値は window.scrollTo に使われる
  }
});
router.beforeEach((to, from, next) => {
  store.dispatch('setBeforeMainPosition', store.getters.mainPosition);
  // 遷移前
  next();  // この関数呼ぶと次に遷移（beforeEach使うときは必須）
});
router.afterEach((to, from) => {
  // 遷移後
  store.dispatch('hideDrawer');
});


// 全てのVueコンポーネントで共通で使う処理をmixinに定義
Vue.mixin({
  mounted: function() {
    if ('undefined' !== typeof componentHandler) {
      // マウントしたコンポーネントにMDLのJSを反映させる
      const el = document.querySelector('.page-content') || document.querySelector('#app');
      componentHandler.upgradeElements(el);
    }
  }
});

// メインとなるコンポーネントのみマウントさせる
new Vue({
  store,
  router,
  render: h => h(Main)
}).$mount('#app');
