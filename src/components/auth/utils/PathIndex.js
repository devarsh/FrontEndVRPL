export default (items, key) => (path) => {
  let i = 0;
  for (i = 0; i < items.length; i++) {
    if (items[i].path === path) {
      return items[i][key];
    }
  }
  return -1;
};
