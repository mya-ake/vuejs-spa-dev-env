import * as types from './mutation-types.js'

export default {
  [types.INIT] (state) {
    state.elMdl = document.getElementById('app')
    state.elDrawer = document.getElementById('drawer')
    state.init = true
  }
}