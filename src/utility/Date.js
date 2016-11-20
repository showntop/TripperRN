export function parseDate(dateStr) {
  var arrayOne = dateStr.split('T')[0].split('-');//这种解析方式还是有点危险, 将来one接口数据一遍不就完了
  debugger
  var date = new Date(arrayOne[0], arrayOne[1], arrayOne[2]);
  return date.Format("yyyy年MM月dd");
}