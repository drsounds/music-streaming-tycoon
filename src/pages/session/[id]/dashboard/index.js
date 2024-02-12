import React, { useEffect } from 'react';

import { useRouter } from 'next/router'

import { createNewGame } from '@/actions/game';

export function DashboardIndexPage() {
  const router = useRouter()
  useEffect(() => {
    const session = createNewGame()
    router.push({ hostname: './session/[sessionId]/dashboard', query: { sessionId: session.slug }})
  }, [])
  return (
    <div></div>
  )
}