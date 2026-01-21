/**
 * Event type definitions
 */

export interface Venue {
  name: string
  area: string
  city: string
  address: string
  mapsUrl: string
}

export interface Host {
  name: string
  twitter: string
}

export interface Event {
  title: string
  tagline: string
  startDate: string // ISO 8601
  endDate: string // ISO 8601
  venue: Venue
  host: Host
  description: string
  swag: string
  rsvpUrl: string
  tags: string[]
}

export type EventState = "upcoming" | "live" | "ended"
