---
specdojo:
  id: prj-0001:pjr-8xs6-balloon-slides-and-plan-coding-order
  type: project
  status: draft
  rulebook: specdojo:pjr-rulebook
  part_of:
    - prj-0001:pjr-index
  item_type: todo
  item_status: in-progress
  priority: medium
  owner: BA
  registered_at: "2026-10-25T06:58:36Z"
  due_on: "2026-10-31"
  derived_from:
    - PJR-NH2Z
---

# PJR-8XS6 第2回のスライドと指導案をコーディング順に見直し補足説明を加える

## 1. 概要

第2回（風船割りゲーム）の制作順序を、コーディングの流れに合わせて「1. 乱数 → 2. クローン → 3. 得点 → 4. メッセージ」の順に見直し、投影スライド（`slides.md`）への補足説明ページの追加・ブロック表示の拡大・ステージと風船の実装先の明記を行う。あわせて、同じ回の指導案（`lesson-plan.md`）の制作順序・記述をスライドと整合させる。

変更対象は `coderdojo-lessons`（実行中は `$SPECDOJO_REPO_CODERDOJO_LESSONS`）の次の2ファイルとする。

- `courses/scratch-basic/lessons/020-balloon-game/slides.md`
- `courses/scratch-basic/lessons/020-balloon-game/lesson-plan.md`

根拠にする文書（読み取り専用）は次のとおり。

- `coderdojo-lessons` の `docs/course-design/course-plan.md`
- このリポジトリの `edu-scratch:lpl-rulebook`（`docs/ja/specdojo/rulebooks/edu-scratch/lpl-rulebook.md`）
- このリポジトリの `edu-scratch:lsd-slidev-rulebook`（`docs/ja/specdojo/rulebooks/edu-scratch/lsd-slidev-rulebook.md`）

## 2. 完了条件

- `slides.md` の制作順序と「今日使う4つの考え方」の順序が「1. 乱数 → 2. クローン → 3. 得点 → 4. メッセージ」になっていること。
- **乱数（旧7ページ）の次頁追加**: 「乱数で場所を決める」の次のページに、参考として Scratch のステージの x座標（横の位置）・y座標（縦の位置）と今回の乱数の範囲（x: -200〜200、y: -140〜140）を説明するスライドが追加されていること。
- **クローン（旧9ページ）のブロック拡大と次頁追加**:
  - 「クローンで風船を増やす」の `ScratchBlocks`（現行 `:scale="0.5"`）が大きく読みやすいサイズで表示されていること（クローンされたときに乱数で場所を決めるブロックも含める）。
  - 次のページに、「クローンを作る側（元の風船：`緑の旗が押されたとき` に隠れてクローンを繰り返し作る）」と「クローンされた側（`クローンされたとき` に乱数の場所に表示され、一定時間後に消える）」の役割の違いを説明するスライドが追加されていること。
- **得点（旧11ページ）の実装先の分割・明記**: 「得点は『変数』で数える」のスライドで、得点を0にし背景を「開始」にするブロック（`緑の旗が押されたとき`）は**ステージ**のコードに作成し、クリックで得点を1増やしてクローンを削除するブロック（`このスプライトが押されたとき`）は**風船（スプライト）**のコードに作成することが、表示を分けて明記されていること。
- **メッセージ（旧13ページ）の実装先の明記**: 「メッセージは『別の場所へ送る合図』」のスライドで、「10点で『クリア』を送る」ブロックは**風船（スプライト）**に実装し、「『クリア』を受け取って背景を変え、すべてを止める」ブロックは**ステージ**に実装することが説明されていること。
- `lesson-plan.md` の授業の流れ（5章の表・5.1の基本制作の進め方）および関連箇所（ねらい・標準完成形・事前準備・つまずき対応）が、「1. 乱数 → 2. クローン → 3. 得点 → 4. メッセージ」の順序、およびステージと風船（スプライト）の役割分担（得点初期化・クリア受信はステージ、クローン・クリック得点加算・クリア送信は風船）と整合していること。
- `edu-scratch:lpl-rulebook` および `edu-scratch:lsd-slidev-rulebook` に準拠し、`coderdojo-lessons` の Prettier・markdownlint の検査を通ること。
- 統合後に orchestrator が Slidev の PNG 書き出し（`npx slidev export ... --format png`）で全ページを確認し、文字・ブロック図・実機確認注記・改造の問いの切れや案内役との重なりがないこと。

## 3. 作業内容

| No  | 作業                                                                                   | 担当 | 状態 | メモ                                        |
| --- | -------------------------------------------------------------------------------------- | ---- | ---- | ------------------------------------------- |
| 1   | `slides.md` をコーディング順に並べ替え、座標とクローンの説明ページを追加する           | exec | open | ブロック図の拡大も含む                      |
| 2   | `slides.md` の得点・メッセージのページでステージと風船の実装先を分けて明記する         | exec | open | -                                           |
| 3   | `lesson-plan.md` の制作順序とステージ・風船の役割分担を `slides.md` に合わせて更新する | exec | open | 5章の表・5.1・6章などを整合させる           |
| 4   | 統合後に PNG 書き出しで全ページの表示（切れ・重なり・ブロックの可読性）を確認する      | orch | open | `npx slidev export --format png` で目視確認 |

## 4. 対応結果

-

## 5. 関連ドキュメント

- [[prj-0001:pjr-nh2z-balloon-slides-follow-plan]]
- [[prj-0001:pjr-xvr2-balloon-lesson-plan-revise]]
- [[edu-scratch:lpl-rulebook]]
- [[edu-scratch:lsd-slidev-rulebook]]
