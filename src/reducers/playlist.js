import { createNodeSlice } from "./node"

const playlistSlice = createNodeSlice('playlist', {
  initialState: {
    'newmusicfriday': {
      user: {
        id: 'streamify',
        type: 'user',
      },
      isVerified: true,
      name: 'New Music Friday',
      id: 'newmusicfriday',
      followers: {
        count: 1100000,
        href: null
      }
    },
    'tophits': {
      name: 'Top Hits',
      id: 'tophits',
      user: {
        id: 'streamify',
        type: 'user',
      },
      followers: {
        count: 824232,
        href: null
      }
    },
    'sleep': {
      name: 'Top Hits',
      id: 'tophits',
      user: {
        id: 'streamify',
        type: 'user',
      },
      followers: {
        count: 824232,
        href: null
      }
    }
  },
  reducers: {
    
  }
})

export const { upsertPlaylist } = playlistSlice.actions;
export default playlistSlice.reducer;
