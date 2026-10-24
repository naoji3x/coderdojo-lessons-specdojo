---
specdojo:
  id: prj-0001:pjr-9df9-lsd-rulebook
  type: project
  status: draft
  rulebook: specdojo:pjr-rulebook
  part_of:
    - prj-0001:pjr-index
  item_type: todo
  item_status: review
  priority: high
  difficulty: hard
  owner: BA
  registered_at: "2026-10-24T11:29:03Z"
  due_on: "2026-10-31"
  approach: rulebook-authoring
  targets:
    - edu-scratch:lsd-rulebook
  sources:
    - coderdojo-lessons:courses/*/lessons/*/slides.md
    - coderdojo-lessons:docs/guides/slidev-guide.md
---

# PJR-9DF9 投影スライドの rulebook を作る

## 1. 概要

第2回の投影スライドと Slidev ガイドを手本に、投影スライドの rulebook（edu-scratch:lsd-rulebook）を exec で作る。

- 教材の kata を `edu-scratch:` の名前空間で作る最初の1件である。接頭辞は `lsd`（投影スライド、lesson slide deck）とする。
- 手本はプロダクトリポジトリ coderdojo-lessons の `slides.md` と `docs/guides/slidev-guide.md` で、読み取り専用とする。
- 手本の授業は現在第2回の1件だけである。

## 2. 完了条件

- `docs/ja/specdojo/rulebooks/edu-scratch/lsd-rulebook.md` が ID `edu-scratch:lsd-rulebook` で作られ、frontmatter の `status` が `draft` になっている。
- 次の観点ごとに、手本から一般化した規則が書かれている。
  - 置き場所とファイル名
  - ページの構成（表紙・めあて・節の扉・説明・まとめ・ふりかえりなど）
  - レイアウトの使い方
  - 案内役のキャラクター
  - Scratch のブロック図
  - 実機での確認の書き方
  - markdownlint の注釈
- frontmatter の `template` と `sample` は `undecided` になっている。
- 第2回だけの決まりか、ほかの授業にも当てはまる決まりかを判断できない点は、result の申し送りに書かれている。
- 手本（coderdojo-lessons のファイル）は変更されていない。
- 作った rulebook が prettier と markdownlint を通る。

## 3. 作業内容

| No  | 作業                                                           | 担当 | 状態 | メモ                |
| --- | -------------------------------------------------------------- | ---- | ---- | ------------------- |
| 1   | 手本と rulebook の執筆標準を読み、繰り返し使える規則を抜き出す | exec | open | 手本は読み取り専用  |
| 2   | `edu-scratch:lsd-rulebook` を作る                              | exec | open | `status: draft`     |
| 3   | 判断できない点を result の申し送りに書く                       | exec | open | 手本が1件だけのため |

## 4. 対応結果

_TODO_: 完了時に、実施内容・成果物・残課題を記載する。未完了の場合は `-` とする。

## 5. 関連ドキュメント

- [[prj-0001:pjr-6g9t-balloon-slides-design]]：手本の投影スライドを作った項目
- [[prj-0001:pjr-czy8-balloon-slides-characters]]：手本の案内役のキャラクターを整えた項目
