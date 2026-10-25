---
specdojo:
  id: prj-0001:pjr-vd0x-teaching-artifact-metadata-kata
  type: project
  status: draft
  rulebook: specdojo:pjr-rulebook
  part_of:
    - prj-0001:pjr-index
  item_type: todo
  item_status: review
  priority: medium
  owner: BA
  registered_at: "2026-10-25T09:08:25Z"
  due_on: "2026-10-31"
---

# PJR-VD0X 教材成果物のSpecDojoメタ情報を扱うkataを整備する

## 1. 概要

コース計画・指導案・投影スライドをカタログとScheduleで管理するため、成果物自身のspecdojoメタ情報の規約を先に整える。kata自身のメタ情報を教材へコピーするのではなく、教材固有のメタ情報を記入する方針へ変更する。

## 2. 完了条件

- 既存のSpecDojoメタ情報schema・カタログのID解決・教材リポジトリの文書規約を確認し、成果物のid・type・status・rulebookなどの採用項目と値の根拠を明記する。カタログlocal_idと成果物IDの対応を一意にし、存在しないrulebookや未検証の独自フィールドを追加しない。
- edu-scratch:lpl-rulebook・lpl-template・lpl-sample・lpl-recipeと、edu-scratch:lsd-slidev-rulebook・lsd-slidev-template・lsd-slidev-sampleの関連箇所を整合させる。指導案templateのメタ情報を削除する案内は、kata自身のメタ情報と成果物用の記入欄を区別する案内へ改める。recipeの自己完結性と各kataの責務は維持する。
- Slidevは先頭の既存frontmatterにtheme・title等とspecdojo名前空間を共存させ、ページ区切りやページ別layoutを壊さない記法を定める。教材の内容・授業順序・時間は変更しない。
- コース計画のメタ情報も既存schemaと照合して扱いを記録する。準拠rulebookが未整備ならその事実を明記し、無関係なrulebookを割り当てたり、今回の範囲外の新規kataを勝手に作ったりしない。
- 今回の作業対象はkataと実行記録とし、教材本体・配置パス・Scheduleは変更しない。draftのkataを検証成功だけでreadyへ昇格しない。変更ファイルの整形・lint・適用可能なschema検証・Slidevのsample/templateのbuildや解析・差分検査を行い、結果と未確定事項を個票に記録する。

### 差し戻し：プロダクト文書の修飾なしID

- 利用者の指摘に基づき、先行実行で採用した「教材IDは `<project_id>:<local_id>`」という方針を訂正する。この追記を旧完了条件・旧対応結果中のID方針より優先する。旧対応結果は当時の実施記録として残し、新しい対応結果へ訂正理由と検証を追記する。
- `specdojo:id-and-file-naming-standard` のプロダクト文書・プロジェクト文書・型の文書の区別を正本にする。コース計画・指導案・教材スライドはプロダクト文書なので、`specdojo.id` はカタログの `local_id` と一致する修飾なしIDを採用する。例は `cpl-scratch-basic`・`lpl-balloon-game`・`lsd-balloon-game`。CLIが受け付ける `<project-id>:<local-id>` の指定形式と、成果物本文の正規IDを区別する。
- 対象7 kata（lpl-rulebook・lpl-recipe・lpl-template・lpl-sample・lsd-slidev-rulebook・lsd-slidev-template・lsd-slidev-sample）の規約・例・YAMLコメントの教材用記入欄を整合させる。教材用 `_PROJECT_ID_:_LOCAL_ID_` は修飾なしIDの記入欄へ直す。教材間の `based_on` 例も修飾なしにする。kata自身の `edu-scratch:` ID・参照と、プロジェクト文書の `prj-0001:` IDは変更しない。
- `type` のschema上の値とIDのnamespaceは別の概念として扱い、存在しない `type: product` や `product:` authorityを新設しない。コース計画のrulebook要否判断も今回のID訂正と混ぜない。教材本文・Schedule・教材リポジトリは本項目では変更しない。
- schema・整形・lint・カタログID解決・Slidevのsample/templateの解析とbuildを再確認し、教材化したメタ情報の修飾なしIDも既存schemaを通す。旧方針のどの箇所を訂正したかと、後続PJR-Y36Gへの申し送りを個票へ記録する。

