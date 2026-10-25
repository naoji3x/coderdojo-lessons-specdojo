---
specdojo:
  id: prj-0001:pjr-m1c2-scratch-lessons-schedule-expansion
  type: project
  status: draft
  rulebook: specdojo:pjr-rulebook
  part_of:
    - prj-0001:pjr-index
  item_type: todo
  item_status: waiting
  priority: medium
  owner: BA
  registered_at: "2026-10-25T09:08:33Z"
  due_on: "2026-10-31"
  block_reason: "executor reported incomplete: strategy設計案・設定差分案・個票を更新。16タスクのschema・依存・BA・各0.25日をメモリ上で検証した。保護設定とkataのgrade不足により実行用trackは未生成。教材生成・agent実行・result編集は行っていない。"
  derived_from:
    - PJR-Y36G
---

# PJR-M1C2 コース計画と指導案からスライドへ進む教材Scheduleを展開する

## 1. 概要

先行項目 [[prj-0001:pjr-y36g-course-plan-catalog-and-metadata|PJR-Y36G]] の完了・レビュー後に着手する。

先行するコース計画の移動・カタログ・メタ情報整備を入力として、Scratch教材を作成するScheduleのstrategyとtrackを生成・検証する。このtodoではagentによる教材作成の実行を開始しない。

## 2. 完了条件

- 先行するkata整備と、コース計画の移動・カタログ・既存教材メタ情報反映がレビュー済みであることを確認してから実行する。コース計画を以後の指導案作成の明示的な入力として解決できるようにする。
- 第2回の指導案・スライドは利用者の指定により完成済みとして新規作業から除外する。コース計画も本todoでは新規作成しない。完了日や完了actorなど未確認の履歴値を推測で付けない。除外理由と対象local_idをstrategyへ明記する。
- 第1・3・4・5回の計8成果物を、各回とも指導案作成→指導案レビュー→スライド作成→スライドレビューの4段階、計16タスクに展開する。スライド作成は同じ回の指導案レビューの完了を待つ。完成済みの第2回のためのタスクは生成しない。
- 利用者指定に従い作成・レビューの全フェーズを0.25日とする。Scheduleタスクの担当ロールもBAで統一する（利用者が明示指定済み）。開始日・期限・カレンダーは未合意の値で埋めない。本todo自体の期限2026-10-31を教材作成Scheduleの期限に転記しない。
- 現行kataと実践の進め方に適合するapproachを指定する。fully-guidedの利用可能性と未整備kataの扱いを確認し、意図しないkata新規作成や不要なbootstrapをScheduleへ混ぜない。コース計画と各成果物の入力・出力・依存がexec planで正しく解決できることを確認する。
- 必要最小限のschedule_path・execution_path等を設定し、sch-strategy-scratch-lessons.yamlを定義してnpx specdojo schedule build --project prj-0001 --track scratch-lessonsでsch-trackを生成する。trackを手で書き換えない。日付未設定で実行準備できない場合は制約と次の確認事項を明記する。
- schema・Schedule依存グラフ・exec validate・整形・lint・差分検査を通し、16タスク・第2回の除外・0.25日・指導案からスライドへの順序を検証する。可能な読み取り検証やdry-runで、宣言済み教材リポジトリと正しいworktree内の成果物パスを参照することも確認する。実際の教材生成や自動実行は開始しない。

## 3. 作業内容

| No  | 作業                                                     | 担当 | 状態        | メモ                                                                                      |
| --- | -------------------------------------------------------- | ---- | ----------- | ----------------------------------------------------------------------------------------- |
| 1   | 先行成果と対象local_id・kataの利用条件を確認する         | BA   | done        | 先行2件の統合後レビュー、11成果物、kataの参照とgrade不足を確認                            |
| 2   | 担当ロールと未確定日付の扱いを確認してstrategyを定義する | BA   | in-progress | BA・0.25日・除外対象・依存をdraftへ定義。grade不足のためapproachは未確定                  |
| 3   | CLIでScheduleを展開し依存・日数・実行入力を検証する      | BA   | blocked     | メモリ上の16タスク検証は成功。保護設定の反映とapproach確定後のCLI生成・実行入力検証が残る |

## 4. 対応結果

### 4.1. 先行レビューと今回の範囲

