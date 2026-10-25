---
specdojo:
  id: prj-0001:pjr-9cv2-lsd-slidev-naming
  type: project
  status: ready
  rulebook: specdojo:pjr-rulebook
  part_of:
    - prj-0001:pjr-index
  item_type: todo
  item_status: done
  priority: medium
  owner: DEV
  registered_at: "2026-10-25T01:43:39Z"
  due_on: "2026-10-31"
  completed_at: "2026-10-25T02:04:16Z"
  conclusion: 投影スライドの kata を lsd-slidev-* に改め、Slidev の見分けを本家の --slidev と同じ glob にそろえた。
---

# PJR-9CV2 投影スライドの kata の名前を本家の決まり（-slidev-）にそろえる

## 1. 概要

投影スライドの kata を `lsd-slidev-rulebook`・`lsd-slidev-sample`・`lsd-slidev-template` に改め、Slidev の見分けを `*-slidev-sample.md`・`*-slidev-template.md` の glob にそろえる。形式（Slidev・Marp）が増えても設定を変えずに済み、本家の `--slidev` の scaffold とも一致させるため。

## 2. 完了条件

名前と参照:

- 次のとおりファイルの名前と ID を改めている。旧い名前のファイルは残っていない。

| 旧                                                                                                         | 新                                                                                       |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `docs/ja/specdojo/rulebooks/edu-scratch/lsd-rulebook.md`（`edu-scratch:lsd-rulebook`）                     | `lsd-slidev-rulebook.md`（`edu-scratch:lsd-slidev-rulebook`）                            |
| `docs/ja/specdojo/samples/edu-scratch/lsd-sample.md`・`lsd-sample.css`（`edu-scratch:lsd-sample`）         | `lsd-slidev-sample.md`・`lsd-slidev-sample.css`（`edu-scratch:lsd-slidev-sample`）       |
| `docs/ja/specdojo/templates/edu-scratch/lsd-template.md`・`lsd-template.css`（`edu-scratch:lsd-template`） | `lsd-slidev-template.md`・`lsd-slidev-template.css`（`edu-scratch:lsd-slidev-template`） |

- rulebook の frontmatter の `sample`・`template`、sample の `rulebook`、本文と `.css` の注釈の中の ID とファイル名が、新しい名前になっている。
- ファイルの中身は、名前と ID と、下の glob・名前の決まりの記述のほかは変えていない。

設定と検査:

- `.markdownlint-cli2.yaml`・`.prettierrc`・`.markdownlintignore`・`tools/check-slidev-files.mjs` の Slidev の glob が、`docs/ja/specdojo/samples/**/*-slidev-sample.md` と `docs/ja/specdojo/templates/**/*-slidev-template.md` になっている。`tools/check-slidev-files.mjs` の名前の正規表現（`SLIDEV_NAME`）も同じ範囲になっている。
- rulebook は普通の Markdown なので、上の glob に当たらない（`*-slidev-rulebook.md` は Slidev 用の設定の対象外）。
- `.markdownlint-cli2.yaml` の Slidev 用の override は先頭、`.prettierrc` の Slidev 用の override は末尾のままである。
- `tools/preview-lsd.sh` は名前を変えず、注釈の例のパスを新しい名前にしている。kata と同じ名前の `.css` を `style.css` として写す動きは変えない。
- `node tools/check-slidev-files.mjs` が成功する。sample と template が prettier（`slidev` parser）を通り、rulebook が markdownlint を通る。

rulebook の本文:

- 3 章の名前の決まりを「投影スライドの kata は、形式を名前に入れ、sample は `<対象>-slidev-sample`、template は `<対象>-slidev-template` とする（本家の `--slidev` の scaffold と同じ）」に改めている。Marp など別の形式のスライドは `<対象>-marp-<種類>` のように形式を変えることを書いている。
- 6.6 の検査の仕組みの記述が、新しい glob と一致している。

変えないもの:

