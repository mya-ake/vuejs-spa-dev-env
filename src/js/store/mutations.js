import * as types from './mutation-types.js';

export default {
  [types.INIT] (state) {
    state.elMdl = document.getElementById('app');
    state.elDrawer = document.getElementById('drawer');
    state.elMain = document.querySelector('.page-content');
    state.init = true;
  },
  [types.TRANSITION_SCROLL] (state, position) {
    state.elMain.scrollTop = position.y;
    state.elMain.scrollLeft = position.x;
  },
  [types.MAIN_POSITION] (state, position) {
    state.beforeMainPosition = position;
  }
};