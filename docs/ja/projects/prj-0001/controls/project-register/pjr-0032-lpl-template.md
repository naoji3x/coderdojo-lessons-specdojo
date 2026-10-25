---
specdojo:
  id: prj-0001:pjr-0032-lpl-template
  type: project
  status: draft
  rulebook: specdojo:pjr-rulebook
  part_of:
    - prj-0001:pjr-index
  item_type: todo
  item_status: open
  priority: medium
  difficulty: hard
  owner: BA
  registered_at: "2026-10-25T04:17:10Z"
  due_on: "2026-10-31"
  derived_from:
    - PJR-W05J
  approach: template-authoring
  targets:
    - edu-scratch:lpl-template
  sources:
    - coderdojo-lessons:courses/scratch-basic/lessons/020-balloon-game/lesson-plan.md
    - coderdojo-lessons:docs/course-design/course-plan.md
---

# PJR-0032 指導案のtemplateを作る

## 1. 概要

先行するlpl-rulebookとlpl-sampleに基づき、新しい活動の指導案を書き始める雛形edu-scratch:lpl-templateをdraftで作る。

## 2. 完了条件

- PJR-0H02とPJR-W05Jの作成・レビューが済んでから実行する。実行前にorchestratorがlpl-rulebookとlpl-sampleをsourcesへ追加する。
- `docs/ja/specdojo/templates/edu-scratch/lpl-template.md` を ID `edu-scratch:lpl-template`、`type: template`、`status: draft` で作り、template-authoring-standardに沿う。
- rulebookの章の目的・必須任意に沿い、概要からまとめまでの章構成、授業の流れ、完成形と見取り、つまずき対応などの表と記入欄を用意する。時間・題材・対象・機能・進行方法・保存共有を `_UPPER_SNAKE_` と `_TODO_` で活動ごとに埋められるようにし、先生の説明や特定の45分構成等を固定値にしない。
- 任意の章・分岐と、教材化時に除去する作成者向け案内を明示する。内容設計の長い問いや手順はrecipeへ委ね、何をどこに記入するかが分かる雛形にする。
- 教材リポジトリのlesson-plan.mdは現状SpecDojo frontmatterを持たないため、kata自身のメタ情報と生成する教材本文を混同しない。kataメタ情報を教材へそのままコピーする指示や、根拠のないproject ID・rulebookメタ情報の追加をしない。
- rulebookのfrontmatterの `template` だけを `edu-scratch:lpl-template` に更新し、rulebookの他の規定とsampleは変更しない。
- 根拠は修正済みの `coderdojo-lessons:courses/scratch-basic/lessons/020-balloon-game/lesson-plan.md` と `coderdojo-lessons:docs/course-design/course-plan.md` とする。第2回の旧設計 `docs/course-design/020-animation.md` やコース計画からリンクされる旧設計を根拠にしない。未確認のリンク先を読んだ事実を捏造しない。
- 教材リポジトリはすべて読み取り専用とし、このリポジトリの指定kata・個票・実行記録以外は変更しない。新規kataはdraftのままとする。
- 変更したMarkdownのPrettierとMarkdownlint、`git diff --check` の適用される検査を通す。依存パッケージは新規導入しない。
- 根拠・一般化の範囲・判断できない点・静的検査結果を個票とexecutor evidenceへ記録し、reporterがresultを記述する。判断できない点がない場合もその旨を明記する。orchestratorが完了条件と参照関係をレビューしてから次の作成へ進む。

## 3. 作業内容

| No  | 作業                                               | 担当 | 状態 | メモ                   |
| --- | -------------------------------------------------- | ---- | ---- | ---------------------- |
| 1   | 先行成果と手本・執筆標準を読み、作成範囲を確認する | exec | open | 先行項目 PJR-W05J      |
| 2   | lpl-templateをdraftで作成する                      | exec | open | 指定のkataだけを変更   |
| 3   | 静的検査と申し送りを記録する                       | exec | open | resultはreporterが記述 |
| 4   | 完了条件と他kataとの整合をレビューする             | orch | open | 次の段階への入力を確認 |

## 4. 対応結果

_TODO_: 完了時に、実施内容・成果物・残課題を記載する。未完了の場合は `-` とする。

## 5. 関連ドキュメント

- [[prj-0001:pjr-xvr2-balloon-lesson-plan-revise]]：手本の指導案を修正した経緯
- `edu-scratch:lpl-rulebook`・`edu-scratch:lpl-sample`・`edu-scratch:lpl-template`・`edu-scratch:lpl-recipe`：本系列で作るkata（作成前の参照は仮置き）
