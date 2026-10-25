---
specdojo:
  id: prj-0001:pjr-yzc2-lpl-recipe
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
  registered_at: "2026-10-25T04:17:24Z"
  due_on: "2026-10-31"
  derived_from:
    - PJR-0032
  approach: recipe-authoring
  targets:
    - edu-scratch:lpl-recipe
  sources:
    - coderdojo-lessons:courses/scratch-basic/lessons/020-balloon-game/lesson-plan.md
    - coderdojo-lessons:docs/course-design/course-plan.md
    - edu-scratch:lpl-rulebook
    - edu-scratch:lpl-sample
    - edu-scratch:lpl-template
---

# PJR-YZC2 指導案のrecipeを作る

## 1. 概要

先行する指導案の型と手本を基に、入力の収集からねらい・完成形・時間配分・見取りを組み立てる自己完結した手順edu-scratch:lpl-recipeをdraftで作る。

## 2. 完了条件

- PJR-0H02・PJR-W05J・PJR-0032の作成・レビューが済んでから実行する。実行前にorchestratorがlpl-rulebook・lpl-sample・lpl-templateをsourcesへ追加する。
- `docs/ja/specdojo/recipes/edu-scratch/lpl-recipe.md` を ID `edu-scratch:lpl-recipe`、`type: recipe`、`status: draft`、`rulebook: edu-scratch:lpl-rulebook`、`sample: edu-scratch:lpl-sample` で作り、recipe-authoring-standardに沿う。
- 使い方、入力情報、全体の作成手順、各章の書き方、良い例／悪い例、レビュー観点、仕上げチェックを含む。入力にはコースでの位置づけ・対象経験・時間・到達目標・利用環境・教材制約・使える素材・実機確認状況等を示し、未確定なら確認またはラベル付けする。
- ねらいから観察可能な完成形と見取りを決め、必要な操作を段階化し、準備・時間・改造・合流点・遅れた場合の支援と省略候補・つまずき・保存共有へ落とす判断順を示す。授業の流れの時間合計と、最低ラインを含む到達条件の整合を検査する手順を含む。
- 各章に書き手が答える問いと具体化のコツを置き、同じ観点で比較した良い例／悪い例と理由を表で示す。章立て・記述品質の規約一覧をrulebookから複製しない。
- recipe-guided実行ではrecipe単体で読まれるため、本文にrulebook／sample／templateへの参照や照合指示を置かない。章立てや書き方をrecipe自身の言葉で示し、frontmatterだけでrulebookとsampleの対応を宣言する。
- rulebookのfrontmatterの `recipe` だけを `edu-scratch:lpl-recipe` に更新し、rulebookの他の規定・sample・templateは変更しない。
- 根拠は修正済みの `coderdojo-lessons:courses/scratch-basic/lessons/020-balloon-game/lesson-plan.md` と `coderdojo-lessons:docs/course-design/course-plan.md` とする。第2回の旧設計 `docs/course-design/020-animation.md` やコース計画からリンクされる旧設計を根拠にしない。未確認のリンク先を読んだ事実を捏造しない。
- 教材リポジトリはすべて読み取り専用とし、このリポジトリの指定kata・個票・実行記録以外は変更しない。新規kataはdraftのままとする。
- 変更したMarkdownのPrettierとMarkdownlint、`git diff --check` の適用される検査を通す。依存パッケージは新規導入しない。
- 根拠・一般化の範囲・判断できない点・静的検査結果を個票とexecutor evidenceへ記録し、reporterがresultを記述する。判断できない点がない場合もその旨を明記する。orchestratorが完了条件と参照関係をレビューしてから次の作成へ進む。

## 3. 作業内容

| No  | 作業                                               | 担当 | 状態 | メモ                   |
| --- | -------------------------------------------------- | ---- | ---- | ---------------------- |
| 1   | 先行成果と手本・執筆標準を読み、作成範囲を確認する | exec | open | 先行項目 PJR-0032      |
| 2   | lpl-recipeをdraftで作成する                        | exec | open | 指定のkataだけを変更   |
| 3   | 静的検査と申し送りを記録する                       | exec | open | resultはreporterが記述 |
| 4   | 完了条件と他kataとの整合をレビューする             | orch | open | 次の段階への入力を確認 |

## 4. 対応結果

_TODO_: 完了時に、実施内容・成果物・残課題を記載する。未完了の場合は `-` とする。

## 5. 関連ドキュメント

- [[prj-0001:pjr-xvr2-balloon-lesson-plan-revise]]：手本の指導案を修正した経緯
- `edu-scratch:lpl-rulebook`・`edu-scratch:lpl-sample`・`edu-scratch:lpl-template`・`edu-scratch:lpl-recipe`：本系列で作るkata（作成前の参照は仮置き）
