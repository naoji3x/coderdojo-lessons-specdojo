---
specdojo:
  id: prj-0001:pjr-95rs-revise-lesson-designs
  type: project
  status: draft
  rulebook: specdojo:pjr-rulebook
  part_of:
    - prj-0001:pjr-index
  item_type: todo
  item_status: waiting
  priority: medium
  owner: BA
  registered_at: "2026-10-20T12:59:14Z"
  due_on: "2026-10-31"
  block_reason: "integrate failed: project: Result Markdown notation violation before commit: docs/ja/projects/prj-0001/execution/exec/results/pjr-95rs-20261020T230634Z-d008-result.md:25:81 error MD013/line-length Lin…"
  derived_from:
    - PJR-W9MV
    - PJR-M5SC
---

# PJR-95RS 第2回の授業を新しいディレクトリ体系で試作する

## 1. 概要

PJR-M5SCで決めた活動ディレクトリの構成とSlidevで、第2回（風船割りゲーム）の指導案とスライドを試作し、残りの回の書き方と移行の判断材料にする。

対象は宣言済みの `coderdojo-lessons` リポジトリ。授業内容の正本は `docs/course-design/course-plan.md` の第2回の記述とする（変更案の `local/revised-course-design.md` は Git 管理外のため参照しない）。配置と画像参照の規約は [[prj-0001:pjr-m5sc-lesson-content-structure]] の 3.2・3.3 に従い、コース ID は `scratch-basic` とする。

course-plan.md に書かれていない授業の事実（使用するブロックの正確な名称・配置、実施日、参加人数など）を推測で確定させない。確認が必要な事項は対応結果に記録する。

## 2. 完了条件

- `coderdojo-lessons` の `courses/scratch-basic/lessons/020-balloon-game/` に `lesson-plan.md` と `slides.md` がある。
- `lesson-plan.md` は course-plan.md の第2回の記述を正本とし、次の内容を含む。
  - 授業の概要（対象・時間・テーマ・ねらい・使用する文法と機能）
  - 授業の位置づけ（第1回・第3回とのつながり）
  - 最低・標準・発展の完成形
  - 事前準備（教師用の完成見本、開始用プロジェクト）
  - 45分の流れ（導入5分・基本制作25分・発展10分・まとめ5分）
  - 声かけの例とつまずきへの対応
- 見出しの構成は既存の各回ファイル（`docs/course-design/020-animation.md` など）を参考にする。棒人間・コスチューム編集の内容は持ち込まない。
- `slides.md` は Slidev の書式で、授業の流れに沿った投影スライドになっている。画像の参照は PJR-M5SC の 3.3 に従う。
- `npx slidev build` でビルドできる。生成された `dist/` は commit しない。
- この回で必要な成果物（開始用・完成見本の `.sb3`、配布物、素材）の一覧と、それぞれを Git で管理するかの案を対応結果に記録する（PJR-3E2K の確認事項 No.3 の判断材料）。
- `.sb3` ファイルは作らず、必要なファイルとその中身を `lesson-plan.md` の事前準備に記述する。
- 既存のファイル（`docs/course-design/020-animation.md`、`course-plan.md` のリンク）を移動・削除しない。
- 新しい構成で書いて分かった問題と、残りの回で決めておくべきことを対応結果に記録する。

## 3. 作業内容

| No  | 作業                                                         | 担当 | 状態 | メモ                                     |
| --- | ------------------------------------------------------------ | ---- | ---- | ---------------------------------------- |
| 1   | course-plan.md の第2回と既存の各回ファイルの書き方を確認する | BA   | open | 棒人間・コスチューム編集の内容は使わない |
| 2   | `lesson-plan.md` を作成する                                  | BA   | open | 最低・標準・発展の段階分けを具体化する   |
| 3   | `slides.md` を作成し、`npx slidev build` で確認する          | BA   | open | `dist/` は commit しない                 |
| 4   | 必要な成果物の一覧と、試作で分かったことを記録する           | BA   | open | PJR-3E2K の判断材料にする                |

## 4. 対応結果

_TODO_: 完了時に、実施内容・成果物・残課題を記載する。未完了の場合は `-` とする。

## 5. 関連ドキュメント

- [[prj-0001:pjr-m5sc-lesson-content-structure]]：配置と Slidev の規約（3.2・3.3）
- [[prj-0001:pjr-w9mv-revise-course-plan]]：course-plan.md の改訂
- [[prj-0001:pjr-3e2k-migrate-lesson-structure]]：移行作業と残りの確認事項
