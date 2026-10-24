---
specdojo:
  id: prj-0001:pjr-br5a-lsd-rulebook-review
  type: project
  status: draft
  rulebook: specdojo:pjr-rulebook
  part_of:
    - prj-0001:pjr-index
  item_type: todo
  item_status: review
  priority: high
  difficulty: hard
  owner: BA
  registered_at: "2026-10-24T11:38:16Z"
  due_on: "2026-10-31"
  derived_from:
    - PJR-9DF9
---

# PJR-BR5A 投影スライドの rulebook を見直す

## 1. 概要

PJR-9DF9 で作った `edu-scratch:lsd-rulebook`（`docs/ja/specdojo/rulebooks/edu-scratch/lsd-rulebook.md`）を、手本と照らして直す。

approach の `rulebook-maintenance` で流したところ、SpecDojo 0.4.5 の見直しの plan が markdownlint（MD036）で止まったため、approach を外した todo として流す。

PJR-9DF9 の成果を orchestrator が確かめたところ、次の3点が見つかった。

1. 最小例のページ設定の書き方が誤っている。区切りの `---` の直後に空行があり、`layout: section` などが本文として扱われる。
2. 手本から読み取れる知見が抜けている。PJR-9DF9 では手本に `style.css` と `components/` を渡していなかった。
3. 手本にない規則や、手本と食い違う規則がある。

手本は、プロダクトリポジトリ coderdojo-lessons の次のファイルとし、読み取り専用とする。
実行中は `$SPECDOJO_REPO_CODERDOJO_LESSONS` からたどれる。

- `courses/scratch-basic/lessons/020-balloon-game/slides.md`
- `courses/scratch-basic/lessons/020-balloon-game/style.css`
- `courses/scratch-basic/lessons/020-balloon-game/components/ScratchBlocks.vue`
- `docs/guides/slidev-guide.md`
- 個票 [[prj-0001:pjr-czy8-balloon-slides-characters]]（案内役のキャラクターを整えた経緯）

## 2. 完了条件

- 最小例で、2ページ目以降の区切りの `---` の直後に空行がなく、ページ設定がそのまま続いている。
  prettier で整形しても崩れないことを確かめている。崩れる場合は、崩れない書き方（例: 該当のコードブロックだけ整形の対象外にする）を選び、理由を result に書いている。
- 次の知見が、手本の該当箇所を根拠に規則として書かれている。
  - 案内役のキャラクターは `teacher-cat` の class を付けた要素で右下に置き、位置は `style.css` で決める。`v-drag` は使わない（980px の画面の外を指すと表示されないため）。
  - 案内役は `:: note ::` などの slot の中に置かない（slot の配置に引きずられて本文と重なるため）。
  - テーマは neversink を使い、SpeechBubble・StickyNote・Admonition などテーマの部品の使い分けを示す。キャラクターの部品名（`BackPack` など）の大文字・小文字に注意する。
  - 文字の大きさや余白は、活動の `style.css` でまとめて決め、`slides.md` の各ページで個別に指定しない。見出しの大きさを崩さないよう、本文（`p`・`li`）や部品を対象にする。
- 手本にない規則と、手本と食い違う規則を、残すか・直すか・消すかを判断し、判断の理由を result に書いている。少なくとも次の2つを扱う。
  - 「めあてとふりかえりは必ず残す」
  - 「画像化したブロック図を Git 管理しない」。slidev-guide では、出典と利用条件を記録すれば画像を置いてよいとしている。
- 手本が第2回の授業1件だけのため、ほかの授業に当てはまるか判断できない規則を、result の申し送りに日本語で列挙している。
- 見直した rulebook が、rulebook の執筆標準 `specdojo:rulebook-authoring-standard`（`node_modules/specdojo/docs/ja/specdojo/standards/rulebook-authoring-standard.md`）の章立て・記述ルール・禁止事項に従っている。
- frontmatter の `status` は `draft`、`recipe`・`sample`・`template` は `undecided` のままである。
- 手本（coderdojo-lessons のファイル）は変更されていない。
- rulebook が prettier と markdownlint を通る。

## 3. 作業内容

| No  | 作業                                                   | 担当 | 状態 | メモ                          |
| --- | ------------------------------------------------------ | ---- | ---- | ----------------------------- |
| 1   | 最小例のページ設定の書き方を直す                       | orch | done | exec では直らず orch が直した |
| 2   | 手本から抜けた知見を規則として加える                   | exec | done | `style.css`・CZY8 の個票      |
| 3   | 手本にない規則・食い違う規則を判断する                 | exec | done | 理由を result に書く          |
| 4   | 判断できない規則を result の申し送りに日本語で列挙する | exec | done | 手本が1件だけのため           |

## 4. 対応結果

approach を外した todo として `exec run --register --worktree --force-restart` で流し、terra-executor が rulebook を見直して `project/prj-0001/develop` へ統合した（`caa8a2c`）。
最小例だけは直っていなかったため、利用者の指定で orchestrator が直した（`91f164f`、merge `a138854`）。

executor が行ったこと:

- 手本の `style.css`、`ScratchBlocks.vue`、スライド、PJR-CZY8 を根拠に、`neversink` の部品、`teacher-cat` の右下固定、slot 外への配置、`v-drag` を使わないこと、部品名の大文字・小文字、活動単位の `style.css` による文字・余白の管理を規則へ追加した。
- 「めあてとふりかえりは必ず残す」は、手本が第 2 回の 1 件だけで全活動の必須とは裏付けられないため、指導案で求める場合の要件へ直した。「画像化したブロック図を Git 管理しない」は、画像を `assets/` または `public/` に置き、出典と利用条件を記録できる場合を許す `slidev-guide.md` と一致しないため、生成物だけを禁止し、ブロック図は `ScratchBlocks` を優先する規則へ直した。
- 申し送り: `neversink` の採用、案内役を全ページに置くこと、表紙・めあて・節の扉・説明・まとめ・ふりかえりの順序、本文の文字サイズと右下の余白の具体値は、手本が第 2 回の 1 件だけでは他の授業へ一般化できない。複数回の実例と指導案を確認してから、共通必須にするか判断する。

orchestrator が完了条件と照らして確かめ、直したこと:

- executor の報告では最小例を直したとしていたが、統合後も区切りの `---` の直後に空行が残っていた。
- 原因は prettier で、コードブロックの中の Markdown まで整形し、区切りの直後に空行を入れる。空行のない形で試しても、prettier を通すと空行が入ることを確かめた。
- 最小例の直前に `<!-- prettier-ignore -->` を置き、空行を2か所消した。理由も本文に書いた。prettier を通しても形が変わらず、markdownlint も通る。
- 判断できない規則の申し送りは、result ではなく上の対応結果にある。
- 執筆標準への準拠は、章立てが PJR-9DF9 のときから変わっていないことまでを確かめた。

残課題:

- 手本が第2回の1件だけのため、上の申し送りの規則は、ほかの授業の実例がそろってから共通の決まりにするかを判断する。
- 見直しの approach は SpecDojo の不具合（[[prj-0001:pjr-bc1z-maintenance-plan-md036]]）で使えなかった。

## 5. 関連ドキュメント

- [[prj-0001:pjr-9df9-lsd-rulebook]]：見直す rulebook を作った項目（派生元）
- [[prj-0001:pjr-czy8-balloon-slides-characters]]：案内役のキャラクターを整えた項目（手本の経緯）
