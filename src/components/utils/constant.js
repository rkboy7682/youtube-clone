const googleapis = "AIzaSyD2r7oCRYWTlL3OurCChTA4wo6v732ZV_E";
export const Api =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&key=" +
  googleapis;

export const SearchApi =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export function main(inp) {
  var count = 0;
  for (var i = 2; i <= 100000; i++) {
    if (isPrime(i)) count = count + 1;
    if (count === inp) return i;
  }
}
function isPrime(i) {
  for (var j = 2; j < i; j++) {
    //instead of `j < i` it can be reduced using other conditions
    if (i % j === 0) {
      return false;
    }
  }
  return true;
}
