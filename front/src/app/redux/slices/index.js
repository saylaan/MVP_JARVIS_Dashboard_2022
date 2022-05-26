/* ------------- || Third Party Imports || ------------- */
import { combineReducers } from 'redux';
/* ------------- || Reducers Imports || ------------- */
import { customizationReducer } from './customization.slice';
import { iotReducer } from './iot.slice';
import { logReducer } from './log.slice';
import { modelReducer } from './model.slice';
import { roomReducer } from './room.slice';
import { roomIotReducer } from './roomiot.slice';
import { icategoryReducer } from './icategory.slice';
import { icategoryIotReducer } from './icategoryiot.slice';
import { scenarioReducer } from './scenario.slice';
import { actionReducer } from './action.slice';
import { triggerReducer } from './trigger.slice';
import { conditionReducer } from './condition.slice';
import { scenarioactionReducer } from './scenarioaction.slice';
import { scenariotriggerReducer } from './scenariotrigger.slice';
import { scenarioconditionReducer } from './scenariocondition.slice';
/* ------------- || Exports || ------------- */
export { login, logout, openMenu, setMenu, setFontFamily, setBorderRadius } from './customization.slice';
export { fetchIot, updateIot, postIot, deleteIot, clearIot, selectAllIots } from './iot.slice';
export { fetchLog, updateLog, postLog, deleteLog, clearLog, selectAllLogs } from './log.slice';
export { fetchRoom, updateRoom, postRoom, deleteRoom, clearRoom, selectAllRooms } from './room.slice';
export { fetchRoomIot, updateRoomIot, postRoomIot, deleteRoomIot, clearRoomIot, selectAllRoomIots } from './roomiot.slice';
export { fetchICategory, updateICategory, postICategory, deleteICategory, clearICategory, selectAllICategorys } from './icategory.slice';
export {
    fetchICategoryIot,
    updateICategoryIot,
    postICategoryIot,
    deleteICategoryIot,
    clearICategoryIot,
    selectAllICategoryIots
} from './icategoryiot.slice';
export { postModel, clearModel } from './model.slice';
// export { clearModel } from './model.slice';
export { fetchScenario, updateScenario, postScenario, deleteScenario, clearScenario, selectAllScenarios } from './scenario.slice';
export { fetchAction, updateAction, postAction, deleteAction, clearAction, selectAllActions } from './action.slice';
export { fetchTrigger, updateTrigger, postTrigger, deleteTrigger, clearTrigger, selectAllTriggers } from './trigger.slice';
export { fetchCondition, updateCondition, postCondition, deleteCondition, clearCondition, selectAllConditions } from './condition.slice';
export {
    fetchScenarioAction,
    updateScenarioAction,
    postScenarioAction,
    deleteScenarioAction,
    clearScenarioAction,
    selectAllScenarioActions
} from './scenarioaction.slice';
export {
    fetchScenarioTrigger,
    updateScenarioTrigger,
    postScenarioTrigger,
    deleteScenarioTrigger,
    clearScenarioTrigger,
    selectAllScenarioTriggers
} from './scenariotrigger.slice';
export {
    fetchScenarioCondition,
    updateScenarioCondition,
    postScenarioCondition,
    deleteScenarioCondition,
    clearScenarioCondition,
    selectAllScenarioConditions
} from './scenariocondition.slice';

export const rootReducer = combineReducers({
    customization: customizationReducer,
    iot: iotReducer,
    log: logReducer,
    model: modelReducer,
    room: roomReducer,
    roomiot: roomIotReducer,
    icategory: icategoryReducer,
    icategoryiot: icategoryIotReducer,
    scenario: scenarioReducer,
    action: actionReducer,
    trigger: triggerReducer,
    condition: conditionReducer,
    scenarioaction: scenarioactionReducer,
    scenariocondition: scenarioconditionReducer,
    scenariotrigger: scenariotriggerReducer
});
