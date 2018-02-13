
 function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
 
 
  var newArr = [];

//Function that gets the orbital period, replaces it in the object
  var getOrbPeriod = function(obj) {
  	var r = earthRadius+arr[elem].avgAlt;
   	var T =Math.round(2*3.14159*(Math.sqrt((Math.pow(r,3))/GM)));
    delete obj.avgAlt;
    obj.orbitalPeriod = T;
    return obj;
  };

  //call the orbita period function for every object in the array
  for (var elem in arr) {
    newArr.push(getOrbPeriod(arr[elem]));
  }
  console.log(newArr);
  return newArr;
}

// test here
orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}])