const os = require("os");

const cpuAverage = () => {
  //Initialise sum of idle and time of cores and fetch CPU info
  let totalIdle = 0,
    totalTick = 0;
  const cpus = os.cpus();

  //Loop through CPU cores
  for (let i = 0, len = cpus.length; i < len; i++) {
    //Select CPU core
    let cpu = cpus[i];

    //Total up the time in the cores tick
    for (let type in cpu.times) {
      totalTick += cpu.times[type];
    }

    //Total up the idle time of the core
    totalIdle += cpu.times.idle;
  }

  //Return the average Idle and Tick times
  return { idle: totalIdle / cpus.length, total: totalTick / cpus.length };
};

//Grab first CPU Measure
const startMeasure = cpuAverage();

const cpuResult = () => {
  //Grab second Measure
  const endMeasure = cpuAverage();

  //Calculate the difference in idle and total time between the measures
  const idleDifference = endMeasure.idle - startMeasure.idle;
  const totalDifference = endMeasure.total - startMeasure.total;

  //Calculate the average percentage CPU usage
  const percentageCPU =
    100 - Math.floor((100 * idleDifference) / totalDifference);

  //Output result to console
  return percentageCPU;
};

module.exports = cpuResult;