- [[prj-0001:pjr-vd0x-teaching-artifact-metadata-kata|PJR-VD0X]] の「統合後レビュー（orchestrator）」で7 kataの統合成果 `d5200e9` が完了条件を満たすことを確認した。[[prj-0001:pjr-y36g-course-plan-catalog-and-metadata|PJR-Y36G]] の同節で、project `628d442`・教材 `684351a` の移動・カタログ・メタ情報のレビューと、第2回スライド全19ページのPNG出力、17〜19ページの表示維持まで確認済みである。個票の処理状態ではなく、この明示的なレビュー記録を着手根拠とした。
- [[prj-0001:dct-scratch-lessons|成果物カタログ]] は11成果物を宣言し、コース計画と完成済み第2回の3文書が実在する。残る8教材本文の新規作成やagent実行は開始していない。登録簿一覧・個票frontmatterのステータス・イベント・resultは変更していない。

### 4.2. strategy設計案と設定差分案

- [[prj-0001:sch-strategy-scratch-lessons|Scratch教材 作成・レビュー戦略]] を `status: draft` で追加した。8成果物だけを `scope.catalogs[].local_ids` で選択し、`approach_rules` に `author-deliverable`、`owner_rules` にBA、作成・レビューの両フェーズに各0.25日を指定した。`approach` は4.3の前提不足を解消するまで未指定とし、実行禁止の設計案であることをフェーズ説明と注記に明記した。実行用trackは未生成である。
- コース計画 `cpl-scratch-basic` は既存の入力として新規作業から除外する。第2回 `lpl-balloon-game` / `lsd-balloon-game` は利用者の完成済み指定に従い除外し、タスクも完了イベントも作らない。未確認の `completed_on`・`by` を要求する `initial_state` は使っていない。
- 各回の指導案→コース計画、スライド→同じ回の指導案というカタログ依存を生成器へ渡す。同じ回の指導案レビューがスライド作成の直前依存となる。回をまたぐ不要な直列化、ゲート、kata作成、bootstrap、確定フェーズを追加していない。

| 回  | 対象の `local_id`                               | 検証した生成順序                                                            |
| --- | ----------------------------------------------- | --------------------------------------------------------------------------- |
| 1   | `lpl-chase-game` / `lsd-chase-game`             | 指導案010 → 指導案020 → スライド010 → スライド020（作成／レビュー各0.25日） |
| 3   | `lpl-music-art` / `lsd-music-art`               | 指導案010 → 指導案020 → スライド010 → スライド020（作成／レビュー各0.25日） |
| 4   | `lpl-ai-rps` / `lsd-ai-rps`                     | 指導案010 → 指導案020 → スライド010 → スライド020（作成／レビュー各0.25日） |
| 5   | `lpl-original-project` / `lsd-original-project` | 指導案010 → 指導案020 → スライド010 → スライド020（作成／レビュー各0.25日） |

- 開始日・期限・カレンダーは未合意なので追加していない。個票の期限2026-10-31も転記していない。日付未設定だけでCLIが実行を禁止するとは扱わず、日付・稼働条件は教材作成開始前に利用者へ確認する。
- `schedule/scratch-lessons-config-proposal.patch` に `.specdojo/specdojo.config.json` の最小差分案を用意した。対象projectへ `schedule_path: schedule` と `execution_path: execution` の2項目だけを加える。既存の `base_path` により現在のSchedule／実行ディレクトリを指す。後者は既定値と同じだが実行出力先を明示する。runnerの保護設定管理に従い、設定本体は編集していない。

### 4.3. 未完了の理由と再開条件

