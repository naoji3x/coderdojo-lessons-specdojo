---
specdojo:
  id: prj-0001:pjr-9df9-lsd-rulebook
  type: project
  status: ready
  rulebook: specdojo:pjr-rulebook
  part_of:
    - prj-0001:pjr-index
  item_type: todo
  item_status: done
  priority: high
  difficulty: hard
  owner: BA
  registered_at: "2026-10-24T11:29:03Z"
  due_on: "2026-10-31"
  completed_at: "2026-10-24T11:39:03Z"
  conclusion: edu-scratch:lsd-rulebook を draft で作った。最小例の誤り・抜けた知見・手本にない規則は PJR-BR5A へ引き継いだ。
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
| 1   | 手本と rulebook の執筆標準を読み、繰り返し使える規則を抜き出す | exec | done | 手本は読み取り専用  |
| 2   | `edu-scratch:lsd-rulebook` を作る                              | exec | done | `status: draft`     |
| 3   | 判断できない点を result の申し送りに書く                       | exec | done | 手本が1件だけのため |

## 4. 対応結果

`exec run --register --worktree` で terra-executor が rulebook を作り、
`project/prj-0001/develop` へ統合した（`d5fda81`）。
統合の前の markdownlint で止まらず、PJR-F6PK の残課題も確かめられた。

- `docs/ja/specdojo/rulebooks/edu-scratch/lsd-rulebook.md` を ID `edu-scratch:lsd-rulebook`、`status: draft` で作った。
- `recipe`・`sample`・`template` は `undecided`。手本は変更されていない。

orchestrator が完了条件と照らして確かめた結果:

- 次の3点が残った。
  1. 最小例のページ設定で、区切りの直後に空行がある。
  2. `style.css` と案内役のキャラクターの知見が抜けている。原因の一つは、手本に `style.css`・`components/` を渡していなかったことである。
  3. 手本にない規則がある。
- 判断できない点を result の申し送りに書く条件は満たしていない。
- 3点と申し送りは、見直しの todo [[prj-0001:pjr-br5a-lsd-rulebook-review]] へ引き継いだ。

## 5. 関連ドキュメント

- [[prj-0001:pjr-br5a-lsd-rulebook-review]]：残った問題を引き継いだ見直しの項目
- [[prj-0001:pjr-6g9t-balloon-slides-design]]：手本の投影スライドを作った項目
- [[prj-0001:pjr-czy8-balloon-slides-characters]]：手本の案内役のキャラクターを整えた項目
