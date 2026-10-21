---
specdojo:
  id: prj-0001:pjr-f6pk-result-md013-lint
  type: project
  status: draft
  rulebook: specdojo:pjr-rulebook
  part_of:
    - prj-0001:pjr-index
  item_type: todo
  item_status: open
  priority: high
  owner: DEV
  registered_at: "2026-10-21T22:55:04Z"
  due_on: "2026-10-31"
  derived_from:
    - PJR-6G9T
    - PJR-CZY8
---

# PJR-F6PK 統合のたびに結果ファイルが MD013 で止まる問題を直す

## 1. 概要

exec run の統合直前の markdownlint が既定の MD013（80文字）で結果ファイルを検査し、MD013 を外して検査する commit hook と決まりが食い違っているため、毎回統合が止まる。プロジェクトの markdownlint 設定で MD013 を false にしてそろえる。

## 2. 完了条件

- _TODO_: 完了と判断できる具体的な条件を記載する。

## 3. 作業内容

| No  | 作業   | 担当   | 状態 | メモ |
| --- | ------ | ------ | ---- | ---- |
| 1   | _TODO_ | _TODO_ | open | -    |

## 4. 対応結果

_TODO_: 完了時に、実施内容・成果物・残課題を記載する。未完了の場合は `-` とする。

## 5. 関連ドキュメント

- _TODO_: 根拠・影響先・追跡先を `[[doc-id]]` 形式で記載する。
