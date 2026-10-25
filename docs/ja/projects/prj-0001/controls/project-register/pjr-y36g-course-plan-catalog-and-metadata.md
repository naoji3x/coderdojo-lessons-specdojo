---
specdojo:
  id: prj-0001:pjr-y36g-course-plan-catalog-and-metadata
  type: project
  status: ready
  rulebook: specdojo:pjr-rulebook
  part_of:
    - prj-0001:pjr-index
  item_type: todo
  item_status: done
  priority: medium
  owner: BA
  registered_at: "2026-10-25T09:08:29Z"
  due_on: "2026-10-31"
  completed_at: "2026-10-25T10:35:41Z"
  conclusion: コース計画の移動、カタログと既存教材の修飾なしID・依存参照の整合をレビューし、検証と全19ページの表示確認を満たしたため完了とする。
  derived_from:
    - PJR-VD0X
---

# PJR-Y36G コース計画を教材配下へ移動しカタログと既存教材のメタ情報を整える

## 1. 概要

先行項目 [[prj-0001:pjr-vd0x-teaching-artifact-metadata-kata|PJR-VD0X]] の完了・レビュー後に着手する。

先行todoのkataレビュー後に、宣言済み教材リポジトリcoderdojo-lessonsのコース計画を教材配下へ配置し、カタログと実在する教材のメタ情報を整える。未作成の第1・3・4・5回の教材本文は作らない。

## 2. 完了条件

- 先行する教材メタ情報kataの整備・レビューが完了してから実行する。更新済みの規約に従い、成果物固有のメタ情報を扱う。
- coderdojo-lessons/docs/course-design/course-plan.mdをcourses/scratch-basic/course-plan.mdへ移動する。本文の学習内容・45分構成・コース方針は変更せず、移動に必要な相対リンクとメタ情報だけを修正する。旧設計の指導案を根拠へ無条件に取り込まない。
- READMEと現行カタログ・今後の実行入力などの有効な参照を新パスへ更新し、移動先からリンクが解決できることを確認する。過去の完了済み個票・イベント・plan/resultに記録された当時のパスは監査履歴として書き換えない。
- dct-scratch-lessons.yamlへコース計画を独立成果物として追加し、既存の全5回の指導案のdepends_onへコース計画のlocal_idを追加する。スライドは同じ回の指導案への依存を維持する。kindとdone_criteriaは人が保守するコース計画の役割と既存schemaに基づいて定める。
- コース計画と既存の第2回lesson-plan.md・slides.mdへメタ情報を反映し、カタログIDと一意に対応させる。新規教材のIDはカタログで宣言するが、未作成ファイルを作成済みとして扱わない。第2回は完成済みの本文を維持し、今回のメタ情報・リンク変更だけを適用する。statusは先行規約と確認結果に従い、処理状態と文書成熟度を混同しない。
- カタログ検証とbuild、変更Markdown/YAMLの整形・lint・適用されるメタ情報schema検証、リンク検証、差分検査を通す。第2回スライドのbuildと全19ページの解析を確認し、frontmatter変更後も特に17〜19ページをPNGで確認する。根拠・変更範囲・検証結果を個票へ残す。

### 追従修正：教材IDとbased_onの修飾を外す

