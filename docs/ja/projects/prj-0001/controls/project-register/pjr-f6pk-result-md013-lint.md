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

### 1.1. 原因

- runner（specdojo 0.4.0 の `assertResultMarkdownlint`）は、統合の直前に結果ファイルへ markdownlint を追加の指定なしで実行する。
- このプロジェクトには markdownlint の設定ファイルがないため、既定の MD013 が効き、長いパスを含む行で止まる。
- commit hook（`lefthook.yml`）は `markdownlint --disable MD013` で実行しているため、同じ行でも通る。
- PJR-6G9T と PJR-CZY8 の統合で計5回止まり、そのたびに orchestrator が結果ファイルを手で折り返して再開した。

### 1.2. 方針（利用者と合意済み）

- プロジェクトの markdownlint 設定で `MD013: false` にし、runner と commit hook の決まりをそろえる。
- 報告役の出力で長い行を折り返す案は、SpecDojo 本体の変更になるため採らない。

## 2. 完了条件

- プロジェクトのルートに markdownlint の設定ファイルがあり、`MD013: false` になっている。
- 長いパスを含む結果ファイルを `npx markdownlint` で検査しても、MD013 の警告が出ない。
- runner と commit hook の markdownlint の決まりがそろっている。hook の `--disable MD013` を残すか外すかを決め、理由を対応結果に書く。
- 設定ファイルが prettier と commit hook の検査を通る。

## 3. 作業内容

| No  | 作業                                                                            | 担当 | 状態 | メモ                                  |
| --- | ------------------------------------------------------------------------------- | ---- | ---- | ------------------------------------- |
| 1   | プロジェクトのルートに markdownlint の設定ファイルを置き、MD013 を false にする | orch | done | 既存の設定がないことを確認済み        |
| 2   | `lefthook.yml` の `--disable MD013` の扱いを決める                              | orch | done | 設定ファイルとの重複                  |
| 3   | 長いパスを含む結果ファイルで、MD013 が出ないことを確かめる                      | orch | done | PJR-CZY8 の結果ファイルで確かめられる |

## 4. 対応結果

利用者の指定で orchestrator が直接対応した。
`feature/prj-0001/result-md013-lint` で commit し（`196e31d`）、
`project/prj-0001/develop` へ merge した（`5f7b7e7`）。

- ルートに `.markdownlint.yaml` を置き、`MD013: false` にした。
  runner の統合直前の検査は、worktree のルートでこの設定を読む。
- `lefthook.yml` の `--disable MD013` を外し、hook も同じ設定ファイルを使うようにした。
  決まりを設定ファイルの1か所にまとめ、片方だけを変えて再び食い違うことを防ぐため。

確かめたこと:

- PJR-CZY8 の結果ファイルを折り返す前の形（80文字を超える行が2つ）に戻した一時ファイルで比べた。
  設定ファイルがないと MD013 が2件出て、あると出ない。
- 新しい設定で、既存の個票と結果ファイルをすべて検査しても警告は出ない。
- 2つのファイルは prettier と commit hook を通った。

残課題:

- 統合の段で実際に止まらなくなったかは、次の `exec run` で確かめる。

## 5. 関連ドキュメント

- [[prj-0001:pjr-6g9t-balloon-slides-design]]：統合が MD013 で止まった項目（派生元）
- [[prj-0001:pjr-czy8-balloon-slides-characters]]：統合が MD013 で止まった項目（派生元）
