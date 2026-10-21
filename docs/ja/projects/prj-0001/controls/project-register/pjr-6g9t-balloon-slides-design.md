---
specdojo:
  id: prj-0001:pjr-6g9t-balloon-slides-design
  type: project
  status: draft
  rulebook: specdojo:pjr-rulebook
  part_of:
    - prj-0001:pjr-index
  item_type: todo
  item_status: in-progress
  priority: medium
  owner: BA
  registered_at: "2026-10-21T13:40:02Z"
  due_on: "2026-10-31"
  derived_from:
    - PJR-95RS
---

# PJR-6G9T 第2回のスライドを高学年向けに装飾し、Scratchブロックの図を入れる

## 1. 概要

PJR-95RS で試作した第2回（風船割りゲーム）の `slides.md` を、小学校高学年の授業らしい見た目に整える。あわせて、プログラムの説明に scratchblocks で描いた Scratch のブロックの図を入れる。

対象は宣言済みの `coderdojo-lessons` リポジトリの `courses/scratch-basic/lessons/020-balloon-game/slides.md`。授業内容の正本は `docs/course-design/course-plan.md` の第2回と、同じディレクトリの `lesson-plan.md` とする。

orchestrator が実行前に次を準備した。

- テーマ `slidev-theme-neversink`（MIT）を開発依存に追加し、`slides.md` のフロントマターを `theme: neversink` にした。小学校向け・Scratch 向けの Slidev テーマは見つからなかった。このテーマは教育向けで、吹き出し（`SpeechBubble`）・付箋（`StickyNote`）・注意書き（`Admonition`）・キャラクター（`vue3-kawaii`）・色の組み合わせ・レイアウトを持つため選んだ。使い方は `node_modules/slidev-theme-neversink/docs/` にある。
- `scratchblocks`（MIT、3.7.1）を開発依存に追加した。日本語（`ja`）とひらがな（`ja-Hira`）の訳を含む。

agent の実行環境はネットワークに出られず、`package.json` は agent が変更できない。新しい依存が必要になった場合は追加せず、対応結果に書く。

## 2. 完了条件

- `slides.md` が、小学校高学年の授業らしい見た目になっている。
  - 大きめの文字、考え方（変数・乱数・クローン・メッセージ）ごとの色分け、表紙や区切りのレイアウトを使う。
  - テーマ `neversink` の機能と、活動ディレクトリの CSS（`style.css` など）の範囲で行う。新しいテーマやパッケージは追加しない。
- 得点・乱数・クローン・メッセージと背景切替の説明に、scratchblocks で描いたブロックの図が入っている。
  - ブロックは日本語で表示する。
  - 図の元は文字（scratchblocks の記法）で書き、Git で差分を見られるようにする。描画のための部品は活動ディレクトリの `components/` に置く（PJR-M5SC 3.2）。
  - Stretch3 でのブロックの正確な名前・配置は「実機で確かめる」と印を付け、推測で確定しない。
- 外部の画像（Scratch のスプライトの画像など）は使わない。使う必要がある場合は、出典と利用条件を記録する（PJR-M5SC 3.4）。
- `npx slidev build` が成功し、`dist/` と `node_modules/` を commit していない。
- `lesson-plan.md` の内容は変えない。スライドと流れが合わなくなる場合は、対応結果に書く。
- ブロックの図の書き方を、ほかの回でも使える形で `docs/guides/slidev-guide.md` に追記する。
- 対応結果に、装飾とブロックの図をどう作ったか、ほかの回へ広げるときの注意を書く。
- 見た目は build の成否では判断できないため、利用者が開発サーバーで表示を確かめて了承する。

## 3. 作業内容

