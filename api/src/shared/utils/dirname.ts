import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

export function getDirname(metaUrl: string) {
  const __filename = fileURLToPath(metaUrl);
  const __dirname = dirname(__filename);

  return __dirname;
}