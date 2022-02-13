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

const configs = require('./Config/configs.json')
const configiots = require('./Config/configiots.json')

const iots = require('./IoT/iots.json')
const icategories = require('./IoT/icategories.json')
const icategoryiots = require('./IoT/icategoryiots.json')
const idatavalue = require('./IoT/idatavalues.json')
const idatavalueiots = require('./IoT/idatavalueiots.json')

const rooms = require('./Room/rooms.json')
const roomiots = require('./Room/roomiots.json')
const roomusers = require('./Room/roomusers.json')

const scenarios = require('./Scenario/scenarios.json')
const scenariousers = require('./Scenario/scenariousers.json')


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
        /* CONFIG */
        await Promise.all(
            configs.map(config => {
                Config.create(config)
            })
        )
        /* ####################################################################### */
        /* IoT */
        await Promise.all(
            iots.map(iot => {
                IoT.create(iot)
            })
        )
        /* ICATEGORY */
        await Promise.all(
            icategories.map(icategory => {
                ICategory.create(icategory)
            })
        )
        /* IDATAvalue */
        await Promise.all(
            idatavalue.map(idatavalue => {
                IDatavalue.create(idatavalue)
            })
        )
        /* ####################################################################### */
        /* ROOM */
        await Promise.all(
            rooms.map(room => {
                Room.create(room)
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
        /* ########################      FOREIGH KEY     ######################### */
        /* ####################################################################### */
        /* ICATEGORY IOT */
        await Promise.all(
            icategoryiots.map(icategoryiot => {
                ICategoryIoT.create(icategoryiot)
            })
        )
        /* IDATAvalue IOT*/
        await Promise.all(
            idatavalueiots.map(idatavalueiot => {
                IDatavalueIoT.create(idatavalueiot)
            })
            )
        /* CONFIG IoT */
        await Promise.all(
            configiots.map(configiot => {
                ConfigIoT.create(configiot)
            })
        )
        /* ROOM IoT*/
        await Promise.all(
            roomiots.map(roomiot => {
                RoomIoT.create(roomiot)
            })
        )
        /* ROOM USER */
        await Promise.all(
            roomusers.map(roomuser => {
                RoomUser.create(roomuser)
            })
        )
        /* SCENARIO USER*/
        await Promise.all(
            scenariousers.map(scenariouser => {
                ScenarioUser.create(scenariouser)
            })
        )
        /* ####################################################################### */
        /* ####################################################################### */
        /* ####################################################################### */
    })