- 先行PJR-VD0XのID規約訂正をレビューしてから実行する。この追記を旧対応結果中の修飾付き教材IDより優先する。移動済みのコース計画は再移動せず、過去の個票・イベント・plan/resultを書き換えない。新しい対応結果へ訂正を追記する。
- 宣言済み教材リポジトリの `courses/scratch-basic/course-plan.md` の `specdojo.id` を `cpl-scratch-basic`、`courses/scratch-basic/lessons/020-balloon-game/lesson-plan.md` を `lpl-balloon-game`、同 `slides.md` を `lsd-balloon-game` にする。指導案の `based_on` は `cpl-scratch-basic`、スライドは `lpl-balloon-game` とし、実在する修飾なし教材IDで一意に解決する。
- カタログのプロジェクト自身のIDや `project_id: prj-0001`、kataの `edu-scratch:`、登録簿の `prj-0001:` は変更しない。カタログ `local_id` と教材IDの対応、`depends_on` の推移閉包、CLIの対象指定用修飾形との違いを確認する。カタログや今後のSchedule入力に残る現在有効な教材IDの説明だけを必要に応じて訂正し、履歴の一括置換はしない。
- 教材本文・授業順序・完成形・45分の配分・全19ページの本文とページ別設定を維持する。`type`・`status`・準拠rulebookは、IDの修飾訂正だけを理由に変更しない。教材3件のschema、カタログ検証とbuild、ID参照、リンク、整形・lint・Slidev buildとページ解析を再検証する。
- orchestratorがPNG出力で表示維持を確認する。特に17〜19ページは、既存サーバーの古い解析状態と新規起動の出力を区別する。後続PJR-M1C2へ修飾なし教材IDとCLI解決の確認結果を申し送り、Schedule生成やgrade評価には本項目で着手しない。

## 3. 作業内容

| No  | 作業                                                 | 担当 | 状態 | メモ                                                                                          |
| --- | ---------------------------------------------------- | ---- | ---- | --------------------------------------------------------------------------------------------- |
| 1   | 先行kataとコース計画の現行参照を確認する             | BA   | done | 先行個票の統合後レビューと更新済みrulebook・既存schemaを確認                                  |
| 2   | コース計画を移動し現行リンクとカタログ依存を更新する | BA   | done | README・後続個票を更新し、コース計画を独立登録、5指導案の依存を追加                           |
| 3   | コース計画と既存第2回教材にメタ情報を反映する        | BA   | done | 3文書のIDをカタログと対応させ、成熟度はdraftを維持                                            |
| 4   | カタログ・リンク・メタ情報・Slidev表示を検証する     | BA   | done | 静的検査・build・19ページの解析は成功。PNG表示確認はsandbox制約で `requires_human`（4.4参照） |
| 5   | 追従修正の修飾なし教材IDと参照を反映し再検証する     | BA   | done | 3教材のID・`based_on`、有効な参照と後続入力の説明を訂正。再検証とPNG申し送りは4.5参照         |

## 4. 対応結果

### 修飾なしIDへの訂正後レビュー（orchestrator）

- 教材側 `8fb764d`、プロジェクト側 `22c2a96` の統合を確認した。教材3件の正規IDは `cpl-scratch-basic`・`lpl-balloon-game`・`lsd-balloon-game`、教材間の `based_on` はそれぞれ `cpl-scratch-basic`・`lpl-balloon-game` である。カタログのプロジェクトIDと、kata・登録簿のnamespaceは維持している。過去の修飾付き教材IDの採用判断は訂正済みであり、旧実行記録は当時の履歴として残す。
- schema・ID解決・カタログ・リンク・整形・lint・Slidev build・全19ページの本文と設定の維持を確認したexecutorの成功記録をレビューした。親側でも統合後の実ファイルのIDとbased_onを検証した。
- 統合後の教材developで `npx slidev export courses/scratch-basic/lessons/020-balloon-game/slides.md --format png --output /tmp/pjr-y36g-bare-id-integrated` が終了コード0で全19ページを出力した。17〜19ページを新しいPNGで目視し、正常に描画され切れや案内役との重なりがないことを確認した。全19PNGのSHA-256も修正前の確認済み画像と一致し、ID訂正による表示変化はなかった。FloatingVueの既存コンソールエラーは出るが、出力・表示確認に支障はなかった。

### 統合後レビュー（orchestrator）

- プロジェクト側 `628d442`、教材側 `684351a` の統合成果を完了条件に照らして確認した。コース計画は `courses/scratch-basic/course-plan.md` に移動され、ID `prj-0001:cpl-scratch-basic` でカタログ・既存教材のメタ情報・依存関係が一致している。本文・時間配分と第2回スライド全19ページの本文・設定を維持した検証記録、相対リンク7件、schema・カタログ・build等の成功を確認した。未作成教材8件の既存警告以外に後続Scheduleを妨げる不整合は見つからなかった。
- orchestratorが作業worktreeで `npx slidev export courses/scratch-basic/lessons/020-balloon-game/slides.md --format png --output /tmp/pjr-y36g-metadata-review` を実行し、終了コード0で全19ページを出力した。17〜19ページのPNGはメタ情報追加前に目視確認済みの画像とSHA-256が一致し、表示の維持を確認した。PNG出力時のFloatingVueの既存コンソールエラーはあるが、出力と確認には支障がなかった。

