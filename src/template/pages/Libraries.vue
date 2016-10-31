<template>
  <article>
    <div class="mdl-grid">
      <div class="mdl-cell mdl-cell--12-col">
        <h1>Libraries</h1>
      </div>
      <div v-for="(library, index) in libraries" class="mdl-cell mdl-cell--8-col">
        <h3>{{library.name}}</h3>
        <ul class="mdl-list">

          <li v-for="(item, index) in library.list" class="mdl-list__item mdl-list__item--two-line">
            <span class="mdl-list__item-primary-content">
              <i class="material-icons mdl-list__item-avatar" v-bind:data-type="item.icon">{{item.icon}}</i>
              <span>{{item.name}}</span>
              <span class="mdl-list__item-sub-title">
                <span>{{item.description}}</span>
              </span>
            </span>
            <span class="mdl-list__item-secondary-content">
              <span class="mdl-list__item-secondary-info">Link</span>
              <a class="mdl-list__item-secondary-action" v-bind:href="item.link" target="_blank"><i class="material-icons">link</i></a>
            </span>
          </li>

        </ul>

      </div>
    </div>
  </article>
</template>
<script>
export default {
  data () {
    return {
      libraries: [
        {
          name: 'Vue Libraries',
          list: [
            {
              name: 'Vue.js',
              icon: 'code',
              description: 'Vue 本体',
              link: 'https://vuejs.org/',
            },
            {
              name: 'vue-resource',
              icon: 'import_export',
              description: 'VueのHTTP通信ライブラリ',
              link: 'https://github.com/vuejs/vue-resource',
            },
            {
              name: 'vue-router',
              icon: 'call_split',
              description: 'VueのHistory管理ライブラリ（SPAとかに使うやつ）',
              link: 'https://router.vuejs.org',
            },
            {
              name: 'Vuex',
              icon: 'cloud',
              description: 'VueのFlux的なやつ',
              link: 'https://vuex.vuejs.org/en/index.html',
            }
          ]
        },
        {
          name: 'MDL(Material Design Lite)',
          list: [
            {
              name: 'MDL',
              icon: 'code',
              description: 'マテリアルデザインのフレームワーク',
              link: 'https://getmdl.io/',
            }
          ]
        }
      ]
    };
  }
}
</script>