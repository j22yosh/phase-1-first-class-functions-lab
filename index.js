// Code your solution in this file!
const returnFirstTwoDrivers = (function (driversArray)
{const newArr = [driversArray[0], driversArray[1]];
return newArr} )
const returnLastTwoDrivers = (function (driversArray)
{const newArr = [driversArray[2], driversArray[3]]
return newArr})

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]


function createFareMultiplier(number){
    return ((fare) => {return fare * number})}

    
const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers (driversArray,eitherFunction){
    let i = eitherFunction
    return i(driversArray)
//     if(
//     return returnFirstTwoDrivers(driversArray);
//  else return returnLastTwoDrivers
    }

    
