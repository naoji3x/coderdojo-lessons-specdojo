---
specdojo:
  id: prj-0001:pjr-s9zm-lsd-kata-style
  type: project
  status: ready
  rulebook: specdojo:pjr-rulebook
  part_of:
    - prj-0001:pjr-index
  item_type: todo
  item_status: done
  priority: medium
  owner: DEV
  registered_at: "2026-10-24T22:46:20Z"
  due_on: "2026-10-31"
  completed_at: "2026-10-24T23:19:45Z"
  conclusion: sample の見た目を付属の lsd-sample.css に置き、表示のときに style.css として写す形にした。rulebook に class の決まりと style.css の読み込みの規則を加えた。
  derived_from:
    - PJR-0BVZ
---

# PJR-S9ZM 投影スライドの sample と template に style.css を含める

## 1. 概要

`edu-scratch:lsd-sample` は `teacher-cat` などの class を使うが `style.css` を含まず、単独では手本どおりに表示されない。`style.css` を含める形を決め、sample を直し、`lsd-template` にも同じ形を求める。

- 手本の `slides.md` は、先頭で `<style src="./style.css"></style>` を読み込み、活動の `style.css` で案内役の位置や文字の大きさを決めている。
- sample（`docs/ja/specdojo/samples/edu-scratch/lsd-sample.md`）には、`style.css` を読み込む行も、スタイルの定義もない。
- kata の sample は、1つの ID に1つのファイルという作りである。

sample を Slidev で表示したところ、3ページ目以降で手本の見た目にならなかった。`style.css` 自体は読み込まれており（1・2ページ目の案内役の位置と本文の文字の大きさは効いていた）、sample が `style.css` の規則の目印となる class を付けていないためである。

| ページ               | 手本の `slides.md`                                                          | sample                        |
| -------------------- | --------------------------------------------------------------------------- | ----------------------------- |
| 節の扉               | `class: section-slide section-observe` など                                 | `class` がない                |
| 説明                 | 実機での確認の文に `<p class="device-check">`、ページ設定に `margin: tight` | `<p>` だけで、`margin` もない |
| めあて・まとめ・発展 | `check-list`・`completion-grid`・`mission-list`                             | 普通のリストか、別の書き方    |

rulebook には `teacher-cat` 以外の class の決まりがない。

含める形の候補:

| 案                                                                          | 内容                              | 確かめること                                                                             |
| --------------------------------------------------------------------------- | --------------------------------- | ---------------------------------------------------------------------------------------- |
| (i) sample の中に `<style>` のブロックで書き込む                            | 1つのファイルで完結する           | Slidev はスライドの中の `<style>` をそのページだけに当てる。全ページに効く書き方があるか |
| (ii) sample と同じ場所に付属の CSS ファイルを置き、`<style src>` で読み込む | 教材の `style.css` と同じ形になる | `kata list`・`kata show`・`kata eject` などが付属のファイルを扱えるか                    |

## 2. 完了条件

- (i)・(ii) のどちらにするかを決め、理由を個票の対応結果に書いている。
- sample が `style.css` の内容（少なくとも `teacher-cat` の位置と、本文の文字の大きさ）を含み、決めた形で読み込んでいる。
- `tools/preview-lsd.sh png docs/ja/specdojo/samples/edu-scratch/lsd-sample.md` で全ページを PNG に書き出し、全ページで案内役が右下に出ること、文字の大きさが手本と同じであることを確かめている。Chromium が sandbox の中で動かず書き出せない場合は、その旨とエラーを個票の対応結果に書く（統合の後に orchestrator が書き出して確かめる）。確かめた方法と結果を個票の対応結果に書いている。
- `edu-scratch:lsd-rulebook` に、sample と template が `style.css` を同じ形で含める規則がある。rulebook のほかの箇所は変えていない。
- rulebook に、`style.css` が定める class の一覧と、どのページ・要素に付けるかの決まりがある（例: 節の扉は `class: section-slide section-<種類>`、実機での確認の文は `device-check`）。
- sample の各ページが、その class を使っている。手本と同じ種類のページ（節の扉・説明・まとめ）を表示したとき、見た目が手本と同じであることを確かめ、結果を個票の対応結果に書いている。
- 変えたファイルが prettier と markdownlint の検査を通る（sample は `.prettierrc` の `slidev` parser と `.markdownlintignore` に従う）。

## 3. 作業内容

