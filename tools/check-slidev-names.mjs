#!/usr/bin/env node
// Slidev のスライドが、名前の決まりに沿っているかを確かめる。
//
// prettier（.prettierrc）と markdownlint（.markdownlint-cli2.yaml・.markdownlintignore）は、
// Slidev のスライドを名前で見分けて専用の設定を当てる。決まりから外れた名前の Slidev のスライドは
// 普通の Markdown として整形・検査され、ページ設定が崩れたり警告が出たりするため、commit の前に止める。
//
// Slidev のスライドかどうかは、最初の frontmatter の先頭の階層に theme: があるかで判定する。
//
// 使い方: node tools/check-slidev-names.mjs [Markdown のパス...]
//   パスを省くと docs/ の下の Markdown をすべて調べる。
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative, sep } from "node:path";

// .markdownlint-cli2.yaml・.markdownlintignore・.prettierrc の glob と同じ範囲。
const SLIDEV_NAME =
  /^docs\/ja\/specdojo\/(samples|templates)\/(.+\/)?lsd-[^/]*\.md$/;

function markdownFilesBelow(dir) {
  const files = [];
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) files.push(...markdownFilesBelow(path));
    else if (name.endsWith(".md")) files.push(path);
  }
  return files;
}

function isSlidevDeck(path) {
  const text = readFileSync(path, "utf8");
  const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n/.exec(text);
  return match !== null && /^theme:/m.test(match[1]);
}

const args = process.argv.slice(2);
const files = (args.length > 0 ? args : markdownFilesBelow("docs"))
  .filter((path) => path.endsWith(".md"))
  .map((path) => relative(process.cwd(), path).split(sep).join("/"));

const misnamed = files.filter(
  (path) => isSlidevDeck(path) && !SLIDEV_NAME.test(path),
);

if (misnamed.length > 0) {
  console.error("Slidev のスライドが、名前の決まりに沿っていません:");
  for (const path of misnamed) console.error(`  ${path}`);
  console.error(
    "投影スライドの kata は docs/ja/specdojo/{samples,templates}/ の下に置き、ID を lsd- で始めてください。\n" +
      "別の決まりを加える場合は、.markdownlint-cli2.yaml・.markdownlintignore・.prettierrc と、このファイルの glob をそろえてください。",
  );
  process.exit(1);
}
