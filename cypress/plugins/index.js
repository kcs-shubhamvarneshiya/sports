const codeCoverageTask = require('@cypress/code-coverage/task');

module.exports = (on, config) => {
  codeCoverageTask(on, config);
  // other plugins, if any
  return config;
};
