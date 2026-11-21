---
specdojo:
  id: prj-0001:xep-pjr-af5n-20261121t063938z-ba6a6d6e
  type: exec-plan
  rulebook: none
  task_id: PJR-AF5N
  name: "第2回の背景の用意をメッセージの段階へ移し、背景の追加方法と「すべてを止める」の色を直す"
  mode: edit
  status: ready
  project_id: prj-0001
  origin: register
  owner: BA
---

# Edit Plan: PJR-AF5N 第2回の背景の用意をメッセージの段階へ移し、背景の追加方法と「すべてを止める」の色を直す

## 1. このタスクで行うこと

プロジェクト登録簿の項目 PJR-AF5N「第2回の背景の用意をメッセージの段階へ移し、背景の追加方法と「すべてを止める」の色を直す」に対応する。

020-balloon-game のスライドと指導案で、背景「開始」「クリア」の追加と「背景を [開始] にする」を得点の段階（14・15P）からメッセージの段階の最初へ移し、背景の追加方法を文章で解説する。18P の「すべてを止める」を制御の色で表示されるように直し、背景に「クリア」の文字を描く手順を標準完成の後・発展ミッションの前に余裕があれば行う内容として加える

## 2. 対象項目

- `id`: PJR-AF5N
- `type`: todo
- `priority`: medium
- `owner`: BA
- `due`: 2026-11-30
- `個票`: `docs/ja/projects/prj-0001/controls/project-register/pjr-af5n-balloon-backdrop-order.md`
- `result`: `docs/ja/projects/prj-0001/execution/runs/register/PJR-AF5N/pjr-af5n-20261121T063938Z-ba6a6d6e/result.md`

## 個票の入力（前提）

次の入力を作業の前提として参照する。完了条件は別節に従う。

- 対象は coderdojo-lessons の courses/scratch-basic/lessons/020-balloon-game の slides.md と lesson-plan.md
- 15P のステージのコードにある「背景を [開始 v] にする」と、14P の背景「開始」の作成は、得点の段階で背景を扱うと時間がかかるため、メッセージの段階（4. 10点でクリアにしよう）の最初へ移す。背景「開始」「クリア」の追加をそこでまとめて行い、「背景を [開始 v] にする」もそのときに旗のスクリプトへ足す
- 背景の追加方法の解説を加える。解説は文章だけとし、スクリーンショットは使わない
- 18P の「すべてを止める」のブロックが制御の色で表示されていない。scratchblocks の日本語辞書では `CONTROL_STOP` が " %1" で、ブロック全体がドロップダウンのため、角かっこなしの記法では認識されていない見込み
- 背景に「クリア」の文字を描く手順は、途中で行うとつまずく児童が多いため、時間に余裕があれば行う内容として「ここまでできたら標準完成！」の後・発展ミッションの前に置く（A案）
- 指導案もスライドに合わせて直す（基本制作3・4、時間配分、支援、背景を描くことは求めないとする記述など）
- 第1回（010-chase-game）のスライドにも同じ記法の「すべてを止める」が2か所あるが、この項目の範囲外とする

## 3. 進め方

1. 個票（存在する場合）を読み、目的・完了条件・制約を把握する。登録簿の一覧は大きいため読まない。
2. 個票に完了条件がある場合はそれを作業の基準にする。無い場合はタイトルと説明から完了条件の仮説を立て、記録する。pipeline では個票の対応結果と executor の報告の `handoff` に書き、result を直接書ける実行形式では result に明記する。
3. 関連する成果物・設計書・実装を確認し、対象ファイルを特定して変更する。
4. 個票が存在する場合は、個票の作業内容・対応結果セクションを実施内容で更新する。作業内容の表は、各行の状態とメモを実績に合わせる。終えた行は状態を `done` にし、`_TODO_` を残さない。executor が実行できない行（grade の起動など）は状態を `open` のまま残し、その理由をメモに書く。理由のない `done` 以外の行や `_TODO_` の残る行があると、post-review と `register close` は完了にしない。
5. 個票の完了条件が result への記載を求める場合、pipeline の executor は個票の対応結果と報告の `handoff` の両方に書く。reporter と runner が result の申し送りへ反映する。executor は result を直接編集しない。
6. 判断に迷う箇所は _TODO_ / _ASSUMPTION_ で残し、根拠と次のアクションを記録する。pipeline では個票の対応結果と報告の `handoff` に書き、result を直接書ける実行形式では result に書く。

### grade result から展開された finding

- なし

plan に展開された finding は、message と同じ viewpoint ID の判定根拠に照らして解消する。未解消、根拠不足、または判断不能の場合は、理由と次のアクションを記録する。pipeline では個票の対応結果と報告の `handoff` に書き、result を直接書ける実行形式では result に書く。grade result サイドカーは再評価時に更新されるため、本タスクでは直接編集しない。

## 4. 完了手順

1. 「進め方」に従って対応を完了する。
2. 共通規約に従って、必要な整形・静的検査を実行する。
3. result に実施内容・変更ファイル・申し送りを記入する。pipeline では executor は実施内容・変更ファイル・検証結果を報告し、申し送りを `handoff` に記載する。reporter と runner が result を記入する。これはタスク完了に必須であり、_TODO_ を残したまま終了しない（詳細は共通規約を参照）。
4. 登録簿（`pjr-index.md`）の行と個票のステータス項目は変更しない。状態遷移（review / close など）は runner と人間が行う。

## 5. 異常終了の条件

- 前提不足・対象ファイル不明・静的検査未解消の場合は異常終了する（終了コード 1）。
- 標準エラー出力に理由を出力する（例: `blocked: <reason>; need=<next action>; ref=<path>`）。
- agent 自身は登録簿の状態を変更せず、終了コードと標準エラー出力で runner に結果を返す。

## 再開の指示（2026-11-21T07:14:24.505Z）

利用者が再開の前に足した指示である。これまでの申し送りとあわせて、この指示に従って作業を続ける。

- 前の executor（sonnet-executor）が coderdojo-lessons の slides.md と lesson-plan.md を編集済みで、worktree に未 commit の変更として残っている。この編集を土台にし、作り直さない。内容を完了条件に照らして確かめ、足りない点だけを直す。そのうえで、Prettier（slides.md は slidev parser）・markdownlint・npx slidev build を通し、個票の作業内容の状態と対応結果を記録する。

`共通規約 sha256:7df19548152f67a1d702788c5ecb9f16962afb81e96be39b8c7eca27055e1ede` `docs/ja/projects/prj-0001/execution/conventions/7df19548152f67a1d702788c5ecb9f16962afb81e96be39b8c7eca27055e1ede.txt`
