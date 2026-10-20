---
specdojo:
  id: prj-0001:pjr-m5sc-lesson-content-structure
  type: project
  status: draft
  rulebook: specdojo:pjr-rulebook
  part_of:
    - prj-0001:pjr-index
  item_type: decision
  item_status: open
  priority: medium
  owner: BA
  registered_at: "2026-10-19T11:37:02Z"
  due_on: "2026-10-31"
---

# PJR-M5SC 授業コンテンツの成果物とディレクトリ体系を決定する

## 1. 背景

coderdojo-lessonsのdocsの役割、教材成果物、配置先を複数案で比較し、採用するディレクトリ体系を決定する。

`coderdojo-lessons` は Scratch 等を使った小学生向け授業のコンテンツを格納するリポジトリである。現在は `docs/course-design/` にコース計画と各回の授業設計、`docs/presentations/` に講演資料と PowerPoint がある。担当は BA、判断期限は 2026-10-31 とする。

本項目では、成果物と格納ルールの比較・合意までを扱う。既存ファイルの移動やビルド設定の変更は、決定後のフォローアップとして扱う。

### 1.1. 調査範囲と現状

以下は [[prj-0001:pjr-pfhd-lesson-structure-comparison|PJR-PFHD]] で作成した判断材料を本個票へ集約したものであり、最終決定・承認を代行しない。ここでいう「推奨」は未承認の提案であり、ファイル移動・設定変更・生成物の削除は行っていない。

調査対象は `coderdojo-lessons` リポジトリのブランチ `exec/prj-0001-PJR-PFHD`、commit `6f58ebaaa601ee2b5c55930af9241f39f7dae6ea` である。観測した事実と提案を区別するため、現状は本節、以降は提案として記載する。

| 観測項目   | 現状                                                                                                                                                                                  |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| コース設計 | `docs/course-design/course-plan.md` と `010`〜`050` の5つの授業設計 Markdown がある。                                                                                                 |
| 講演       | `docs/presentations/community-event/010-balloon-game.md` と `community-event-slides.pptx` がある。                                                                                      |
| 教材・素材 | 調査時点では、開始用・完成見本の Scratch ファイル、児童配布用ファイル、画像・音声素材を格納するディレクトリはない。授業設計には完成見本・素材・テンプレートを用意する旨の記載がある。 |
| 生成       | `package.json` には Marp による HTML、PDF、PPTX の生成用スクリプトがあるが、対象の `lessons/01-sample/slides.md` は現状存在しない。既存 PPTX の編集元・生成手順は確認できない。       |
| 配置規約   | `docs/`、教材、共通素材、生成物の役割、命名、出典・利用条件、Git 管理を定めた規約は確認できない。                                                                                     |

## 2. 検討した選択肢

| 選択肢              | 内容                                                                      | 利点                                 | 懸念                                     |
| ------------------- | ------------------------------------------------------------------------- | ------------------------------------ | ---------------------------------------- |
| A：文書と教材を分離 | `docs/` に設計・運用文書、`lessons/` に授業別教材を配置                   | 文書と授業で使う教材の役割が明確     | 授業設計と教材を横断して探す必要がある   |
| B：授業ごとに集約   | `courses/<course>/lessons/<lesson>/` に指導案・スライド・素材・見本を集約 | 1授業の準備と再利用がしやすい        | 共通素材や単発イベントの配置ルールが必要 |
| C：成果物の種類別   | `docs/`・`slides/`・`worksheets/`・`projects/`・`assets/` に分類          | 種類ごとの編集・生成処理を揃えやすい | 1授業の関連ファイルが分散する            |

上記は比較候補であり、採用案は未決定。各案について、複数回のコース・単発授業・講演・Scratch 以外への展開を同じ条件で比較する。特定授業の探しやすさ、教材の再利用、共通素材の管理、正本と生成物の区別、ビルドの扱いやすさ、既存構成からの移行負担を評価する。

### 2.1. 成果物の検討候補

以下は必須化済みの成果物ではない。必要性と単位、利用者、編集する正本、生成物、各案での配置先を整理する。

