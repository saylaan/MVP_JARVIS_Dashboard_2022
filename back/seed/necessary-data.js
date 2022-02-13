const {
    sequelize,
    Config,
    ConfigIoT,
    ICategory,
    ICategoryIoT,
    IDatavalue,
    IDatavalueIoT,
    IoT,
    Room,
    RoomIoT,
    RoomUser,
    Scenario,
    ScenarioUser,
    User
} = require('../src/models')

const Promise = require('bluebird')

const users = require('./User/users.json')
const icategories = require('./IoT/icategories.json')
const scenarios = require('./Scenario/scenarios.json')


sequelize.sync({ force: true })
    .then(async function() {
        /* ####################################################################### */
        /* ####################           PROMISE         ######################## */
        /* ####################################################################### */
        /* USER */
        await Promise.all(
            users.map(user => {
                User.create(user)
            })
        )
        /* ####################################################################### */
        /* ICATEGORY */
        await Promise.all(
            icategories.map(icategory => {
                ICategory.create(icategory)
            })
        )
        /* ####################################################################### */
        /* SCENARIO */
        await Promise.all(
            scenarios.map(scenario => {
                Scenario.create(scenario)
            })
            )
        /* ####################################################################### */
        /* ####################################################################### */
        /* ####################################################################### */
    })