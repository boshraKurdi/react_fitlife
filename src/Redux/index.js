import { combineReducers, configureStore } from '@reduxjs/toolkit'
import auth from './Auth/AuthSlice';
import mode from './Mode/ModeSlice';
import goal from './Goal/GoalSlice';
import plan from './Plan/PlanSlice';
import myGoal from './MyGaol/MyGoalSlice';
import myPlan from './MyPlan/MyPlanSlice';
import gym from './Gym/GymSlice';
import user from './User/UserSlice';
import service from './Service/ServiceSlice';
import chat from './Chat/ChatSlice'; 
import exercise from './Exercise/ExerciseSlice';
import Dgoal from './Dashboard/Goal/GoalSlice';
import Dplan from './Dashboard/Plan/PlanSlice';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
const rootPersistConfig = {
  key: 'root',
  version: 1,
  storage,
  whiteList: ['auth' , 'mode']
}
const authPersistConfig = {
  key: 'auth',
  version: 1,
  storage,
  whiteList: ['user' , 'token']
}
const modePersistConfig = {
  key: 'mode',
  version: 1,
  storage,
  whiteList: ['value']
}

const rootReducer = combineReducers({
  auth : persistReducer(authPersistConfig , auth),
  mode : persistReducer(modePersistConfig , mode),
  goal ,
  plan ,
  myGoal ,
  myPlan ,
  gym ,
  user ,
  service ,
  chat ,
  exercise ,
  Dgoal ,
  Dplan
})
 const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer ,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
let persistor = persistStore(store)
export { store , persistor }