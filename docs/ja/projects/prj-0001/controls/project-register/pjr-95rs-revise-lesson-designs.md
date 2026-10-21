---
specdojo:
  id: prj-0001:pjr-95rs-revise-lesson-designs
  type: project
  status: ready
  rulebook: specdojo:pjr-rulebook
  part_of:
    - prj-0001:pjr-index
  item_type: todo
  item_status: done
  priority: medium
  owner: BA
  registered_at: "2026-10-20T12:59:14Z"
  due_on: "2026-10-31"
  completed_at: "2026-10-21T11:16:42Z"
  conclusion: 第2回（風船割りゲーム）の指導案とSlidevスライドをcourses/scratch-basic/lessons/020-balloon-game/に試作し、ビルドを確認した。移行で決める事項はPJR-3E2Kへ申し送った
  derived_from:
    - PJR-W9MV
    - PJR-M5SC
---

# PJR-95RS 第2回の授業を新しいディレクトリ体系で試作する

## 1. 概要

PJR-M5SCで決めた活動ディレクトリの構成とSlidevで、第2回（風船割りゲーム）の指導案とスライドを試作し、残りの回の書き方と移行の判断材料にする。

対象は宣言済みの `coderdojo-lessons` リポジトリ。授業内容の正本は `docs/course-design/course-plan.md` の第2回の記述とする（変更案の `local/revised-course-design.md` は Git 管理外のため参照しない）。配置と画像参照の規約は [[prj-0001:pjr-m5sc-lesson-content-structure]] の 3.2・3.3 に従い、コース ID は `scratch-basic` とする。

course-plan.md に書かれていない授業の事実（使用するブロックの正確な名称・配置、実施日、参加人数など）を推測で確定させない。確認が必要な事項は対応結果に記録する。

## 2. 完了条件

- `coderdojo-lessons` の `courses/scratch-basic/lessons/020-balloon-game/` に `lesson-plan.md` と `slides.md` がある。
- `lesson-plan.md` は course-plan.md の第2回の記述を正本とし、次の内容を含む。
  - 授業の概要（対象・時間・テーマ・ねらい・使用する文法と機能）
  - 授業の位置づけ（第1回・第3回とのつながり）
  - 最低・標準・発展の完成形
  - 事前準備（教師用の完成見本、開始用プロジェクト）
  - 45分の流れ（導入5分・基本制作25分・発展10分・まとめ5分）
  - 声かけの例とつまずきへの対応
- 見出しの構成は既存の各回ファイル（`docs/course-design/020-animation.md` など）を参考にする。棒人間・コスチューム編集の内容は持ち込まない。
- `slides.md` は Slidev の書式で、授業の流れに沿った投影スライドになっている。画像の参照は PJR-M5SC の 3.3 に従う。
- `npx slidev build` でビルドできる。生成された `dist/` は commit しない。
- この回で必要な成果物（開始用・完成見本の `.sb3`、配布物、素材）の一覧と、それぞれを Git で管理するかの案を対応結果に記録する（PJR-3E2K の確認事項 No.3 の判断材料）。
- `.sb3` ファイルは作らず、必要なファイルとその中身を `lesson-plan.md` の事前準備に記述する。
- 既存のファイル（`docs/course-design/020-animation.md`、`course-plan.md` のリンク）を移動・削除しない。
- 新しい構成で書いて分かった問題と、残りの回で決めておくべきことを対応結果に記録する。

## 3. 作業内容

| No  | 作業                                                         | 担当 | 状態 | メモ                                                       |
| --- | ------------------------------------------------------------ | ---- | ---- | ---------------------------------------------------------- |
| 1   | course-plan.md の第2回と既存の各回ファイルの書き方を確認する | BA   | done | terra-executor が実施した                                  |
| 2   | `lesson-plan.md` を作成する                                  | BA   | done | terra-executor が作成し、orchestrator が管理用の節を外した |
| 3   | `slides.md` を作成し、`npx slidev build` で確認する          | BA   | done | orchestrator も本体でビルドできることを確認した            |
| 4   | 必要な成果物の一覧と、試作で分かったことを記録する           | BA   | done | 4.3・4.4 に記録した                                        |

## 4. 対応結果

### 4.1. 実施経路

