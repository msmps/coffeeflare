import solidPlugin from "@opentui/solid/bun-plugin"

await Bun.build({
  entrypoints: ["src/index.tsx"],
  outdir: ".",
  naming: "bin.cjs",
  target: "bun",
  minify: true,
  plugins: [solidPlugin],
})
