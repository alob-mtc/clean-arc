module.exports = function buildMakeSource({ isValidIp }) {
  return function makeSource({ ip, browser } = {}) {
    if (!ip) {
      throw new Error("School source must contain an IP");
    }
    if (!isValidIp) {
      throw new Error("School source must contain a valid IP");
    }
    return Object.freeze({
      getIp: () => ip,
      getBrowser: () => browser
    });
  };
};
