---
specdojo:
  id: prj-0001:pjr-6g9t-balloon-slides-design
  type: project
  status: draft
  rulebook: specdojo:pjr-rulebook
  part_of:
    - prj-0001:pjr-index
  item_type: todo
  item_status: in-progress
  priority: medium
  owner: BA
  registered_at: "2026-10-21T13:40:02Z"
  due_on: "2026-10-31"
  derived_from:
    - PJR-95RS
---

# PJR-6G9T 第2回のスライドを高学年向けに装飾し、Scratchブロックの図を入れる

## 1. 概要

PJR-95RS で試作した第2回（風船割りゲーム）の `slides.md` を、小学校高学年の授業らしい見た目に整える。あわせて、プログラムの説明に scratchblocks で描いた Scratch のブロックの図を入れる。

対象は宣言済みの `coderdojo-lessons` リポジトリの `courses/scratch-basic/lessons/020-balloon-game/slides.md`。授業内容の正本は `docs/course-design/course-plan.md` の第2回と、同じディレクトリの `lesson-plan.md` とする。

orchestrator が実行前に次を準備した。

- テーマ `slidev-theme-neversink`（MIT）を開発依存に追加し、`slides.md` のフロントマターを `theme: neversink` にした。小学校向け・Scratch 向けの Slidev テーマは見つからなかった。このテーマは教育向けで、吹き出し（`SpeechBubble`）・付箋（`StickyNote`）・注意書き（`Admonition`）・キャラクター（`vue3-kawaii`）・色の組み合わせ・レイアウトを持つため選んだ。使い方は `node_modules/slidev-theme-neversink/docs/` にある。
- `scratchblocks`（MIT、3.7.1）を開発依存に追加した。日本語（`ja`）とひらがな（`ja-Hira`）の訳を含む。

agent の実行環境はネットワークに出られず、`package.json` は agent が変更できない。新しい依存が必要になった場合は追加せず、対応結果に書く。

## 2. 完了条件

- `slides.md` が、小学校高学年の授業らしい見た目になっている。
  - 大きめの文字、考え方（変数・乱数・クローン・メッセージ）ごとの色分け、表紙や区切りのレイアウトを使う。
  - テーマ `neversink` の機能と、活動ディレクトリの CSS（`style.css` など）の範囲で行う。新しいテーマやパッケージは追加しない。
- 得点・乱数・クローン・メッセージと背景切替の説明に、scratchblocks で描いたブロックの図が入っている。
  - ブロックは日本語で表示する。
  - 図の元は文字（scratchblocks の記法）で書き、Git で差分を見られるようにする。描画のための部品は活動ディレクトリの `components/` に置く（PJR-M5SC 3.2）。
  - Stretch3 でのブロックの正確な名前・配置は「実機で確かめる」と印を付け、推測で確定しない。
- 外部の画像（Scratch のスプライトの画像など）は使わない。使う必要がある場合は、出典と利用条件を記録する（PJR-M5SC 3.4）。
- `npx slidev build` が成功し、`dist/` と `node_modules/` を commit していない。
- `lesson-plan.md` の内容は変えない。スライドと流れが合わなくなる場合は、対応結果に書く。
- ブロックの図の書き方を、ほかの回でも使える形で `docs/guides/slidev-guide.md` に追記する。
- 対応結果に、装飾とブロックの図をどう作ったか、ほかの回へ広げるときの注意を書く。
- 見た目は build の成否では判断できないため、利用者が開発サーバーで表示を確かめて了承する。

## 3. 作業内容

| No  | 作業                                                                        | 担当 | 状態 | メモ                                         |
| --- | --------------------------------------------------------------------------- | ---- | ---- | -------------------------------------------- |
| 1   | テーマ `neversink` と scratchblocks の使い方を確認する                      | BA   | open | 依存は orchestrator が追加済み               |
| 2   | scratchblocks でブロックの図を描く部品を `components/` に作る               | BA   | open | 日本語の訳を使う                             |
| 3   | `slides.md` を装飾し、各説明にブロックの図を入れる                          | BA   | open | 推測したブロック名には「実機で確かめる」の印 |
| 4   | `npx slidev build` で確かめ、`slidev-guide.md` にブロックの図の書き方を書く | BA   | open | `dist/` は commit しない                     |
| 5   | 利用者が開発サーバーで見た目を確かめる                                      | BA   | open | close の前に行う                             |

## 4. 対応結果

-

## 5. 関連ドキュメント

- [[prj-0001:pjr-95rs-revise-lesson-designs]]：第2回の試作（派生元）
- [[prj-0001:pjr-m5sc-lesson-content-structure]]：活動ディレクトリの構成と Slidev の規約（3.2〜3.4）
