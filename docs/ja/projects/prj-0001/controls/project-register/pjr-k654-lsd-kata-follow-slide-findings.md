---
specdojo:
  id: prj-0001:pjr-k654-lsd-kata-follow-slide-findings
  type: project
  status: ready
  rulebook: specdojo:pjr-rulebook
  part_of:
    - prj-0001:pjr-index
  item_type: todo
  item_status: done
  priority: medium
  owner: BA
  registered_at: "2026-10-25T03:48:38Z"
  due_on: "2026-10-31"
  completed_at: "2026-10-25T04:09:56Z"
  conclusion: rulebook・sample・templateの更新と描画確認を完了し、レビューで完了条件の充足を確認した
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
| 1   | rulebook の制作・配置・表示確認の規定を更新する         | exec | done | NH2Zの知見を一般化             |
| 2   | sample と template の問い・保存共有案内・配置をそろえる | exec | done | 既存の活動と規約を維持         |
| 3   | 整形・lint・設定検査を行い結果を記録する                | exec | done | resultはreporterが記述         |
| 4   | 統合後に sample と template をPNGで確認する             | orch | done | 全ページ出力し変更ページを確認 |

## 4. 対応結果

### 完了レビュー（2026-10-25、specdojo-orchestrator）

- 判定：完了条件を満たし、close を妨げる指摘なし。rulebook の6.1・6.6・6.7、sample の制作2ページ・保存共有ページ、template の改造問い・注記配置・任意の保存共有欄が対応している。風船ゲーム固有処理や保存・共有を全活動の必須にしていない。
- 統合差分と個票・result・描画記録を照合した。sample の4・5・7ページ、代表値補完後の template の6・8ページのPNG確認を根拠とし、素の template のプレースホルダーと作成者向け案内の重なりは、教材化時の補完・除去と各教材の描画確認を前提に扱う。任意の長い入力での収まりまで保証する判定ではない。
- レビュー時に対象5文書の Prettier、rulebook・個票・result の Markdownlint、sample・template の Slidev 専用 Markdownlint（`--ignore-path /dev/null`）、`node tools/check-slidev-files.mjs`、`npx specdojo exec validate --project prj-0001`、`git diff --check` を実行し、すべて通過した。exec validate の schedule 未設定に関する警告は今回の対象外。

### 統合後の確認結果

- 2026-10-25、統合commit `f45fcfd` の sample を `bash tools/preview-lsd.sh png docs/ja/specdojo/samples/edu-scratch/lsd-slidev-sample.md`、template を同手順の template パス指定で出力し、sample は全9ページ、template は全11ページのPNG出力に成功した（終了コード0）。sample の4・5ページ（制作・改造・注記・図）と7ページ（保存共有）を目視し、必要な全文が画面内で読め、案内役と文字が重ならないことを確認した。
- template の素の6ページでは長い英語プレースホルダーと作成者向け `_TODO_` 案内が重なったため、正本を変えず `tmp/lsd-preview/lsd-slidev-template-filled/slides.md` で全欄を代表的な日本語へ置換し、教材化時に除去する作成者向け `_TODO_` の段落を除いて再出力した（全11ページ、終了コード0）。6ページ（制作）と8ページ（保存共有）を目視し、下切れ・文字と案内役の重なりがないことを確認した。代表値は「えらべるお話を作ろう」、3手順「旗で答えを空にする／質問をして答えを受け取る／旗から動かして確かめる」、問い「質問を変えると、答えはどう変わる？」、4ブロックの質問・答え記録、注記「ブロック名を確かめてから、旗で試そう。」、端末保存と隣の友だちによる森・海の選択とした。全補完値は同ディレクトリの `preview-values.json` に保存した。任意の長さの入力で収まることまでは保証せず、利用時も描画確認する。
- sample の出力先は `tmp/lsd-preview/lsd-slidev-sample/png/`、template の代表値補完後は `tmp/lsd-preview/lsd-slidev-template-filled/png/`。生成物はコミット対象外。出力時に FloatingVue の Popper に関するコンソールエラーが出たが、PNG出力は成功し、確認ページの描画に支障はなかった。
- 統合後の `npx specdojo exec validate --project prj-0001` は通過した。exec から引き継いだ sample・template の描画確認は上記の範囲で対応済み。

### exec の対応結果

- [[edu-scratch:lsd-slidev-rulebook|投影スライド Rulebook]] の 6.1 に、実機確認注記をブロック図側へ置ける柔軟な配置と、問い・注記の全文、案内役との重なりを確認する条件を追加した。6.6 には、指導案で「変えて試す」を求める制作段階だけに、先生と基本操作をした後の短い改造問いを置く規定を追加した。保存・共有とゲーム固有処理を全活動の必須にしないことも明記した。
- [[edu-scratch:lsd-slidev-sample|えらべるお話を作ろう]] は、質問を変える段階と行き先を変える段階に短い「改造してみよう」の問いを置き、実機確認注記を各 `ScratchBlocks` の直後へ分散した。端末への保存と隣の友だちに選んでもらう共有も、この活動の具体例として追加した。
- [[edu-scratch:lsd-slidev-template|投影スライド Template]] は、指導案の各制作段階に対応する `_MODIFICATION_QUESTION_` の欄、注記の配置を選ぶ案内、保存・共有を扱う場合だけ具体化する `_SAVE_AND_SHARE_INSTRUCTION_` の欄を追加した。対象 Markdown は Prettier、rulebook・個票の Markdownlint、sample・template の Slidev 用 Markdownlint、`node tools/check-slidev-files.mjs` を通過した。
- PNG の描画確認は、統合後に orchestrator が `bash tools/preview-lsd.sh png docs/ja/specdojo/samples/edu-scratch/lsd-slidev-sample.md` と `bash tools/preview-lsd.sh png docs/ja/specdojo/templates/edu-scratch/lsd-slidev-template.md` を実行して全ページを出力し、変更ページの下切れ、注記・問いと案内役の重なり、ブロック図を目視するよう引き継ぐ。この exec では PNG を成功として記録しておらず、作業用コピーへのプレースホルダー補完も行っていない。

## 5. 関連ドキュメント

- [[prj-0001:pjr-nh2z-balloon-slides-follow-plan]]：改造問いと表示確認の知見の参照元
- [[edu-scratch:lsd-slidev-rulebook]]：更新する規定
- [[edu-scratch:lsd-slidev-sample]]：更新する実例
- [[edu-scratch:lsd-slidev-template]]：更新する雛形
