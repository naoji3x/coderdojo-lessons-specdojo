---
specdojo:
  id: prj-0001:pjr-17x8-chase-slides-screen-layout-diagram
  type: project
  status: draft
  rulebook: specdojo:pjr-rulebook
  part_of:
    - prj-0001:pjr-index
  item_type: todo
  item_status: in-progress
  priority: medium
  owner: BA
  registered_at: "2026-10-26T14:51:26Z"
  due_on: "2026-10-31"
---

# PJR-17X8 第1回のスライドにScratch画面構成のレイアウト図を入れる

## 1. 概要

第1回（追いかけっこゲーム）の `slides.md` 6ページ目「Scratchの画面の4つの場所を覚えよう」を、現在の 2×2 カード並び（`idea-grid`）から、Scratch の実際の画面配置（左：ブロックパレット、中央：コードエリア、右上：ステージと旗・赤ボタン、右下：スプライト一覧）が視覚的に分かるレイアウト図（HTML / CSS または SVG）へ改める。

変更対象は `coderdojo-lessons`（実行中は `$SPECDOJO_REPO_CODERDOJO_LESSONS`）の次のファイルとする。

- `courses/scratch-basic/lessons/010-chase-game/slides.md`
- `courses/scratch-basic/lessons/010-chase-game/style.css`（必要な場合）

根拠にする文書（読み取り専用）は次のとおり。

- `coderdojo-lessons` の `courses/scratch-basic/lessons/010-chase-game/lesson-plan.md`（5章 導入の画面構成の記述）
- このリポジトリの `edu-scratch:lsd-slidev-rulebook`（`docs/ja/specdojo/rulebooks/edu-scratch/lsd-slidev-rulebook.md`）

## 2. 完了条件

- `slides.md` の 6 ページ目「Scratchの画面の4つの場所を覚えよう」が、左に「① ブロックパレット」、中央に「② コードエリア」、右上に「③ ステージと旗（緑の旗・赤い停止ボタン）」、右下に「④ スプライト一覧（初期配置の猫）」を配置したレイアウト図（HTML/CSS または SVG）になっており、各場所の役割の説明が含まれていること。
- 教室の後方から読める文字サイズを確保し、右下の案内役（`teacher-cat`）と図・文字が重ならず、画面下端で切れないこと。
- 他のページの内容・順序・ページ設定および `lesson-plan.md` は変更しないこと。
- `edu-scratch:lsd-slidev-rulebook` に準拠し、`coderdojo-lessons` の Prettier（`slidev` parser）・markdownlint・Slidev build（`npx slidev build`）が通ること。
- exec の sandbox では Slidev の PNG 書き出しができないため、統合後に orchestrator が `npx slidev export courses/scratch-basic/lessons/010-chase-game/slides.md --format png` で 6 ページ目および前後のページの表示（切れ・重なり・可読性）を目視確認すること。
- 実施内容と検証結果を個票の対応結果に記録すること。

## 3. 作業内容

| No  | 作業                                                                                  | 担当 | 状態 | メモ                                           |
| --- | ------------------------------------------------------------------------------------- | ---- | ---- | ---------------------------------------------- |
| 1   | 6ページ目をScratch画面配置を表すレイアウト図に改め、必要なスタイルまたはSVGを定義する | exec | open | 左・中央・右上・右下の配置が視覚的に分かる構成 |
| 2   | Prettier・markdownlint・Slidev build で静的検査を行う                                 | exec | open | -                                              |
| 3   | 統合後に PNG 書き出しで表示（切れ・重なり・可読性）を確認する                         | orch | open | `npx slidev export --format png` で目視確認    |

## 4. 対応結果

-

## 5. 関連ドキュメント

- `coderdojo-lessons:courses/scratch-basic/lessons/010-chase-game/lesson-plan.md`（`lpl-chase-game`）
- `coderdojo-lessons:courses/scratch-basic/lessons/010-chase-game/slides.md`（`lsd-chase-game`）
- [[edu-scratch:lsd-slidev-rulebook]]
