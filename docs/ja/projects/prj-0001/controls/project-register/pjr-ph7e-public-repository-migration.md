---
specdojo:
  id: prj-0001:pjr-ph7e-public-repository-migration
  type: project
  status: draft
  rulebook: specdojo:pjr-rulebook
  part_of:
    - prj-0001:pjr-index
  item_type: decision
  item_status: open
  priority: medium
  registered_at: "2026-11-22T10:59:12Z"
  due_on: null
---

# PJR-PH7E 教材と登録簿のリポジトリを public で作り直し、元のリポジトリを private で保管する

## 1. 背景

`coderdojo-lessons` と `coderdojo-lessons-specdojo` を、SpecDojo の showcase として public で公開したい。ただし `coderdojo-lessons` の `docs/presentations` にある講演の資料（pptx と講演のメモ）は個人情報を含み、履歴にも残っている。登録簿の個票にも講演のイベント名が記録されていた。

## 2. 検討した選択肢

| 選択肢 | 内容                                                                          | 利点                                                                    | 懸念                                                                             |
| ------ | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| A      | 今のリポジトリの履歴を書き換え、force push してから public にする             | URL がそのまま使える                                                    | 古い commit が GitHub 側の cache に残ることがある。完全な削除には Support が要る |
| B      | 書き換えた履歴を新しい public のリポジトリへ push し、元は private で保管する | 新しいリポジトリに削除対象が一度も入らない。元の履歴を private で引ける | リポジトリを作り直す手間がかかる                                                 |
| C      | 履歴なしの 1 commit で新しく公開する                                          | 最も簡単で確実                                                          | 開発の履歴が showcase に残らない                                                 |

## 3. 決定内容

案 B を採る。今のリポジトリを `coderdojo-lessons-private` と `coderdojo-lessons-specdojo-private` に rename して private で保管し、同じ名前で public のリポジトリを作り直す。

公開用の履歴は `git filter-repo` で次のとおり書き換えた。

- `coderdojo-lessons` の全履歴から `docs/presentations` を消す。講演の資料だけを変えた 6 件の commit は履歴から消える。
- `coderdojo-lessons` の `.vscode/settings.json` のスペルチェックの単語一覧から、講演の共同主催者の名前を消す。
- `coderdojo-lessons-specdojo` の登録簿にある講演のイベント名を `community-event`・`community-event-slides`・`community-balloon-game` に置き換える。
- 両方のリポジトリで、commit の作者と committer のアドレスを GitHub の noreply アドレスに替える。
- 登録簿の内容と commit メッセージにある commit の hash（`coderdojo-lessons` の 59 種類と、このリポジトリ自身の 45 種類）を、新しい hash に置き換える。
- 公開するブランチは、`coderdojo-lessons` の `main`・`develop` と、このリポジトリの `main`・`project/prj-0001/develop` だけとする。

## 4. 採択理由

- 削除対象が公開用のリポジトリへ一度も入らないため、案 A のような cache の残りを心配しなくてよい。
- 元の履歴と、公開しないブランチを private の側でそのまま残せる。
- SpecDojo で運用してきた履歴を showcase として見せられる。

## 5. 承認

| 項目     | 内容                                     |
| -------- | ---------------------------------------- |
| 決定者   | indie                                    |
| 決定日   | 2026-11-21                               |
| 承認方式 | commit                                   |
| 証跡     | この項目を `decided` にした記帳の commit |

- 承認方式は `commit` または `PR` を記載する。`PR` の場合は証跡に PR URL と merge SHA を本文テキストで記載する。
- 不可逆・高リスク・framework schema 破壊的変更に該当する決定は `PR` 方式で承認する。

## 6. 影響範囲とフォローアップ

| 項目       | 内容                                                                                                                                                                                              |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 影響範囲   | 両方のリポジトリの全 commit の hash。2026-11-22 より前の hash は、private の側の履歴を指す                                                                                                        |
| 必要な対応 | `coderdojo-lessons` の `.gitignore` に `docs/presentations/` を足す。新旧の hash の対応表を `coderdojo-lessons-specdojo-private` の `docs/ja/projects/prj-0001/controls/public-migration/` に置く |
| 追跡先     | `coderdojo-lessons` の `feature/prj-0001/ignore-presentations`、`coderdojo-lessons-specdojo-private` の `feature/prj-0001/public-migration-commit-map`                                            |

## 7. 関連ドキュメント

- [[prj-0001:pjr-m5sc-lesson-content-structure]]: 講演の資料の置き場所を検討した記録。イベント名はこの決定で置き換えた。