| No  | 作業                                                                        | 担当 | 状態 | メモ                                         |
| --- | --------------------------------------------------------------------------- | ---- | ---- | -------------------------------------------- |
| 1   | テーマ `neversink` と scratchblocks の使い方を確認する                      | BA   | done | 依存は orchestrator が追加済み               |
| 2   | scratchblocks でブロックの図を描く部品を `components/` に作る               | BA   | done | 日本語の訳を使う                             |
| 3   | `slides.md` を装飾し、各説明にブロックの図を入れる                          | BA   | done | 推測したブロック名には「実機で確かめる」の印 |
| 4   | `npx slidev build` で確かめ、`slidev-guide.md` にブロックの図の書き方を書く | BA   | done | `dist/` は Git 管理しない                    |
| 5   | 利用者が開発サーバーで見た目を確かめる                                      | BA   | open | close の前に行う                             |
| 6   | 1回目のレビューの指摘（4.2）を直す                                          | BA   | done | 2回目の実行で対応した（4.3）                 |
| 7   | 背景を白基調にする（4.4）                                                   | BA   | open | やり直しの指示に従う                         |

## 4. 対応結果

### 4.1. 1回目の実行

codex-expert-executor が実行し、coderdojo-lessons の `develop` に `68e0727` で統合された。

- `slidev-theme-neversink` の表紙・区切り・2列レイアウトと、変数（橙）・乱数（緑）・クローン（黄橙）・メッセージ（黄）の配色で、考え方の切替が分かるスライドにした。本文の文字を大きくし、各工程を「作る → 動かす → 確かめる」の順で示した。
- `components/ScratchBlocks.vue` は、スライドに書いた scratchblocks の文字列を、日本語の Scratch 3 ブロックにブラウザ上で描画する。得点、乱数、クローン、メッセージ送信、背景切替の図を追加し、元の記法は `slides.md` に残した。
- Scratch 3 のブロック名、変数・メッセージ・背景の選択肢、座標範囲とクローンの間隔は、授業用端末の実機で確認してから確定する。各図の近くに確認印を付けた。`lesson-plan.md` は変更していない。
- 他の回へ広げるときは、[[prj-0001:pjr-m5sc-lesson-content-structure|PJR-M5SC]] の活動ディレクトリ規約に従い、同じ `ScratchBlocks.vue` をその活動の `components/` に置く。使う名前を授業の完成見本に合わせ、外部画像を追加する場合だけ出典・利用条件を記録する。
- 見た目は開発サーバーでの人による確認が必要なため、No. 5 は open のままとする。

### 4.2. 1回目のレビューの指摘とやり直しの指示

orchestrator がレビューし、PNG に出力して確かめた結果、次の不具合があった。

1. **スライドごとの設定が効いていない。** `slides.md` を通常の Markdown として prettier で整形したため、区切りの `---` の直後に空行が入り、`layout` などの設定が本文として扱われている。Slidev の解析器では全35枚のうち `layout` が効いているのは0枚で、空のスライドが17枚ある。
   - orchestrator が `prettier-plugin-slidev` と `.prettierrc` を入れ、`slides.md` は Slidev として整形されるようにした（commit `f159740`）。
   - 指示：区切りの `---` の直後に空行を入れず、スライドごとの設定を書く。`npx prettier --check` は `.prettierrc` の設定のまま実行する。Slidev の解析器で、各スライドの `layout` が効いていることを確かめる。
