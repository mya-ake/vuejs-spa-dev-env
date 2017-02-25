<template>
  <div id="app" class="my-mdl-layout mdl-layout mdl-js-layout mdl-layout--fixed-header">

    <header class="mdl-layout__header">
      <div class="mdl-layout__header-row">
        <span class="mdl-layout-title">Vue.js SPA</span>
        <div class="mdl-layout-spacer"></div>
        <nav class="mdl-navigation mdl-layout--large-screen-only">
          <router-link to="/about" class="mdl-navigation__link">About</router-link>
          <router-link to="/api-sample" class="mdl-navigation__link">API Sample</router-link>
          <router-link to="/mdl-samples" class="mdl-navigation__link">MDL Samples</router-link>
          <router-link to="/libraries" class="mdl-navigation__link">Libraries</router-link>
          <router-link to="/credit" class="mdl-navigation__link">Credit</router-link>
        </nav>
      </div>
    </header>

    <div id="drawer" class="mdl-layout__drawer">
      <span class="mdl-layout-title">Vue.js SPA</span>
      <nav class="mdl-navigation">
        <router-link to="/about" class="mdl-navigation__link">About</router-link>
        <router-link to="/api-sample" class="mdl-navigation__link">API Sample</router-link>
        <router-link to="/mdl-samples" class="mdl-navigation__link">MDL Samples</router-link>
        <router-link to="/libraries" class="mdl-navigation__link">Libraries</router-link>
        <router-link to="/credit" class="mdl-navigation__link">Credit</router-link>
      </nav>
    </div>

    <main class="mdl-layout__content page-content">
      <transition name="fade">
        <router-view v-if="isShowMain"></router-view>
      </transition>
    </main>

  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      isShowMain: true,
    };
  },
  mounted () {
    this.$store.dispatch('init');
  }
}
</script>
<style lang="sass">
$w-content: 100%;

.fade-enter-active {
  width: $w-content;
  transition: opacity .5s;
}
.fade-leave-active {
  transition: opacity .3s;
  position: absolute;
  z-index: -1;
}
.fade-enter, .fade-leave-active {
  opacity: 0;
}
</style>