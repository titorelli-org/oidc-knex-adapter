import { cp, readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true
});
