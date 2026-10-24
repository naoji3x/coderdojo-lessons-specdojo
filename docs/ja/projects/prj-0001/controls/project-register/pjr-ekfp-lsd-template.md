---
specdojo:
  id: prj-0001:pjr-ekfp-lsd-template
  type: project
  status: draft
  rulebook: specdojo:pjr-rulebook
  part_of:
    - prj-0001:pjr-index
  item_type: todo
  item_status: in-progress
  priority: medium
  difficulty: hard
  registered_at: "2026-10-24T23:30:24Z"
  derived_from:
    - PJR-S9ZM
  approach: template-authoring
  targets:
    - edu-scratch:lsd-template
  sources:
    - edu-scratch:lsd-rulebook
    - edu-scratch:lsd-sample
    - docs/ja/specdojo/samples/edu-scratch/lsd-sample.css
    - coderdojo-lessons:courses/*/lessons/*/slides.md
    - coderdojo-lessons:courses/*/lessons/*/style.css
---

# PJR-EKFP 投影スライドの template を作る

## 1. 概要

`edu-scratch:lsd-rulebook` と `edu-scratch:lsd-sample`・第2回のスライドを手本に、新しい活動の投影スライドを書き始める雛形（`edu-scratch:lsd-template` と付属の `lsd-template.css`）を作り、rulebook の `template` を新しい ID へ更新する。

前提として分かっていること:

- Slidev は `slides.md` の中の `<style>` をそのページだけに当てる。全ページの見た目は、活動ディレクトリの `style.css` に置く。kata では、同じ名前の付属の `.css` に置く（rulebook 6.1）。
- 表紙などレイアウトごとの規則は、テーマの規則に負けることがあるので、class を重ねて強くする（rulebook 6.1）。
- このリポジトリの prettier は、`docs/ja/specdojo/templates/edu-scratch/lsd-*.md` に `slidev` parser を当て、markdownlint はこのファイルを検査しない。
- exec の sandbox では Slidev を起動できず、PNG に書き出せない（PJR-S9ZM）。表示の確認は、統合の後に orchestrator が行う。

## 2. 完了条件

- `docs/ja/specdojo/templates/edu-scratch/lsd-template.md` が ID `edu-scratch:lsd-template` で作られ、frontmatter の `status` が `draft` になっている。
- 付属の `docs/ja/specdojo/templates/edu-scratch/lsd-template.css` があり、rulebook 6.2 の class をすべて定義している。表紙の規則は class を重ねて強くしている。
- template が、rulebook の本文要件のページの役割（表紙・めあて・節の扉・説明・まとめ・ふりかえりなど）を、雛形のページとしてそろえている。各ページに、rulebook 6.2 の class と案内役の `teacher-cat` の要素がある。
- 活動ごとに変わる値（題名・回数・時間・めあて・節の主題・ブロック図の中身など）は、template-authoring-standard のプレースホルダ規約（`_UPPER_SNAKE_` と _TODO_）で書かれている。手本の授業に固有の値は残っていない。
- `slides.md` の中に `<style>` を書いていない。先頭には `<!-- markdownlint-disable MD003 MD022 -->` がある。
- rulebook（`docs/ja/specdojo/rulebooks/edu-scratch/lsd-rulebook.md`）の frontmatter の `template` が `undecided` から `edu-scratch:lsd-template` に更新されている。rulebook のほかの箇所は変えていない。
- sample と手本は変更していない。
- template と付属の `.css` が prettier を通る。
- 手本から判断できない点を、個票の対応結果に書いている。

## 3. 作業内容

| No  | 作業                                                       | 担当 | 状態 | メモ                                     |
| --- | ---------------------------------------------------------- | ---- | ---- | ---------------------------------------- |
| 1   | rulebook・sample・手本を読み、雛形にするページと値を決める | exec | open | 固有の値はプレースホルダにする           |
| 2   | `lsd-template.md` と `lsd-template.css` を作る             | exec | open | `<style>` は使わない                     |
| 3   | rulebook の `template` を新しい ID へ更新する              | exec | open | 手本がカタログ外のため自動では変わらない |
| 4   | 書き出して表示を確かめる                                   | orch | open | 統合の後に `tools/preview-lsd.sh png`    |

## 4. 対応結果

_TODO_: 完了時に、実施内容・成果物・残課題を記載する。未完了の場合は `-` とする。

## 5. 関連ドキュメント

- [[edu-scratch:lsd-rulebook]]：template が従う rulebook
- [[edu-scratch:lsd-sample]]：手本にする sample
- [[prj-0001:pjr-s9zm-lsd-kata-style]]：付属の CSS の形を決めた項目（派生元）
