import React, { createContext } from 'react';

export const GameContext = createContext({
  date: new Date(),
  pitches: [],
  playlists: [],
  
})