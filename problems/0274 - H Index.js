/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
  citations.sort((a,b) => a - b);
  let result = 0;
  for(let i = 0; i < citations.length; i++){
    result = Math.max(result, Math.min(citations[i], citations.length-i));
  }
  return result;
};
