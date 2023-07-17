import React from 'react';

import { useSession } from '../../../hooks/session';
import { Outlet } from 'react-router';

export function SessionLayout({

}) {
  const session = useSession()
  if (session) {
    return <Outlet />
  }
}