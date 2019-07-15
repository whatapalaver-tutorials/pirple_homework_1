// Define the handlers
let handlers = {};

// Hello
handlers.hello = function(data, callback) {
  let acceptableMethods = ['get']
  if(acceptableMethods.indexOf(data.method) > -1) {
    handlers._hello[data.method](data, callback);
  } else {
    callback(405);
  }
};

// Container for the hello submethods
handlers._hello = {};

// Hello - GET
handlers._hello.get = function(data, callback) {
  callback(200, { greeting: `Hello out there. Thanks for your ${data.method} request!`});
};

// Not found handler
handlers.notFound = function(data, callback) {
  callback(404);
};

// Export the module
module.exports = handlers