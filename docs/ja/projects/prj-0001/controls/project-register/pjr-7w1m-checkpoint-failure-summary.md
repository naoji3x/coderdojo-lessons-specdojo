---
specdojo:
  id: prj-0001:pjr-7w1m-checkpoint-failure-summary
  type: project
  status: draft
  rulebook: specdojo:pjr-rulebook
  part_of:
    - prj-0001:pjr-index
  item_type: issue
  item_status: open
  priority: medium
  owner: BA
  registered_at: "2026-10-24T11:50:40Z"
  due_on: "2026-10-31"
  derived_from:
    - PJR-BR5A
---

# PJR-7W1M checkpoint の commit の失敗の要約が、失敗していない step を挙げる

## 1. 課題内容

着手の checkpoint と待ち状態の記帳の commit が失敗したとき、runner の要約と `block_reason` が、成功した prettier の step を失敗として挙げる（SpecDojo 0.4.5）。

- 起きたこと: PJR-BR5A の着手の checkpoint の commit が失敗したとき、要約と `block_reason` は `format documentation and configuration: Checking formatting...` だった。
- 実際: lefthook の summary では prettier の step（format documentation and configuration）は成功し、失敗の印が付いたのは markdownlint の step（lint Markdown documentation）だった。
- 0.4.1 の PJR-0EFN で直した要約の処理が、着手の checkpoint と待ち状態の記帳の commit では使われていないように見える（orchestrator の見立て）。

## 2. 影響範囲

| 観点         | 影響                                                                        |
| ------------ | --------------------------------------------------------------------------- |
| スコープ     | runner の commit の失敗の報告                                               |
| スケジュール | 作業は止めないが、原因の特定に evidence の `integrate.log` を読む必要がある |
| コスト       | 誤った step を先に調べる手間がかかる                                        |
| 品質         | `block_reason` に誤った原因が残る                                           |
| 関係者       | BA、exec run の失敗を調べる人                                               |

## 3. 対応方針

| 項目     | 内容                                                                                                                     |
| -------- | ------------------------------------------------------------------------------------------------------------------------ |
| 原因     | 未確定。要約が hook の出力の最初の step を挙げているように見える                                                         |
| 対応策   | SpecDojo へ報告し、lefthook の summary で失敗の印が付いた step と最初の error の行を挙げるよう直してもらう               |
| 依存事項 | SpecDojo 本体の修正（このプロジェクトの `repos` にないため、ここでは直せない）                                           |
| 完了条件 | 直った版で、checkpoint の commit が hook で失敗したとき、要約と `block_reason` に失敗した step の名前と error の行が出る |

### 3.1. 作業内容

| No  | 作業                             | 担当 | 状態     | メモ            |
| --- | -------------------------------- | ---- | -------- | --------------- |
| 1   | SpecDojo へ報告する              | orch | done     | 本家の PJR-68KR |
| 2   | 直った版で、失敗の要約を確かめる | BA   | rejected | 本家で扱う      |

## 4. 対応結果

SpecDojo 本体の不具合のため、本家の SpecDojo（github.com/specdojo/specdojo）の登録簿 prj-0001 に PJR-68KR として起票し、こちらでは追わない。
本家の起票は clone の `project/prj-0001/develop` へローカルに commit した段階で、push は利用者が行う。
直った版の確認は、このプロジェクトで specdojo を上げるときに行う。

## 5. 関連ドキュメント

- [[prj-0001:pjr-br5a-lsd-rulebook-review]]：不具合が起きた項目（派生元）
- 止まった run の evidence: `docs/ja/projects/prj-0001/execution/exec/evidence/PJR-BR5A/20261024T113909750Z-5a0bf557/integrate.log`