## 3. 作業内容

| No  | 作業                                               | 担当 | 状態 | メモ                                                                         |
| --- | -------------------------------------------------- | ---- | ---- | ---------------------------------------------------------------------------- |
| 1   | メタ情報schemaとカタログのID解決を確認する         | BA   | done | 共通・成果物schema、カタログ実装、教材のREADME・Slidevガイド・lint設定を確認 |
| 2   | 指導案・スライドの関連kataを整備する               | BA   | done | 7 kataの教材固有メタ情報、記入欄、仮想例、作成・確認手順を整合               |
| 3   | 規約間の整合と静的検査を確認して対応結果を記録する | BA   | done | 整形・lint・schema・カタログ・Slidev build/解析・差分検査を実施              |
| 4   | 差し戻しに従い教材IDの修飾を訂正し再検証する       | BA   | done | 7 kataの修飾なしID・参照を整合し、現行11件の対応・schema・Slidevを再確認     |

## 4. 対応結果

### 統合後レビュー（orchestrator）

- `d5200e9` の統合成果と個票・resultを完了条件に照らして確認した。7 kataのID・メタ情報の扱い・templateとsampleの区別・recipeの自己完結性・draft維持が整合し、整形・lint・schema・Slidev解析とbuildの成功記録を確認した。教材本体は未変更。後続PJR-Y36Gへ進める上で妨げとなる不整合は見つからなかった。コース計画のID確定は後続項目で行い、専用rulebook未整備とschema上の `rulebook: none` の扱いも申し送りを確認した。

### 4.1. 採用した規約と根拠

- SpecDojo 0.4.6 の `docs/specdojo/schemas/v1/common-frontmatter.schema.yaml` と `deliverable-frontmatter.schema.yaml` を確認した。教材の `specdojo:` 配下には必須の `id`・`type`・`status`・`rulebook` を置く。`type: project` は成果物schemaの既存列挙値、作成・移行時の `status: draft` は文書成熟度であり、実行状態や授業実施済みを意味しない。`ready` への昇格は人間が判断する。
- `rulebook` は指導案が [[edu-scratch:lpl-rulebook|活動別指導案 Rulebook]]、スライドが [[edu-scratch:lsd-slidev-rulebook|投影スライド Rulebook]]。両方とも実在し、現行カタログの宣言と一致する。任意の `based_on`・`part_of`・`supersedes` は必要時のみ使い、`based_on` はカタログの `depends_on` の推移閉包内の確認済み先行成果物に限る。独自の型・項目は追加していない。
- `node_modules/specdojo/dist/catalog/build-references.js` のカタロググラフが `project_id` と `local_id` をコロンで結び、依存先も同じprojectで修飾することを確認した。`dist/catalog/build.js` によるproject内全カタログの重複確認も照合した。教材の物理配置先リポジトリ名や、kata所有元の `edu-scratch:` を教材IDの修飾子にしない。
- 教材リポジトリの `README.md`、`docs/guides/slidev-guide.md`、`.markdownlint.yaml`、`package.json`、`lefthook.yml` を確認した。既存の教材にはSpecDojoメタ情報がなく、Slidevは先頭frontmatterにテーマ等を置く。今回のkataはこの先頭ブロックへ `specdojo:` を共存させる規約を追加し、パス・ページ区切り・ページ別設定の規約を維持した。
- [[specdojo:document-metadata-standard|ドキュメントメタ情報標準]] は `frontmatter_template` を定めているが、導入済み成果物schemaの `unevaluatedProperties: false` ではその項目が拒否されることをAjv 2020で確認した。今回はschemaや設定を変更せず、templateの先頭YAMLコメントに教材用記入欄を置く。kata自身の `specdojo:` 全体を記入済みの教材用ブロックへ置き換え、案内コメントを除く方式とした。template自身にも実在の準拠rulebookを明記し、実値のメタ情報は既存schemaを通した。

