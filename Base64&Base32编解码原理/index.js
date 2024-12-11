let char = "a";
console.log(char.charCodeAt());
console.log(char.charCodeAt().toString(2));

let str = "Java";
// 'J'=>74   =>  01001010   =>
// 'a'=>97   =>  01100001   =>
// 'v'=>118  =>  01110110   =>
// 'a'=>74   =>  01100001   =>

// 010010,100110,000101,110110,011000,010000
// 18,38,5,54,24,16
// 如何将不够8位的二进制数补满8位？
// 10000000000  10000000
// 0100000000   01000000
function base64(str) {
  let arr = [];
  let base64 =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  let res = "";
  for (let i = 0; i < str.length; i++) {
    let binCode = str[i]
      .charCodeAt()
      .toString(2)
      .replace(/^/, "00000000")
      .slice(-8);
    arr.push(binCode);
  }
  let binCodeStr = arr.join("");
  let num = binCodeStr.length % 6;
  let binCodeStrAddZero = binCodeStr + "0".repeat(6 - num);
  let binCode6List = binCodeStrAddZero.match(/[01]{6}/g);
  for (let j = 0; j < binCode6List.length; j++) {
    //   2进制转10进制
    let index = parseInt(binCode6List[j], 2);
    res += base64[index];
  }
  res = res + "=".repeat(8 % res.length);
  return res;
}
console.log(base64(str));

function base32(str) {
  let res = "";
  let base32 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    let binCode = str[i]
      .charCodeAt()
      .toString(2)
      .replace(/^/, "00000000")
      .slice(-8);
    arr.push(binCode);
  }
  let binCodeStr = arr.join("");
  let num = binCodeStr.length % 5;
  //要求是5的倍数，不够再在末尾补0, 接着按照每组5个进行分割
  let binCodeStrAddZero = binCodeStr + "0".repeat(5 - num);
  let binCode5List = binCodeStrAddZero.match(/[01]{5}/g);
  for (let j = 0; j < binCode5List.length; j++) {
    //   2进制转10进制
    let index = parseInt(binCode5List[j], 2);
    res += base32[index];
  }
  // 末尾补 '=' 长度为8
  res = res + "=".repeat(8 % res.length);
  return res;
}
console.log(base32(str));
