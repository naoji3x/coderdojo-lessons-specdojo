---
specdojo:
  id: prj-0001:pjr-k654-lsd-kata-follow-slide-findings
  type: project
  status: draft
  rulebook: specdojo:pjr-rulebook
  part_of:
    - prj-0001:pjr-index
  item_type: todo
  item_status: in-progress
  priority: medium
  owner: BA
  registered_at: "2026-10-25T03:48:38Z"
  due_on: "2026-10-31"
  derived_from:
    - PJR-NH2Z
---

# PJR-K654 投影スライドの型に段階的な改造と表示確認の知見を反映する

## 1. 概要

PJR-NH2Zで得た段階ごとの改造問い、実機確認注記の柔軟な配置、描画による下切れ・重なり確認を、投影スライドのrulebook・sample・templateへ反映し、保存・共有の案内を指導案に応じて具体化できるようにする。

対象は以下の3文書と、表示調整に必要な場合だけ各 kata と同名の付属 `.css` とする。教材リポジトリの成果物・指導案・components は変更しない。

- `docs/ja/specdojo/rulebooks/edu-scratch/lsd-slidev-rulebook.md`
- `docs/ja/specdojo/samples/edu-scratch/lsd-slidev-sample.md`
- `docs/ja/specdojo/templates/edu-scratch/lsd-slidev-template.md`

## 2. 完了条件

- rulebook の6.1で、手順・問い・注意をすべて同じ列へ固定せず、情報量に応じて実機確認注記をブロック図側へ置けることを明記する。注記・問いの全文が画面内で読め、案内役と重ならないことを確認条件にする。
- rulebook に、指導案で「変えて試す」を求める制作段階では、先生と操作した後に試す短い改造の問いを示すことを書く。全活動で特定の制作段階や問いを一律に必須化しない。
- rulebook に、整形・lintだけで完了とせず、表示を変更した sample・template を実際に描画して下切れ・重なり・ブロック図を確認する手順を書く。exec sandbox で描画できない場合は統合後の orchestrator へ引き継ぎ、確認したページ・結果を個票と result に記録する。
- sample は既存の「えらべるお話」の活動を保ち、制作ページに活動に合う短い改造の問いを示す。注記と図の配置は情報量に合わせ、文字を小さくして押し込まず、余白のある列へ分散する。
- template に、指導案の各制作段階に合わせて埋める改造の問いの欄を設ける。sample と template には、保存・共有を指導案に応じて具体化する例と欄を対応させる。`.sb3` 保存や隣同士での遊び合いを全活動の必須要件にはしない。
- 風船を隠す・クローンを消す等の風船ゲーム固有処理は型の必須要件にしない。既存のキャラクター・class・frontmatter・markdownlint注釈の規約を保ち、3文書の規定・例・欄が一致している。
- 対象 Markdown と必要な CSS の Prettier 検査、rulebook と個票の Markdownlint、sample・template の `.markdownlint-slidev.yaml` による検査、および `node tools/check-slidev-files.mjs` の適用される検査を通す。検査パッケージを新規導入せず、既存の CLI を使う。Slidev専用lintでは `.markdownlintignore` による除外を避けるため `--ignore-path /dev/null` を使う。
- exec は根拠・変更内容・静的検査結果と描画確認の引き継ぎを個票と evidence に残し、reporter が result を記述する。未実施のPNG確認を成功と記録しない。
- 統合後に orchestrator が `bash tools/preview-lsd.sh png <対象kataのmd>` で sample・template の全ページを出力し、変更ページを目視して下切れ・注記や問いと案内役の重なりがないことを確認する。描画のための作業用コピーとPNGは `tmp/` に置き、コミットしない。template のプレースホルダーが長すぎる場合は作業用コピーだけを代表的な日本語の内容で埋めて確認し、補完内容と確認範囲を記録する。

## 3. 作業内容

| No  | 作業                                                    | 担当 | 状態 | メモ                           |
| --- | ------------------------------------------------------- | ---- | ---- | ------------------------------ |
| 1   | rulebook の制作・配置・表示確認の規定を更新する         | exec | open | NH2Zの知見を一般化             |
| 2   | sample と template の問い・保存共有案内・配置をそろえる | exec | open | 既存の活動と規約を維持         |
| 3   | 整形・lint・設定検査を行い結果を記録する                | exec | open | resultはreporterが記述         |
| 4   | 統合後に sample と template をPNGで確認する             | orch | open | 全ページ出力し変更ページを確認 |

## 4. 対応結果

_TODO_: 完了時に、実施内容・成果物・残課題を記載する。未完了の場合は `-` とする。

## 5. 関連ドキュメント

- [[prj-0001:pjr-nh2z-balloon-slides-follow-plan]]：改造問いと表示確認の知見の参照元
- [[edu-scratch:lsd-slidev-rulebook]]：更新する規定
- [[edu-scratch:lsd-slidev-sample]]：更新する実例
- [[edu-scratch:lsd-slidev-template]]：更新する雛形