| 成果物候補                 | 想定する用途・利用者       | 検討事項                                           |
| -------------------------- | -------------------------- | -------------------------------------------------- |
| コース計画                 | 授業全体を設計する担当者   | コース単位の管理と単発授業への対応                 |
| 指導案                     | 授業を準備・実施する講師   | 時間配分・準備・進行と児童向け資料の分離           |
| 投影スライド               | 講師と受講する児童・参加者 | Marp・Slidev 等の編集元と出力先                    |
| 児童向け教材               | 授業に参加する児童         | 手順書・ワークシート等の必要性と配布方法           |
| Scratch の開始用・完成見本 | 準備する講師と制作する児童 | 開始用と完成見本の区別、ファイル・外部リンクの扱い |
| 画像・音声素材             | 教材を作成・利用する人     | 授業専用素材と共通素材の配置、出典・利用条件       |
| 配布用生成物               | 授業・講演の参加者         | PDF・HTML・PPTX 等の保存先と Git 管理の要否        |

### 2.2. 決定の完了条件

- `docs/` と各ディレクトリの役割・格納対象が明文化される。
- 採用する成果物の種類、利用者、編集する正本、生成物、配置先が整理される。
- 複数回のコース・単発授業・講演・Scratch 以外への展開を複数案で比較する。
- 共通素材、命名、生成物の Git 管理、既存ファイルの移行方針を決める。
- 最終案の構成例・採用理由・不採用理由を記録し、利用者の承認を得る。

### 2.3. 共通の評価軸

3案を、特定の授業を準備する講師、横断的に再利用する教材作成者、生成を保守する担当者のいずれにも必要な次の軸で比較する。

1. 授業準備時に、設計・スライド・配布物・開始用・完成見本を一緒に見つけられるか。
2. 複数回コース、単発授業、講演、Scratch 以外の題材を無理なく表せるか。
3. 共通素材を重複させず、授業固有の素材との境界を保てるか。
4. 正本と HTML・PDF・PPTX 等の生成物を区別し、ビルド対象を特定しやすいか。
5. 既存の `docs/course-design/` と `docs/presentations/` から段階的に移せるか。
6. 命名・出典・利用条件を同じ場所で確認できるか。
7. 新しいツールや Scratch 以外の教材を追加しても、分類のためだけに大規模な再編をしなくてよいか。

### 2.4. 3案の構成例と比較

#### 2.4.1. A：文書と教材を分離する

`docs/` を設計・運用文書、`lessons/` を授業で使用する教材として明確に分ける案である。

```text
docs/
  courses/scratch-foundations/{course-plan.md,010-cat-and-mouse.md}
  sessions/2026-08-animation/{lesson-plan.md,facilitator-notes.md}
  presentations/community-event/{brief.md,balloon-game.md}
  operations/{authoring-guide.md,asset-policy.md}
lessons/
  scratch-foundations/010-cat-and-mouse/{slides.md,handout.md,starter.sb3,example.sb3,assets/}
  2026-08-animation/{slides.md,handout.md,starter.sb3,example.sb3,assets/}
  community-event/{slides.md,balloon-game.sb3,assets/}
  microbit-intro/{slides.md,handout.md,starter/,example/,assets/}
assets/shared/{images,audio,fonts}/
```

#### 2.4.2. B：授業ごとに集約する

コース・単発授業・講演を活動単位で分け、その直下に準備に必要な正本を集約する案である。`docs/` は複数の活動に共通する運用・方針・執筆文書だけに限定する。

```text
docs/
  operations/{authoring-guide.md,asset-policy.md,release-policy.md}
  curriculum/{teaching-principles.md,program-overview.md}
courses/
  scratch-foundations/
    course-plan.md
    lessons/010-cat-and-mouse/{lesson-plan.md,slides.md,handout.md,starter.sb3,example.sb3,assets/}
sessions/
  2026-08-animation/{lesson-plan.md,slides.md,handout.md,starter.sb3,example.sb3,assets/}
events/
  community-event/
    brief.md
    balloon-game/{facilitator-notes.md,slides.md,example.sb3,assets/}
activities/
  microbit-intro/{lesson-plan.md,slides.md,handout.md,starter/,example/,assets/}
assets/shared/{images,audio,fonts}/
```

#### 2.4.3. C：成果物の種類別に分類する

すべての活動の成果物を種類ごとに置く案である。

