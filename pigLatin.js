var args = process.argv.slice(2);
function pigify(arr) {
  var i, final = "", newStr;

  for (i = 0; i < arr.length; i++) {
    final += arr[i].substr(1, (arr[i].length - 1)) + arr[i].charAt(0) + "ay ";
  }

  return final;
}
console.log(pigify(args));