2. **ブロックの図の元の文字で、改行が消えている。** Vue がスライドを組み立てるときに、部品の中の改行と空白を詰めている。空行のところでは Markdown の段落に分かれる。そのため、各図が1つの赤いブロック（scratchblocks が解釈できないブロック）として描かれている。ガイドの 3.5 の例も同じ問題がある。
   - 指示：改行・字下げ・空行が保たれる書き方にする。orchestrator の試作では、部品の中に空行を挟んで ` ```text ` のコードブロックで元の文字を書き、部品で `pre` の `textContent` を読んで描画すると、正しく描けた。
   - 指示：C 型のブロック（`もし`・`ずっと`）を閉じる `end` は、日本語の訳だけでは解釈されない。scratchblocks に読み込ませる言語に英語も加える（例：`languages: ["ja", "en"]`）。
   - 指示：ガイドの 3.5 の書き方の例も直す。
3. **1枚目が空のページになっている。** `<style src="./style.css">` だけのスライドになっている。表紙と同じスライドにまとめる。
4. **変数の値のブロックの書き方。** `([得点 v])` ではなく `(得点)` と書く。

確かめ方：

- `npx slidev export <slides.md> --format png --output <作業用のディレクトリ>` で PNG に出力し、ブロックの図が Scratch の色（イベントは黄、変数は橙など）で、1行ずつ分かれて描かれていることを確かめる。Chromium とシステムのライブラリ、日本語のフォントは orchestrator が環境に入れた。出力した PNG は commit しない。
- ブロックの日本語の名前は、scratchblocks の日本語の訳と一致していることを確かめた。引き続き、Stretch3 の実機で確かめる印は残す。

### 4.3. 2回目の実行

- `slides.md` の先頭に表紙用のスライド設定を置き、2枚目以降の設定は区切りの直後へ置いた。`style.css` は表紙と同じスライドで読み込むため、スタイル読込だけの空ページは作られない。
- `ScratchBlocks.vue` は、各図の `text` コードブロックにある `pre` 要素の `textContent` を scratchblocks に渡すように直した。これにより、元の記法の改行・字下げ・空行が保たれる。日本語に加えて英語の翻訳も読み込み、C型ブロックを閉じる `end` を解釈できるようにした。
- 得点の参照は `(得点)` に直した。得点、乱数、クローン、メッセージ送信、背景切替の全ての図で、元の scratchblocks 記法を `slides.md` に残している。[[prj-0001:pjr-m5sc-lesson-content-structure|PJR-M5SC]] に従い、`docs/guides/slidev-guide.md` の例と注意も同じ形式へ更新した。
- `npx prettier --write` と `npx slidev build courses/scratch-basic/lessons/020-balloon-game/slides.md` は成功した。Slidev のパーサーで、空スライドなしの17枚全てにレイアウトと本文があることも確認した。PNG 出力は、この実行環境で Slidev がネットワークインターフェースを取得できず開始前に停止したため、開発サーバーまたは PNG 出力での人による目視確認を close 前に行う。`dist/` と作業用出力は Git 管理しない。

### 4.4. 2回目のレビューと、背景を白基調にする指示

orchestrator が2回目の成果物を PNG に出力して確かめ、4.2 の指摘がすべて直っていることを確認した（coderdojo-lessons の `a3ee10c`）。

利用者の判断により、背景を白基調にする。小学校の教室のプロジェクターでは、色付きの背景は薄れて文字との差が小さくなる。また、Scratch の編集画面も白い背景で、ブロックの図は白い背景の上で本物に近く見える。

指示：

1. すべてのスライドの背景を白にする。テーマ `neversink` の白の配色（`color: white`）を使う。表紙の紫の背景に紺の文字のような、色付きの背景に文字を置く組み合わせはなくす。
2. 色は「考え方ごとの目印」として残す。変数は橙、乱数は緑、クローンは黄橙、メッセージは黄の対応を保つ。区切りのスライド（「1. 得点を作ろう」など）は、背景を白にしたうえで、見出しの下線や左の帯などでその考え方の色を示す。
3. 色だけに頼らず、番号と言葉でも区別できるようにする。クローン（黄橙）とメッセージ（黄）は色が似ているため、特に番号と見出しで見分けられることを保つ。
4. ブロックの図の後ろの灰色の枠は、白い背景になじむように薄くするか、なくす。
5. ブロックの図、スライドの構成、文の内容は変えない。4.2 の書き方（区切りの直後に空行を入れない、`text` のコードブロック）を守る。

確かめ方：

- `npx prettier --check` と `npx slidev build`、Slidev の解析器で全17枚の `layout` が効いていることを確かめる。
- この実行環境では PNG に出力できないため、見た目は統合のあとに orchestrator が PNG で確かめる。
- 結果の要約・申し送りは、1項目を短い文にする。長いパスやコマンドは、文と分けて書く。

## 5. 関連ドキュメント

- [[prj-0001:pjr-95rs-revise-lesson-designs]]：第2回の試作（派生元）
- [[prj-0001:pjr-m5sc-lesson-content-structure]]：活動ディレクトリの構成と Slidev の規約（3.2〜3.4）
