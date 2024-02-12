import React from 'react';

import { useLocalForage } from '@zikwall/use-localforage'

export function useGame() {
  return useLocalForage('game')
}
