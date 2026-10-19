---
specdojo:
  id: prj-0001:pjr-pfhd-lesson-structure-comparison
  type: project
  status: draft
  rulebook: specdojo:pjr-rulebook
  part_of:
    - prj-0001:pjr-index
  item_type: todo
  item_status: in-progress
  priority: medium
  owner: BA
  registered_at: "2026-10-19T11:45:34Z"
  due_on: "2026-10-31"
  derived_from:
    - PJR-M5SC
---

# PJR-PFHD 授業コンテンツのディレクトリ体系を比較し推奨案を作成する

## 1. 概要

PJR-M5SCの判断材料として3案と成果物配置を比較し、推奨構成・移行方針をまとめる。最終決定とファイル移動は行わない。

入力は [[prj-0001:pjr-m5sc-lesson-content-structure]] と、宣言済み `coderdojo-lessons` リポジトリの現状。成果物はこの個票の対応結果にまとめ、比較表・構成例・成果物の配置表を記入する。大きい場合は同じ登録簿ディレクトリに `pjr-pfhd-lesson-structure-comparison-analysis.md` を作成し、この個票から参照する。

対象リポジトリの参照元ファイル、ブランチ、commit を記録し、観測した事実と新しい提案を区別する。移動・実装・設定変更は行わない。PJR-M5SC の決定内容・承認欄を確定せず、状態は open のまま保持する。未承認の推奨案を合意済みと扱わない。

## 2. 完了条件

- A（文書と教材を分離）・B（授業ごとに集約）・C（種類別）を同じ評価軸で比較し、利点・懸念・推奨理由を記録する。
- 各案について、複数回のコース、単発授業、講演、Scratch 以外への展開を含むディレクトリ構成例を示す。
- docs の役割と格納対象を明記し、コース計画・指導案・投影スライド・児童向け教材・開始用／完成見本・素材・配布用生成物について、利用者・正本・生成物・配置先・必要性を整理する。
- 命名、共通素材、出典・利用条件、生成物の Git 管理、既存ファイルの移行方針を推奨案として記録する。
- 推奨構成、採用を勧める理由、他案を勧めない理由、未確定事項と利用者への確認事項を記録する。
- 調査・文書作成のみを行い、授業コンテンツを移動せず、最終決定や承認を代行しない。

## 3. 作業内容

| No  | 作業   | 担当   | 状態 | メモ |
| --- | ------ | ------ | ---- | ---- |
| 1   | 現在の文書・教材・ビルド設定を調査する | BA | open | 認証情報・秘密・.env・secrets は読まない |
| 2   | 3案の構成例と成果物配置表を作成する | BA | open | PJR-M5SC の候補と評価軸を用いる |
| 3   | 比較表、推奨案、移行方針、確認事項をまとめる | BA | open | 決定は利用者の承認待ちとする |

## 4. 対応結果

-

## 5. 関連ドキュメント

- [[prj-0001:pjr-m5sc-lesson-content-structure]]
- [[prj-0001:pjr-index]]
