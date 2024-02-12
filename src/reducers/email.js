import { createNodeSlice } from "./node";

const emailSlice = createNodeSlice('email')

export default emailSlice.reducer;
export const { upsertPitch } = emailSlice.actions;