```text
docs/
  course-plans/scratch-foundations.md
  lesson-plans/{scratch-foundations-010-cat-and-mouse.md,2026-08-animation.md,microbit-intro.md}
  presentation-briefs/community-event.md
slides/{scratch-foundations-010-cat-and-mouse.md,2026-08-animation.md,community-balloon-game.md,microbit-intro.md}
handouts/{scratch-foundations-010-cat-and-mouse.md,2026-08-animation.md,microbit-intro.md}
projects/{scratch-foundations-010-cat-and-mouse/{starter.sb3,example.sb3},community-balloon-game/example.sb3,microbit-intro/{starter/,example/}}
assets/{shared/,scratch-foundations-010-cat-and-mouse/,2026-08-animation/,community-balloon-game/,microbit-intro/}
```

| 評価軸                 | A：文書と教材を分離                                   | B：授業ごとに集約                                                  | C：種類別                                    | 判断                       |
| ---------------------- | ----------------------------------------------------- | ------------------------------------------------------------------ | -------------------------------------------- | -------------------------- |
| 授業準備の見つけやすさ | 設計と教材を往復する。                                | 一活動分の正本を1か所で確認できる。                                | 同じ授業のファイルを複数ディレクトリで探す。 | Bが最も適する。            |
| 4種類の活動への対応    | 可能だが、文書と教材の対応表が必須。                  | `courses`、`sessions`、`events`、`activities` で自然に分けられる。 | 接頭辞・命名で活動を復元する必要がある。     | Bが最も明快。              |
| 共通素材               | `assets/shared/` で扱いやすい。                       | 共有素材と授業固有素材を明確に分離できる。                         | 一元化しやすいが、各授業との関係が薄い。     | A・Bが適する。             |
| 正本と生成物           | 教材側に生成物を置くと設計との対応が遠い。            | 活動内で `slides.md` と `dist/` を対にできる。                     | 生成物を種類別にできるが対応が分散する。     | Bが最も追跡しやすい。      |
| 移行負担               | 既存 `docs/` を保ちつつ教材だけ追加できる。           | 既存文書を活動単位へ整理するため中程度。                           | 全成果物の命名・リンク更新が広範囲になる。   | Aが最小、Bは段階移行可能。 |
| 他技術への展開         | `lessons/` が特定技術の教材置場に見えるおそれがある。 | 活動単位なので Scratch、micro:bit、Web 等を同列に扱える。          | 種類が増えるほどルート直下の分類が増える。   | Bが最も柔軟。              |

### 2.5. 推奨案：Bを基調とする活動単位の集約（未承認）

未承認の推奨は B である。講師が実施前に必要とするものを活動ディレクトリ内で完結させ、コース全体の設計はコース直下、複数活動に共通する方針だけを `docs/` に残す。現在のコース設計が各回の詳細な進行・準備・配布用まとめを含むこと、講演資料が講演ごとにまとまっていることに合う。

`docs/` の役割は「授業そのものではなく、複数活動を横断する説明・運用文書」である。したがって、教育方針、作成・公開・ライセンス運用、全体カリキュラム、リポジトリ利用案内を格納する。講師がある一回を準備するための指導案、投影スライド、児童向け教材、Scratch プロジェクト、専用素材は `docs/` ではなく当該活動の配下に置く。

A は既存 `docs/` を温存しやすい一方、授業を準備するたびに二か所を対応付ける必要があり、今後追加する開始用・完成見本との関係が分散するため勧めない。C は同種のファイルを一括処理する場合には便利だが、教育現場で最も頻度の高い「特定の授業を準備する」作業に合わず、命名規約への依存が大きいため勧めない。

#### 2.5.1. 成果物の配置と管理単位

