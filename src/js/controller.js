import routes from './routes.js'
import Main from './../template/Main.vue'
import state from './store/states.js'
import actions from './store/actions.js'
import mutations from './store/mutations.js'

Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(Vuex)

/** Vuexのストア生成 **/
const store = new Vuex.Store({
  state,
  actions,
  mutations
})

/** ルーターの設定 **/
const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes: routes
})
router.beforeEach((to, from, next) => {
  // 遷移前
  next()  // この関数呼ぶと次に遷移（beforeEach使うときは必須）
})
router.afterEach((to, from) => {
  // 遷移後
  store.dispatch('hideDrawer')
})


// 全てのVueコンポーネントで共通で使う処理をmixinに定義
Vue.mixin({
  mounted: function() {
    if ('undefined' !== typeof componentHandler) {
      // マウントしたコンポーネントにMDLのJSを反映させる
      const el = document.querySelector('.page-content') || document.querySelector('#app')
      componentHandler.upgradeElements(el)
    }
  }
});

// メインとなるコンポーネントのみマウントさせる
new Vue({
  store,
  router,
  render: h => h(Main)
}).$mount('#app')
