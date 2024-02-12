import { v4 as uuidv4 } from 'uuid';
import base62 from 'base62';

import { upsertGameSession } from '../reducers/game';
import { upsertSession } from '../reducers/session';
import store from '../stores/game';

export function createNode(type, data) {
  const node = {
    id: uuidv4(),
    type,
    ...data
  }
  node.slug = base62.encode(node.id)
  return node
}

export function createSession() {
  const user = createNode('user', {
    username: 'curator',
    slug: 'curator',
    email: 'curator@example.com'
  })
  const session = createNode(
    'session',
    {
      id: uuidv4(),
      points: 0,
      exp: 0,
      level: 1,
      user: user,
      inbox: [],
      pitches: []
    }
  )
  session.slug = base62.encode(session.id)
  return session
}

export function setCurrentSessionName(sessionId, name) {
  store.dispatch(
    upsertSession({
      sessionId,
      user: {
        name
      }
    })
  )
}

export function createNewGame(number) {
  const session = createSession()
  store.dispatch(
    upsertSession(session)
  )
  store.dispatch(
    upsertGameSession(session.id, number)
  )
  return session;
}

function generatePitchEmail() {
    
}
