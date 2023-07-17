import { createNodeSlice } from "./node"

const trackSlice = createNodeSlice("track")

export default trackSlice.reducer;
export const { upsertTrack } = trackSlice.actions;