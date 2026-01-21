# coffeeflare

A Cloudflare-themed coffee event announcement TUI built with [Bun](https://bun.sh), [Solid.js](https://solidjs.com), and [OpenTUI](https://github.com/anthropics/opentui).

## Requirements

- [Bun](https://bun.sh)

## Installation

```bash
# Run directly
bunx coffeeflare

# Or install globally
bun install -g coffeeflare
coffeeflare
```

## Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `q` / `Escape` | Quit |
| `t` | Toggle theme (dark/light) |
| `r` | Open RSVP link |
| `m` | Open venue in maps |

## Features

- Live countdown to event start
- Auto-detects terminal color scheme (dark/light)
- Responsive layout adapts to terminal size
- Cloudflare-branded color themes

## Development

```bash
# Install dependencies
bun install

# Run in development mode (with hot reload)
bun dev

# Run normally
bun start
```

## License

MIT