### 4.2. カタログとのID対応

以下は [[prj-0001:dct-scratch-lessons|Scratch教材 成果物カタログ]] の現行宣言との対応であり、未作成の教材を作成済みとするものではない。各パスは `coderdojo-lessons:courses/scratch-basic/lessons/` からの相対パス。

| 活動ディレクトリ       | 指導案の `local_id` → 成果物 `id`                        | スライドの `local_id` → 成果物 `id`                      |
| ---------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `010-chase-game`       | `lpl-chase-game` → `prj-0001:lpl-chase-game`             | `lsd-chase-game` → `prj-0001:lsd-chase-game`             |
| `020-balloon-game`     | `lpl-balloon-game` → `prj-0001:lpl-balloon-game`         | `lsd-balloon-game` → `prj-0001:lsd-balloon-game`         |
| `030-music-art`        | `lpl-music-art` → `prj-0001:lpl-music-art`               | `lsd-music-art` → `prj-0001:lsd-music-art`               |
| `040-ai-rps`           | `lpl-ai-rps` → `prj-0001:lpl-ai-rps`                     | `lsd-ai-rps` → `prj-0001:lsd-ai-rps`                     |
| `050-original-project` | `lpl-original-project` → `prj-0001:lpl-original-project` | `lsd-original-project` → `prj-0001:lsd-original-project` |

各行の指導案ファイル名は `lesson-plan.md`、スライドは `slides.md`。全10件のIDとパスがそれぞれ一意であることを確認した。

### 4.3. 変更したkata

- [[edu-scratch:lpl-rulebook|指導案 rulebook]]：IDの決め方、採用項目の根拠、kataと教材の区別、コース計画の扱いを定義した。
- [[edu-scratch:lpl-template|指導案 template]]：メタ情報を削除する案内を教材用記入欄への置換案内へ変更した。本文の記入構造は維持した。
- [[edu-scratch:lpl-sample|指導案 sample]]：仮想カタログに対応する教材メタ情報例をYAMLコメントに追加した。授業本文は変更していない。
- [[edu-scratch:lpl-recipe|指導案 recipe]]：カタログの入力確認、4項目の記入方法、置換・schema確認を自己完結した説明で追加し、授業設計手順を維持した。
- [[edu-scratch:lsd-slidev-rulebook|スライド rulebook]]：4項目と根拠、先頭の既存frontmatterへの共存例、ページ設定を維持する規約を追加した。
- [[edu-scratch:lsd-slidev-template|スライド template]]・[[edu-scratch:lsd-slidev-sample|スライド sample]]：教材用記入欄・仮想例をYAMLコメントに追加し、kataのメタ情報との区別を示した。Slidevの設定と投影本文は維持した。

### 4.4. 検証結果