### 4.1. 前提と採用したメタ情報

- [[prj-0001:pjr-vd0x-teaching-artifact-metadata-kata|PJR-VD0X]] の「統合後レビュー（orchestrator）」で、統合コミット `d5200e9` の7 kataが完了条件を満たし、後続PJR-Y36Gへの支障がないと確認されている。個票の処理状態は `review` のままだが、この明示的なレビュー記録と更新済みの [[edu-scratch:lpl-rulebook|指導案 Rulebook]]・[[edu-scratch:lsd-slidev-rulebook|投影スライド Rulebook]] を根拠に着手した。
- 導入済みSpecDojoの共通・成果物frontmatter schemaと `dct.schema.yaml` を照合した。3文書はいずれも成果物固有の `id`、`type: project`、`status: draft` を持つ。`status` は文書成熟度であり、第2回が既存完成教材であることやScheduleの処理状態とは区別する。人間による成熟度の判定を行わず、`ready` へ昇格していない。
- コース計画は人が判断して保守する独立成果物なので、カタログの `kind: work` とした。全5回の対象・ねらい・使用機能・積み上がり・45分構成・指導方針の対応、および配置・ID・参照先の一意性を `done_criteria` とした。専用rulebookは未整備で要否未判断のため、カタログは `rulebook: undecided`、成果物自身はschemaが許す `rulebook: none` とし、無関係なrulebookや新規kataを追加していない。

### 4.2. 変更した成果物と範囲

| ファイル（教材側は `coderdojo-lessons:`）                                                                        | 実施内容                                                                                                                                                                                                     |
| ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `coderdojo-lessons:docs/course-design/course-plan.md` → `coderdojo-lessons:courses/scratch-basic/course-plan.md` | 正本を移動し、`prj-0001:cpl-scratch-basic` を付与。旧設計5件への相対リンクだけを移動先基準へ修正した。学習内容・45分構成・コース方針は維持した。                                                             |
| `coderdojo-lessons:README.md`                                                                                    | コース計画の入口を新パスへ更新した。                                                                                                                                                                         |
| `coderdojo-lessons:courses/scratch-basic/lessons/020-balloon-game/lesson-plan.md`                                | `prj-0001:lpl-balloon-game`、準拠先 `edu-scratch:lpl-rulebook`、確認した根拠 `prj-0001:cpl-scratch-basic` の `based_on` を追加した。授業本文は変更していない。                                               |
| `coderdojo-lessons:courses/scratch-basic/lessons/020-balloon-game/slides.md`                                     | 既存先頭frontmatterへ `prj-0001:lsd-balloon-game`、準拠先 `edu-scratch:lsd-slidev-rulebook`、同じ回の指導案への `based_on` を追加した。theme・title・本文・ページ別設定・区切りは維持した。                  |
| `docs/ja/projects/prj-0001/010-deliverables-catalog/dct-scratch-lessons.yaml`                                    | コース計画を追加し、全5指導案の `depends_on` を `cpl-scratch-basic` とした。スライド5件の同じ回の指導案への依存は維持した。共通 `base_path` をコース直下に上げ、各回のパスは既存配置へ解決するよう調整した。 |
| `docs/ja/projects/prj-0001/controls/project-register/pjr-m1c2-scratch-lessons-schedule-expansion.md`             | 今後の実行入力となる関連文書の参照を新ID・新パスへ更新した。                                                                                                                                                 |
| 本個票                                                                                                           | 作業内容・根拠・検証・人手確認の申し送りを記録した。                                                                                                                                                         |

