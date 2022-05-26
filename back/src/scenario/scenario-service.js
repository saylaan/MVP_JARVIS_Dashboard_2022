const scenarioUtils = require('./utils/scenario-utils');

const delay = (time, callback) => {
    setInterval(callback, time * 1000);
};

const launchScenario = async () => {
    delay(3, () => {
        scenarioUtils.checkScenario();
    });
};

const scenario = {
    launchScenario: launchScenario
};

module.exports = scenario;