| 成果物           | 主な利用者               | 正本                                           | 生成物                      | 推奨配置先                                                    | 必要性・扱い                                                                              |
| ---------------- | ------------------------ | ---------------------------------------------- | --------------------------- | ------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| コース計画       | カリキュラム担当者、講師 | `course-plan.md`                               | 原則なし                    | `courses/scratch-foundations/course-plan.md`                  | 複数回コースでは必須。単発・講演には作らない。                                            |
| 指導案           | 講師、補助者             | `lesson-plan.md` または `facilitator-notes.md` | 原則なし                    | 活動ディレクトリの `lesson-plan.md`                           | 実施する活動では必須。講演は進行用メモを `facilitator-notes.md` とする。                  |
| 投影スライド     | 講師、参加者             | `slides.md`、または採用ツールの編集元          | HTML、PDF、PPTX             | 活動ディレクトリの `slides/` と `dist/`                       | 投影がある場合に必要。正本と出力を分ける。                                                |
| 児童向け教材     | 児童、保護者、講師       | `handout.md`、ワークシート編集元               | PDF、印刷用 HTML            | 活動ディレクトリの `handouts/` と `dist/`                     | 手順書・配布物が必要な活動だけ作る。講師向け資料と混在させない。                          |
| 開始用・完成見本 | 児童、講師               | `starter/`、`example/` のプロジェクトファイル  | 必要時のみ配布用コピー      | 活動ディレクトリの `projects/starter/` と `projects/example/` | Scratch 等の実行可能な教材を用いる活動では推奨。役割をファイル名で区別する。              |
| 素材             | 教材作成者、講師         | 画像・音声等の原ファイル                       | 最適化版・変換版            | 専用は活動ディレクトリの `assets/`、共通は `assets/shared/`   | 再利用範囲により置場を選ぶ。出典・利用条件を添える。                                      |
| 配布用生成物     | 講師、参加者             | 上記の正本                                     | PDF、HTML、PPTX、印刷データ | 正本に対応する活動ディレクトリの `dist/`                      | 正本から再生成できるものは原則 Git 管理しない。再現不能な配布物は例外を記録して管理する。 |

活動ディレクトリは、たとえば `courses/scratch-foundations/lessons/010-cat-and-mouse`、`sessions/2026-08-animation`、`events/community-event/balloon-game`、`activities/microbit-intro` を指す。講演に Scratch 以外の実演がある場合も、`events/` 配下で `projects/` 等を同じ規約で持てる。

#### 2.5.2. 命名・共通素材・出典・生成物

- ディレクトリ ID は小文字の kebab-case とし、コース内の回は3桁連番を先頭に置く。例は `010-cat-and-mouse`、単発は実施日を含む `2026-08-animation` とする。日付を ID に含めるかは再開催の扱いを決めてから統一する。
- 活動内では固定名（`lesson-plan.md`、`slides.md`、`handout.md`、`starter/`、`example/`、`assets/`、`dist/`）を使う。これにより、パスから役割を推測できる。
- 二つ以上の活動で使う素材だけを `assets/shared/` に移し、活動固有素材はその活動に残す。共有素材の各ディレクトリには用途・出典・利用条件・加工の可否を記した `README.md` を置く。
- 外部素材はファイルごと、または由来が同じ一群ごとに、取得元 URL、作者・権利者、ライセンス、取得日、改変有無、教材での利用範囲を `ATTRIBUTION.md` に記録する。利用条件が不明な素材は配布物に含めず、確認が終わるまで採用保留とする。
- `dist/` は `.gitignore` の対象を原則とする。ソースを失うと再現できない既存 PPTX や、リリース済み配布物を Git 管理する場合だけ、対応する正本・生成コマンド・公開日・例外理由を `dist/README.md` またはリリース記録に残す。大きなバイナリを継続管理する場合は Git LFS の採否を別途決める。

## 3. 決定内容

未決定。2.5 節の B 案は未承認の推奨であり、利用者の承認後に採択内容を記録する。

## 4. 採択理由

- 未確定。比較・推奨理由は 2.4〜2.5 節に記録した。採用案の承認後に最終的な採択理由を記録する。

## 5. 承認

| 項目     | 内容   |
| -------- | ------ |
| 決定者   | _TODO_ |
| 決定日   | _TODO_ |
| 承認方式 | _TODO_ |
| 証跡     | _TODO_ |

- 承認方式は `commit` または `PR` を記載する。`PR` の場合は証跡に PR URL と merge SHA を本文テキストで記載する。
- 不可逆・高リスク・framework schema 破壊的変更に該当する決定は `PR` 方式で承認する。

## 6. 影響範囲とフォローアップ

