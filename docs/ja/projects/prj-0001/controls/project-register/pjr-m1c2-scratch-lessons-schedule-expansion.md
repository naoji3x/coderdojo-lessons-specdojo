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

| No  | 作業                                                     | 担当 | 状態 | メモ |
| --- | -------------------------------------------------------- | ---- | ---- | ---- |
| 1   | 先行成果と対象local_id・kataの利用条件を確認する         | BA   | open | -    |
| 2   | 担当ロールと未確定日付の扱いを確認してstrategyを定義する | BA   | open | -    |
| 3   | CLIでScheduleを展開し依存・日数・実行入力を検証する      | BA   | open | -    |

## 4. 対応結果

-

## 5. 関連ドキュメント

- [[prj-0001:pjr-y36g-course-plan-catalog-and-metadata]]：先行作業
- [[cpl-scratch-basic|Scratch基礎 コース計画]]：`coderdojo-lessons:courses/scratch-basic/course-plan.md`
- `docs/ja/projects/prj-0001/010-deliverables-catalog/dct-scratch-lessons.yaml`：成果物カタログ
