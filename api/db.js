const lostluggage = require("./lostluggage");
const recommend = require("./recommend");
const reservation = require("./reservation");
module.exports = () => ({
  recommend,
  reservation,
  lostluggage
});
