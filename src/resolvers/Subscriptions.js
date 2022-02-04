const { pubsub } = require("../utils");

function newLinkSubscribe(parent, args, context, info) {
  return pubsub.asyncIterator("NEW_LINK");
}

const newLink = {
  subscribe: newLinkSubscribe,
  resolve: (payload) => payload,
};

module.exports = {
  newLink,
};
