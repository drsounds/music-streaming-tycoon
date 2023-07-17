import { createNodeSlice } from "./node"

const playlistEntrySlice = createNodeSlice('playlistEntry')

export default playlistEntrySlice.reducer;
export const { upsertPlaylistEntry } = playlistEntrySlice.actions;
