---
specdojo:
  id: prj-0001:pjr-nh2z-balloon-slides-follow-plan
  type: project
  status: draft
  rulebook: specdojo:pjr-rulebook
  part_of:
    - prj-0001:pjr-index
  item_type: todo
  item_status: in-progress
  priority: medium
  owner: BA
  registered_at: "2026-10-25T02:12:07Z"
  due_on: "2026-10-31"
  derived_from:
    - PJR-XVR2
---

# PJR-NH2Z 第2回のスライドを、直した指導案に合わせる

## 1. 概要

第2回の `slides.md` に、元の風船を隠す・一定時間でクローンを消す・すべてを止める・旗で背景を戻す処理を加え、先生と一緒に操作して各段階の最後に改造する進め方に合わせる。

対象は coderdojo-lessons の `courses/scratch-basic/lessons/020-balloon-game/slides.md`（実行中は `$SPECDOJO_REPO_CODERDOJO_LESSONS` からたどれる）。根拠にする文書は次のとおりで、読み取り専用とする。

- 同じ活動の `lesson-plan.md`（PJR-XVR2 で直した指導案。完成見本の要件・5章の授業の流れ・6章のつまずき）
- このリポジトリの `edu-scratch:lsd-slidev-rulebook`（`docs/ja/specdojo/rulebooks/edu-scratch/lsd-slidev-rulebook.md`）

PJR-XVR2 の対応結果に書かれた、スライドに欠けているもの:

- 元の風船を隠す処理
- 一定時間がたったクローンを消す処理
- クリア後の「すべてを止める」
- 旗を押したときに開始の背景へ戻す処理

この todo は、PJR-XVR2 が完了してから流す。

## 2. 完了条件

- 上の4つの処理が、対応する節のスライドの `ScratchBlocks` のブロック図に入っている。ブロック図は `text` の scratchblocks 記法で書き、ブロックの正確な名称は実機で確かめる旨の `device-check` を残している。
- 得点・乱数・クローン・クリアの各段階の説明のページに、先生と一緒に操作した後に試す「改造してみよう」の短い問いがある（指導案の各段階の「変えて試す」と同じ内容）。
- 発展ミッションとふりかえりのページが、指導案の発展・まとめ（端末に `.sb3` 形式で保存し、隣同士で遊び合う）と食い違っていない。
- `edu-scratch:lsd-slidev-rulebook` に沿っている（class・案内役・ページ設定の書き方・markdownlint の注釈）。
- ページ数の増減は最小限にする。増やす場合は、その理由を個票の対応結果に書く。
- 指導案・`style.css`・`components/` は変更しない。
- 変更したファイルが、coderdojo-lessons の prettier（`slidev` parser）の検査を通る。
- 変えた点と、指導案と食い違ったまま残った点（あれば）を、個票の対応結果に書いている。
- exec の sandbox では Slidev を起動できないため、表示の確認は統合の後に orchestrator が `slidev export --format png` で行う。
- 統合後の PNG 確認で見つかった表示不具合を修正する。現行の7・9・11ページでは `device-check` の注記が画面下端で切れ、13ページでは「改造してみよう」の問いと案内役が重なっている。`slides.md` の文量・配置を調整し、改造の問いと実機確認の注記を省略せず、画面内で全文を読め、案内役と重ならない状態にする。指導案・`style.css`・`components/` は変更しない。ページ追加が必要な場合は最小限にし、理由を対応結果へ記録する。

## 3. 作業内容

| No  | 作業                                                     | 担当 | 状態 | メモ                  |
| --- | -------------------------------------------------------- | ---- | ---- | --------------------- |
| 1   | ブロック図に、隠す・消す・止める・背景を戻す処理を加える | exec | open | 指導案の4.1と5.1      |
| 2   | 各段階の説明のページに「改造してみよう」を加える         | exec | open | 指導案の5章の表       |
| 3   | 発展とふりかえりのページを指導案と照らす                 | exec | open | 保存と見せ合い        |
| 4   | 書き出して表示を確かめる                                 | orch | open | 統合の後に PNG で確認 |

## 4. 対応結果

- 統合後に orchestrator が17ページを PNG へ書き出し、変更した7・9・11・13・15・17ページを確認した。7・9・11ページの実機確認注記の下切れと、13ページの改造の問いと案内役の重なりが残っているため、表示修正を差し戻した。次の実行ではこの表示不具合を修正すること。内容の追加が既に済んでいることだけで追加編集不要と判断しない。
- `coderdojo-lessons:courses/scratch-basic/lessons/020-balloon-game/slides.md` の既存の4つの説明ページを更新した。得点を始めるブロックに開始背景へ戻す処理を、クローンのブロックに元の風船を隠す処理と一定時間後に消す処理を、クリア時の背景切替ブロックに「すべてを止める」処理を追加した。クリック時に得点を増やすブロックには、クリックしたクローンを消す処理も加えた。
- 得点・乱数・クローン・クリアの各説明ページに、先生と一緒に操作した後に数値や表示を変えて試す「改造してみよう」の問いを追加した。ページ数は17ページのままで増やしていない。
- 発展ミッションは標準完成後に取り組む形を明記し、ふりかえりには端末への`.sb3`形式での保存と隣同士での遊び合いを加えた。[[prj-0001:pjr-xvr2-balloon-lesson-plan-revise|PJR-XVR2]] の発展・まとめと一致する。
- ブロック名、背景名、クローンを消すタイミングは、各説明ページの「Scratch 3で実機で確かめる」案内に従い、授業用端末で教師が確認する。表示確認は個票の指示どおり、統合後に orchestrator が PNG 出力で行う。

## 5. 関連ドキュメント

- [[prj-0001:pjr-xvr2-balloon-lesson-plan-revise]]：指導案を直した項目（派生元）
- [[edu-scratch:lsd-slidev-rulebook]]：スライドが従う rulebook
