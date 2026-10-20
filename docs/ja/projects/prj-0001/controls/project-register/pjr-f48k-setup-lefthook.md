---
specdojo:
  id: prj-0001:pjr-f48k-setup-lefthook
  type: project
  status: draft
  rulebook: specdojo:pjr-rulebook
  part_of:
    - prj-0001:pjr-index
  item_type: todo
  item_status: waiting
  priority: medium
  owner: DEV
  registered_at: "2026-10-19T11:28:14Z"
  due_on: "2026-10-31"
  block_reason: "agent exited with non-zero code: agent exited with non-zero code: agent-config-write: protected configuration changes detected; paths=lefthook.yml, package.json, coderdojo-lessons:lefthook.yml, coderd…"
---

# PJR-F48K 両リポジトリにLefthookと検証hookを整備する

## 1. 概要

両リポジトリへLefthookを導入し、依存導入時のhook登録と各リポジトリに適した検証を整備する。

対象は `coderdojo-lessons` と `coderdojo-lessons-specdojo`。前者にはコメントのみの `lefthook.yml` と既存の `prepare-commit-msg` hook があり、Lefthook 本体がないため commit 時に警告が発生した。後者には Lefthook 本体・設定ファイル・`prepare` スクリプトがない。

検証コマンドは既存の構成と適用条件を調べて選定する。具体的な検証ルールは本項目の作業で決め、未導入の検査を既存の仕組みとして扱わない。

## 2. 完了条件

- 両リポジトリで Lefthook が開発依存として宣言され、lockfile から再現可能に導入できる。
- 両リポジトリで依存導入時に hook が登録され、Lefthook の実行ファイルが見つからない警告が解消される。
- 各リポジトリに適した検証コマンドを調査・選定し、採用理由と実行条件を記録した `lefthook.yml` が整備される。
- 設定した hook について、正常な入力で成功し、対象の違反を含む入力で失敗することを確認する。検証用の変更を成果物へ残さない。
- 両リポジトリの導入手順・検証結果・残課題が対応結果に記録される。

## 3. 作業内容

| No  | 作業   | 担当   | 状態 | メモ |
| --- | ------ | ------ | ---- | ---- |
| 1   | 両リポジトリの依存・既存 hook・検証コマンドを調査する | DEV | open | 未コミットの既存変更を保護する |
| 2   | Lefthook を開発依存に追加し、依存導入時の hook 登録を整備する | DEV | open | package.json と lockfile を更新する |
| 3   | 各リポジトリに適した検証 hook を設定する | DEV | open | 調査結果をもとに検証内容と実行条件を決める |
| 4   | hook の成功・失敗と再導入時の動作を確認し、結果を記録する | DEV | open | 既存の開発フローへの影響も確認する |

## 4. 対応結果

-

## 5. 関連ドキュメント

- [[prj-0001:pjr-index]]
- [[specdojo:exec-config-guide]]

対象ファイルは両リポジトリの `package.json`・`package-lock.json`・`lefthook.yml` およびローカル Git hooks。具体的な検証コマンドの設定・説明先は調査時に特定する。
