import "server-only";
import fs from "node:fs";
import path from "node:path";

/**
 * True if `src` (a URL path like "/images/x.jpg") exists in /public.
 *
 * Runs on the server while pages are prerendered. With Cache Components,
 * synchronous file reads are "predictable values": the result is baked
 * into the static HTML at build time. So a build without the photo
 * renders a placeholder and the browser never requests a missing file.
 * Adding a photo later requires a rebuild (or a dev-server restart).
 */
export function publicFileExists(src: string): boolean {
  return fs.existsSync(path.join(process.cwd(), "public", src));
}
