---
specdojo:
  id: prj-0001:pjr-a0v0-music-art-volume
  type: project
  status: draft
  rulebook: specdojo:pjr-rulebook
  part_of:
    - prj-0001:pjr-index
  item_type: todo
  item_status: in-progress
  priority: medium
  difficulty: medium
  owner: BA
  registered_at: "2026-11-15T06:59:13Z"
  due_on: "2026-11-30"
---

# PJR-A0V0 第3回の指導案とスライドに規則性の体験と発展ミッションを加える

## 1. 概要

第3回（音楽と図形のプログラミングアート）は45分に対して基本制作で学ぶことが少なく、後半15分の進め方も決まっていない。時間配分（5・20・15・5分）は変えずに、基本制作1で全員が三角形・六角形を作って360÷角数の規則性を見つける活動と、変数「角数」を最初に置いた段階つきの発展ミッションを、指導案とスライドに入れる。

## 2. 入力

<!-- 対話で得た前提・制約・委任範囲を記録する。完了・回答の判定条件とは分ける。 -->

- 利用者が第3回の指導案を確認し、45分に対して分量が少ないと指摘した。orchestrator の分析では、基本制作の20分は2重ループや拡張機能の追加のつまずきを考えると縮める必要はなく、薄いのは学ぶことの量（規則性を正方形でしか扱わない）と、発展15分の進め方が決まっていないことである。
- 利用者は次の方針を決めた。(A) 基本制作1に「変えて試す」を入れ、全員が三角形・六角形も作って 360 ÷ 角数 の規則性を見つける。(C) 発展を段階つきのミッションにする。(B) 変数「角数」による一般化は、標準完成形には入れず、発展ミッションの最初に置く。
- コース計画の時間配分（導入5分・基本制作20分・発展15分・まとめ5分）と、最低完成形・標準完成形の内容は変えない。
- 変更対象は `coderdojo-lessons`（実行中は `$SPECDOJO_REPO_CODERDOJO_LESSONS`）の次のファイルとする。
  - `courses/scratch-basic/lessons/030-music-art/lesson-plan.md`
  - `courses/scratch-basic/lessons/030-music-art/slides.md`
  - `courses/scratch-basic/lessons/030-music-art/style.css`（新しい部品の見た目が必要な場合だけ）
- 根拠にする文書（読み取り専用）は次のとおり。
  - `coderdojo-lessons` の `courses/scratch-basic/course-plan.md`
  - このリポジトリの `edu-scratch:lpl-rulebook`（`docs/ja/specdojo/rulebooks/edu-scratch/lpl-rulebook.md`）
  - このリポジトリの `edu-scratch:lsd-slidev-rulebook`（`docs/ja/specdojo/rulebooks/edu-scratch/lsd-slidev-rulebook.md`）
  - 書き方の手本として、見直し済みの第2回 `courses/scratch-basic/lessons/020-balloon-game/lesson-plan.md` と `slides.md`

## 3. 完了条件

- **規則性の体験（A）**：基本制作1で正方形を描いたあと、全員が三角形と六角形も作り、角数・回す角度・繰り返す回数を表で比べて 360 ÷ 角数 にたどり着く「変えて試す」の流れが、指導案（5章の表・進め方）とスライドの両方にある。スライドには、角数と回す角度を埋める表（または同等の図）を置き、答えを先に見せない問いの形にする。
- **段階つきの発展ミッション（C・B）**：発展が、易しいものから順に並んだ段階つきのミッションになっている。最初のミッションは変数「角数」を作り、「(角数) 回繰り返す」「(360 ÷ (角数)) 度回す」で角数を変えるだけで図形が変わるようにするもので、スライドにブロック図がある。ほかに、星形（144度回す・5回）、虹色（ペンの色を少しずつ変える）、音階を少しずつ上げるメロディなどを含める。指導案の3.3（発展形）・5章の発展の行・評価・つまずき対応にも同じ内容を反映する。
- **変えないもの**：最低完成形と標準完成形の内容、時間配分（5・20・15・5分）、基本制作の3段階の順序は変えない。基本制作1〜3の時間の内訳を変える場合は、合計20分を保ち、理由を個票の対応結果に書く。
- **整合**：授業のねらい、使用する機能、5章の表と進め方、評価、声かけとつまずき対応、まとめが、上の変更と食い違っていない。
- **文章の見直し**：2章の最後の「旧設計資料は未確認のまま…」の一文を削る。指導案に残っている `_TODO_` と `_ASSUMPTION_` は、授業前の確認事項として指導案に残すか、外すかを executor が判断し、理由を個票の対応結果に書く。第2回の指導案に合わせ、授業者が読みやすい平易な文にする。
- **素材**：Scratch標準のスプライト・背景・音と、ペン・音楽の拡張機能の標準ブロックだけを使い、事前配布のプロジェクトを前提にしない。未確認の Scratch の操作名や実施実績は断定しない。
- **検査**：作業を終える前に、変更したファイルについて `coderdojo-lessons` の Prettier（`slides.md` は `slidev` parser）・markdownlint・Slidev build（`npx slidev build`）を通す。共有の lint 設定や他の回の教材は変更しない。
- **表示の確認**：exec の sandbox で Slidev の PNG 書き出しができない場合は、統合後に orchestrator が `npx slidev export courses/scratch-basic/lessons/030-music-art/slides.md --format png` で全ページを書き出し、新しく足したページ・変えたページの文字の切れ、案内役との重なりがないことを目視で確かめる。
- 実施内容と検証結果を個票の対応結果に記録する。登録簿の状態、result、設定ファイルは変更しない。

## 4. 作業内容

| No  | 作業                                                                                        | 担当 | 状態 | メモ                                     |
| --- | ------------------------------------------------------------------------------------------- | ---- | ---- | ---------------------------------------- |
| 1   | 基本制作1に三角形・六角形で 360 ÷ 角数 を見つける「変えて試す」を入れる（指導案・スライド） | exec | open | 表は答えを先に見せない問いの形にする     |
| 2   | 発展を段階つきミッションにし、最初に変数「角数」のミッションを置く（指導案・スライド）      | exec | open | ブロック図を付ける                       |
| 3   | 指導案の関連箇所の整合と文章の見直しを行う                                                  | exec | open | 2章の一文の削除、`_TODO_` の扱いの判断   |
| 4   | Prettier・markdownlint・Slidev build で静的検査を行う                                       | exec | open | -                                        |
| 5   | 統合後に PNG 書き出しで全ページの表示を確認する                                             | orch | open | 新しいページ・変えたページを重点的に見る |

## 5. 対応結果

-

## 6. 関連ドキュメント

- `coderdojo-lessons:courses/scratch-basic/lessons/030-music-art/lesson-plan.md`（`lpl-music-art`）
- `coderdojo-lessons:courses/scratch-basic/lessons/030-music-art/slides.md`（`lsd-music-art`）
- `coderdojo-lessons:courses/scratch-basic/course-plan.md`（`cpl-scratch-basic`）
- [[edu-scratch:lpl-rulebook]]
- [[edu-scratch:lsd-slidev-rulebook]]
