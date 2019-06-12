const os = require("os");

const totalMem = () => {
  return os.totalmem();
};

const freeMem = () => {
  return os.freemem();
};

const memResult = () => {
  const totalMemAmount = totalMem();
  const memUsage = totalMemAmount - freeMem();

  return Math.floor((100 * memUsage) / totalMemAmount);
};

module.exports = memResult;
