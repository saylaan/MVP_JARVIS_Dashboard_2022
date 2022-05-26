const {
    getAllScenario,
    getScenarioConditions,
    getScenarioTriggers,
    getScenarioActions,
    getOneScenarioConditions,
    getOneScenarioTriggers,
    getOneScenarioActions,
    getAllIoTs,
    getAllLogs,
    getOneLogs
} = require('./utils-request');

const io = require('../../socket/socket-service');

const checkScenario = async () => {
    let scenariocond = null;
    let scenariotrigger = null;
    let scenarioaction = null;
    let iots = await getAllIoTs();
    let logs = await getAllLogs();
    let oneLog = null;
    console.log(
        `\n\n\n\n\n\n|---------------------------- STARTING THE CHECKING OF ALL SCENARIO ----------------------------|\n\n\n\n\n\n\n\n`
    );
    try {
        await getAllScenario().then(async (scenarios) => {
            scenarios.forEach(async (scenario) => {
                let validCondition = false;
                let validTrigger = false;
                scenariocond = await getOneScenarioConditions(scenario.id);
                if (scenariocond) {
                    console.log(
                        '\n\nScenariocond',
                        scenariocond.Condition.id,
                        scenariocond.Condition.socketId,
                        scenariocond.Condition.value
                    );
                    for (let i = 0; i < iots.length; i++) {
                        if (
                            iots[i].type === 'device' &&
                            iots[i].socketId === scenariocond.Condition.socketId &&
                            iots[i].status === scenariocond.Condition.value
                        ) {
                            validCondition = true;
                            console.log('I found a iot:', iots[i].name, iots[i].socketId, validCondition, '\n\n');
                            break;
                        }
                        validCondition = false;
                    }
                }
                scenariotrigger = await getOneScenarioTriggers(scenario.id);
                if (scenariotrigger) {
                    console.log(
                        '\n\nscenariotrigger',
                        scenariotrigger.Trigger.id,
                        scenariotrigger.Trigger.socketId,
                        scenariotrigger.Trigger.value
                    );
                    if (
                        logs[logs.length - 1].IoT.type === 'sensor' &&
                        logs[logs.length - 1].IoT.socketId === scenariotrigger.Trigger.socketId &&
                        logs[logs.length - 1].IDatavalue.value === scenariotrigger.Trigger.value
                    ) {
                        validTrigger = true;
                        console.log(
                            'I found a iot:',
                            logs[logs.length - 1].IoT.name,
                            logs[logs.length - 1].IoT.socketId,
                            validTrigger,
                            '\n\n'
                        );
                    } else {
                        validTrigger = false;
                    }
                }
                if (validCondition && validTrigger) {
                    scenarioaction = await getOneScenarioActions(scenario.id);
                    if (scenarioaction) {
                        console.log(
                            '\n\nscenarioaction',
                            scenarioaction.Action.id,
                            scenarioaction.Action.socketId,
                            scenarioaction.Action.value
                        );
                        for (let i = 0; i < iots.length; i++) {
                            if (iots[i].type === 'device' && iots[i].socketId === scenarioaction.Action.socketId) {
                                console.log(io.socket);
                                console.log('I found a iot:', iots[i].name, iots[i].socketId, validCondition, '\n\n');
                                validTrigger = false;
                                validCondition = false;
                                break;
                            }
                        }
                    }
                }
            });
        });
    } catch (err) {
        console.log(err);
    }
};

const scenarioUtils = {
    checkScenario: checkScenario
};

module.exports = scenarioUtils;