- `npx prettier --write` / `npx prettier --check`：上記7 kataと本個票を対象に整形・確認し成功。
- `npx markdownlint --`：変更Markdownを対象に成功。Slidevの2件は既存のignore設定に従うため、別途 `npx markdownlint --config .markdownlint-slidev.yaml --ignore-path /dev/null -- docs/ja/specdojo/templates/edu-scratch/lsd-slidev-template.md docs/ja/specdojo/samples/edu-scratch/lsd-slidev-sample.md` で専用規則を適用し成功。
- `node tools/check-slidev-files.mjs`：変更Markdownについて、Slidevのファイル名と専用整形・lint設定の対応を確認し成功。
- `node tmp/pjr-vd0x/verify.mjs`：一時スクリプトで導入済みAjv 2020と既存schemaを使い、7 kataと個票、template記入欄を現行10件のIDへ置換したメタ情報、sampleの仮想例2件、コース計画の仮想登録例を検証し成功。全10件のうちスライド5件はカタログで宣言された指導案への `based_on` も含めた。スクリプトと作業用データは検証後に削除した。
- 同スクリプトでSlidev 53.0.0が使用するparserを使い、template全11ページ・sample全9ページを解析した。変更前・更新後・教材用メタ情報に置換した作業用コピーの間で、本文・ページ数・順序・ページ別設定（`specdojo` を除く）が一致した。指導案sampleの本文、templateの作成者向けコメント以外の本文も変更前と一致した。
- `npx slidev build tmp/pjr-vd0x/build/lsd-slidev-template/slides.md --out dist` と `npx slidev build tmp/pjr-vd0x/build/lsd-slidev-sample/slides.md --out dist`：ともに成功。教材用メタ情報へ置換したコピーに付属CSSと既存の `ScratchBlocks.vue` を添え、出力は各コピー配下の `dist/` に限定した。初回は一時コピーのCSS・コンポーネントが読み取れず失敗したが、通常の読み書きで作業用コピーを作り直して解消した。テーマ由来の将来のVite設定警告は残るがbuildは成功している。
- `npx specdojo catalog validate --project prj-0001`：成功。未作成の第1・3・4・5回の指導案・スライド計8件について既存の文書未検出警告がある。対象外の教材は新規作成していない。
- `git diff --check` と差分範囲の確認：成功。変更は7 kataと本個票に限定し、教材リポジトリ、配置パス、カタログ、Schedule、登録簿一覧、個票frontmatterのステータスは変更していない。kataの `status: draft` も維持した。
- `npm run validate:schema:file` はscript未定義かつYAML/YML変更なしのため非適用。`npm run typecheck`・`npm run test:unit` はscript未定義、`npm test` は初期の仮scriptのため非適用。メタ情報のschema検証は上記のAjvによる検証で行った。投影本文・レイアウトを変えていないため、rulebook第6.7節のPNG目視条件には該当しない。

### 4.5. 後続作業への申し送り

- コース計画は現状カタログ未登録で、専用rulebookも未整備。採用可能なメタ情報は `type: project`、`status: draft`、`rulebook: none` と確認済み。実際の `local_id` と `id` は [[prj-0001:pjr-y36g-course-plan-catalog-and-metadata|PJR-Y36G]] でカタログ登録時に確定し、指導案の依存関係を整えてから根拠IDへ反映する。今回はコース計画の移動・教材本文のメタ情報反映・新規kata作成を行っていない。
- `frontmatter_template` の標準と導入済みschemaの不整合は、今回のYAMLコメント方式で回避した。将来自動展開へ移す場合はschema対応を別途確認する。本タスクに保護設定の変更提案や未完了事項はない。
- resultはexecutorから編集せず、上記の実施内容・変更8ファイル・検証結果と本節の申し送りをreporter/runnerが記入する。

### 4.6. 差し戻し対応：プロダクト文書の修飾なしID（今回の正本）

本節は、第2章の差し戻しに従い、旧対応結果の教材ID方針を訂正する。上の統合後レビューと第4.1〜4.5節は当時の実施記録として残す。今回の判断と検証は以下のとおり。

#### 4.6.1. 訂正の根拠と変更箇所

