---
specdojo:
  id: prj-0001:pjr-m1c2-scratch-lessons-schedule-expansion
  type: project
  status: draft
  rulebook: specdojo:pjr-rulebook
  part_of:
    - prj-0001:pjr-index
  item_type: todo
  item_status: review
  priority: medium
  owner: BA
  registered_at: "2026-10-25T09:08:33Z"
  due_on: "2026-10-31"
  derived_from:
    - PJR-Y36G
---

# PJR-M1C2 コース計画と指導案からスライドへ進む教材Scheduleを展開する

## 1. 概要

先行項目 [[prj-0001:pjr-y36g-course-plan-catalog-and-metadata|PJR-Y36G]] の完了・レビュー後に着手する。

先行するコース計画の移動・カタログ・メタ情報整備を入力として、Scratch教材を作成するScheduleのstrategyとtrackを生成・検証する。このtodoではagentによる教材作成の実行を開始しない。

教材自身の `specdojo.id` と教材間の `based_on` は、カタログの `local_id` と一致する修飾なしIDを使う。入力となる既存教材は [[cpl-scratch-basic|コース計画]]・[[lpl-balloon-game|第2回指導案]]・[[lsd-balloon-game|第2回スライド]]。CLIのカタログ対象指定用の `prj-0001:<local_id>` と区別し、修飾形を教材自身のIDへ転記しない。11件のカタログ行は修飾なし・修飾付きの両指定から同じ配置へ解決するが、未作成8件の文書IDは教材作成時にも修飾なしで記入する。

## 2. 完了条件

- 先行するkata整備と、コース計画の移動・カタログ・既存教材メタ情報反映がレビュー済みであることを確認してから実行する。コース計画を以後の指導案作成の明示的な入力として解決できるようにする。
- 第2回の指導案・スライドは利用者の指定により完成済みとして新規作業から除外する。コース計画も本todoでは新規作成しない。完了日や完了actorなど未確認の履歴値を推測で付けない。除外理由と対象local_idをstrategyへ明記する。
- 第1・3・4・5回の計8成果物を、各回とも指導案作成→指導案レビュー→スライド作成→スライドレビューの4段階、計16タスクに展開する。スライド作成は同じ回の指導案レビューの完了を待つ。完成済みの第2回のためのタスクは生成しない。
- 利用者指定に従い作成・レビューの全フェーズを0.25日とする。Scheduleタスクの担当ロールもBAで統一する（利用者が明示指定済み）。開始日・期限・カレンダーは未合意の値で埋めない。本todo自体の期限2026-10-31を教材作成Scheduleの期限に転記しない。
- 現行kataと実践の進め方に適合するapproachを指定する。fully-guidedの利用可能性と未整備kataの扱いを確認し、意図しないkata新規作成や不要なbootstrapをScheduleへ混ぜない。コース計画と各成果物の入力・出力・依存がexec planで正しく解決できることを確認する。
- 必要最小限のschedule_path・execution_path等を設定し、sch-strategy-scratch-lessons.yamlを定義してnpx specdojo schedule build --project prj-0001 --track scratch-lessonsでsch-trackを生成する。trackを手で書き換えない。日付未設定で実行準備できない場合は制約と次の確認事項を明記する。
- schema・Schedule依存グラフ・exec validate・整形・lint・差分検査を通し、16タスク・第2回の除外・0.25日・指導案からスライドへの順序を検証する。可能な読み取り検証やdry-runで、宣言済み教材リポジトリと正しいworktree内の成果物パスを参照することも確認する。実際の教材生成や自動実行は開始しない。

## 3. 作業内容

| No  | 作業                                                     | 担当 | 状態 | メモ                                                                                                 |
| --- | -------------------------------------------------------- | ---- | ---- | ---------------------------------------------------------------------------------------------------- |
| 1   | 先行成果と対象local_id・kataの利用条件を確認する         | BA   | done | 先行2件の統合後レビュー、11成果物、kataの参照とgrade未作成状況を確認                                 |
| 2   | 担当ロールと未確定日付の扱いを確認してstrategyを定義する | BA   | done | BA・各0.25日・第2回とコース計画除外・依存を定義。全8成果物（指導案4件・スライド4件）を対象とする     |
| 3   | CLIでScheduleを展開し依存・日数・実行入力を検証する      | BA   | done | specdojo schedule buildで16タスクのsch-trackを生成。exec validate・refreshとplan入出力解決を検証済み |

## 4. 対応結果

### 4.1. 先行レビューと今回の範囲

- [[prj-0001:pjr-vd0x-teaching-artifact-metadata-kata|PJR-VD0X]] の「統合後レビュー（orchestrator）」で7 kataの統合成果 `d5200e9` が完了条件を満たすことを確認した。[[prj-0001:pjr-y36g-course-plan-catalog-and-metadata|PJR-Y36G]] の同節で、project `628d442`・教材 `684351a` の移動・カタログ・メタ情報のレビューと、第2回スライド全19ページのPNG出力、17〜19ページの表示維持まで確認済みである。個票の処理状態ではなく、この明示的なレビュー記録を着手根拠とした。
- [[prj-0001:dct-scratch-lessons|成果物カタログ]] は11成果物を宣言し、コース計画と完成済み第2回の3文書が実在する。残る8教材本文の新規作成やagent実行は開始していない。登録簿一覧・個票frontmatterのステータス・イベント・resultは変更していない。

### 4.2. strategy定義とtrack生成

