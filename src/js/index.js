let base64Input = document.getElementById("base64Input");
let base64Result = document.getElementById("base64Result");
let encode = document.getElementById("encode");
let decode = document.getElementById("decode");
let encodePlus = document.getElementById("encodePlus");
let decodePlus = document.getElementById("decodePlus");
let exchange = document.getElementById("exchange");

let encode32 = document.getElementById("encode32");
let decode32 = document.getElementById("decode32");

encode.addEventListener("click", function () {
  let inputText = base64Input.value;
  base64Result.value = base64(inputText);
});

decode.addEventListener("click", function () {
  let inputText = base64Input.value;
  base64Result.value = decodeBase64(inputText);
});
encodePlus.addEventListener("click", function () {
  let inputText = base64Input.value;
  base64Result.value = base64Plus(inputText);
});
decodePlus.addEventListener("click", function () {
  let inputText = base64Input.value;
  base64Result.value = decodeBase64Plus(inputText);
});

encode32.addEventListener("click", function () {
  let inputText = base64Input.value;
  base64Result.value = base32(inputText);
});
decode32.addEventListener("click", function () {
  let inputText = base64Input.value;
  base64Result.value = decodeBase32(inputText);
});

exchange.addEventListener("click", function () {
  let temp = base64Input.value;
  base64Input.value = base64Result.value;
  base64Result.value = temp;
});
