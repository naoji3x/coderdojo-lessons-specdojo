---
specdojo:
  id: prj-0001:pjr-w05j-lpl-sample
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
  registered_at: "2026-10-25T04:17:01Z"
  due_on: "2026-10-31"
  derived_from:
    - PJR-0H02
  approach: sample-authoring
  targets:
    - edu-scratch:lpl-sample
  sources:
    - coderdojo-lessons:courses/scratch-basic/lessons/020-balloon-game/lesson-plan.md
    - coderdojo-lessons:docs/course-design/course-plan.md
    - edu-scratch:lpl-rulebook
---

# PJR-W05J 指導案のsampleを作る

## 1. 概要

先行するlpl-rulebookに沿い、ねらい・完成形・時間配分・見取り・つまずき対応が整合する別題材の完成例edu-scratch:lpl-sampleをdraftで作る。

## 2. 完了条件

- PJR-0H02のrulebook作成・レビューが済んでから実行する。実行前にorchestratorが `edu-scratch:lpl-rulebook` をsourcesへ追加する。
- `docs/ja/specdojo/samples/edu-scratch/lpl-sample.md` を ID `edu-scratch:lpl-sample`、`type: sample`、`status: draft`、`rulebook: edu-scratch:lpl-rulebook` で作り、sample-authoring-standardに沿う。
- 風船ゲームを丸写しせず、別題材の想定授業として完成した指導案例を作る。題材や時間・対象はサンプル内の仮想設定と明示し、実際に実施・検証した授業、利用者と合意したコース変更のように書かない。1件の例で全活動の標準を決めない。
- ねらい・使用機能・最低／標準／発展の完成形・活動・評価の対応が追え、流れの開始終了時刻と合計が授業時間に一致する。事前準備、初期化・終了・再開、進度差・時間不足、つまずき、保存共有の必要性を具体化し、rulebookの目的と条件を満たす。
- 完成例の本文に未記入のプレースホルダーを残さない。授業前の実機確認が必要な点は確認対象として明記し、未確認のScratch名称や授業実績を捏造しない。
- rulebookのfrontmatterの `sample` だけを `edu-scratch:lpl-sample` に更新する（関連kata参照の正本）。rulebookの他の規定は変更しない。
- 根拠は修正済みの `coderdojo-lessons:courses/scratch-basic/lessons/020-balloon-game/lesson-plan.md` と `coderdojo-lessons:docs/course-design/course-plan.md` とする。第2回の旧設計 `docs/course-design/020-animation.md` やコース計画からリンクされる旧設計を根拠にしない。未確認のリンク先を読んだ事実を捏造しない。
- 教材リポジトリはすべて読み取り専用とし、このリポジトリの指定kata・個票・実行記録以外は変更しない。新規kataはdraftのままとする。
- 変更したMarkdownのPrettierとMarkdownlint、`git diff --check` の適用される検査を通す。依存パッケージは新規導入しない。
- 根拠・一般化の範囲・判断できない点・静的検査結果を個票とexecutor evidenceへ記録し、reporterがresultを記述する。判断できない点がない場合もその旨を明記する。orchestratorが完了条件と参照関係をレビューしてから次の作成へ進む。

## 3. 作業内容

| No  | 作業                                               | 担当 | 状態 | メモ                   |
| --- | -------------------------------------------------- | ---- | ---- | ---------------------- |
| 1   | 先行成果と手本・執筆標準を読み、作成範囲を確認する | exec | open | 先行項目 PJR-0H02      |
| 2   | lpl-sampleをdraftで作成する                        | exec | open | 指定のkataだけを変更   |
| 3   | 静的検査と申し送りを記録する                       | exec | open | resultはreporterが記述 |
| 4   | 完了条件と他kataとの整合をレビューする             | orch | open | 次の段階への入力を確認 |

## 4. 対応結果

- [[edu-scratch:lpl-sample|宇宙船を着陸させよう！]] を、別題材の仮想的な 40 分授業の完成例として追加した。ねらい、使用機能、最低・標準・発展の完成形、活動、見取りを対応付け、開始から終了までの時間合計を 40 分にそろえた。
- [[edu-scratch:lpl-rulebook|活動別指導案 Rulebook]] の frontmatter に `sample: edu-scratch:lpl-sample` だけを追加した。本文の規定は変更していない。
- 根拠は修正済みの風船ゲーム指導案とコース計画に限定した。風船、得点、クローン、メッセージの具体値は転記せず、終盤の自由制作に既習内容を組み合わせる考え方だけを仮想の宇宙船ゲームへ一般化した。旧設計と、コース計画からリンクされる文書は読んでいない。
- 教材リポジトリは変更していない。判断できない点はない。Scratch の画面上の名称、端末ごとの操作、保存と再読込は、実施前に確認する対象として完成例へ明記した。

## 5. 関連ドキュメント

- [[prj-0001:pjr-xvr2-balloon-lesson-plan-revise]]：手本の指導案を修正した経緯
- `edu-scratch:lpl-rulebook`・`edu-scratch:lpl-sample`・`edu-scratch:lpl-template`・`edu-scratch:lpl-recipe`：本系列で作るkata（作成前の参照は仮置き）
