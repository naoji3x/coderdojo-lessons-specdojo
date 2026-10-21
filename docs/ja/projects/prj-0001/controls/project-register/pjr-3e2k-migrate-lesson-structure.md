---
specdojo:
  id: prj-0001:pjr-3e2k-migrate-lesson-structure
  type: project
  status: draft
  rulebook: specdojo:pjr-rulebook
  part_of:
    - prj-0001:pjr-index
  item_type: todo
  item_status: open
  priority: medium
  registered_at: "2026-10-20T22:58:53Z"
  derived_from:
    - PJR-M5SC
---

# PJR-3E2K 授業コンテンツをB案のディレクトリ体系へ移行する

## 1. 概要

PJR-M5SCで決定したB案（courses/sessions/events、活動ディレクトリ内の固定構成、Slidev）へcoderdojo-lessonsの既存コンテンツを段階的に移行し、残りの確認事項を決める。

### 1.1. PJR-95RS の試作からの申し送り

- 開始用・完成見本の `.sb3` をどこまで事前に作り、バイナリをどう Git 管理するか（確認事項 No.3）。成果物ごとの管理案は PJR-95RS の 4.3 にある。
- agent に移行や残りの回を任せるときは、計画の `targets` に新しいディレクトリ（`courses/` など）を書く。書かないと runner が commit しない。
- 残りの回の指導案をどこまで詳しく書くか。試作の指導案は 136 行で、既存の各回ファイル（700〜1,050 行）よりかなり簡潔である。
- 授業で使う Scratch 環境で確かめたブロックの名前・配置と、開始用プロジェクトの初期状態を指導案へ反映する。
- どの階層の `node_modules/` と `dist/` も `.gitignore` で除外する対応は、試作の中で済ませた（coderdojo-lessons の commit `0bca5fa`）。

## 2. 完了条件

- _TODO_: 完了と判断できる具体的な条件を記載する。

## 3. 作業内容

| No  | 作業   | 担当   | 状態 | メモ |
| --- | ------ | ------ | ---- | ---- |
| 1   | _TODO_ | _TODO_ | open | -    |

## 4. 対応結果

_TODO_: 完了時に、実施内容・成果物・残課題を記載する。未完了の場合は `-` とする。

## 5. 関連ドキュメント

- [[prj-0001:pjr-m5sc-lesson-content-structure]]：配置と Slidev の規約、移行方針（6.1）、確認事項（6.2）
- [[prj-0001:pjr-95rs-revise-lesson-designs]]：第2回の試作と申し送り
