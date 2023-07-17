
import capitalize from 'capitalize';
import pluralize from 'pluralize';
import _ from 'lodash';

import { createSlice } from "@reduxjs/toolkit"

export const createNodeSlice = (nodeType, extra = {}) => {
  const nodeTypePlural = pluralize(nodeType)
  const upsertNodeFuncName = `upsert${capitalize(nodeType)}`;
  const upsertNodesFuncName = `upsert${capitalize(nodeTypePlural)}`
  const deleteNodeFuncName = `delete${capitalize(nodeTypePlural)}`
  // console.log(capitalize(nodeTypePlural))
  return createSlice(_.merge({
    name: nodeType,
    initialState: {
    },
    reducers: {
      [upsertNodeFuncName]: (state, action) => {
        if (!action.payload) {
          throw `upsert node payload is undefined`
        }
        state[action.payload.id] = action.payload
      },
      [upsertNodesFuncName]: (state, action) => {
        action.payload.map(n => {
          state[n.id] = n
        })
      },
      [deleteNodeFuncName]: (state, action) => {
        delete state[action.payload]
      }
    }
  }, extra))
}

export const nodeSlice = createSlice({
  name: 'node',
  initialState: {
  },
  reducers: {
    upsertNode: (state, action) => {

      state[`skyloft:${action.payload.type}:${action.payload.id}`] = action.payload
    },
    upsertNodes: (state, action) => {
      action.payload.map(n => {
        state[`skyloft:${n.type}:${n.id}`] = n
      })
    },
    deleteNode: (state, action) => {
      delete state[action.payload]
    }
  }
})

export const { upsertNode, upsertNodes } = nodeSlice.actions
export default nodeSlice.reducer