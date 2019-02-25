/* eslint-disable */
import moment from "moment";
// 格式化时间
export function formatDate(date, friendly) {
  date = moment(date);
  if (friendly) {
    return date.fromNow();
  } else {
    return date.format('YYYY-MM-DD HH:mm');
  }
}

/**
 * 毫秒转换友好的显示格式
 * 输出格式：21小时前
 * @param  {[type]} date [description]
 * @return {[type]}      [description]
 */
export function beautifyDate(date) {
  date = new Date(date).getTime();
  //获取js 时间戳
  var now = new Date().getTime();
  var time = parseInt((now - date) / 1000, 10);

  //存储转换值
  var s;
  if (time < 60 * 10) {//十分钟内
    return '刚刚';
  } else if ((time < 60 * 60) && (time >= 60 * 10)) {
    //超过十分钟少于1小时
    s = Math.floor(time / 60);
    return s + "分钟前";
  } else if ((time < 60 * 60 * 24) && (time >= 60 * 60)) {
    //超过1小时少于24小时
    s = Math.floor(time / 60 / 60);
    return s + "小时前";
  } else if ((time < 60 * 60 * 24 * 30) && (time >= 60 * 60 * 24)) {
    //超过1天少于30天内
    s = Math.floor(time / 60 / 60 / 24);
    return s + "天前";
  } else if ((time < 60 * 60 * 24 * 365) && (time >= 60 * 60 * 24 * 30)) {
    //超过30天少于365天
    s = Math.floor(time / 60 / 60 / 24 / 30);
    return s + "个月前";
  } else {
    s = Math.floor(time / 60 / 60 / 24 / 365);
    return s + "年前";
  }
}
