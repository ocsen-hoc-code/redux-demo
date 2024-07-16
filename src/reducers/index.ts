import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import todoReducer from './todoReducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  todos: todoReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