- 移動元の5つの旧設計リンクは同じファイルを参照し続けるが、旧設計を確認済みの根拠として `based_on` へ取り込んでいない。後続指導案の入力は、新しいコース計画IDから解決する。
- カタログの11件のID・配置が一意に対応する。存在する教材はコース計画・第2回指導案・第2回スライドの3件だけで、未作成の第1・3・4・5回の8ファイルは宣言のみとし、作成していない。既存10教材の解決後パスは変更前と一致する。
- 旧パスの参照を検索し、README・現行カタログ・後続PJR-M1C2を更新した。過去の完了済み個票・レビュー済み作業の記録・plan/result・イベントにある当時のパスは監査履歴として維持した。Scheduleはこの作業では変更していない。

### 4.3. 成功した検証

- 両リポジトリの `package.json`、hook、SpecDojo設定の有無と検査条件を確認した。変更Markdown/YAMLを各リポジトリの `npx prettier --write` で整形し、`npx prettier --check` でも確認した。第2回スライドには教材側の既存Slidev parser設定が適用される。
- project側の変更2個票に `npx markdownlint --`、`node tools/check-slidev-files.mjs` を実行した。教材側にはmarkdownlint依存もlint hookもないため、教材側のmarkdownlintは非適用とした。
- `npx specdojo catalog validate --project prj-0001`：成功。未作成の第1・3・4・5回の計8文書について文書未検出の既存警告が出るが、存在する3文書の `based_on` の検証は成功した。
- `npx specdojo catalog build --project prj-0001`：成功。生成される `generated/dct-scratch-lessons.md` と `generated/dct-index.md` は既存のGit除外対象であり、YAMLを正本とする。
- `node tmp/pjr-y36g/verify.mjs`：導入済みAjv 2020で教材3件の成果物メタ情報、変更2個票の登録項目メタ情報、カタログ全体のschema検証に成功した。11件のID・配置の一意性、全5指導案→コース計画・全5スライド→同じ回の指導案の依存、`based_on` の推移閉包、実在3件・未作成8件も確認した。
- 同じ検証でGitのHEADから読み出した変更前本文と比較した。コース計画は移動に必要なリンク修正と整形以外が一致し、第2回指導案はメタ情報を除く本文が一致した。教材側Slidev 53.0.0のparserで変更前後とも全19ページを解析し、全ページの本文・ノート・順序・`specdojo` を除くページ設定が一致した。READMEと3教材のローカル相対リンク7件の実在を確認した。一時スクリプトと比較用データは検証後に削除した。
- 教材リポジトリで `npx slidev build courses/scratch-basic/lessons/020-balloon-game/slides.md --out dist`：成功。初回は出力先の相対パス指定を誤り、書込不可で失敗したが、活動配下の `dist/` に直して再実行した。Neversinkの将来のVite設定に関する警告は既存で、buildは成功している。
- 両リポジトリの `git diff --check` と差分範囲を確認した。登録簿一覧、個票frontmatterの処理状態、イベント、既存の実行証跡、Git設定にはexecutorから変更を加えていない。再開前から存在するrunner管理の差分は維持した。resultはreporter/runnerが記入する。
- `npm run validate:schema:file` は両リポジトリでscriptがないため非適用。`npm run typecheck`・`npm run test:unit` も両リポジトリでscriptがなく、ソース変更もない。`npm test` はproject側が初期の仮script、教材側がscriptなしのため非適用。schema検証は上記の直接検証で実施した。

### 4.4. 人手確認と後続への申し送り