- close 済みの個票、exec の plan・result・evidence は、旧い ID を含んでいても変更しない（記録のため）。
- 教材のリポジトリ（coderdojo-lessons）は変更しない。
- `lefthook.yml` と `package.json` は変更しない（保護された設定）。

記録:

- 変更したファイルの一覧と、旧い ID が残っている箇所（変えないもの以外にないこと）を確かめた方法を、個票の対応結果に書いている。
- exec の sandbox では Slidev を起動できないため、表示の確認は統合の後に orchestrator が `tools/preview-lsd.sh png` で行う。

## 3. 作業内容

| No  | 作業                                             | 担当 | 状態 | メモ                                  |
| --- | ------------------------------------------------ | ---- | ---- | ------------------------------------- |
| 1   | kata のファイルの名前と ID を改め、参照を直す    | exec | done | `git mv` を使う                       |
| 2   | 4 つの設定・検査の glob と名前の正規表現を改める | exec | done | override の順番は変えない             |
| 3   | rulebook の 3 章と 6.6 を改める                  | exec | done | 形式を名前に入れる決まり              |
| 4   | 旧い ID の残りを確かめ、個票の対応結果に書く     | exec | done | `git grep` など                       |
| 5   | 書き出して表示を確かめる                         | orch | done | 統合の後に `tools/preview-lsd.sh png` |

## 4. 対応結果

- `lsd-rulebook`、`lsd-sample`、`lsd-template` の Markdown と付属 CSS を、それぞれ `lsd-slidev-rulebook`、`lsd-slidev-sample`、`lsd-slidev-template` へ改名し、kata の ID、frontmatter の参照、CSS 注釈、プレビュー用注釈を新しい名前に更新した。
- `.markdownlint-cli2.yaml`、`.prettierrc`、`.markdownlintignore`、`tools/check-slidev-files.mjs` の Slidev 判定を、sample の `docs/ja/specdojo/samples/**/*-slidev-sample.md` と template の `docs/ja/specdojo/templates/**/*-slidev-template.md` に統一した。Slidev 用 override の順序は維持した。
- rulebook の 3 章と 6.6 を、形式を名前に含める命名規則と上記 glob に合わせた。Marp など別形式には `<対象>-marp-<種類>` を使うことも明記した。
- `rg` で maintained kata・設定・ツールを検索し、旧 ID と旧ファイル名が残っていないことを確認した。close 済み個票、exec の plan・result・evidence は履歴として対象外にした。
- `node tools/check-slidev-files.mjs`、Slidev parser による sample・template の Prettier、rulebook の markdownlint は成功した。表示の確認は統合後に orchestrator が `tools/preview-lsd.sh png` で行う。

orchestrator が完了条件と照らして確かめたこと（統合 `c83823b`）:

- 3つの kata の Markdown と付属の `.css` が新しい名前になり、旧い ID と旧いファイル名は、close 済みの個票と exec の記録のほかに残っていない（`git grep`）。
- sample と template の中身の差分は、ID・`rulebook` の参照・`.css` の注釈の名前だけである。
- 4つの設定・検査の glob が `*-slidev-sample.md`・`*-slidev-template.md` にそろい、`SLIDEV_NAME` も同じ範囲になった。`.markdownlint-cli2.yaml` の Slidev 用の override は先頭、`.prettierrc` は末尾のままである。
- `node tools/check-slidev-files.mjs` が成功し、markdownlint-cli2 で `docs/ja/specdojo/` の警告は 0 件、prettier と rulebook の markdownlint も通る。
- `tools/preview-lsd.sh png` で sample（8ページ）と template（10ページ）を書き出し、付属の `.css` が `style.css` として写り、節の色の帯・案内役・ブロック図が表示されることを確かめた。

## 5. 関連ドキュメント

- [[prj-0001:pjr-ekfp-lsd-template]]：template を作った項目
- 本家の SpecDojo の PJR-84F7（`--slidev` の scaffold）と PJR-50YH（markdownlint-cli2 の overrides）
