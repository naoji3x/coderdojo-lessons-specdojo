---
specdojo:
  id: prj-0001:pjr-w9mv-revise-course-plan
  type: project
  status: ready
  rulebook: specdojo:pjr-rulebook
  part_of:
    - prj-0001:pjr-index
  item_type: todo
  item_status: done
  priority: medium
  owner: BA
  registered_at: "2026-10-20T12:51:35Z"
  completed_at: "2026-10-20T13:00:05Z"
  conclusion: course-plan.mdを全5回の改訂案に沿って改訂した（各回ファイルはPJR-95RSで対応）
---

# PJR-W9MV 全5回のコースプランを改訂案に沿って見直す

## 1. 概要

coderdojo-lessonsのlocal/revised-course-design.mdをもとに、docs/course-design/course-plan.mdを全5回の新構成へ改訂する。各回ファイルの改訂は含まない。

## 2. 完了条件

- `course-plan.md` が全5回の新構成（追いかけっこゲーム、風船割りゲーム、ペン＋音楽のプログラミングアート、AIじゃんけん、選択式自由制作）になっている。
- 前提条件（対象・環境・標準素材・コスチューム編集は原則不要）、各回の時間配分、Chromebook での授業運営方針が記載されている。
- 第1回のネズミの操作がマウスになっている。
- 各回ファイルへのリンク先は現行のまま維持されている。
- markdownlint の指摘が 0 件である。

## 3. 作業内容

| No  | 作業                                      | 担当         | 状態 | メモ                           |
| --- | ----------------------------------------- | ------------ | ---- | ------------------------------ |
| 1   | `course-plan.md` を改訂案に沿って改訂する | orchestrator | done | 利用者の指示により直接対応した |

## 4. 対応結果

- coderdojo-lessons の `local/revised-course-design.md` をもとに、`docs/course-design/course-plan.md` を改訂した。成果物は `feature/prj-0001/revise-course-plan` の commit `d950846`。
- 利用者の判断により、第1回の操作はマウスを維持し、各回ファイルへのリンク先は現行のままとした。第2回の学習量への対策は、改訂案にある「先生が完成例を示し、児童は数字や表示を工夫する」までの記載とした。
- 改訂案の画像リンク、`utm_source` 付き URL、「以前の6回案からの変更点」は取り込んでいない。
- 検証：prettier で整形し、markdownlint の指摘は 0 件。commit 時は lefthook が PATH に無く、hook は実行されていない。
- 残課題：
  - 各回ファイル（`010`〜`050`）が新構成に未対応で、リンクの表示名と内容が一致しない。[[prj-0001:pjr-95rs-revise-lesson-designs|PJR-95RS]] で扱う。
  - feature ブランチの push と PR 作成は利用者が行う。

## 5. 関連ドキュメント

- [[prj-0001:pjr-95rs-revise-lesson-designs]]：各回授業設計の改訂（後続作業）
- [[prj-0001:pjr-m5sc-lesson-content-structure]]：各回ファイルの改名・配置を決める項目
