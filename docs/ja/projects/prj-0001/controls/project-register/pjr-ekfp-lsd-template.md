---
specdojo:
  id: prj-0001:pjr-ekfp-lsd-template
  type: project
  status: draft
  rulebook: specdojo:pjr-rulebook
  part_of:
    - prj-0001:pjr-index
  item_type: todo
  item_status: review
  priority: medium
  difficulty: hard
  owner: BA
  registered_at: "2026-10-24T23:30:24Z"
  due_on: "2026-10-31"
  derived_from:
    - PJR-S9ZM
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

| No  | 作業                                                       | 担当 | 状態 | メモ                                                  |
| --- | ---------------------------------------------------------- | ---- | ---- | ----------------------------------------------------- |
| 1   | rulebook・sample・手本を読み、雛形にするページと値を決める | exec | done | 手本の授業に固有の値は残っていない                    |
| 2   | `lsd-template.md` と `lsd-template.css` を作る             | exec | done | 表示が崩れた frontmatter と `:scale` を orch が直した |
| 3   | rulebook の `template` を新しい ID へ更新する              | exec | done | 差分は `template:` の1行だけ                          |
| 4   | 書き出して表示を確かめる                                   | orch | done | 10ページを `tools/preview-lsd.sh png` で確認          |

## 4. 対応結果

`exec run --register --worktree`（codex-expert-executor・terra-reporter）で template を作り、`project/prj-0001/develop` へ統合した（`02e3a8b`）。executor は個票の対応結果を書かなかったため、以下は orchestrator が完了条件と照らして確かめた結果である。

確かめたこと:

- `docs/ja/specdojo/templates/edu-scratch/lsd-template.md` が ID `edu-scratch:lsd-template`、`status: draft` で作られ、文書索引で解決される。
- 付属の `lsd-template.css` が、rulebook 6.2 の class（`teacher-cat`・`section-slide`・`section-<種類>`・`device-check`・`check-list`・`completion-grid`・`mission-list`）をすべて定義し、表紙の規則は class を重ねて強くしている。
- 10ページで、表紙・めあて・節の扉（観察・概念・ふりかえり）・説明・まとめ・発展・困ったときがそろい、各ページに `teacher-cat` がある。節の扉には `section-slide section-<種類>` がある。
- 活動ごとの値は約40種類の `_UPPER_SNAKE_` と _TODO_ で書かれ、手本の授業に固有の値（風船・得点・お話など）は残っていない。
- `<style>` はなく、先頭に markdownlint の注釈がある。template と `.css` は prettier を通る。
- rulebook の変更は `template: edu-scratch:lsd-template` の1行だけで、sample と手本は変更されていない。

orchestrator が直したこと（利用者の指定、`1ad54db`、merge `4203231`）:

- 統合後に書き出すと、案内役と吹き出しが出ず、6ページ目は真っ白だった。Slidev の設定（`theme: neversink` など）が `frontmatter_template` の下に入れ子になり、テーマが読み込まれていなかった（コンソールに `Failed to resolve component: Cat`）。sample と同じ形に戻し、`frontmatter_template` を外した。
- ブロック図の `:scale="_BLOCK_DIAGRAM_SCALE_"` は Vue の式として評価され未定義になるため、既定値 `0.8` と調整の範囲の注釈にした。
- 直した後、10ページすべてでテーマの部品・案内役・class の見た目・ブロック図が表示されることを確かめた。

判断できない点・残課題:

- プレースホルダは Markdown の強調として斜体で表示され、長いもの（`_COMPLETION_CRITERION_1_` など）は枠からはみ出す。実際の文に置き換えれば収まるため、そのままにした。
- 概念が複数ある活動では、節の扉と説明のページを概念の数だけ増やす。その手順は template の _TODO_ の注記だけで示しており、rulebook には書いていない。手本が1件だけのため、増やし方を rulebook の規則にするかは、2つ目の授業を作るときに判断する。
- 担当と期限の設定のために approach の記録を外した（`17feb05`）。`register update` が authoring の対象を検証し直して止まるためで、本家の SpecDojo に PJR-JJBY として起票した。

## 5. 関連ドキュメント

- [[edu-scratch:lsd-rulebook]]：template が従う rulebook
- [[edu-scratch:lsd-sample]]：手本にする sample
- [[prj-0001:pjr-s9zm-lsd-kata-style]]：付属の CSS の形を決めた項目（派生元）
