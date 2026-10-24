---
specdojo:
  id: prj-0001:pjr-bc1z-maintenance-plan-md036
  type: project
  status: draft
  rulebook: specdojo:pjr-rulebook
  part_of:
    - prj-0001:pjr-index
  item_type: issue
  item_status: open
  priority: high
  owner: BA
  registered_at: "2026-10-24T11:50:39Z"
  due_on: "2026-10-31"
  derived_from:
    - PJR-BR5A
---

# PJR-BC1Z rulebook-maintenance の plan が markdownlint（MD036）で止まる

## 1. 課題内容

カタログと pm-roles のない project で、見直しの plan のレビュー観点の欄が `_MISSING_` だけの段落になり、着手の checkpoint が commit hook で止まる（SpecDojo 0.4.5）。

- 起きた条件: specdojo 0.4.5、`catalog_path` と `pm-roles.yaml` がない、owner は BA、approach は `rulebook-maintenance`、対象は利用者の kata（`edu-scratch:lsd-rulebook`）。
- 起きたこと: worktree での着手の checkpoint（`exec(register PJR-BR5A): start`）の commit が、hook の markdownlint で失敗し、項目が `waiting` になった。作業ツリーでの待ち状態の記帳の commit も同じ plan を含めて失敗し、記帳が作業ツリーに残った。
- エラー: `plans/pjr-br5a-20261024T113909Z-bc8309d0-plan.md:51 error MD036/no-emphasis-as-heading Emphasis used instead of a heading [Context: "MISSING"]`

## 2. 影響範囲

| 観点         | 影響                                                                            |
| ------------ | ------------------------------------------------------------------------------- |
| スコープ     | このプロジェクトでは、kata の見直しの approach（`*-maintenance`）を使えない     |
| スケジュール | PJR-BR5A は approach を外した todo として流し直した                             |
| コスト       | 原因の調査と、待ち状態の記帳・残ったファイルの手作業での片付けが要った          |
| 品質         | approach を外すと、見直しの手順が plan に入らず、個票の完了条件で補う必要がある |
| 関係者       | BA（kata の見直しの担当）                                                       |

## 3. 対応方針

| 項目     | 内容                                                                                                                                                                                                                                                                                                           |
| -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 原因     | `xep-rulebook-maintenance-template.md` の「このロールが重視するレビュー観点:」の下で `_OWNER_ROLE_VIEWPOINTS_` が単独の段落になっている。`ownerRoleFields`（`dist/exec/plans-core.js`）は、owner の role に当てはまる観点がないと `MISSING` を返すため、段落が `_MISSING_` だけになる（orchestrator の見立て） |
| 対応策   | SpecDojo へ報告し、観点がないときも plan が markdownlint を通るよう直してもらう。直るまでは、kata の見直しは approach を外した todo で行う                                                                                                                                                                     |
| 依存事項 | SpecDojo 本体の修正（このプロジェクトの `repos` にないため、ここでは直せない）                                                                                                                                                                                                                                 |
| 完了条件 | 直った版で、`rulebook-maintenance` の todo が着手の checkpoint を通り、統合まで進む                                                                                                                                                                                                                            |

### 3.1. 作業内容

| No  | 作業                                                   | 担当 | 状態     | メモ            |
| --- | ------------------------------------------------------ | ---- | -------- | --------------- |
| 1   | SpecDojo へ報告する                                    | orch | done     | 本家の PJR-SS72 |
| 2   | 直った版で、見直しの approach の todo を流して確かめる | BA   | rejected | 本家で扱う      |

## 4. 対応結果

SpecDojo 本体の不具合のため、本家の SpecDojo（github.com/specdojo/specdojo）の登録簿 prj-0001 に PJR-SS72 として起票し、こちらでは追わない。
本家の起票は clone の `project/prj-0001/develop` へローカルに commit した段階で、push は利用者が行う。
直った版の確認は、このプロジェクトで specdojo を上げるときに行う。

## 5. 関連ドキュメント

- [[prj-0001:pjr-br5a-lsd-rulebook-review]]：不具合が起きた項目（派生元）
- 止まった run の evidence: `docs/ja/projects/prj-0001/execution/exec/evidence/PJR-BR5A/20261024T113909750Z-5a0bf557/integrate.log`
