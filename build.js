import esbuild from "esbuild"

esbuild
  .build({
    entryPoints: ["src/index.js"],
    bundle: true,
    outfile: "dist/bundle.js",
    minify: true,
    sourcemap: true,
    target: ["es2016"],
  })
  .catch(() => process.exit(1))