- PNG表示確認は `requires_human`。教材側で `npx slidev export courses/scratch-basic/lessons/020-balloon-game/slides.md --format png --output tmp/pjr-y36g/png --wait 1500` を実行したが、sandboxの `uv_interface_addresses` 制約で停止した。`HOST=127.0.0.1` を指定した再実行も待受ポートを開けず停止した。さらに、ローカルサーバーを使わずbuild済みHTMLをPlaywrightで描画する方法を試したが、Chromium起動が `sandbox_host_linux.cc:41` の `Operation not permitted` で停止した。PNGは生成できておらず、17〜19ページを目視済みとは扱わない。
- sandbox外の教材リポジトリで `npx slidev export courses/scratch-basic/lessons/020-balloon-game/slides.md --format png --output courses/scratch-basic/lessons/020-balloon-game/dist/png --wait 1500` を実行し、全19ページの生成と、特に17ページ「発展ミッション」・18ページ「うまくいかないときは」・19ページ「ふりかえり」の文字・部品・案内役に切れや重なりがないことを確認する。buildと全19ページの構造・本文比較は上記のとおり成功している。
- [[prj-0001:pjr-m1c2-scratch-lessons-schedule-expansion|PJR-M1C2]] では、コース計画 `cpl-scratch-basic` と完成済みの第2回 `lpl-balloon-game` / `lsd-balloon-game` を新規作業から除外する。残り8成果物だけをScheduleへ展開する。専用コース計画rulebookの要否は未判断であり、今回の移行だけを根拠にkata作成や成熟度の昇格を行わない。
- reporter/runnerは本節のPNG人手確認と後続への注意点をresultへ反映する。保護設定の変更提案はない。

### 4.5. 追従修正：修飾なし教材ID（今回の正本）

第2章の追従修正に従い、旧対応結果の修飾付き教材IDを訂正した。上の統合後レビューと第4.1〜4.4節は当時の実施記録として残し、今回の判断・実施・検証は本節を正本とする。

#### 4.5.1. 前提と変更範囲

- [[prj-0001:pjr-vd0x-teaching-artifact-metadata-kata|PJR-VD0X]] の「ID訂正後の統合レビュー（orchestrator）」で、`408f022` の7 kataが命名標準に適合し、旧レビュー判断を訂正していることを確認した。更新済みの [[edu-scratch:lpl-rulebook|指導案 Rulebook]]・[[edu-scratch:lsd-slidev-rulebook|投影スライド Rulebook]] と [[specdojo:id-and-file-naming-standard|命名標準]] 第3.1節、および導入済みの成果物・共通schemaを照合した。先行個票の処理状態を変更せず、この明示的なレビュー完了を着手の根拠とした。
- 教材リポジトリの3文書に限り、以下の5つのメタ情報値から `prj-0001:` を除いた。コース計画は移動済みなので再移動していない。`type: project`・`status: draft`・準拠rulebook、本文・45分の配分・スライドのページ別設定は維持した。

| 教材（`coderdojo-lessons:`）                                    | `specdojo.id`       | `based_on`          |
| --------------------------------------------------------------- | ------------------- | ------------------- |
| `courses/scratch-basic/course-plan.md`                          | `cpl-scratch-basic` | 指定なし            |
| `courses/scratch-basic/lessons/020-balloon-game/lesson-plan.md` | `lpl-balloon-game`  | `cpl-scratch-basic` |
| `courses/scratch-basic/lessons/020-balloon-game/slides.md`      | `lsd-balloon-game`  | `lpl-balloon-game`  |

- [[prj-0001:dct-scratch-lessons|現行カタログ]] はYAMLコメントに、教材自身のIDと `based_on` が `local_id` と一致すること、CLIの修飾形は対象指定用であることを補足した。プロジェクト自身の `id`・`project_id`、11件の宣言・配置・`kind`・`done_criteria`、全5指導案→コース計画・全5スライド→同じ回の指導案の依存は変更していない。コース計画の専用rulebookは従来どおり未整備・要否未判断であり、カタログの `undecided` と本体の `none` を維持した。
- 本個票と [[prj-0001:pjr-m1c2-scratch-lessons-schedule-expansion|PJR-M1C2]] の関連文書リンクを修飾なしIDへ訂正し、後続個票の概要に既存3教材の正規IDとCLI指定形式の区別を追記した。READMEは既に新パスを参照しており変更不要。過去の完了済み個票・イベント・plan/resultと旧対応結果は書き換えていない。変更は教材3件・カタログ・2個票の計6ファイルであり、未作成の第1・3・4・5回の8教材、Schedule、gradeには着手していない。

#### 4.5.2. 今回の検証結果

