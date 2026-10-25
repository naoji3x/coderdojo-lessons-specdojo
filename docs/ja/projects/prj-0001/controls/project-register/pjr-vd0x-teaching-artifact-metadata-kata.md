---
specdojo:
  id: prj-0001:pjr-vd0x-teaching-artifact-metadata-kata
  type: project
  status: draft
  rulebook: specdojo:pjr-rulebook
  part_of:
    - prj-0001:pjr-index
  item_type: todo
  item_status: in-progress
  priority: medium
  owner: BA
  registered_at: "2026-10-25T09:08:25Z"
  due_on: "2026-10-31"
---

# PJR-VD0X 教材成果物のSpecDojoメタ情報を扱うkataを整備する

## 1. 概要

コース計画・指導案・投影スライドをカタログとScheduleで管理するため、成果物自身のspecdojoメタ情報の規約を先に整える。kata自身のメタ情報を教材へコピーするのではなく、教材固有のメタ情報を記入する方針へ変更する。

## 2. 完了条件

- 既存のSpecDojoメタ情報schema・カタログのID解決・教材リポジトリの文書規約を確認し、成果物のid・type・status・rulebookなどの採用項目と値の根拠を明記する。カタログlocal_idと成果物IDの対応を一意にし、存在しないrulebookや未検証の独自フィールドを追加しない。
- edu-scratch:lpl-rulebook・lpl-template・lpl-sample・lpl-recipeと、edu-scratch:lsd-slidev-rulebook・lsd-slidev-template・lsd-slidev-sampleの関連箇所を整合させる。指導案templateのメタ情報を削除する案内は、kata自身のメタ情報と成果物用の記入欄を区別する案内へ改める。recipeの自己完結性と各kataの責務は維持する。
- Slidevは先頭の既存frontmatterにtheme・title等とspecdojo名前空間を共存させ、ページ区切りやページ別layoutを壊さない記法を定める。教材の内容・授業順序・時間は変更しない。
- コース計画のメタ情報も既存schemaと照合して扱いを記録する。準拠rulebookが未整備ならその事実を明記し、無関係なrulebookを割り当てたり、今回の範囲外の新規kataを勝手に作ったりしない。
- 今回の作業対象はkataと実行記録とし、教材本体・配置パス・Scheduleは変更しない。draftのkataを検証成功だけでreadyへ昇格しない。変更ファイルの整形・lint・適用可能なschema検証・Slidevのsample/templateのbuildや解析・差分検査を行い、結果と未確定事項を個票に記録する。

## 3. 作業内容

| No  | 作業                                               | 担当 | 状態 | メモ |
| --- | -------------------------------------------------- | ---- | ---- | ---- |
| 1   | メタ情報schemaとカタログのID解決を確認する         | BA   | open | -    |
| 2   | 指導案・スライドの関連kataを整備する               | BA   | open | -    |
| 3   | 規約間の整合と静的検査を確認して対応結果を記録する | BA   | open | -    |

## 4. 対応結果

-

## 5. 関連ドキュメント

- [[edu-scratch:lpl-rulebook]]
- [[edu-scratch:lpl-template]]
- [[edu-scratch:lpl-sample]]
- [[edu-scratch:lpl-recipe]]
- [[edu-scratch:lsd-slidev-rulebook]]
- [[edu-scratch:lsd-slidev-template]]
- [[edu-scratch:lsd-slidev-sample]]
- `coderdojo-lessons:docs/course-design/course-plan.md`：現在のコース計画（移動後は新パスへ読み替える）
- `docs/ja/projects/prj-0001/010-deliverables-catalog/dct-scratch-lessons.yaml`：成果物カタログ
