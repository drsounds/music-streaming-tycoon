import { createNodeSlice } from "./node";

const artistSlice = createNodeSlice('artist')

export default artistSlice.reducer;
export const { upsertArtist } = artistSlice.actions;