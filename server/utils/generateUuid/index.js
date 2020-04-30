const generateUuid = () =>
  `${1e7}-${1e3}-${4e3}-${8e3}-${1e11}`.replace(/[018]/g, a =>
    // eslint-disable-next-line no-bitwise
    (a ^ ((Math.random() * 16) >> (a / 4))).toString(16)
  );

module.exports = { generateUuid };