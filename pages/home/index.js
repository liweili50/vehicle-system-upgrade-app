import upgradeData from '../../data/upgradeData';

Page({
  data: {
    list: upgradeData,
    filteredList: upgradeData,
    searchValue: '',
  },
  onLoad() {},
  onSearch(e) {
    const { value } = e.detail;
    this.setData({
      searchValue: value,
      filteredList: this.filterList(value),
    });
  },
  onClear() {
    this.setData({
      searchValue: '',
      filteredList: this.data.list,
    });
  },
  goToDetail(e) {
    const { id } = e.currentTarget.dataset;
    wx.navigateTo({ url: `/pages/detail/index?id=${id}` });
  },
  filterList(keyword) {
    if (!keyword.trim()) return this.data.list;
    const kw = keyword.trim().toLowerCase();
    return this.data.list.filter((item) => item.brand.includes(kw) || item.name.includes(kw));
  },
});
