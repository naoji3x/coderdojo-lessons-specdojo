---
specdojo:
  id: prj-0001:pjr-8xs6-balloon-slides-and-plan-coding-order
  type: project
  status: draft
  rulebook: specdojo:pjr-rulebook
  part_of:
    - prj-0001:pjr-index
  item_type: todo
  item_status: waiting
  priority: medium
  owner: BA
  registered_at: "2026-10-25T06:58:36Z"
  due_on: "2026-10-31"
  block_reason: 'Error: {   "name": "UnknownError",   "data": {     "message": "Unexpected server error. Check server logs for details.",     "ref": "err_02735082"   } }'
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
- 再開時の検査対応：`slides.md` 先頭の既存の `markdownlint-disable MD003 MD022` に `MD025` を追加し、SlidevのページごとのH1をこのファイルだけで許可する。理由を近傍のHTMLコメントに記載する。教材全体のlint設定・共有設定は変更しない。この対象ファイル内の注釈変更は今回の作業範囲に含む。変更後にスライドと指導案のlintを再実行する。
- 統合後に orchestrator が Slidev の PNG 書き出し（`npx slidev export ... --format png`）で全ページを確認し、文字・ブロック図・実機確認注記・改造の問いの切れや案内役との重なりがないこと。

## 3. 作業内容

| No  | 作業                                                                                   | 担当 | 状態 | メモ                                        |
| --- | -------------------------------------------------------------------------------------- | ---- | ---- | ------------------------------------------- |
| 1   | `slides.md` をコーディング順に並べ替え、座標とクローンの説明ページを追加する           | exec | done | ブロック図の拡大も含む                      |
| 2   | `slides.md` の得点・メッセージのページでステージと風船の実装先を分けて明記する         | exec | done | -                                           |
| 3   | `lesson-plan.md` の制作順序とステージ・風船の役割分担を `slides.md` に合わせて更新する | exec | done | 5章の表・5.1・6章などを整合させる           |
| 4   | 統合後に PNG 書き出しで全ページの表示（切れ・重なり・ブロックの可読性）を確認する      | orch | open | `npx slidev export --format png` で目視確認 |

## 4. 対応結果

- executor による成果物編集は完了したが、既存の Markdownlint 設定との不整合が残るため、この実行の完了判定は `incomplete` とする。登録簿・個票のステータス項目、result、設定ファイルは変更していない。
- `coderdojo-lessons:courses/scratch-basic/lessons/020-balloon-game/slides.md`：全17ページから19ページに変更。「今日使う4つの考え方」を乱数・クローン・得点（変数）・メッセージに統一し、乱数の直後（8ページ）にx・y座標と今回の範囲（x: -200〜200、y: -140〜140）の補足を追加した。ステージの全体範囲と中央も図示し、風船の大きさに合わせた実機確認を促した。
- 同スライドのクローン（10ページ）は元の風船とクローンのブロックを左右に分け、両方を `:scale="0.85"` に拡大した（変更前は1図で `:scale="0.5"`）。乱数で場所を決めるブロックを含め、旗の下からクローンの開始時へ移す手順も示した。直後（11ページ）に、元は旗で隠れて繰り返し作り、クローンは乱数の場所へ表示して3秒後に消える役割を説明した。
- 同スライドの得点（13ページ）はステージの初期化と風船のクリック処理を別々のブロック図にした。メッセージ（15ページ）は風船の送信とステージの受信を明記し、クリック処理全体を示して加算→10点判定・送信→クローン削除の順を確認できるようにした。得点の共有範囲、旗での再開、各段階の改造の問いと実機確認注記を残した。
- `coderdojo-lessons:courses/scratch-basic/lessons/020-balloon-game/lesson-plan.md`：ねらい、使用機能、標準完成形、事前準備、5章の表、5.1、見取り、つまずき対応、まとめを乱数→クローン→得点→メッセージの順と実装先に合わせた。クローン段階では時間後の削除、得点段階ではクリック加算・削除を作るよう区別した。基本制作は5分・10分・5分・5分とし、授業全体の45分を維持した。時間不足時に最低完成形へ戻る支援も補足した。
- 検証：教材2ファイルの Prettier 整形、Slidev の本番ビルド、指導案の Markdownlint、両リポジトリの差分検査を実施した。Markdownlint は教材にローカル依存がないため、project に導入済みの CLI を教材ルートから教材の `.markdownlint.yaml` 指定で実行した。成果物カタログ検査は成功し、対象外の未作成教材8件の既存警告が出た。
- 未解消の静的検査：スライド全体の Markdownlint は `MD025`（1文書に複数のH1）19件で失敗した。同じ設定で変更前の `HEAD` を標準入力から検査しても17件発生し、それ以外の規則違反はない。Slidev の各ページにH1を置く構造と教材の `.markdownlint.yaml` の `MD025` が衝突している。次のアクションは、runner／人間が教材設定についてスライド限定の `MD025: false` などの方針を決め、必要な設定変更後にスライド・指導案の lint を再実行すること。変更対象は教材2ファイルに限定され、設定変更は親 runner の担当なので、この実行では設定・禁止注釈を追加していない。
- 表示確認の申し送り：`coderdojo-lessons` で `npx slidev export courses/scratch-basic/lessons/020-balloon-game/slides.md --format png --output courses/scratch-basic/lessons/020-balloon-game/dist/pjr-8xs6-review` を試したが、sandbox 内では `uv_interface_addresses` のエラーで起動できず、PNGは未確認。統合後に orchestrator が同コマンドで全19ページを書き出し、特に変更した1・5・7・8・10・11・13・15・19ページについて、本文・ブロック図・実機確認注記・改造の問いの切れと案内役との重なり、クローン図の実際の可読性を確認する。作業4はその確認まで open のままとする。

## 5. 関連ドキュメント

- [[prj-0001:pjr-nh2z-balloon-slides-follow-plan]]
- [[prj-0001:pjr-xvr2-balloon-lesson-plan-revise]]
- [[edu-scratch:lpl-rulebook]]
- [[edu-scratch:lsd-slidev-rulebook]]
