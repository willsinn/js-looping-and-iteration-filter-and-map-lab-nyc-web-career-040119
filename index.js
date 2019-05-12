// Code your solution here:
drivers = [
      { name: 'Sally',   revenue: 400 },
      { name: 'Annette', revenue: 200 },
      { name: 'Jim',     revenue: 150 }
    ];
function driversWithRevenueOver(driversArr, revenue) {
    let aboveNumDrivers = driversArr.map(driver => isRevenueHigher(driver, revenue));
    return aboveNumDrivers;
}

function isRevenueHigher(driver, num) {
  let driverRevenue = driver["revenue"];
  if (driverRevenue > num) {
    return driver;
  }
  return;
}
