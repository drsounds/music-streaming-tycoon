import { createNodeSlice } from "./node";

const sessionSlice = createNodeSlice('session');

export const { upsertSession } = sessionSlice.actions;

export default sessionSlice.reducer;