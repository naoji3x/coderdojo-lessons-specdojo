---
specdojo:
  id: prj-0001:xer-t-scratch-lessons-lpl-ai-rps-010
  type: exec-result
  task_id: T-SCRATCH-LESSONS-lpl-ai-rps-010
  mode: edit
  status: complete
  project_id: prj-0001
  plan_ref: exec/plans/T-SCRATCH-LESSONS-lpl-ai-rps-010-plan.md
  started_at: "2026-10-25T22:11:52.535Z"
  completed_at: "2026-10-25T22:20:16.703Z"
  agent: flash-high-executor
  execution: agent
  approach: fully-guided
  targets:
    - prj-0001:lpl-ai-rps
---

# Edit Result

## 1. 実施内容

- 第4回 指導案（`lpl-ai-rps`）の対象成果物として `coderdojo-lessons:courses/scratch-basic/lessons/040-ai-rps/lesson-plan.md` を新規作成した。
- コース計画（`cpl-scratch-basic`）の第4回「AIにじゃんけんを覚えさせよう！」に対応し、45分の授業構成、ねらい、最低／標準／発展の完成形、活動、時間配分、見取り、進度差対応、保存・再開手順を具体化した。
- Prettier および Markdownlint の静的検査を実行し、いずれも合格した。

## 2. 変更ファイル

- `coderdojo-lessons:courses/scratch-basic/lessons/040-ai-rps/lesson-plan.md`: 第4回「AIにじゃんけんを覚えさせよう！」の指導案を新規作成。授業の進め方、到達条件（最低／標準／発展）、45分の活動構成・時間配分、見取り、進度差対応、および Stretch3 でのモデル学習・保存手順を定義した。

## 3. 申し送り

- 学校管理者に対するChromebookカメラ利用制限およびStretch3アクセス許可の事前確認（授業実施2週間前まで）
- Stretch3で保存した.sb3再読み込み時のML2Scratch学習モデル保持状況の実機事前検証
- 適用外の検証: `npm test`（test script is absent or placeholder in package.json）
- 適用外の検証: `npm run validate:schema:file`（no changed `*.yaml` or `*.yml` files）
- 適用外の検証: `specdojo catalog validate`（changes outside docs/ja/projects/）

## 4. 進め方と実践の型の適用

fully-guided アプローチに従い、指定された rulebook（`docs/ja/specdojo/rulebooks/edu-scratch/lpl-rulebook.md`）、recipe（`docs/ja/specdojo/recipes/edu-scratch/lpl-recipe.md`）、および sample（`docs/ja/specdojo/samples/edu-scratch/lpl-sample.md`）を参照して構成と必須要素を確認した。先行成果物 `cpl-scratch-basic` の決定事項を基礎とし、BA ロールのレビュー観点に沿って受入条件と利用場面を整理した。
