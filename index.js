const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
  ]

  function superbowlWin(object){
  for (let item of object){
    if(item.result === "W"){
        return item.year;
    }
  }
}

record.find(superbowlWin)
