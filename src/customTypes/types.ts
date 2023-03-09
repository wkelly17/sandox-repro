import type { PlaylistResponse, Video } from "./PlaybackApi"

interface vidCustomProps {
  book?: string
  originalIdx?: number
  slugName?: string
}

export type CustomVidI = Video & vidCustomProps
