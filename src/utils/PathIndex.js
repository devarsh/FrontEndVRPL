const PathIndex = (Items, key) => path => {
  let i = 0;
  for (i = 0; i < Items.length; i++) {
    if (Items[i].path === path) {
      return Items[i][key];
    }
  }
  return -1;
};

export default PathIndex;
