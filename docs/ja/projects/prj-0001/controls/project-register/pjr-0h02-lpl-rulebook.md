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
| 1   | 先行成果と手本・執筆標準を読み、作成範囲を確認する | exec | done | 先行項目 PJR-XVR2      |
| 2   | lpl-rulebookをdraftで作成する                      | exec | done | 指定のkataだけを変更   |
| 3   | 静的検査と申し送りを記録する                       | exec | done | resultはreporterが記述 |
| 4   | 完了条件と他kataとの整合をレビューする             | orch | done | 次の段階への入力を確認 |

## 4. 対応結果

### 統合後のレビューと確認結果

- 実施・確認記録（orchestrator、2026-10-25）：`3a05cc3` の統合内容を確認。修正済み指導案とコース計画から、授業概要からまとめまでの役割、対応関係、時間整合、進度差・実機確認の規定を一般化した。45分・風船・全員待ち等は活動固有とし、作成時点で未整備のsample・template・recipe参照は省略した。後続3件により対応する参照が追加され、現在はいずれも実在する。
- 統合後レビュー：4点とも `draft` で、rulebookからsample・template・recipeが実在するIDで参照され、sampleとrecipeは同じrulebookを参照する。9章の指導案の役割と、ねらい・完成形・活動・見取り・時間不足時の優先順位が対応している。今回の作成範囲で後続作業を妨げる不整合は見つからなかった。
- 手本は修正済みの第2回指導案1件とコース計画に限る。別の授業や授業実践での有効性・所要時間を検証したわけではなく、sampleの40分や対象経験は仮想設定である。手本から妥当性を断定できない授業条件・実機操作・所要時間は、利用時に確認する。旧設計は根拠にしていない。教材リポジトリは未変更。
- 統合後に4つのkataのPrettier・Markdownlint・`node tools/check-slidev-files.mjs`・`git diff --check` を実行して通過し、`npx specdojo exec validate --project prj-0001` も通過した。schedule未設定の警告は本作業の対象外。rulebookとrecipeは `kata list` でrepository由来として解決できることも確認した。plan/resultの保存を確認し、作成者向けのtemplateのプレースホルダーを除き、実行結果に未記入の雛形は残していない。

### 実行時の記録

- execの作成結果と統合後レビューは以下に記録した。

## 5. 関連ドキュメント

- [[prj-0001:pjr-xvr2-balloon-lesson-plan-revise]]：手本の指導案を修正した経緯
- `edu-scratch:lpl-rulebook`・`edu-scratch:lpl-sample`・`edu-scratch:lpl-template`・`edu-scratch:lpl-recipe`：本系列で作るkata（作成前の参照は仮置き）