1. `npx specdojo schedule build --project prj-0001 --track scratch-lessons --dry-run` は `schedule_path not set` で終了コード1となった。pipelineはリポジトリ設定を親runnerの管理対象としており、導入済み `dist/exec/agent-protected-config.js` も `.specdojo/` を保護する。runnerまたは人間が上記patchを確認・反映した後に再開する。保護設定を一時変更してCLIを通すこともしていない。
2. 導入済みの [[specdojo:ryu-guide|実践の進め方ガイド]]・[[specdojo:schedule-design-guide|Schedule設計ガイド]] と `dist/schedule/approach.js` を照合した。指導案のrulebook・recipe・sample・templateはすべて実在するが、現時点で保存済みgradeがない。スライドはrulebook・sample・templateが実在し、recipeが `undecided` で、実在kataのgradeもない。`collectApproachFacts` と `deriveApproaches` で選択8成果物すべてが「grade がない Kata」によりapproach導出不能となることを確認した。先行レビューをgradeの代用にせず、`fully-guided`・`recipe-guided`・`freeform` のいずれも推測で割り当てていない。
3. runnerまたは人間は7 kata（`edu-scratch:lpl-rulebook` / `lpl-recipe` / `lpl-sample` / `lpl-template` / `lsd-slidev-rulebook` / `lsd-slidev-sample` / `lsd-slidev-template`）のgradeを正規の評価経路で用意する。スライドrecipeの要否も判断する。`not-needed` と判断すればrulebookの宣言を別途整える。必要なら整備を別作業として扱い、本trackへkata新規作成を混ぜない。その後intentからapproachを導出し、利用者指定の2フェーズ・BA・0.25日を維持してstrategyを確定する。標準profileによる未合意のdurationや追加フェーズをそのまま採用しない。
4. 現在の `.specdojo/doc-index.json` には `prj-0001:cpl-scratch-basic` がない。カタログの実パス解決は成功するが、planの `depends_on` はID参照として出力され、agentへ渡す時の解決はdoc-indexを使う。runner側で教材側IDを含む参照解決を確認する必要がある。executorは `specdojo index build` を実行せず、indexにも書き込んでいない。未作成の指導案IDは作成後に同様の確認が必要である。
5. 設定とapproachを確定した後に指定の `npx specdojo schedule build --project prj-0001 --track scratch-lessons` でtrackを生成する。`exec validate`・`exec refresh` と16タスクのplan／プロンプト展開検証を実施し、教材側worktree内の入力・出力が解決することを確認する。今回のメモリ上の検証を、実行用track・planの完成とは扱わない。本タスクは未完了であり、登録簿の状態遷移はrunnerと人間へ委ねる。

### 4.4. 検証結果

- `node tmp/pjr-m1c2/verify.mjs`：成功。導入済みAjv 2020とschemaを使い、strategy・設定差分適用後のメモリ上のconfig・CLIと同じ `buildScheduleTrack` / `createScheduleTrackDocument` が返すtrackを検証した。16タスク・8成果物・第2回とコース計画の除外・全担当BA・各0.25日・各回の4段階の直接依存・循環と欠落依存なし・履歴と日付なしを確認した。trackはメモリ上だけで生成し、ファイルへ書き出していない。一時スクリプトは確認後に削除した。
- 同検証でカタログのplan生成用リゾルバーを使い、全8出力が `../coderdojo-lessons/courses/scratch-basic/lessons/` 配下へ解決すること、指導案の入力がコース計画、スライドの入力が同じ回の指導案IDとなることを確認した。`resolveRepoRoot` で宣言済み `coderdojo-lessons` が今回の兄弟worktreeへ解決すること、コース計画が実在し8出力は未作成であることも確認した。agentへ渡す最終的なID展開は4.3のとおり未検証である。
- `git apply --check docs/ja/projects/prj-0001/schedule/scratch-lessons-config-proposal.patch`：成功。差分案は現行configへ適用可能であり、実際には適用していない。
- `npx specdojo catalog validate --project prj-0001`：成功。未作成8教材の既存警告がある。コース計画と完成済み第2回の宣言は維持した。
- `npx specdojo exec validate --project prj-0001` と `npx specdojo exec refresh --project prj-0001`：終了コード0。ただしScheduleノードは0件で、未生成trackとイベントディレクトリなしの警告がある。16タスクの実行用Scheduleが検証済みとは扱わない。refreshは除外対象の `execution/generated/` だけを生成し、claimや教材生成は行っていない。
- 変更Markdown/YAMLのPrettier整形・確認、個票のmarkdownlint、hookのSlidev設定検査、両リポジトリの `git diff --check` を実施した。教材側の変更はない。
- `npm run validate:schema:file` はscriptなしのため非適用。`npm run typecheck`・`npm run test:unit` はscriptがなく、対象となるソース変更もない。`npm test` はnpm初期生成の仮scriptのため非適用。schemaは上記の直接検証で確認した。

## 5. 関連ドキュメント

- [[prj-0001:pjr-y36g-course-plan-catalog-and-metadata]]：先行作業
- [[prj-0001:cpl-scratch-basic|Scratch基礎 コース計画]]：`coderdojo-lessons:courses/scratch-basic/course-plan.md`
- `docs/ja/projects/prj-0001/010-deliverables-catalog/dct-scratch-lessons.yaml`：成果物カタログ
