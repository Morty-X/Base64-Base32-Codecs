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
 * @param {string} res  编码后的字符串
 */
function base32(str) {
  let arr = [];
  let base32 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";
  let res = "";
  for (let i = 0; i < str.length; i++) {
    //  将字符转位ASCII码
    let item = str[i].charCodeAt();
    //  将对应ASCII码的转为8位的2进制数
    let binCode = decTo8Bin(item);
    arr.push(binCode);
  }
  let binCodeStr = arr.join("");
  let num = binCodeStr.length % 5;
  // 长度不能被5整除就在末尾补0
  let binCodeStrAddZero = binCodeStr + "0".repeat(5 - num);
  // 5个二进制数为一组，分割
  let binCode6List = binCodeStrAddZero.match(/[01]{5}/g);
  for (let j = 0; j < binCode6List.length; j++) {
    //    5位的二进制数转成10进制
    let index = parseInt(binCode6List[j], 2);
    //   在字符串中找到对应的字符并连接
    res += base32[index];
  }
  res += "=".repeat(8 - (res.length % 8));
  return res;
}

function decodeBase32(str) {
  let base32 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";
  let res = "";
  let arr = str.replace(/=+/g, "").split("");
  for (let i = 0; i < arr.length; i++) {
    let tempNum = base32.indexOf(arr[i]).toString(2);
    // 转成5位的二进制数
    arr[i] = tempNum.replace(/^/, "00000").slice(-5);
  }
  let binCode5Str = arr.join("");
  console.log(binCode5Str.length);
  let delNum = binCode5Str.length % 8;
  let binCode8Str = binCode5Str.slice(0, binCode5Str.length - delNum);
  let binCode8Arr = binCode8Str.match(/[01]{8}/g);
  for (let k = 0; k < binCode8Arr.length; k++) {
    let temp = parseInt(binCode8Arr[k], 2);
    binCode8Arr[k] = String.fromCharCode(temp);
    res += binCode8Arr[k];
  }
  return res;
}

console.log(decodeBase32("JJQXMYI="));
