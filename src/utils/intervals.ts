/**
 * Interval registry for tracking active intervals
 * Allows cleanup on app exit to prevent process hanging
 */

const intervals = new Set<ReturnType<typeof setInterval>>()

export function registerInterval(id: ReturnType<typeof setInterval>) {
  intervals.add(id)
  return id
}

export function unregisterInterval(id: ReturnType<typeof setInterval>) {
  intervals.delete(id)
}

export function clearAllIntervals() {
  for (const id of intervals) {
    clearInterval(id)
  }
  intervals.clear()
}
