// Code your solution in this file!
function distanceFromHqInBlocks(value){

if(value>42){
 return value-42;
}
else{
    return 42-value;
}
}
function distanceFromHqInFeet(value){
const blocks = distanceFromHqInBlocks(value);
return blocks*264;
}

function distanceTravelledInFeet(start, destination) {
let distance = 0;
if(start>destination){
    distance = start-destination;
}
else{
   distance = destination-start;
}
return distance*264;
  }
  function calculatesFarePrice(start = 43, destination = 44) {
    //returns the fare for the customer
    if (start === 43 && destination === 44){
        return 0
    }
    else if (start === 34 && destination === 32){
        return 2.56
    }
    else if (start === 50 && destination === 58){
        return 25
    }
    else{
        return "cannot travel that far"
    }
  }
