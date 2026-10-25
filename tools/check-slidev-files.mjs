#!/usr/bin/env node
// Slidev のスライドに専用の設定が当たる状態を保つための検査。
//
// prettier（.prettierrc）と markdownlint（.markdownlint-cli2.yaml・.markdownlintignore）は、
// Slidev のスライドを名前（SLIDEV_GLOBS）で見分けて専用の設定を当てる。次の 2 つを確かめる。
//
// 1. 名前: Slidev のスライド（最初の frontmatter の先頭の階層に theme: がある Markdown）が、
//    SLIDEV_GLOBS に当たる名前になっている。
// 2. 設定: 3 つの設定ファイルが、SLIDEV_GLOBS に同じ設定を、効く順番で当てている。
//    - markdownlint-cli2 の overrides は、最初に一致した 1 つだけを使う。Slidev 用は先頭に置く。
//    - prettier の overrides は、後のものが優先される。Slidev 用は末尾に置く。
//
// 使い方: node tools/check-slidev-files.mjs [Markdown のパス...]
//   パスを省くと docs/ の下の Markdown をすべて調べる。設定の検査は毎回行う。
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative, sep } from "node:path";
import { load } from "js-yaml";

// Slidev のスライドと見なす名前。3 つの設定ファイルは、この glob をそのまま使う。
const SLIDEV_GLOBS = [
  "docs/ja/specdojo/samples/**/lsd-*.md",
  "docs/ja/specdojo/templates/**/lsd-*.md",
];
const SLIDEV_NAME =
  /^docs\/ja\/specdojo\/(samples|templates)\/(.+\/)?lsd-[^/]*\.md$/;
const SLIDEV_MARKDOWNLINT_CONFIG = ".markdownlint-slidev.yaml";

const sameGlobs = (globs) =>
  Array.isArray(globs) &&
  globs.length === SLIDEV_GLOBS.length &&
  SLIDEV_GLOBS.every((glob) => globs.includes(glob));

function checkConfigs() {
  const problems = [];

  const cli2 = load(readFileSync(".markdownlint-cli2.yaml", "utf8")) ?? {};
  const cli2Overrides = cli2.overrides ?? [];
  const cli2Index = cli2Overrides.findIndex(
    (o) => o?.config?.extends === SLIDEV_MARKDOWNLINT_CONFIG,
  );
  if (cli2Index === -1) {
    problems.push(
      `.markdownlint-cli2.yaml: ${SLIDEV_MARKDOWNLINT_CONFIG} を当てる overrides がない`,
    );
  } else {
    if (cli2Index !== 0) {
      problems.push(
        ".markdownlint-cli2.yaml: Slidev 用の override が先頭にない。markdownlint-cli2 は最初に一致した override だけを使う",
      );
    }
    if (!sameGlobs(cli2Overrides[cli2Index].filter)) {
      problems.push(
        `.markdownlint-cli2.yaml: Slidev 用の override の filter が ${SLIDEV_GLOBS.join("・")} と違う`,
      );
    }
  }

  const prettier = JSON.parse(readFileSync(".prettierrc", "utf8"));
  const prettierOverrides = prettier.overrides ?? [];
  const prettierIndex = prettierOverrides.findIndex(
    (o) => o?.options?.parser === "slidev",
  );
  if (prettierIndex === -1) {
    problems.push(".prettierrc: parser を slidev にする overrides がない");
  } else {
    if (prettierIndex !== prettierOverrides.length - 1) {
      problems.push(
        ".prettierrc: Slidev 用の override が末尾にない。prettier は後の override を優先する",
      );
    }
    if (!sameGlobs(prettierOverrides[prettierIndex].files)) {
      problems.push(
        `.prettierrc: Slidev 用の override の files が ${SLIDEV_GLOBS.join("・")} と違う`,
      );
    }
  }

  const ignored = existsSync(".markdownlintignore")
    ? readFileSync(".markdownlintignore", "utf8")
        .split(/\r?\n/)
        .map((line) => line.trim())
    : [];
  for (const glob of SLIDEV_GLOBS) {
    if (!ignored.includes(glob))
      problems.push(`.markdownlintignore: ${glob} がない`);
  }
  if (ignored.some((line) => line.startsWith("!"))) {
    problems.push(
      ".markdownlintignore: ! で戻す行がある。Slidev のスライドが検査に戻らないか確かめる",
    );
  }

  return problems;
}

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
  const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n/.exec(
    readFileSync(path, "utf8"),
  );
  return match !== null && /^theme:/m.test(match[1]);
}

const args = process.argv
  .slice(2)
  .filter((path) => path.endsWith(".md") && existsSync(path));
const files = (process.argv.length > 2 ? args : markdownFilesBelow("docs")).map(
  (path) => relative(process.cwd(), path).split(sep).join("/"),
);
const misnamed = files.filter(
  (path) => isSlidevDeck(path) && !SLIDEV_NAME.test(path),
);
const configProblems = checkConfigs();

if (misnamed.length > 0) {
  console.error("Slidev のスライドが、名前の決まりに沿っていません:");
  for (const path of misnamed) console.error(`  ${path}`);
  console.error(
    "投影スライドの kata は docs/ja/specdojo/{samples,templates}/ の下に置き、ID を lsd- で始めてください。\n" +
      "別の決まりを加える場合は、このファイルの SLIDEV_GLOBS・SLIDEV_NAME と 3 つの設定ファイルをそろえてください。",
  );
}
if (configProblems.length > 0) {
  console.error("Slidev のスライドに専用の設定が当たらない状態です:");
  for (const problem of configProblems) console.error(`  ${problem}`);
}
if (misnamed.length > 0 || configProblems.length > 0) process.exit(1);
