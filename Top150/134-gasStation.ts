// use % to loop through the array, and check if we can complete the circuit starting from each index
/*
const canCompleteCircuit = (gas: number[], cost: number[]): number => {
  for (let startIndex = 0; startIndex < gas.length; startIndex++) {
    let tank = 0;
    let completed = true;

    for (let i = 0; i < gas.length; i++) {
      const index = (startIndex + i) % gas.length;
      tank += gas[index] - cost[index];
      if (tank < 0) {
        completed = false;
        break;
      }
    }
    if (completed) {
      return startIndex;
    }
  }
  return -1;
};
*/

const canCompleteCircuit = (gas: number[], cost: number[]): number => {
  // start: the index of the gas station to start from
  // total: the total net gas (gas[i] - cost[i]) for the entire circuit
  // tank: the current net gas in the tank while traversing the circuit
  let start = 0;
  let total = 0;
  let tank = 0;

  // loop through the gas stations, calculate the net gas (gas[i] - cost[i]) and update the tank and total
  for (let i = 0; i < gas.length; i++) {
    const diff = gas[i] - cost[i];
    tank += diff;
    total += diff;

    // if tank is negative, it means we cannot reach the next station from the current start, so we need to move the start to the next index and reset the tank
    if (tank < 0) {
      start = i + 1; // move start to the next index
      tank = 0; // reset tank for the new start index
    }
  }

  return total >= 0 ? start : -1; // if total is negative, it's impossible to complete the circuit
};
