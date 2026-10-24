---
specdojo:
  id: prj-0001:pjr-dvmm-lsd-rulebook-slot-lint
  type: project
  status: ready
  rulebook: specdojo:pjr-rulebook
  part_of:
    - prj-0001:pjr-index
  item_type: todo
  item_status: done
  priority: medium
  difficulty: medium
  owner: BA
  registered_at: "2026-10-24T22:03:38Z"
  due_on: "2026-10-31"
  completed_at: "2026-10-24T22:29:46Z"
  conclusion: "6.2 の slot の規則を :: note :: に絞り、6.5 と 7 章の markdownlint の規則を教材のリポジトリの設定に合わせた。"
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
| 1   | 6.2 の slot の規則を `:: note ::` に絞る        | exec | done | 手本と sample の置き方に合わせる        |
| 2   | 6.5 と7章の markdownlint の規則を実態に合わせる | exec | done | 教材のリポジトリの `.markdownlint.yaml` |
| 3   | 判断できない点を result の申し送りに書く        | exec | done | 前の2件で書かれなかったため             |

## 4. 対応結果

- 6.2 は、案内役を置かない slot を `:: note ::` に限定した。`:: note ::` の配置に引きずられて本文と重なるためであり、2 列の `:: left ::` と `:: right ::` への配置は手本と同様に許可した。
- 6.5 と 7 章は、`slides.md` の markdownlint を教材リポジトリの `.markdownlint.yaml` に従わせ、文書内の `markdownlint-disable` 注釈で止められる規則を MD003 と MD022 に限定した。
- `npx prettier --check docs/ja/specdojo/rulebooks/edu-scratch/lsd-rulebook.md` と `npx markdownlint -- docs/ja/specdojo/rulebooks/edu-scratch/lsd-rulebook.md` は成功した。
- 手本は 1 件だけである。そのため、`:: note ::` 以外の slot や別レイアウトでの案内役の重なりは判断できない。追加の手本ができたときに、必要なら配置規則を見直す。

orchestrator が完了条件と照らして確かめたこと:

- `exec run --register --worktree` で codex-expert-executor と terra-reporter が rulebook を直し、`project/prj-0001/develop` へ統合した（`b192e17`）。
- rulebook の差分は 6.2・6.5・7章の4行だけで、frontmatter（`status: draft`、`sample: edu-scratch:lsd-sample`）は変わっていない。
- rulebook は prettier と markdownlint を通る。sample と手本は変更されていない。
- 判断できない点は、上の対応結果に書かれている。

## 5. 関連ドキュメント

- [[prj-0001:pjr-0bvz-lsd-sample]]：食い違いが見つかった項目（派生元）
- [[edu-scratch:lsd-rulebook]]：直す rulebook
- [[edu-scratch:lsd-sample]]：照らす sample