- [[specdojo:id-and-file-naming-standard|ドキュメントIDおよびファイル命名標準]] 第3.1・3.4・4.2節を正本とし、コース計画・指導案・教材スライドをプロダクト文書として扱う。成果物の `specdojo.id` はカタログの `local_id` と一致する修飾なしIDとする。カタロググラフ内部のプロジェクト付き識別子を、教材本文の正規IDと混同した旧方針を訂正した。
- [[edu-scratch:lpl-rulebook|指導案 rulebook]] 第3・4章、[[edu-scratch:lpl-recipe|指導案 recipe]] 第3・8章、[[edu-scratch:lsd-slidev-rulebook|スライド rulebook]] 第3・4章の規約・確認項目・共存例を訂正した。教材間の `based_on` 例は `cpl-scratch-basic`・`lpl-balloon-game` とした。
- [[edu-scratch:lpl-template|指導案 template]] と [[edu-scratch:lsd-slidev-template|スライド template]] の教材用記入欄を `_PROJECT_ID_:_LOCAL_ID_` から `_LOCAL_ID_` へ変更した。[[edu-scratch:lpl-sample|指導案 sample]] と [[edu-scratch:lsd-slidev-sample|スライド sample]] の仮想例も `lpl-space-landing`・`lsd-branching-story` に訂正した。7 kata自身の `edu-scratch:` ID・準拠先・相互参照と `status: draft` は維持した。
- 導入済み共通・成果物frontmatter schemaを再確認した。修飾なしIDは既存の文字制約を満たす。`type: project` は既存schemaの列挙値として維持し、IDのnamespaceとは別の概念であることを明記した。`type: product` や新しいauthority、独自フィールドは追加していない。`rulebook`・`status` の採用理由は従来どおりであり、IDの訂正を理由に変更していない。
- 現行カタログでは、先行実行後にコース計画 `cpl-scratch-basic` が登録され、5指導案の依存先にも追加されている。専用rulebookは未整備であり、カタログの `rulebook: undecided` と教材frontmatterの `rulebook: none` を区別する。コース計画用kataの新設・教材本体の再移動・今回のrulebook要否判断は行っていない。

#### 4.6.2. 現行カタログとの対応とID解決

以下は [[prj-0001:dct-scratch-lessons|Scratch教材 成果物カタログ]] の現行11成果物の対応であり、未作成教材の存在を意味しない。各セルのIDはカタログの `local_id` と教材自身の正規IDの両方に使う。

| 配置先（`coderdojo-lessons:courses/scratch-basic/` 配下） | コース計画・指導案のID | スライドのID           |
| --------------------------------------------------------- | ---------------------- | ---------------------- |
| `course-plan.md`                                          | `cpl-scratch-basic`    | 対象外                 |
| `lessons/010-chase-game/`                                 | `lpl-chase-game`       | `lsd-chase-game`       |
| `lessons/020-balloon-game/`                               | `lpl-balloon-game`     | `lsd-balloon-game`     |
| `lessons/030-music-art/`                                  | `lpl-music-art`        | `lsd-music-art`        |
| `lessons/040-ai-rps/`                                     | `lpl-ai-rps`           | `lsd-ai-rps`           |
| `lessons/050-original-project/`                           | `lpl-original-project` | `lsd-original-project` |

活動ディレクトリ内のファイル名は指導案が `lesson-plan.md`、スライドが `slides.md`。全11件の `local_id` と解決先パスが一意であることを確認した。導入済み `dist/exec/plans-core.js` の `resolveDeliverableTarget` で各 `local_id`、`resolveDeliverableByDocId` で各 `<project-id>:<local-id>` を解決し、同じカタログ行・パスに対応することを確認した。修飾形はCLI等の対象指定に使う形式であり、プロダクト文書自身の `specdojo.id` には転記しない。プロジェクト文書の `prj-0001:` とkataの `edu-scratch:` は維持する。

#### 4.6.3. 今回の検証結果

