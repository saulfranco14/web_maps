import Users from './users';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    users: Users
});

export default rootReducer;