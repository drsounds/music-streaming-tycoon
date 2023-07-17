import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension'

import thunk from 'redux-thunk'

import trackReducer from '../reducers/track'
import artistReducer from '../reducers/artist'
import playlistReducer from '../reducers/playlist'
import playlistEntryReducer from '../reducers/playlistEntry'
import pitchReducer from '../reducers/pitch';
import gameReducer from '../reducers/game';
import sessionReducer from '../reducers/session';
import createWebStorage from 'redux-persist/es/storage/createWebStorage';

const createNoopStorage = () => {
  return {
    getItem(_key) {
      return Promise.resolve(null);
    },
    setItem(_key, value) {
      return Promise.resolve(value);
    },
    removeItem(_key) {
      return Promise.resolve();
    },
  };
};

const storage = typeof window === "undefined" ? createNoopStorage() : createWebStorage('local');

const reducers = combineReducers({
  track: trackReducer,
  artist: artistReducer,
  playlist: playlistReducer,
  playlistEntry: playlistEntryReducer,
  pitch: pitchReducer,
  game: gameReducer,
  session: sessionReducer
})

const persistConfig = {
    key: 'root',
    storage
};

const persistedReducer = persistReducer(persistConfig, reducers);

export default configureStore({
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
  reducer: persistedReducer
})
