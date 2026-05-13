Page({
  data: {},
  onLoad() {},
  onSearch(e) {
    const { value } = e.detail;
    console.log('搜索内容:', value);
  },
});
