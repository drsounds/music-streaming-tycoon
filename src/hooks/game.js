import React from 'react';
import { useSelector } from 'react-redux';

export function useGame() {
  return useSelector(state => {
    return state.game
  })
}
