const {
    sequelize,
    ICategory,
    ICategoryIoT,
    IDatavalue,
    IDatavalueIoT,
    IoT,
    Room,
    RoomIoT,
    Action,
    Trigger,
    Condition,
    Scenario,
    ScenarioAction,
    ScenarioCondition,
    ScenarioTrigger,
    User
} = require('../src/models');
const Promise = require('bluebird');
// Users
const users = require('./User/users.json');
// IoTs
const iots = require('./IoT/iots.json');
// ICategory
const icategories = require('./IoT/icategories.json');
const icategoryiots = require('./IoT/icategoryiots.json');
// IDatavalue
const idatavalue = require('./IoT/idatavalues.json');
const idatavalueiots = require('./IoT/idatavalueiots.json');
// Room
const rooms = require('./Room/rooms.json');
const roomiots = require('./Room/roomiots.json');
// Scenario
const scenarios = require('./Scenario/scenarios.json');
const scenariotriggers = require('./Scenario/scenariotriggers.json');
const scenarioactions = require('./Scenario/scenarioactions.json');
const scenarioconditions = require('./Scenario/scenarioconditions.json');
const triggers = require('./Scenario/triggers.json');
const actions = require('./Scenario/actions.json');
const conditions = require('./Scenario/conditions.json');

sequelize.sync({ force: true }).then(async function () {
    /* ####################################################################### */
    /* ####################           PROMISE         ######################## */
    /* ####################################################################### */
    /* USER */
    await Promise.all(
        users.map((user) => {
            User.create(user);
        })
    );
    /* ####################################################################### */
    /* IoT */
    await Promise.all(
        iots.map((iot) => {
            IoT.create(iot);
        })
    );
    /* ICATEGORY */
    await Promise.all(
        icategories.map((icategory) => {
            ICategory.create(icategory);
        })
    );
    /* IDATAVALUE */
    await Promise.all(
        idatavalue.map((idatavalue) => {
            IDatavalue.create(idatavalue);
        })
    );
    /* ####################################################################### */
    /* ROOM */
    await Promise.all(
        rooms.map((room) => {
            Room.create(room);
        })
    );
    /* ####################################################################### */
    /* SCENARIO */
    await Promise.all(
        scenarios.map((scenario) => {
            Scenario.create(scenario);
        })
    );
    /* ACTION */
    await Promise.all(
        actions.map((action) => {
            Action.create(action);
        })
    );
    /* TRIGGER */
    await Promise.all(
        triggers.map((trigger) => {
            Trigger.create(trigger);
        })
    );
    /* CONDITION */
    await Promise.all(
        conditions.map((condition) => {
            Condition.create(condition);
        })
    );
    /* ####################################################################### */
    /* ########################      FOREIGH KEY     ######################### */
    /* ####################################################################### */
    /* ICATEGORY IOT */
    await Promise.all(
        icategoryiots.map((icategoryiot) => {
            ICategoryIoT.create(icategoryiot);
        })
    );
    /* IDATAvalue IOT */
    await Promise.all(
        idatavalueiots.map((idatavalueiot) => {
            IDatavalueIoT.create(idatavalueiot);
        })
    );
    /* ROOM IOT */
    await Promise.all(
        roomiots.map((roomiot) => {
            RoomIoT.create(roomiot);
        })
    );
    /* SCENARIO TRIGGER */
    await Promise.all(
        scenariotriggers.map((scenariotrigger) => {
            ScenarioTrigger.create(scenariotrigger);
        })
    );
    /* SCENARIO CONDITION */
    await Promise.all(
        scenarioconditions.map((scenariocondition) => {
            ScenarioCondition.create(scenariocondition);
        })
    );
    /* SCENARIO ACTION */
    await Promise.all(
        scenarioactions.map((scenarioaction) => {
            ScenarioAction.create(scenarioaction);
        })
    );
    /* ####################################################################### */
    /* ####################################################################### */
    /* ####################################################################### */
});
