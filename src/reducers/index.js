import { upsertPlaylist } from "./playlist";
import { upsertPlaylistEntry } from "./playlistEntry";
import { upsertTrack } from "./track";
import { upsertArtist } from './artist';
import { upsertPitch } from "./pitch";
import { upsertGameSession } from './game';
import { upsertSession } from "./session";

export const dispatchers = {
  upsertPlaylist,
  upsertPlaylistEntry,
  upsertTrack,
  upsertArtist,
  upsertPitch,
  upsertSession,
  upsertGameSession
}