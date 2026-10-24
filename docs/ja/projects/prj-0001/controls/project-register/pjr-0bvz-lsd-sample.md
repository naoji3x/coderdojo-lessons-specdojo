---
specdojo:
  id: prj-0001:pjr-0bvz-lsd-sample
  type: project
  status: draft
  rulebook: specdojo:pjr-rulebook
  part_of:
    - prj-0001:pjr-index
  item_type: todo
  item_status: in-progress
  priority: high
  difficulty: hard
  owner: BA
  registered_at: "2026-10-24T12:02:38Z"
  due_on: "2026-10-31"
  derived_from:
    - PJR-BR5A
  approach: sample-authoring
  targets:
    - edu-scratch:lsd-sample
  sources:
    - coderdojo-lessons:courses/*/lessons/*/slides.md
    - coderdojo-lessons:courses/*/lessons/*/style.css
    - edu-scratch:lsd-rulebook
---

# PJR-0BVZ 投影スライドの sample を作る

## 1. 概要

第2回の投影スライドを手本に、`edu-scratch:lsd-rulebook` に沿う投影スライドの完成例（`edu-scratch:lsd-sample`）を exec で作り、rulebook の `sample` を新しい ID へ更新する。

- rulebook の執筆標準では完成例の正本は sample であり、`lsd-rulebook` からは最小例の章を外した（`c51afe2`）。
- 手本は coderdojo-lessons の `slides.md` と `style.css`、および `edu-scratch:lsd-rulebook` で、読み取り専用とする。
- sample はファイル全体が Slidev のスライドになるため、このリポジトリの prettier は `prettier-plugin-slidev` の `slidev` parser で整形する（実行の前に設定する）。

## 2. 完了条件

- `docs/ja/specdojo/samples/edu-scratch/lsd-sample.md` が ID `edu-scratch:lsd-sample` で作られ、frontmatter の `status` が `draft` になっている。
- sample が `edu-scratch:lsd-rulebook` の本文要件・記述ガイド・禁止事項に沿っている。少なくとも次を満たす。
  - 表紙・説明・ふりかえりなど、rulebook の本文要件のページの役割がそろっている。
  - 2ページ目以降のページ設定が、区切りの `---` の直後に空行なしで続いている。
  - 先頭に `<!-- markdownlint-disable MD003 MD022 -->` がある。
  - Scratch のブロック図は `ScratchBlocks` と `text` の記法で書かれている。
  - 案内役のキャラクターは `teacher-cat` の要素で、slot の外に置かれている。
- 手本の授業に固有の値（題名・回数・変数名など）は、sample の文脈に合わせて一般化され、丸写しになっていない。
- rulebook（`docs/ja/specdojo/rulebooks/edu-scratch/lsd-rulebook.md`）の frontmatter の `sample` が `undecided` から `edu-scratch:lsd-sample` に更新されている。rulebook のほかの箇所は変えていない。
- 手本（coderdojo-lessons のファイル）は変更されていない。
- sample が prettier（`slidev` parser）と markdownlint を通る。prettier を通した後も、区切りの直後に空行が入っていない。
- 手本が1件だけのため判断できない点が、result の申し送りに日本語で書かれている。

## 3. 作業内容

| No  | 作業                                                                | 担当 | 状態 | メモ                                     |
| --- | ------------------------------------------------------------------- | ---- | ---- | ---------------------------------------- |
| 1   | このリポジトリに `prettier-plugin-slidev` と `.prettierrc` を入れる | orch | open | exec の実行環境はネットワークを使えない  |
| 2   | 手本と rulebook を読み、`edu-scratch:lsd-sample` を作る             | exec | open | `status: draft`                          |
| 3   | rulebook の `sample` を新しい ID へ更新する                         | exec | open | 手本がカタログ外のため自動では変わらない |
| 4   | 判断できない点を result の申し送りに書く                            | exec | open | 手本が1件だけのため                      |

## 4. 対応結果

_TODO_: 完了時に、実施内容・成果物・残課題を記載する。未完了の場合は `-` とする。

## 5. 関連ドキュメント

- [[edu-scratch:lsd-rulebook]]：sample が沿う rulebook
- [[prj-0001:pjr-br5a-lsd-rulebook-review]]：rulebook を見直した項目（派生元）
