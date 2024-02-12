import React from 'react';

import { useSession } from '@/hooks/session';

export function SessionLayout({
  children
}) {
  const session = useSession()
  if (session) {
    return children
  }
}