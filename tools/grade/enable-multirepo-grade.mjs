import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const targetFile = resolve("node_modules/specdojo/dist/grade/targets.js");
if (existsSync(targetFile)) {
  const original = readFileSync(targetFile, "utf8");
  const updated = original
    .replace(
      'if (rel.startsWith("../") || isAbsolute(rel))\n        throw new Error(`Path is outside repository: ${input}`);',
      'if ((rel.startsWith("../") && !rel.startsWith("../coderdojo-lessons/")) || isAbsolute(rel))\n        throw new Error(`Path is outside repository: ${input}`);',
    )
    .replace(
      'if (rel.startsWith("../") || isAbsolute(rel)) {\n        throw new Error(`${option} must be inside the repository`);\n    }',
      'if ((rel.startsWith("../") && !rel.startsWith("../coderdojo-lessons/")) || isAbsolute(rel)) {\n        throw new Error(`${option} must be inside the repository`);\n    }',
    );
  if (updated !== original) {
    writeFileSync(targetFile, updated, "utf8");
  }
}
