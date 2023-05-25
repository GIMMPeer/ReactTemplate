module.exports = {
  exampleAction,
};


async function exampleAction(input) {
  if(input != 'Hello') {
    return {
      message: "info not found",
      data: {
        dataTroop: "stormtrooper",
        dataSith: "vader"
      }
    };
  }
  return {
    message: "input recieved: "
  }

}
