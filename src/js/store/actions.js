import * as types from './mutation-types.js';

export default {
  init ({commit}) {
    commit(types.INIT);
  },
  hideDrawer({state}) {
    if (false === state.init) {
      return;
    }
    if ('true' === state.elDrawer.getAttribute('aria-hidden')) {
      // Drawerが開かれていない場合終了
      return;
    }

    // Drawer閉じる
    state.elMdl.MaterialLayout.toggleDrawer();
  },
  transitionScroll({commit}, position) {
    commit(types.TRANSITION_SCROLL, position);
  },
  setBeforeMainPosition({commit}, position) {
    commit(types.MAIN_POSITION, position);
  }
};