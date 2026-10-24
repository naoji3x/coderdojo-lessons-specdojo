---
specdojo:
  id: prj-0001:pjr-0bvz-lsd-sample
  type: project
  status: ready
  rulebook: specdojo:pjr-rulebook
  part_of:
    - prj-0001:pjr-index
  item_type: todo
  item_status: done
  priority: high
  difficulty: hard
  owner: BA
  registered_at: "2026-10-24T12:02:38Z"
  due_on: "2026-10-31"
  completed_at: "2026-10-24T22:04:09Z"
  conclusion: edu-scratch:lsd-sample を draft で作り、rulebook の sample を新しい ID へ更新した。判断できない点の申し送りと rulebook との食い違いは PJR-DVMM へ引き継いだ。
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
| 1   | このリポジトリに `prettier-plugin-slidev` と `.prettierrc` を入れる | orch | done | exec の実行環境はネットワークを使えない  |
| 2   | 手本と rulebook を読み、`edu-scratch:lsd-sample` を作る             | exec | done | `status: draft`                          |
| 3   | rulebook の `sample` を新しい ID へ更新する                         | exec | done | 手本がカタログ外のため自動では変わらない |
| 4   | 判断できない点を result の申し送りに書く                            | exec | 未達 | 申し送りに書かれなかった                 |

## 4. 対応結果

`exec run --register --worktree` で codex-expert-executor と terra-reporter が sample を作り、`project/prj-0001/develop` へ統合した（`18e5725`）。

経緯:

- 1回目は executor の途中で Codex の利用上限に達し、`waiting` になった。
- 上限が戻ってから `--resume` で再開した。executor は作業を終えたが、最終の報告を `<specdojo_executor_evidence>` で囲まなかった。runner は報告を読めず、再開の run だけで行う対象の確認（`target_coverage`）で止まった。
- その sample は、このリポジトリの markdownlint（MD024・MD025・MD033・MD036）を通らなかった。executor はこれらの規則を外して検査していた。
- orchestrator が、投影スライドの sample と template を markdownlint の対象から外した（`14744d4`、merge `0cfbfa6`）。そのうえで `--force-restart` で流し直し、統合まで進んだ。
- 実行の前に、orchestrator が `prettier-plugin-slidev` と `.prettierrc` を入れた（`00eef08`、merge `6e1738b`）。

orchestrator が完了条件と照らして確かめたこと:

- `docs/ja/specdojo/samples/edu-scratch/lsd-sample.md` が ID `edu-scratch:lsd-sample`、`status: draft` で作られた。題材は「えらべるお話を作ろう」で、8ページ。
- 表紙・めあて・節の扉・説明（2ページ）・まとめ・困ったとき・ふりかえりがそろっている。
- ページ設定は区切りの直後に空行なしで続き、prettier（`slidev` parser）を通しても崩れない。
- 先頭に markdownlint の注釈がある。ブロック図は `ScratchBlocks` と `text` の記法、案内役は `teacher-cat` の要素で書かれている。
- 風船・得点など、手本の授業に固有の値は残っていない。
- rulebook の変更は `sample: edu-scratch:lsd-sample` の1行だけで、手本は変更されていない。

満たしていない条件と残課題:

- 判断できない点が result の申し送りに書かれていない。
- rulebook の 6.2 は「案内役は `:: note ::` などの slot の中に置かない」としている。一方、sample と手本の `slides.md` は、2列のページで `:: right ::` の中に案内役を置いている。PJR-CZY8 で問題になったのは表紙の `:: note ::` だけだった。
- rulebook の 6.5 は「`slides.md` では MD003・MD022 以外の規則を止めない」としている。実際には、教材のリポジトリの `.markdownlint.yaml` で MD033・MD036・MD024 などを外している。
- 上の2点は、rulebook の見直しの todo [[prj-0001:pjr-dvmm-lsd-rulebook-slot-lint]] へ引き継いだ。
- sample は、このリポジトリに `ScratchBlocks.vue` と `style.css` がないため、Slidev での表示を確かめていない。

## 5. 関連ドキュメント

- [[edu-scratch:lsd-rulebook]]：sample が沿う rulebook
- [[prj-0001:pjr-br5a-lsd-rulebook-review]]：rulebook を見直した項目（派生元）
