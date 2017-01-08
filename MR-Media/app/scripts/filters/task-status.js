'use strict';
miao.filter('taskstatus', function() {
  // -9=正在编写中的草稿，0=已经提交等待审核，1=已审核，等待发布，－1=审核不通过，2=已发布，正常接单，-2=暂停接单，3＝已经关闭
  return function(input) {
    var out = "";
    if (input === -9) {
      out = '正在编写中的草稿';
    } else if (input === 0) {
      out = '已经提交等待审核';
    } else if (input === 1) {
      out = '已审核，等待发布';
    } else if (input === -1) {
      out = '审核不通过';
    } else if (input === 2) {
      out = '已发布，正常接单';
    } else if (input === -2) {
      out = '暂停接单';
    } else if (input === 3) {
      out = '已经关闭';
    } else if (input === 4) {
      out = '已设置定时发布, 等待中';
    } else {
      out = '未知:'+ input;
    }
    return out;
  };
});
