export default {
  mainPosition (state) {
    if (null !== state.elMain) {
      return {
        x: state.elMain.scrollLeft,
        y: state.elMain.scrollTop
      };
    }
    return { x: 0, y: 0 };
  },
  beforeMainPosition (state) {
    return state.beforeMainPosition;
  }
};