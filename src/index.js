module.exports = function check(str, bracketsConfig) {
  var arr = [];
  if (str.length % 2 !== 0) {
    return false;
  }
  for(var i = 0; i < str.length; i++ ) {
    for (var j = 0; j < bracketsConfig.length; j++) {

      if(str[i] == bracketsConfig[j][1] && arr[arr.length - 1] == bracketsConfig[j][0]) {
        arr.pop();
      } else if (str[i] == bracketsConfig[j][0]) {
        arr.push(bracketsConfig[j][0]);
      }

    }
  }

 return arr.length == 0 ? true : false;

  
 
}
