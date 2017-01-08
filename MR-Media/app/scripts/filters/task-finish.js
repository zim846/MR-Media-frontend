'use strict';
miao.filter('checkfinish', function() {
  return function(input) {
    var out = "";
    if (input === 0) {
      out = '未完成';
    } else if (input === 1) {
      out = '已完成';
    } else {
      out = "未知 " + input;
    }
    return out;
  };
});
