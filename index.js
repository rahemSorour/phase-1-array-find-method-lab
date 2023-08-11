function superbowlWin(array) {
    const findwinner = array.find(function(winner) {
      return winner.result === "W"; });
  
    if (findwinner) {
      return findwinner.year;
    } else {return undefined}
  }

  
arry=[{year:"1999",result:"lin"},
{year: "2018", result: "W"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}]

console.log(superbowlWin(arry))
