---
specdojo:
  id: prj-0001:pjr-y36g-course-plan-catalog-and-metadata
  type: project
  status: draft
  rulebook: specdojo:pjr-rulebook
  part_of:
    - prj-0001:pjr-index
  item_type: todo
  item_status: open
  priority: medium
  owner: BA
  registered_at: "2026-10-25T09:08:29Z"
  due_on: "2026-10-31"
  derived_from:
    - PJR-VD0X
---

# PJR-Y36G コース計画を教材配下へ移動しカタログと既存教材のメタ情報を整える

## 1. 概要

先行項目 [[prj-0001:pjr-vd0x-teaching-artifact-metadata-kata|PJR-VD0X]] の完了・レビュー後に着手する。

先行todoのkataレビュー後に、宣言済み教材リポジトリcoderdojo-lessonsのコース計画を教材配下へ配置し、カタログと実在する教材のメタ情報を整える。未作成の第1・3・4・5回の教材本文は作らない。

## 2. 完了条件

- 先行する教材メタ情報kataの整備・レビューが完了してから実行する。更新済みの規約に従い、成果物固有のメタ情報を扱う。
- coderdojo-lessons/docs/course-design/course-plan.mdをcourses/scratch-basic/course-plan.mdへ移動する。本文の学習内容・45分構成・コース方針は変更せず、移動に必要な相対リンクとメタ情報だけを修正する。旧設計の指導案を根拠へ無条件に取り込まない。
- READMEと現行カタログ・今後の実行入力などの有効な参照を新パスへ更新し、移動先からリンクが解決できることを確認する。過去の完了済み個票・イベント・plan/resultに記録された当時のパスは監査履歴として書き換えない。
- dct-scratch-lessons.yamlへコース計画を独立成果物として追加し、既存の全5回の指導案のdepends_onへコース計画のlocal_idを追加する。スライドは同じ回の指導案への依存を維持する。kindとdone_criteriaは人が保守するコース計画の役割と既存schemaに基づいて定める。
- コース計画と既存の第2回lesson-plan.md・slides.mdへメタ情報を反映し、カタログIDと一意に対応させる。新規教材のIDはカタログで宣言するが、未作成ファイルを作成済みとして扱わない。第2回は完成済みの本文を維持し、今回のメタ情報・リンク変更だけを適用する。statusは先行規約と確認結果に従い、処理状態と文書成熟度を混同しない。
- カタログ検証とbuild、変更Markdown/YAMLの整形・lint・適用されるメタ情報schema検証、リンク検証、差分検査を通す。第2回スライドのbuildと全19ページの解析を確認し、frontmatter変更後も特に17〜19ページをPNGで確認する。根拠・変更範囲・検証結果を個票へ残す。

## 3. 作業内容

| No  | 作業                                                 | 担当 | 状態 | メモ |
| --- | ---------------------------------------------------- | ---- | ---- | ---- |
| 1   | 先行kataとコース計画の現行参照を確認する             | BA   | open | -    |
| 2   | コース計画を移動し現行リンクとカタログ依存を更新する | BA   | open | -    |
| 3   | コース計画と既存第2回教材にメタ情報を反映する        | BA   | open | -    |
| 4   | カタログ・リンク・メタ情報・Slidev表示を検証する     | BA   | open | -    |

## 4. 対応結果

-

## 5. 関連ドキュメント

- [[prj-0001:pjr-vd0x-teaching-artifact-metadata-kata]]：先行作業
- `coderdojo-lessons:docs/course-design/course-plan.md`：現在のコース計画（移動後は新パスへ読み替える）
- `docs/ja/projects/prj-0001/010-deliverables-catalog/dct-scratch-lessons.yaml`：成果物カタログ
