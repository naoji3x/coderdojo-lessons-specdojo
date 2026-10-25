---
specdojo:
  id: prj-0001:pjr-vd0x-teaching-artifact-metadata-kata
  type: project
  status: draft
  rulebook: specdojo:pjr-rulebook
  part_of:
    - prj-0001:pjr-index
  item_type: todo
  item_status: in-progress
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