| No  | 作業                                                        | 担当 | 状態 | メモ                                                                       |
| --- | ----------------------------------------------------------- | ---- | ---- | -------------------------------------------------------------------------- |
| 1   | 含める形を (i)・(ii) から決める                             | orch | done | exec は (i) を選んだが、表示で1ページ目にしか効かず、orch が (ii) に直した |
| 2   | sample に `style.css` を含める                              | orch | done | 付属の `lsd-sample.css`                                                    |
| 3   | Slidev で表示して確かめる                                   | orch | done | exec は sandbox で書き出せず、統合後に orch が確かめた                     |
| 4   | rulebook に `style.css` を含める規則を加える                | orch | done | exec の規則を orch が Slidev の仕組みに合わせて直した                      |
| 5   | rulebook に class の決まりを加え、sample の各ページに付ける | exec | done | 手本の `slides.md` に対応する class                                        |

## 4. 対応結果

- kata は 1 ID に 1 Markdown ファイルであり、既存の `tools/preview-lsd.sh` も kata 本体だけを作業用ディレクトリへコピーする。そのため、外部 CSS を付属させる案 (ii) では単独表示と kata の配布形式を保証できない。sample 内の先頭 `<style>` ブロックへ必要な規則を直接書く案 (i) を採用した。
- `[[edu-scratch:lsd-sample|投影スライド sample]]` に、本文・案内役・節の扉・実機確認・めあて・標準完成の見た目を定める CSS を追加した。めあては `check-list`、節の扉は `section-slide section-<種類>`、実機確認は `device-check`、標準完成は `completion-grid` を使い、手本と同じ種類のページの class をそろえた。
- `[[edu-scratch:lsd-rulebook|投影スライド Rulebook]]` に、通常の活動では `slides.md` から `./style.css` を読み込むこと、kata の sample と将来の template は同じ `<style>` 方式にすること、class ごとの使用箇所を記載した。
- `tools/preview-lsd.sh png docs/ja/specdojo/samples/edu-scratch/lsd-sample.md` を実行したが、Slidev のポート取得時に sandbox の `uv_interface_addresses` が `Unknown system error 1` となり、Chromium の起動前に PNG を出力できなかった。統合後に sandbox 外の orchestrator が全ページを PNG 出力し、案内役の右下配置と本文文字サイズを確認する。

orchestrator が確かめ、直したこと:

- exec run（codex-expert-executor・terra-reporter）で統合した（`c60633b`）。class の決まりと sample の class は、完了条件どおりに入った。
- 統合後に `tools/preview-lsd.sh png` で書き出すと、CSS は1ページ目にしか効いていなかった。2ページ目以降は、案内役が右下に出ず、節の色や `device-check` の見た目もなかった。
- 原因: Slidev は Markdown の中の `<style>` を `<style scoped>` に書き換え、そのページだけに当てる（`@slidev/cli` の `MarkdownItStyleScoped`）。全ページに効くのは、`slides.md` と同じディレクトリの `style.css`・`styles.css`・`styles/index.css` の自動の読み込みだけである。手本で全ページに効いているのも、この自動の読み込みによる。
- 利用者の指定で orchestrator が直した（`e5b3f02`、merge `afb0c25`）。
  - sample の `<style>` のブロックを、付属の `lsd-sample.css` に移した（案 (ii)）。
  - `tools/preview-lsd.sh` が、kata と同じ名前の `.css` を `style.css` として写すようにした。
  - rulebook の規則を、`style.css` の自動の読み込みと `<style>` が scoped になることに合わせた。
- 直した後に8ページを書き出し、全ページで案内役が右下に出ること、節の扉の色の帯と下線、`device-check`・`check-list`・`completion-grid` の見た目が出ることを確かめた。sample と rulebook は prettier と markdownlint を通る。

残課題:

- `kata list` と `kata status` が、付属の `lsd-sample.css` を ID `lsd-sample` の別の sample として表示する（`kata status` では `package-missing`）。kata の一覧が kata のディレクトリのファイルをすべて数えるためで、`kata show edu-scratch:lsd-sample` は正しく動く。
- 教材の `slides.md` の先頭の `<style src="./style.css">` は、新しい規則では不要になる。消すかは、次に教材を直すときに判断する。

## 5. 関連ドキュメント

- [[prj-0001:pjr-0bvz-lsd-sample]]：sample を作った項目（派生元）
- [[edu-scratch:lsd-sample]]：直す sample
- [[edu-scratch:lsd-rulebook]]：規則を加える rulebook
