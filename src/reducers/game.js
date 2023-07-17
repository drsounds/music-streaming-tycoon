import { createNodeSlice } from "./node";

const gameSlice = createNodeSlice('game', {
  initialState: {
    foo: 'bar',
    sessions: {
      0: undefined,
      1: undefined,
      2: undefined
    }
  },
  reducers: {
    upsertGameSession: (state, actions) => {
      state.sessions[actions.number] = actions.sessionId
    }
  }

})
export const { upsertGameSession } = gameSlice.actions;

export default gameSlice.reducer;