- 変更は7 kataと本個票の8 Markdownのみ。Prettierによる整形・check、通常のmarkdownlint、Slidev2件への `.markdownlint-slidev.yaml` による専用lint、`node tools/check-slidev-files.mjs`、`git diff --check` を実施し成功した。教材リポジトリ・カタログ・配置パス・Schedule・登録簿一覧・個票frontmatterのステータスは変更していない。
- `node tmp/pjr-vd0x/verify.mjs`：導入済みAjv 2020と既存schemaで24ケースに成功。7 kataと個票、現行11成果物の教材用記入欄を具体化したメタ情報（コース計画を含む）、sampleの仮想例2件、Slidev共存例、教材化したSlidev2件を検証した。全11件のID・パスの一意性とカタログ解決も確認した。
- 同スクリプトで、一時カタログに現行11件と同じ依存関係を写し、導入済み `validateBasedOn` を実行した。修飾なしの `based_on` が `depends_on` の推移閉包に解決することを確認し成功。第2回スライドから依存のない第3回指導案を参照する負例は期待どおりエラーとなった。教材本体・正本カタログには書き込んでいない。
- Slidev付属parserで、変更前・変更後・教材メタ情報へ置換したコピーを比較し、template全11ページ・sample全9ページの本文・発表者メモ・順序・ページ別設定（`specdojo` 以外）が一致した。先頭の `theme`・`title` 等との共存、単一の先頭frontmatter、ページ区切りの維持も確認した。指導案sampleの本文、templateの作成者向けコメント以外の本文も一致した。
- `npx slidev build tmp/pjr-vd0x/decks/lsd-slidev-template/slides.md --out dist` と `npx slidev build tmp/pjr-vd0x/decks/lsd-slidev-sample/slides.md --out dist`：教材用メタ情報へ置換したコピーでともに成功。付属CSSと既存 `ScratchBlocks.vue` を作業用ディレクトリに写し、出力もその配下に限定した。Viteの将来の既定値に関する警告はbuildを妨げない。投影本文・レイアウト等の変更はなく、rulebook第6.7節のPNG目視条件には該当しない。
- `npx specdojo catalog validate --project prj-0001`：成功。未作成の第1・3・4・5回の教材計8件に対する既存の文書未検出警告のみ。`validate:schema:file` はscript未定義かつYAML/YML変更なし、`typecheck`・`test:unit` はscript未定義、`npm test` は初期仮scriptのため非適用。メタ情報のschema検証は上記Ajvで実施した。
- 検証用の初回スクリプトではsandbox内の同期子プロセス実行とファイルコピーの制約に遭遇した。比較元をshellの `git show` で読み取り、一時コピーを通常の読み書きで作成して解消した。最終のschema・ID解決・解析・buildはすべて成功し、検証スクリプトと生成物は終了前に削除した。

#### 4.6.4. 後続PJR-Y36Gへの申し送り

- [[prj-0001:pjr-y36g-course-plan-catalog-and-metadata|PJR-Y36G]] では、今回のkata訂正をレビューした後、移動済みコース計画を再移動せず、実在教材3件のIDを `cpl-scratch-basic`・`lpl-balloon-game`・`lsd-balloon-game` に訂正する。指導案の `based_on` は `cpl-scratch-basic`、スライドは `lpl-balloon-game` とする。本タスクでは教材リポジトリを変更していない。
- 現行カタログの `project_id`・プロジェクト自身のID、kataの `edu-scratch:`、登録簿の `prj-0001:` を維持し、カタログ `local_id` と教材IDの一致、CLI等の対象指定との区別を再確認する。旧実行記録は書き換えず、新しい対応結果へ訂正を追記する。専用rulebook未整備の扱いと `type`・`status` はID訂正と混ぜない。
- `frontmatter_template` と導入済みschemaの不整合に対するYAMLコメント方式を維持した。今回の未確定判断・保護設定の変更提案・未完了事項はない。resultへの実施内容・変更8ファイル・検証結果・本節の申し送りの反映はreporter/runnerへ引き継ぐ。

## 5. 関連ドキュメント

- [[edu-scratch:lpl-rulebook]]
- [[edu-scratch:lpl-template]]
- [[edu-scratch:lpl-sample]]
- [[edu-scratch:lpl-recipe]]
- [[edu-scratch:lsd-slidev-rulebook]]
- [[edu-scratch:lsd-slidev-template]]
- [[edu-scratch:lsd-slidev-sample]]
- `coderdojo-lessons:docs/course-design/course-plan.md`：現在のコース計画（移動後は新パスへ読み替える）
- [[prj-0001:dct-scratch-lessons|Scratch教材 成果物カタログ]]