- [[prj-0001:sch-strategy-scratch-lessons|Scratch教材 作成・レビュー戦略]] を `status: draft` で定義した。第1・3・4・5回の8成果物だけを `scope.catalogs[].local_ids` で選択し、`approach_rules` に `author-deliverable`、`owner_rules` にBA、作成・レビューの両フェーズに各0.25日を指定した。
- コース計画 `cpl-scratch-basic` は既存の入力として新規作業から除外する。第2回 `lpl-balloon-game` / `lsd-balloon-game` は利用者の完成済み指定に従い除外し、タスクも完了イベントも作らない。未確認の `completed_on`・`by` を要求する `initial_state` は使っていない。
- 各回の指導案→コース計画、スライド→同じ回の指導案というカタログ依存を生成器へ渡す。同じ回の指導案レビューがスライド作成の直前依存となる。回をまたぐ不要な直列化、ゲート、kata作成、bootstrap、確定フェーズを追加していない。
- 親runnerが `.specdojo/specdojo.config.json` へ `schedule_path: schedule` と `execution_path: execution` を反映した（設定差分案 `schedule/scratch-lessons-config-proposal.patch` は適用記録として保持）。
- `npx specdojo schedule build --project prj-0001 --track scratch-lessons --force` により [[prj-0001:sch-track-scratch-lessons|スケジュールトラック（scratch-lessons）]]（計16タスク）を正常に生成した。trackの手編集は行っていない。
- 開始日・期限・カレンダーは未合意なので追加していない。個票の期限2026-10-31も転記していない。日付・稼働条件は教材作成開始前に利用者へ確認する。

| 回  | 対象の `local_id`                               | 生成したタスク順序                                                          |
| --- | ----------------------------------------------- | --------------------------------------------------------------------------- |
| 1   | `lpl-chase-game` / `lsd-chase-game`             | 指導案010 → 指導案020 → スライド010 → スライド020（作成／レビュー各0.25日） |
| 3   | `lpl-music-art` / `lsd-music-art`               | 指導案010 → 指導案020 → スライド010 → スライド020（作成／レビュー各0.25日） |
| 4   | `lpl-ai-rps` / `lsd-ai-rps`                     | 指導案010 → 指導案020 → スライド010 → スライド020（作成／レビュー各0.25日） |
| 5   | `lpl-original-project` / `lsd-original-project` | 指導案010 → 指導案020 → スライド010 → スライド020（作成／レビュー各0.25日） |

### 4.3. 教材作成実行に向けた申し送り（後続確認事項）

1. 7 kata（`edu-scratch:lpl-rulebook` / `lpl-recipe` / `lpl-sample` / `lpl-template` / `lsd-slidev-rulebook` / `lsd-slidev-sample` / `lsd-slidev-template`）の保存済みgradeは未作成である。スライドrecipeの要否判断を含め、教材作成タスクの実行前に正規の評価経路でgradeを用意して確認する。
2. 開始日・期限・稼働カレンダーは未合意のため設定していない。教材作成スケジュールを実行に移す前に、利用者と合意して確定する。
3. コース計画 `prj-0001:cpl-scratch-basic` はカタログの実パス解決によりplanの入力として正常に参照できることを確認した。教材側の各指導案IDは作成後に同様の参照解決を確認する。
4. 本タスクでは実際の教材本文の作成・agent実行は開始していない。

### 4.4. 検証結果

- `npx specdojo schedule build --project prj-0001 --track scratch-lessons --force`：終了コード0。16タスク・8成果物・第2回とコース計画の除外・全担当BA・各0.25日・各回の4段階の直接依存・循環と欠落依存なし・履歴と日付なしを持つ `sch-track-scratch-lessons.yaml` を正常に生成した。
- `npx specdojo exec validate --project prj-0001`：終了コード0。スケジュール検証に合格（`stats: events=0, event_files=0, schedule_ids=16, schedule_files=1`）。
- `npx specdojo exec refresh --project prj-0001`：終了コード0。16タスクの `ready.json`、CPM、ガントチャート、クリティカルパスの派生成果物を正常に生成。初期readyタスク4件（各回の指導案作成タスク010）を確認した。
- `npx specdojo exec plan` によるplan生成検証：各回の指導案作成（010）およびスライド作成（010）のplan生成を検証し、指導案の入力がコース計画 `[[cpl-scratch-basic]]`、スライドの入力が同じ回の指導案ID、出力パスが `../coderdojo-lessons/courses/scratch-basic/lessons/<回>/` 配下の実パスへ正しく解決されることを確認した。
- `npx specdojo catalog validate --project prj-0001`：成功。未作成8教材の既存警告がある。コース計画と完成済み第2回の宣言は維持した。
- 変更Markdown/YAMLのPrettier整形・確認、個票のmarkdownlint、hookのSlidev設定検査、両リポジトリの `git diff --check` を実施した。教材側の変更はない。
- `npm run validate:schema:file` はscriptなしのため非適用。`npm run typecheck`・`npm run test:unit` はscriptがなく、対象となるソース変更もない。`npm test` はnpm初期生成の仮scriptのため非適用。

## 5. 関連ドキュメント

- [[prj-0001:pjr-y36g-course-plan-catalog-and-metadata]]：先行作業
- [[cpl-scratch-basic|Scratch基礎 コース計画]]：`coderdojo-lessons:courses/scratch-basic/course-plan.md`
- [[prj-0001:sch-strategy-scratch-lessons|Scratch教材 作成・レビュー戦略]]
- [[prj-0001:sch-track-scratch-lessons|スケジュールトラック（scratch-lessons）]]
- `docs/ja/projects/prj-0001/010-deliverables-catalog/dct-scratch-lessons.yaml`：成果物カタログ
