---
specdojo:
  id: prj-0001:pjr-s9zm-lsd-kata-style
  type: project
  status: draft
  rulebook: specdojo:pjr-rulebook
  part_of:
    - prj-0001:pjr-index
  item_type: todo
  item_status: open
  priority: medium
  owner: DEV
  registered_at: "2026-10-24T22:46:20Z"
  due_on: "2026-10-31"
  derived_from:
    - PJR-0BVZ
---

# PJR-S9ZM 投影スライドの sample と template に style.css を含める

## 1. 概要

`edu-scratch:lsd-sample` は `teacher-cat` などの class を使うが `style.css` を含まず、単独では手本どおりに表示されない。`style.css` を含める形を決め、sample を直し、`lsd-template` にも同じ形を求める。

- 手本の `slides.md` は、先頭で `<style src="./style.css"></style>` を読み込み、活動の `style.css` で案内役の位置や文字の大きさを決めている。
- sample（`docs/ja/specdojo/samples/edu-scratch/lsd-sample.md`）には、`style.css` を読み込む行も、スタイルの定義もない。
- kata の sample は、1つの ID に1つのファイルという作りである。

含める形の候補:

| 案                                                                          | 内容                              | 確かめること                                                                             |
| --------------------------------------------------------------------------- | --------------------------------- | ---------------------------------------------------------------------------------------- |
| (i) sample の中に `<style>` のブロックで書き込む                            | 1つのファイルで完結する           | Slidev はスライドの中の `<style>` をそのページだけに当てる。全ページに効く書き方があるか |
| (ii) sample と同じ場所に付属の CSS ファイルを置き、`<style src>` で読み込む | 教材の `style.css` と同じ形になる | `kata list`・`kata show`・`kata eject` などが付属のファイルを扱えるか                    |

## 2. 完了条件

- (i)・(ii) のどちらにするかを決め、理由を個票の対応結果に書いている。
- sample が `style.css` の内容（少なくとも `teacher-cat` の位置と、本文の文字の大きさ）を含み、決めた形で読み込んでいる。
- sample を教材のリポジトリの作業用のディレクトリ（`tmp/` の下）に写して Slidev で表示し、全ページで案内役が右下に出ること、文字の大きさが手本と同じであることを確かめている。確かめた方法と結果を個票の対応結果に書いている。
- `edu-scratch:lsd-rulebook` に、sample と template が `style.css` を同じ形で含める規則がある。rulebook のほかの箇所は変えていない。
- 変えたファイルが prettier と markdownlint の検査を通る（sample は `.prettierrc` の `slidev` parser と `.markdownlintignore` に従う）。

## 3. 作業内容

| No  | 作業                                         | 担当 | 状態 | メモ                                  |
| --- | -------------------------------------------- | ---- | ---- | ------------------------------------- |
| 1   | 含める形を (i)・(ii) から決める              | DEV  | open | Slidev のスタイルの範囲と kata の扱い |
| 2   | sample に `style.css` を含める               | DEV  | open | 手本の `style.css` が元               |
| 3   | Slidev で表示して確かめる                    | DEV  | open | 教材のリポジトリの `tmp/` の下で      |
| 4   | rulebook に `style.css` を含める規則を加える | DEV  | open | `lsd-template` を作るときにも使う     |

## 4. 対応結果

_TODO_: 完了時に、実施内容・成果物・残課題を記載する。未完了の場合は `-` とする。

## 5. 関連ドキュメント

- [[prj-0001:pjr-0bvz-lsd-sample]]：sample を作った項目（派生元）
- [[edu-scratch:lsd-sample]]：直す sample
- [[edu-scratch:lsd-rulebook]]：規則を加える rulebook
