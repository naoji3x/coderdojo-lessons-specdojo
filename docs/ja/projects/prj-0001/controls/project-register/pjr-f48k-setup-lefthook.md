---
specdojo:
  id: prj-0001:pjr-f48k-setup-lefthook
  type: project
  status: ready
  rulebook: specdojo:pjr-rulebook
  part_of:
    - prj-0001:pjr-index
  item_type: todo
  item_status: done
  priority: medium
  owner: DEV
  registered_at: "2026-10-19T11:28:14Z"
  due_on: "2026-10-31"
  completed_at: "2026-10-20T13:31:29Z"
  conclusion: 両リポジトリにLefthookとpre-commitの検証hook（prettier・markdownlint・tsc）を導入し、npm installで登録されることを確認した
---

# PJR-F48K 両リポジトリにLefthookと検証hookを整備する

## 1. 概要

両リポジトリへLefthookを導入し、依存導入時のhook登録と各リポジトリに適した検証を整備する。

対象は `coderdojo-lessons` と `coderdojo-lessons-specdojo`。前者にはコメントのみの `lefthook.yml` と既存の `prepare-commit-msg` hook があり、Lefthook 本体がないため commit 時に警告が発生した。後者には Lefthook 本体・設定ファイル・`prepare` スクリプトがない。

検証コマンドは既存の構成と適用条件を調べて選定する。具体的な検証ルールは本項目の作業で決め、未導入の検査を既存の仕組みとして扱わない。

## 2. 完了条件

- 両リポジトリで Lefthook が開発依存として宣言され、lockfile から再現可能に導入できる。
- 両リポジトリで依存導入時に hook が登録され、Lefthook の実行ファイルが見つからない警告が解消される。
- 各リポジトリに適した検証コマンドを調査・選定し、採用理由と実行条件を記録した `lefthook.yml` が整備される。
- 設定した hook について、正常な入力で成功し、対象の違反を含む入力で失敗することを確認する。検証用の変更を成果物へ残さない。
- 両リポジトリの導入手順・検証結果・残課題が対応結果に記録される。

## 3. 作業内容

| No  | 作業                                                          | 担当 | 状態 | メモ                                                          |
| --- | ------------------------------------------------------------- | ---- | ---- | ------------------------------------------------------------- |
| 1   | 両リポジトリの依存・既存 hook・検証コマンドを調査する         | DEV  | done | terra-executor が調査し、検証内容を提案した                   |
| 2   | Lefthook を開発依存に追加し、依存導入時の hook 登録を整備する | DEV  | done | orchestrator が反映した                                       |
| 3   | 各リポジトリに適した検証 hook を設定する                      | DEV  | done | agent の提案をもとに、orchestrator がグロブを修正して反映した |
| 4   | hook の成功・失敗と再導入時の動作を確認し、結果を記録する     | DEV  | done | orchestrator が本体で確認した                                 |

## 4. 対応結果

### 4.1. 実施経路

- `exec run --register PJR-F48K --worktree` で terra-executor が実行した。初回は agent の sandbox がネットワークを遮断しており、`npm install --save-dev lefthook` が `EAI_AGAIN` で失敗して waiting になった。
- orchestrator が worktree に lefthook を導入し、`--resume --resume-from executor` で再開した。agent は設定を作成したが、`package.json` と `lefthook.yml` は保護対象のため、runner の `agent-config-write` が止めて waiting になった。
- 保護対象の変更は、agent の提案を orchestrator がレビューして修正した版を、各リポジトリの `feature/prj-0001/setup-lefthook` で commit し、develop へ merge した。agent の exec ブランチは merge していない。agent の記録は `execution/exec/evidence/PJR-F48K/` に残した。

### 4.2. 成果物

| リポジトリ                   | commit    | merge     | pre-commit の検証                                                                                                               |
| ---------------------------- | --------- | --------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `coderdojo-lessons-specdojo` | `c32879b` | `bedc1ad` | ステージ済みの `md/json/yml/yaml` を prettier で検査し、`md` を markdownlint（MD013 は除外）で検査する                          |
| `coderdojo-lessons`          | `443457a` | `5f53102` | `scripts/` 配下の `.ts` が変更されたときに `tsc --noEmit` を実行し、ステージ済みの `md/ts/json/yml/yaml` を prettier で検査する |

- 両リポジトリで `lefthook` を開発依存に加え、`prepare` script で `lefthook install` を実行する。
- 検査ツール（specdojo: `prettier`・`markdownlint-cli`、coderdojo-lessons: `prettier`・`typescript`）は推移的依存に頼らず、直接の開発依存として宣言した。
- agent の提案からの修正点は次の2つ。
  - coderdojo-lessons の prettier のグロブを `**/*.{...}` から `*.{...}` に変えた。`**/` はルート直下のファイルに一致しないため。
  - 型検査のグロブを `scripts/*.ts` と `scripts/**/*.ts` の2つにした。`scripts/` 直下のファイルに一致させるため。

### 4.3. 検証

- 両リポジトリの本体で `npm install` を実行し、`prepare` で `pre-commit` hook が登録されることを確認した。
- 正常な入力（`package.json`、`lefthook.yml`、`scripts/convert_pngs_with_vtracer.ts` など）で hook が成功し、書式違反を含む一時的な Markdown をステージしたときに `pre-commit` が終了コード 1 で失敗することを確認した。一時ファイルは削除済み。
- coderdojo-lessons の既存の `prepare-commit-msg` hook は以前の lefthook が生成したもので、lefthook の導入後は警告を出さずに終了コード 0 で終わる。

### 4.4. 残課題

- `prepare-commit-msg` hook は、lefthook が見つからないときに `pnpm lefthook` を呼び出し、`pnpm install` によって `pnpm-lock.yaml` を作っていた。close 後に、`pnpm-lock.yaml` と hook を削除し、`node_modules` を `npm ci` で作り直した。
- 両リポジトリの develop の push は利用者が行う。
- `.specdojo/exec-defaults.yaml` と `.specdojo/specdojo.config.json` は prettier の書式になっておらず、編集して commit すると pre-commit hook で止まる。整形するか対象外にするかは未決定。

### 4.5. close 後の追加修正

- specdojo CLI が追記する登録簿のイベントログ（`events/*.yaml`）を、prettier の検査が整形対象として扱い、PJR-PFHD の `register close --commit` が止まった。派生元（`derived_from`）を持つ項目のイベントで発生する。導入時の検証で見落としていた。
- イベントログは CLI の書式を正とする追記専用の記録のため、`.prettierignore` で検査対象から外した（commit `e2ef2bc`、merge `bc48560`）。

## 5. 関連ドキュメント

- [[prj-0001:pjr-index]]
- [[specdojo:exec-config-guide]]

対象ファイルは両リポジトリの `package.json`・`package-lock.json`・`lefthook.yml` およびローカル Git hooks。具体的な検証コマンドの設定・説明先は調査時に特定する。
