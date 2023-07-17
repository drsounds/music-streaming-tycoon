import { createNodeSlice } from "./node";

const pitchSlice = createNodeSlice('pitch')

export default pitchSlice.reducer;
export const { upsertPitch } = pitchSlice.actions;
