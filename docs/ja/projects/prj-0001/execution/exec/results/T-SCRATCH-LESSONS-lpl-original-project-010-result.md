---
specdojo:
  id: prj-0001:xer-t-scratch-lessons-lpl-original-project-010
  type: exec-result
  task_id: T-SCRATCH-LESSONS-lpl-original-project-010
  mode: edit
  status: complete
  project_id: prj-0001
  plan_ref: exec/plans/T-SCRATCH-LESSONS-lpl-original-project-010-plan.md
  started_at: "2026-10-25T22:30:05.942Z"
  completed_at: "2026-10-25T22:36:39.988Z"
  agent: flash-high-executor
  execution: agent
  approach: fully-guided
  targets:
    - prj-0001:lpl-original-project
---

# Edit Result

## 1. 実施内容

- コース計画（`cpl-scratch-basic`）に基づき、第5回「オリジナル作品を作ろう！」の指導案（`lpl-original-project`）を新規作成しました。
- BA ロールの視点を踏まえ、45分の授業構成、到達目標、見取り、進度差対応、開始・終了・保存の手順を具体化しました。
- Prettier および Markdownlint による静的検査を実施し、適合を確認しました。

## 2. 変更ファイル

- `coderdojo-lessons:courses/scratch-basic/lessons/050-original-project/lesson-plan.md`: 第5回「オリジナル作品を作ろう！」の指導案を新規作成。ねらい・活動内容・時間配分・見取り・作品保存手順を定義。

## 3. 申し送り

- 児童のChromebook端末上に第1〜4回の作品保存ファイル（.sb3）が正しく残っているか、または共有フォルダ等からの配布手段が必要かの事前確認（授業実施1週間前まで、担当: 授業責任者）
- コースC（AIコース）選択希望者に備えたChromebook内蔵カメラのアクセス許可およびML2Scratch拡張機能の動作状況の事前確認（授業前日、担当: 教材担当者）
- Chromebookにおける保存先フォルダの空き容量と、児童が迷わないファイル名の指定手順の確認（授業実施3日前まで、担当: 教材担当者）
- 適用外の検証: `npm test`（test script is absent or placeholder in package.json）
- 適用外の検証: `npm run validate:schema:file`（no changed `*.yaml` or `*.yml` files）
- 適用外の検証: `specdojo catalog validate`（changes outside docs/ja/projects/）

## 4. 進め方と実践の型の適用

fully-guided アプローチに基づき、指定の rulebook・recipe・sample を参照して `lpl-original-project` の章構成および必須要素を充足させました。BA ロールの関心事である業務価値対応や受入条件の充足を反映し、成果物作成後に Prettier および Markdownlint の検査を通過させています。