- 両リポジトリの `package.json`・hookとSpecDojo設定の有無を確認し、変更Markdown/YAMLを各リポジトリの `npx prettier --write`・`npx prettier --check` で整形・検査した。project側の変更2個票には `npx markdownlint --` と `node tools/check-slidev-files.mjs` を適用した。教材側にはmarkdownlint依存・lint hookがないため、その検査は非適用。
- `node tmp/pjr-y36g/verify.mjs`：導入済みAjv 2020と既存schemaで教材3件・登録個票2件・カタログの6ケースを検証した。11件のIDと配置の一意性、教材内での3正規IDの一意性、カタログと実在メタ情報の一致、修飾なしの `based_on` の推移閉包、実在3件・未作成8件を確認した。`resolveDeliverableTarget` と `resolveDeliverableByDocId` を使い、全11件を修飾なし・修飾付きの22指定から同じカタログ行・配置へ解決し、実在3件の `deliverableDocId` が修飾なしになることも確認した。
- 同検証でGitのHEADから保存した変更前の3教材と比較し、本文が完全一致し、frontmatterの差分が上表のID・参照値だけであることを確認した。教材側Slidev 53.0.0付属parserで、前後とも全19ページ、各ページの本文・発表者メモ・順序・`specdojo` 以外のページ別設定が一致した。17ページ「発展ミッション」・18ページ「うまくいかないときは」・19ページ「ふりかえり」も同様。READMEと3教材の相対リンク7件が実在し、旧パスに正本が残っていないことを確認した。
- `npx specdojo catalog validate --project prj-0001` と `npx specdojo catalog build --project prj-0001`：成功。未作成8件の文書未検出警告は宣言のみであることに対応する既存警告。生成されたカタログMarkdownは既存のGit除外対象で、正本はYAMLのまま。教材側の `npx slidev build courses/scratch-basic/lessons/020-balloon-game/slides.md --out dist` も成功した。Neversink由来の将来のVite設定に関する警告はbuildを妨げない。
- 両リポジトリの `git diff --check` と差分範囲を確認した。登録簿一覧・個票frontmatterの状態・既存の実行証跡・Git設定は変更していない。`validate:schema:file`・`typecheck`・`test:unit` は両リポジトリでscriptがなく、`npm test` はproject側が初期仮script、教材側はscriptなしのため非適用。ソース変更もない。schemaは上記の直接検証で補った。検証用スクリプトと比較データは終了前に削除した。

#### 4.5.3. PNG人手確認と後続への申し送り

- 今回のPNG検査は `requires_human`。教材側で `npx slidev export courses/scratch-basic/lessons/020-balloon-game/slides.md --format png --output tmp/pjr-y36g/png --wait 1500` を新規プロセスとして実行したが、sandboxの `uv_interface_addresses` 制約で停止し、今回のPNGは生成できていない。上の統合後レビューにある前回の画像一致を、今回の確認済み証拠には流用しない。
- orchestratorはsandbox外で同コマンドを新規起動し、全19ページを出力する。既存の開発サーバーに残る古い解析状態からの出力と区別し、特に17〜19ページの文字・部品・案内役の切れや重なりがないことを確認して、今回のresultへ確認結果を追記する。
- [[prj-0001:pjr-m1c2-scratch-lessons-schedule-expansion|PJR-M1C2]] への入力は `cpl-scratch-basic`・`lpl-balloon-game`・`lsd-balloon-game`。この既存3件は新規作業から除外し、残り8件の教材IDもカタログの修飾なし `local_id` で記入する。CLI対象指定の `prj-0001:<local_id>` と教材自身の正規IDを区別する。未作成8件について、CLIで配置が解決できることは作成済みの証明ではない。
- reporter/runnerは本節の実施内容・変更6ファイル・検証結果とPNG人手確認・後続への注意をresultへ反映する。executorからresultは編集していない。今回の未確定な変更判断・保護設定の変更提案はない。

## 5. 関連ドキュメント

- [[prj-0001:pjr-vd0x-teaching-artifact-metadata-kata]]：先行作業
- [[cpl-scratch-basic|Scratch基礎 コース計画]]：`coderdojo-lessons:courses/scratch-basic/course-plan.md`
- `docs/ja/projects/prj-0001/010-deliverables-catalog/dct-scratch-lessons.yaml`：成果物カタログ