- `exec run --register PJR-95RS --worktree` で terra-executor が実行した。
- 統合が2回止まり、orchestrator が次の対処をして `--resume` で再開した。
  - result の書式違反：`slidev build` が活動ディレクトリに作った `node_modules/.slidev/`（20ファイル）を agent が result の変更ファイルに並べ、MD013 に違反した。生成物を削除し、result の該当行を直した。
  - commit 対象外：runner は、新しい最上位ディレクトリ `courses/` のファイルを計画の `targets` にない限り commit しない。2ファイルを orchestrator が exec ブランチへ commit した（`0107f72`）。
- coderdojo-lessons の `develop` への merge は `f45ef82`。

### 4.2. 成果物

- `courses/scratch-basic/lessons/020-balloon-game/lesson-plan.md`：course-plan.md の第2回を正本とする指導案。概要、第1回・第3回とのつながり、最低・標準・発展の完成形、完成見本と開始用プロジェクトの準備、45分の流れ、声かけとつまずき対応を含む。棒人間・コスチューム編集の内容は持ち込んでいない。
- `courses/scratch-basic/lessons/020-balloon-game/slides.md`：Slidev の投影スライド（13枚、`v-click` を使用）。画像は追加していない。
- `.sb3`・配布物・追加素材は作っていない。既存の `docs/course-design/020-animation.md` と course-plan.md のリンクは変えていない。
- 指導案に agent が書いた「必要な成果物とGit管理案」と「試作で分かったこと」は講師向けの内容ではないため、指導案から外して 4.3・4.4 へ移した（commit `29bec42`、merge `8595700`）。

### 4.3. 必要な成果物と Git 管理案

PJR-3E2K の確認事項 No.3 の判断材料とする。

| 成果物           | 役割                                       | 配置案                 | Git 管理案                                   |
| ---------------- | ------------------------------------------ | ---------------------- | -------------------------------------------- |
| `lesson-plan.md` | 講師・補助者用の指導案                     | 活動ディレクトリ       | 管理する                                     |
| `slides.md`      | 投影スライドの正本                         | 活動ディレクトリ       | 管理する                                     |
| 開始用 `.sb3`    | 児童が制作を始める土台                     | `projects/starter.sb3` | 管理する案。配布前に内容と再現手順を確認する |
| 完成見本 `.sb3`  | 講師が完成形を示す見本                     | `projects/example.sb3` | 管理する案。開始用と役割を分ける             |
| 児童向け配布物   | 手順または振り返りが必要な場合のみ用意する | `handouts/`            | 編集元を管理し、再生成できる出力は管理しない |
| 活動固有の素材   | 追加画像・音声が必要な場合のみ用意する     | `assets/`              | 出典・利用条件を確認できるものだけ管理する   |
| Slidev の生成物  | 投影用 HTML など                           | `dist/`                | 管理しない                                   |

### 4.4. 試作で分かったこと

- 指導案とスライドを活動ディレクトリに集約すると、講師が準備物を同じ場所で確認できる。
- `slidev build` を実行すると、活動ディレクトリに `node_modules/.slidev/` が作られる（orchestrator の確認でも再現した）。`.gitignore` がルート直下の `/node_modules` しか除外しておらず、`dist/` も除外していなかったため、どの階層の `node_modules/` と `dist/` も除外した（coderdojo-lessons の commit `0bca5fa`、merge `19192fa`）。
- runner は新しい最上位ディレクトリを計画の `targets` なしには commit しない。残りの回や移行を agent に任せるときにも同じことが起きる。
- 指導案は 136 行で、既存の各回ファイル（700〜1,050 行）よりかなり簡潔である。声かけは場面ごとに1つで、既存ファイルにある詳しい説明の例はない。
- 授業で使う Scratch 環境でのブロックの正確な名前・配置と、開始用プロジェクトの初期状態は、実機で完成見本を確かめてから決める。

### 4.5. 残課題

[[prj-0001:pjr-3e2k-migrate-lesson-structure|PJR-3E2K]] へ申し送った。

- 開始用・完成見本の `.sb3` をどこまで事前に作り、バイナリをどう Git 管理するか（確認事項 No.3）。
- agent に任せるときに、計画の `targets` へ新しいディレクトリを書く運用。
- 残りの回の指導案をどこまで詳しく書くか。
- 実機で確かめたブロックの名前・配置の反映。
- 両リポジトリの develop の push は利用者が行う。

## 5. 関連ドキュメント

- [[prj-0001:pjr-m5sc-lesson-content-structure]]：配置と Slidev の規約（3.2・3.3）
- [[prj-0001:pjr-w9mv-revise-course-plan]]：course-plan.md の改訂
- [[prj-0001:pjr-3e2k-migrate-lesson-structure]]：移行作業と残りの確認事項
