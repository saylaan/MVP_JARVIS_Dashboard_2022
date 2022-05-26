const {
    sequelize,
    IoT,
    IDatavalue,
    IDatavalueIoT,
    Scenario,
    Action,
    Trigger,
    Condition,
    ScenarioAction,
    ScenarioTrigger,
    ScenarioCondition
} = require('../../models');

module.exports = {
    async getAllScenario() {
        try {
            let scenarios = null;
            scenarios = await Scenario.findAll({ limit: 100 });
            return scenarios;
        } catch (err) {
            console.log(err);
        }
    },
    async getScenarioConditions(id) {
        try {
            const scenarioConditions = await ScenarioCondition.findAll({
                where: { ScenarioId: id },
                include: [{ model: Condition }]
            });
            return scenarioConditions;
        } catch (err) {
            console.log(err);
        }
    },
    async getScenarioTriggers(id) {
        try {
            const scenarioTriggers = await ScenarioTrigger.findAll({
                where: { ScenarioId: id },
                include: [{ model: Trigger }]
            });
            return scenarioTriggers;
        } catch (err) {
            console.log(err);
        }
    },
    async getScenarioActions(id) {
        try {
            const scenarioActions = await ScenarioAction.findAll({
                where: { ScenarioId: id },
                include: [{ model: Action }]
            });
            return scenarioActions;
        } catch (err) {
            console.log(err);
        }
    },
    async getOneScenarioConditions(id) {
        try {
            const scenarioConditions = await ScenarioCondition.findOne({
                where: { ScenarioId: id },
                include: [{ model: Condition }]
            });
            return scenarioConditions;
        } catch (err) {
            console.log(err);
        }
    },
    async getOneScenarioTriggers(id) {
        try {
            const scenarioTriggers = await ScenarioTrigger.findOne({
                where: { ScenarioId: id },
                include: [{ model: Trigger }]
            });
            return scenarioTriggers;
        } catch (err) {
            console.log(err);
        }
    },
    async getOneScenarioActions(id) {
        try {
            const scenarioActions = await ScenarioAction.findOne({
                where: { ScenarioId: id },
                include: [{ model: Action }]
            });
            return scenarioActions;
        } catch (err) {
            console.log(err);
        }
    },
    async getAllIoTs() {
        try {
            const iots = await IoT.findAll({ limit: 100 });
            return iots;
        } catch (err) {
            console.log(err);
        }
    },
    async getAllLogs() {
        try {
            const logs = await IDatavalueIoT.findAll({
                include: [{ model: IDatavalue }, { model: IoT }]
            });
            return logs;
        } catch (err) {
            console.log(err);
        }
    },
    async getOneLogs(id) {
        try {
            const logs = await IDatavalueIoT.findAll({
                where: {
                    IDatavalueId: id
                },
                include: [
                    {
                        model: IDatavalue
                    },
                    {
                        model: IoT
                    }
                ]
            });
            return logs;
        } catch (err) {
            console.log(err);
        }
    }
};
