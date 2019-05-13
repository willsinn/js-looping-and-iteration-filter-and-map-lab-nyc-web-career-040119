// Code your solution here:
drivers = [
      { name: 'Sally',   revenue: 400 },
      { name: 'Annette', revenue: 200 },
      { name: 'Jim',     revenue: 150 }
    ];
function driversWithRevenueOver(driversArr, revenue) {
    let result=[];
    let allDriverRevenues = driversArr.map(driver => getDriverRevenue(driver));
    for (let i=0; i<allDriverRevenues.length;i++) {
      let amount = allDriverRevenues[i];
      let richBoy = i;
      if (amount > revenue) {
      let winnerObj = driversArr[richBoy];
      result.push(winnerObj);
      }
    }
    return result;
}

function getDriverRevenue(driver) {
  let driverRevenue = driver.revenue;
  return driverRevenue;
}


function driverNamesWithRevenueOver(driversArr, revenue) {
  let result=[];
  let allDriverRevenues = driversArr.map(driver => getDriverRevenue(driver));
  let allDriversNames = driversArr.map(driver => getDriverName(driver));
  for (let i=0; i<allDriverRevenues.length;i++) {
    let amount = allDriverRevenues[i];
    let richBoy = i;
    if (amount > revenue) {
    let winnerObj = allDriversNames[richBoy];
    result.push(winnerObj);
    }
  }
  return result;
}

function getDriverName(driver) {
  let driverName = driver.name;
  return driverName;
}


function exactMatch(driversArr, driverProp) {
  let searchValue = Object.values(driverProp);
  let allDriversNames = driversArr.map(driver => getDriverName(driver));
  let allDriverRevenues = driversArr.map(driver => getDriverRevenue(driver));

  if(typeof searchValue[0]==='string') {
    let value=searchValue[0];
    let nameResult=[];
    for (let i=0; i<allDriversNames.length;i++) {
      let name = allDriversNames[i];
      let richBoy = i;
      if (value === name) {
      let winnerObj = driversArr[richBoy];
      nameResult.push(winnerObj);
      }
    }
    return nameResult;   //logic for strings
  } else {
    let value=searchValue[0];
    let revenueResult=[];
    for (let i=0; i<allDriverRevenues.length;i++) {
      let amount = allDriverRevenues[i];
      let richBoy = i;
      if (amount === value) {
      let winnerObj = driversArr[richBoy];
      revenueResult.push(winnerObj);
      }
    }
    return revenueResult;    //logic for integers
  }
}

function exactMatchToList() {
  result=[];



  return result;
}
//
// function exactMatch(driversArr, driverProp) {
//   let searchValue = Object.values(driverProp);
//   let result=[];
//
//
//
//
//   let searchValue = searchProp[0];
//   for (let i=0; i<driversArr.length;i++) {
//     let driverObj = driversArr[i];
//     let match = i;
//     for (let propValue in driverObj) {
//       let newObj=driverObj;
//       if (propValue === searchValue) {
//         result.push(driversArr[match]);
//       }
//     }
//   }
//   return result;
// }
// function isRevenueHigher(driver, revenue) {
// //use Object.values t
//   let currentObject ={};
//   currentObject=driver;
//   let toArray = Object.entries(driver);
//   let isDriverRicher = toArray.map(prop => compareRevenue(prop, revenue));
//   if (isDriverRicher===true) {
//     return currentObject;
//   }
// }
//
// function compareRevenue(prop, revenue) {
//   for (let value of prop) {
//     if (prop > revenue) {
//       return true;
//     }
//
//   }
//   return;
// }

// let driverName = driver["name"];
// let driverRevenue = driver["revenue"];
// let aboveRevenue = {
//   name: driverName,
//   revenue: driverRevenue
// };
// if (driverRevenue > num) {
//   return aboveRevenue;
// } else {
//   return;
// }
