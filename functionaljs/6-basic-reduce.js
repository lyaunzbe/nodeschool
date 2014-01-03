module.exports = function countString(inputWords) {
  return inputWords.reduce(function(pValue, cValue, index, arr){
    if(pValue[cValue]) pValue[cValue]++;
    else pValue[cValue] = 1;

    return pValue;
  },{});
}
