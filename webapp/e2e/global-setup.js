const { setup: setupDevServer } = require("jest-dev-server");
module.exports = async () => {
    await setupDevServer([
    {
        command: "npm start",
        launchTimeout: 60000,
        debug: true,
        port: 3000
    }]);
};