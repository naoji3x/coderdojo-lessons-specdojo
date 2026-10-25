---
specdojo:
  id: prj-0001:pjr-0h02-lpl-rulebook
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
  registered_at: "2026-10-25T04:16:43Z"
  due_on: "2026-10-31"
  derived_from:
    - PJR-XVR2
  approach: rulebook-authoring
  targets:
    - edu-scratch:lpl-rulebook
  sources:
    - coderdojo-lessons:courses/scratch-basic/lessons/020-balloon-game/lesson-plan.md
    - coderdojo-lessons:docs/course-design/course-plan.md
---

# PJR-0H02 指導案のrulebookを作る

## 1. 概要

修正済みの第2回指導案とコース計画を手本に、指導案の構成・記載条件・禁止事項を一般化したedu-scratch:lpl-rulebookをdraftで作る。

## 2. 完了条件

- `docs/ja/specdojo/rulebooks/edu-scratch/lpl-rulebook.md` を ID `edu-scratch:lpl-rulebook`、`type: rulebook`、`status: draft`、`target_format: markdown` で作る。rulebook-authoring-standard と対応 schema に沿う。
- 活動ごとの `courses/<course-id>/lessons/<nnn>-<activity-id>/lesson-plan.md` を対象とし、授業概要、前後の位置づけ、完成形、事前準備、時間付きの流れ、進め方と進度差への対応、評価・見取り、つまずき、まとめ・次回接続の目的と記載条件を整理する。章番号や表の具体的配置を将来のtemplateと整合させられる粒度にする。
- ねらい・使用機能・最低／標準／発展の完成形・学習活動・見取りの対応、授業全体と区間の時間の整合、必要な初期化・終了・再開と準備の対応を確認できる規定にする。扱わない概念を手本から勝手に追加しない。
- 先生と操作してから改造する進め方、進度差への対応、時間不足時に残す最低ライン、保存・共有の扱いを活動ごとの判断事項として扱う。45分、特定の4段階、全員待ち、途中プロジェクト非配布、風船や得点10を全活動共通の規則にはしない。
- 手本にない規則や判断できない点を確定事実として書かず、根拠と未確定事項を個票およびevidenceに日本語で記録する。rulebook本文の規定と説明・例を区別し、完成例全文や内容の作り方はsampleとrecipeに委ねる。
- sample・template・recipeは必要と合意済みだが未作成のため、初回のrulebook frontmatterでは未整備を表す項目省略とし、未作成の完全IDへのリンクや `not-needed` は使わない。後続各todoが自分のkataを作った段階で対応フィールドだけを完全IDへ更新する。
- 根拠は修正済みの `coderdojo-lessons:courses/scratch-basic/lessons/020-balloon-game/lesson-plan.md` と `coderdojo-lessons:docs/course-design/course-plan.md` とする。第2回の旧設計 `docs/course-design/020-animation.md` やコース計画からリンクされる旧設計を根拠にしない。未確認のリンク先を読んだ事実を捏造しない。
- 教材リポジトリはすべて読み取り専用とし、このリポジトリの指定kata・個票・実行記録以外は変更しない。新規kataはdraftのままとする。
- 変更したMarkdownのPrettierとMarkdownlint、`git diff --check` の適用される検査を通す。依存パッケージは新規導入しない。
- 根拠・一般化の範囲・判断できない点・静的検査結果を個票とexecutor evidenceへ記録し、reporterがresultを記述する。判断できない点がない場合もその旨を明記する。orchestratorが完了条件と参照関係をレビューしてから次の作成へ進む。

## 3. 作業内容

| No  | 作業                                               | 担当 | 状態 | メモ                   |
| --- | -------------------------------------------------- | ---- | ---- | ---------------------- |
| 1   | 先行成果と手本・執筆標準を読み、作成範囲を確認する | exec | open | 先行項目 PJR-XVR2      |
| 2   | lpl-rulebookをdraftで作成する                      | exec | open | 指定のkataだけを変更   |
| 3   | 静的検査と申し送りを記録する                       | exec | open | resultはreporterが記述 |
| 4   | 完了条件と他kataとの整合をレビューする             | orch | open | 次の段階への入力を確認 |

## 4. 対応結果

_TODO_: 完了時に、実施内容・成果物・残課題を記載する。未完了の場合は `-` とする。

## 5. 関連ドキュメント

- [[prj-0001:pjr-xvr2-balloon-lesson-plan-revise]]：手本の指導案を修正した経緯
- `edu-scratch:lpl-rulebook`・`edu-scratch:lpl-sample`・`edu-scratch:lpl-template`・`edu-scratch:lpl-recipe`：本系列で作るkata（作成前の参照は仮置き）
