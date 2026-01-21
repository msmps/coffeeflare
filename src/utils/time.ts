/**
 * Time utilities
 * Timezone-safe date formatting and countdown calculations
 */

export interface CountdownParts {
  days: number
  hours: number
  minutes: number
  seconds: number
  total: number // total milliseconds remaining
}

/**
 * Calculate countdown parts from now to target date
 * All calculations are timezone-safe (uses Date objects)
 */
export function getCountdown(targetDate: Date): CountdownParts {
  const now = new Date()
  const total = targetDate.getTime() - now.getTime()
  
  if (total <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, total: 0 }
  }
  
  const seconds = Math.floor((total / 1000) % 60)
  const minutes = Math.floor((total / 1000 / 60) % 60)
  const hours = Math.floor((total / 1000 / 60 / 60) % 24)
  const days = Math.floor(total / 1000 / 60 / 60 / 24)
  
  return { days, hours, minutes, seconds, total }
}

/**
 * Format countdown parts as string
 * Examples: "2d 14h 32m 08s", "14h 32m 08s", "32m 08s"
 */
export function formatCountdown(parts: CountdownParts): string {
  const { days, hours, minutes, seconds } = parts
  
  const pad = (n: number) => n.toString().padStart(2, "0")
  
  if (days > 0) {
    return `${days}d ${pad(hours)}h ${pad(minutes)}m ${pad(seconds)}s`
  }
  if (hours > 0) {
    return `${pad(hours)}h ${pad(minutes)}m ${pad(seconds)}s`
  }
  if (minutes > 0) {
    return `${pad(minutes)}m ${pad(seconds)}s`
  }
  return `${pad(seconds)}s`
}

/**
 * Format date for display in user's local timezone
 * Example: "Fri, Jan 23"
 */
export function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  })
}

/**
 * Format time range for display in user's local timezone
 * Example: "9:00 AM - 1:00 PM PST"
 * 
 * Note: "en-US" is the locale (formatting style), not the timezone.
 * Times are automatically converted to the user's local timezone.
 */
export function formatTimeRange(start: Date, end: Date): string {
  const timeFormat: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "2-digit",
  }
  
  const startTime = start.toLocaleTimeString("en-US", timeFormat)
  const endTime = end.toLocaleTimeString("en-US", {
    ...timeFormat,
    timeZoneName: "short",
  })
  
  return `${startTime} - ${endTime}`
}
