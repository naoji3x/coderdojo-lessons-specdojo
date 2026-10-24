---
specdojo:
  id: prj-0001:pjr-dvmm-lsd-rulebook-slot-lint
  type: project
  status: draft
  rulebook: specdojo:pjr-rulebook
  part_of:
    - prj-0001:pjr-index
  item_type: todo
  item_status: open
  priority: medium
  difficulty: medium
  owner: BA
  registered_at: "2026-10-24T22:03:38Z"
  due_on: "2026-10-31"
  derived_from:
    - PJR-0BVZ
---

# PJR-DVMM 投影スライドの rulebook の slot と markdownlint の規則を実態に合わせる

## 1. 概要

`edu-scratch:lsd-rulebook`（`docs/ja/specdojo/rulebooks/edu-scratch/lsd-rulebook.md`）の2つの規則が、手本・sample・教材のリポジトリの設定と食い違うため、実態に合わせて直す。

1. **6.2 案内役のキャラクター**: 「案内役は `:: note ::` などの slot の中に置かない」としている。一方、手本の `slides.md` と `edu-scratch:lsd-sample` は、2列のページで `:: right ::` などの slot の中に案内役を置いている。PJR-CZY8 で本文と重なったのは、表紙の `:: note ::` の中に置いたときだけだった。
2. **6.5 Markdownlint の注釈**: 「`slides.md` では MD003・MD022 以外で規則を無効化しない」としている。一方、教材のリポジトリの `.markdownlint.yaml` は MD013・MD033・MD036・MD024・MD041・MD060 を外し、MD025・MD026 を Slidev 向けに設定している。このリポジトリでは、投影スライドの sample と template を `.markdownlintignore` で検査から外した（PJR-0BVZ）。

手本は coderdojo-lessons の次のファイルとし、読み取り専用とする（実行中は `$SPECDOJO_REPO_CODERDOJO_LESSONS` からたどれる）。

- `courses/scratch-basic/lessons/020-balloon-game/slides.md`
- `.markdownlint.yaml`
- `docs/guides/slidev-guide.md`
- このリポジトリの `docs/ja/specdojo/samples/edu-scratch/lsd-sample.md`
- このリポジトリの `.markdownlintignore`

## 2. 完了条件

- 6.2 が、案内役を置いてはいけない slot を `:: note ::` に絞り、理由（`:: note ::` の配置に引きずられて本文と重なる）を書いている。2列のページの `:: left ::`・`:: right ::` の中に置いてよいことが、手本と矛盾しない形で書かれている。
- 6.5 が、`slides.md` の markdownlint は教材のリポジトリの設定に従うこと、注釈で止めてよいのは MD003・MD022 だけであることを書いている。禁止事項（7章）の markdownlint の行も、同じ内容に合わせている。
- 6.2・6.5・7章以外の本文、frontmatter（`status: draft`、`sample: edu-scratch:lsd-sample` など）は変えていない。
- sample と手本は変更していない。
- rulebook が prettier と markdownlint を通る。
- 手本が1件だけのため判断できない点を、result の申し送りに日本語で書いている。

## 3. 作業内容

| No  | 作業                                            | 担当 | 状態 | メモ                                    |
| --- | ----------------------------------------------- | ---- | ---- | --------------------------------------- |
| 1   | 6.2 の slot の規則を `:: note ::` に絞る        | exec | open | 手本と sample の置き方に合わせる        |
| 2   | 6.5 と7章の markdownlint の規則を実態に合わせる | exec | open | 教材のリポジトリの `.markdownlint.yaml` |
| 3   | 判断できない点を result の申し送りに書く        | exec | open | 前の2件で書かれなかったため             |

## 4. 対応結果

_TODO_: 完了時に、実施内容・成果物・残課題を記載する。未完了の場合は `-` とする。

## 5. 関連ドキュメント

- [[prj-0001:pjr-0bvz-lsd-sample]]：食い違いが見つかった項目（派生元）
- [[edu-scratch:lsd-rulebook]]：直す rulebook
- [[edu-scratch:lsd-sample]]：照らす sample
