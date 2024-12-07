/**
 *  10进制数转为8位2进制数的方法
 * @param {num/string} num
 * @returns {string}
 */
function decTo8Bin(num) {
  let res = "";
  while (num / 2) {
    res = (num % 2) + res;
    num = Math.floor(num / 2);
  }
  return res.replace(/^/, "00000000").slice(-8);
}
// console.log(decToBin(19));

/**
 *
 * @param {string} str 被编码的字符串
 * @param  {string} res  编码后的字符串
 */
function base64(str) {
  let arr = [];
  let base64 =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  let res = "";
  for (let i = 0; i < str.length; i++) {
    let item = str[i].charCodeAt();
    let binCode = decTo8Bin(item);
    arr.push(binCode);
  }
  let binCodeStr = arr.join("");
  let num = binCodeStr.length % 6;
  let binCodeStrAddZero = binCodeStr + "0".repeat(6 - num);
  let binCode6List = binCodeStrAddZero.match(/[01]{6}/g);
  for (let j = 0; j < binCode6List.length; j++) {
    let index = parseInt(binCode6List[j], 2);
    res += base64[index];
  }
  res += "=".repeat(8 - (res.length % 8));
  return res;
}

/**
 *  Base64解码函数
 * @param {string} str
 * @returns res
 */
function decodeBase64(str) {
  let base64 =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  let res = "";
  let arr = str.replace(/=+/g, "").split("");
  for (let i = 0; i < arr.length; i++) {
    let tempNum = base64.indexOf(arr[i]).toString(2);
    arr[i] = tempNum.replace(/^/, "000000").slice(-6);
  }
  let binCode6Str = arr.join("");
  let delNum = binCode6Str.length % 8;
  let binCode8Str = binCode6Str.slice(0, binCode6Str.length - delNum);
  let binCode8Arr = binCode8Str.match(/[01]{8}/g);
  for (let k = 0; k < binCode8Arr.length; k++) {
    let temp = parseInt(binCode8Arr[k], 2);
    binCode8Arr[k] = String.fromCharCode(temp);
    res += binCode8Arr[k];
  }
  return res;
}

/**
 *  base64编码-百家姓版本
 * @param {string} str 被编码的字符串
 * @param  {string} res  编码后的字符串
 */
function base64Plus(str) {
  let arr = [];
  let base64 =
    "李王张刘陈杨赵黄周吴徐孙胡朱高林何郭马罗梁宋郑谢韩唐冯于董萧程曹袁邓许傅沈曾彭吕苏卢蒋蔡贾丁魏薛叶阎余潘杜戴夏钟汪田任姜范方石姚";
  let res = "";
  for (let i = 0; i < str.length; i++) {
    let item = str[i].charCodeAt();
    let binCode = decTo8Bin(item);
    arr.push(binCode);
  }
  let binCodeStr = arr.join("");
  let num = binCodeStr.length % 6;
  let binCodeStrAddZero = binCodeStr + "0".repeat(6 - num);
  let binCode6List = binCodeStrAddZero.match(/[01]{6}/g);
  for (let j = 0; j < binCode6List.length; j++) {
    let index = parseInt(binCode6List[j], 2);
    res += base64[index];
  }
  res += "=".repeat(8 - (res.length % 8));
  return res;
}

/**
 *  Base64Plus 百家姓版解码函数
 * @param {string} str
 * @returns res
 */
function decodeBase64Plus(str) {
  let base64 =
    "李王张刘陈杨赵黄周吴徐孙胡朱高林何郭马罗梁宋郑谢韩唐冯于董萧程曹袁邓许傅沈曾彭吕苏卢蒋蔡贾丁魏薛叶阎余潘杜戴夏钟汪田任姜范方石姚";
  let res = "";
  let arr = str.replace(/=+/g, "").split("");
  for (let i = 0; i < arr.length; i++) {
    let tempNum = base64.indexOf(arr[i]).toString(2);
    arr[i] = tempNum.replace(/^/, "000000").slice(-6);
  }
  let binCode6Str = arr.join("");
  let delNum = binCode6Str.length % 8;
  let binCode8Str = binCode6Str.slice(0, binCode6Str.length - delNum);
  let binCode8Arr = binCode8Str.match(/[01]{8}/g);
  for (let k = 0; k < binCode8Arr.length; k++) {
    let temp = parseInt(binCode8Arr[k], 2);
    binCode8Arr[k] = String.fromCharCode(temp);
    res += binCode8Arr[k];
  }
  return res;
}
