---
# 教材の lesson-plan.md に写すときは `specdojo:` の欄と作成者向け案内を削除する。教材の lesson-plan.md は SpecDojo の frontmatter を持たない。
specdojo:
  id: edu-scratch:lpl-template
  type: template
  status: draft
---

<!--
作成者向け（教材化時にこの案内と各節の作成者向けコメントを削除する）：

- この雛形は、活動ごとの指導案本文だけを作る。kata の `specdojo:` メタ情報、project ID、rulebook のメタ情報を教材へ追加しない。
- 題材・問い・制作手順・時間配分の内容設計は recipe と活動の根拠で決める。この雛形では、決めた内容をどこに記入するかだけを示す。
- `_UPPER_SNAKE_` と _TODO_ を活動に合う値で埋める。不要な任意分岐は、その案内を含めて削除する。
-->

# _ACTIVITY_TITLE_

## 1. 授業の概要

### 1.1. 対象と所要時間

- 対象：_LEARNERS_
- 所要時間：_LESSON_DURATION_

### 1.2. テーマ

`_ACTIVITY_THEME_`

### 1.3. 授業のねらい

- _LEARNING_GOAL_1_
- _LEARNING_GOAL_2_
- _TODO_: 活動で確かめるねらいを追加する。

### 1.4. 使用する主な機能と作品での役割

| 機能        | 作品での役割     | 対応するねらい    |
| ----------- | ---------------- | ----------------- |
| _FEATURE_1_ | _FEATURE_ROLE_1_ | _LEARNING_GOAL_1_ |
| _TODO_      | _TODO_           | _TODO_            |

## 2. 授業の位置づけ

<!-- 作成者向け：確認したコース計画の範囲だけを記入する。未確認のリンク先や旧設計を根拠にしない。 -->

`_PREVIOUS_ACTIVITY_CONNECTION_`

`_NEXT_ACTIVITY_CONNECTION_OR_NOT_APPLICABLE_`

## 3. 完成する作品

`_WORK_BEHAVIOR_`

### 3.1. 最低完成形

- _MINIMUM_COMPLETION_1_
- _TODO_: 時間が不足しても残す、観察または説明で確かめられる到達を記入する。

### 3.2. 標準完成形

- _STANDARD_COMPLETION_1_
- _TODO_: ねらいと主な機能に対応する到達を記入する。

### 3.3. 発展形（任意）

<!-- 作成者向け：発展を設けない活動では、この小節を「発展形は設けない：_REASON_」へ置き換える。 -->

- _EXTENSION_COMPLETION_1_
- _TODO_: 標準完成形を壊さずに選べる工夫と、説明または比較することを記入する。

## 4. 事前準備

### 4.1. 教師用の完成見本と実機確認

- _MODEL_PROJECT_CHECK_
- _DEVICE_OR_ENVIRONMENT_CHECK_
- _TODO_: 開始・終了・再開に必要な状態と、授業前に確認する事項を記入する。

### 4.2. 開始用プロジェクト、素材、端末

<!-- 作成者向け：開始用プロジェクトを使わない場合は、その理由と代わりの準備を記入する。途中段階のプロジェクトを配るかどうかも活動ごとに判断する。 -->

| 準備物・環境       | 用意する内容                          | 授業前の確認                  |
| ------------------ | ------------------------------------- | ----------------------------- |
| 開始用プロジェクト | _STARTER_PROJECT_CONTENT_OR_NOT_USED_ | _STARTER_PROJECT_CHECK_       |
| 素材・端末         | _MATERIALS_AND_DEVICES_               | _MATERIALS_AND_DEVICES_CHECK_ |
| _TODO_             | _TODO_                                | _TODO_                        |

## 5. 授業の流れ

<!-- 作成者向け：区間の時間を合計し、所要時間と一致することを確認する。区間数や導入・制作・発展・まとめの配分を固定しない。 -->