| 項目       | 内容                                                                                                                                                |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| 影響範囲   | `coderdojo-lessons` の文書・教材・素材・生成物の配置と案内、関連するビルド設定                                                                      |
| 必要な対応 | BA が成果物と利用場面を整理し、各案の構成例・比較を作成する。利用者と最終案を合意後、ファイル移動・リンク修正・生成設定等の移行作業を別途具体化する |
| 追跡先     | 本項目。移行作業の項目は決定後に起票を検討する（未起票）                                                                                            |

### 6.1. 段階的な移行方針（未実施）

1. PJR-M5SC で配置規約、`dist/` の Git 方針、既存 PPTX の正本を承認する。承認前はパス変更しない。
2. 新規の授業を B の構成で1件作り、講師が準備に必要なファイルを迷わず見つけられるか試行する。
3. 既存ファイルを棚卸しし、各ファイルを「正本」「生成物」「共通素材」「活動固有素材」「不要候補」に分類する。Scratch の開始用・完成見本は、存在確認後にのみ移行対象にする。
4. 参照リンクと Marp の入力・出力設定を活動ディレクトリごとに更新し、生成が再現できることを確認する。
5. 小さな単位で移し、リンク・生成・配布手順を確認した後に次の活動へ進む。旧パスの削除は利用者の確認と参照切れ確認の後に行う。

| 現在のパス                                                      | 承認後の候補パス                                                            | 移行時の確認                                                         |
| --------------------------------------------------------------- | --------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `docs/course-design/course-plan.md`                             | `courses/scratch-foundations/course-plan.md`                                | コース ID とコース名を確定する。                                     |
| `docs/course-design/010-introduction.md`〜`050-mini-contest.md` | `courses/scratch-foundations/lessons/010-cat-and-mouse/lesson-plan.md` など | 各回のスライド・配布物・開始用・完成見本の有無を棚卸しする。         |
| `docs/presentations/community-event/010-balloon-game.md`      | `events/community-event/balloon-game/facilitator-notes.md`                | 講演名・活動 ID と投影資料の対応を確認する。                         |
| `docs/presentations/community-event/community-event-slides.pptx`  | `events/community-event/balloon-game/slides/` または `dist/`              | 編集元か生成物か、再生成手順、配布対象、バイナリ管理方針を確認する。 |

### 6.2. 確認・決定が必要な事項

1. B を採用するか、または移行負担を優先して A を採るか。
2. `courses`、`sessions`、`events`、`activities` の4分類を採るか。単発授業の再開催を同じ活動 ID にまとめるか、日付ごとに分けるか。
3. 各既存授業に開始用・完成見本・児童向け教材を実際に用意するか、どれを Git 管理するか。
4. Marp の正本の置場、生成コマンド、PDF・HTML・PPTX の保管方針をどう定めるか。現行スクリプトが参照する存在しない `lessons/01-sample/slides.md` をどう扱うか。
5. 既存 `community-event-slides.pptx` の編集元・権利・再生成可否と、バイナリを継続管理する必要性。
6. 共通素材のライセンス記録様式、外部素材の許諾確認責任者、Git LFS を採用する条件。
7. 推奨案 B の活動ディレクトリ内の配置で、2.5.1 の配置表（`slides/`・`handouts/`・`projects/starter/`・`projects/example/`）と、2.4.2 の構成例・2.5.2 の命名規約（`slides.md`・`handout.md`・`starter/`・`example/`）が一致していない。どちらの形を採るか。（PJR-PFHD のレビューで指摘）
8. 調査時点（`6f58eba`）の後、`coderdojo-lessons` でコース構成の全5回への改訂（PJR-W9MV）と Slidev の追加があった。確認事項4は Slidev も含めて見直す。（PJR-PFHD のレビューで指摘）

承認後の実作業（ファイル移動、リンク修正、ビルド設定、`.gitignore`、LFS、配布物の生成）は別タスクとして計画する。

## 7. 関連ドキュメント

- [[prj-0001:pjr-index]]
- [[prj-0001:pjr-pfhd-lesson-structure-comparison]]

現状確認の参照先（`coderdojo-lessons` 内のパス）：

- `README.md`
- `docs/course-design/course-plan.md`
- `docs/course-design/010-introduction.md`
- `docs/presentations/community-event/010-balloon-game.md`
- `package.json`