| 時間          | 学習内容・活動        | 学習者の操作・動作確認       | 指導上の留意点    |
| ------------- | --------------------- | ---------------------------- | ----------------- |
| _TIME_SLOT_1_ | _LEARNING_ACTIVITY_1_ | _LEARNER_ACTION_AND_CHECK_1_ | _TEACHING_NOTE_1_ |
| _TIME_SLOT_2_ | _LEARNING_ACTIVITY_2_ | _LEARNER_ACTION_AND_CHECK_2_ | _TEACHING_NOTE_2_ |
| _TODO_        | _TODO_                | _TODO_                       | _TODO_            |

区間の合計：_TOTAL_DURATION_（所要時間 _LESSON_DURATION_ と _MATCHES_OR_REVISE_）

## 6. 進め方と進度差への対応

<!-- 作成者向け：この節は必須。次の分岐から活動に合うものを残し、選ばなかった分岐と案内を教材化時に削除する。 -->

### 6.1. 教師の提示と学習者の操作を組み合わせる場合（任意）

`_TEACHER_GUIDANCE_AND_LEARNER_WORKFLOW_`

| 到達状況         | 次に行うこと                        | 支援または挑戦                        |
| ---------------- | ----------------------------------- | ------------------------------------- |
| 先にできた学習者 | _EARLY_FINISHER_NEXT_STEP_          | _EARLY_FINISHER_SUPPORT_OR_CHALLENGE_ |
| 遅れている学習者 | _LEARNER_NEEDING_SUPPORT_NEXT_STEP_ | _LEARNER_NEEDING_SUPPORT_             |

### 6.2. 別の進め方を採る場合（任意）

`_ALTERNATIVE_INSTRUCTION_METHOD_`

`_PROGRESS_DIFFERENCE_RESPONSE_`

### 6.3. 時間が不足した場合の優先順位

- 残す最低完成形：_MINIMUM_COMPLETION_TO_KEEP_
- 短縮または後回しにする活動：_ACTIVITIES_TO_SHORTEN_OR_DEFER_

## 7. 評価・見取り

| 到達の目安           | 作品・操作・説明・振り返りで見ること | 対応する授業の流れ         |
| -------------------- | ------------------------------------ | -------------------------- |
| 最低完成形           | _MINIMUM_EVIDENCE_                   | _MINIMUM_FLOW_REFERENCE_   |
| 標準完成形           | _STANDARD_EVIDENCE_                  | _STANDARD_FLOW_REFERENCE_  |
| 発展形（設ける場合） | _EXTENSION_EVIDENCE_                 | _EXTENSION_FLOW_REFERENCE_ |

## 8. 声かけとつまずきへの対応

<!-- 作成者向け：活動で実際に使う機能や作品の動作に結び付ける。未確認のブロック名、値、端末挙動を断定しない。 -->

| 場面      | 声かけ     | 確認する順序または次の試行 | 支援        |
| --------- | ---------- | -------------------------- | ----------- |
| _SCENE_1_ | _PROMPT_1_ | _CHECK_OR_TRY_1_           | _SUPPORT_1_ |
| _SCENE_2_ | _PROMPT_2_ | _CHECK_OR_TRY_2_           | _SUPPORT_2_ |
| _TODO_    | _TODO_     | _TODO_                     | _TODO_      |

## 9. まとめと次回へのつなぎ

### 9.1. 振り返りと次回へのつなぎ

`_REFLECTION_AND_NEXT_CONNECTION_`

### 9.2. 保存・共有の扱い

<!-- 作成者向け：保存・共有を行う場合と行わない場合のいずれかを残し、選ばなかった分岐と案内を教材化時に削除する。 -->

- 保存・共有を行う場合：_SAVE_FORMAT_OR_LOCATION_ に _SAVE_OR_SHARE_TIMING_ で保存し、_AUDIENCE_AND_SHARING_METHOD_ と共有する。
- 保存・共有を行わない場合：_REASON_NOT_TO_SAVE_OR_SHARE_。授業での扱いは _ALTERNATIVE_HANDLING_ とする。
