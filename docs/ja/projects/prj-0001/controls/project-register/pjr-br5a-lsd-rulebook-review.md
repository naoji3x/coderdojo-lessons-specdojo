---
specdojo:
  id: prj-0001:pjr-br5a-lsd-rulebook-review
  type: project
  status: draft
  rulebook: specdojo:pjr-rulebook
  part_of:
    - prj-0001:pjr-index
  item_type: todo
  item_status: open
  priority: high
  difficulty: hard
  owner: BA
  registered_at: "2026-10-24T11:38:16Z"
  due_on: "2026-10-31"
  derived_from:
    - PJR-9DF9
  approach: rulebook-maintenance
  targets:
    - edu-scratch:lsd-rulebook
---

# PJR-BR5A 投影スライドの rulebook を見直す

## 1. 概要

PJR-9DF9 で作った `edu-scratch:lsd-rulebook`（`docs/ja/specdojo/rulebooks/edu-scratch/lsd-rulebook.md`）を、手本と照らして直す。

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
- frontmatter の `status` は `draft`、`recipe`・`sample`・`template` は `undecided` のままである。
- 手本（coderdojo-lessons のファイル）は変更されていない。
- rulebook が prettier と markdownlint を通る。

## 3. 作業内容

| No  | 作業                                                   | 担当 | 状態 | メモ                          |
| --- | ------------------------------------------------------ | ---- | ---- | ----------------------------- |
| 1   | 最小例のページ設定の書き方を直す                       | exec | open | prettier の整形との関係を確認 |
| 2   | 手本から抜けた知見を規則として加える                   | exec | open | `style.css`・CZY8 の個票      |
| 3   | 手本にない規則・食い違う規則を判断する                 | exec | open | 理由を result に書く          |
| 4   | 判断できない規則を result の申し送りに日本語で列挙する | exec | open | 手本が1件だけのため           |

## 4. 対応結果

_TODO_: 完了時に、実施内容・成果物・残課題を記載する。未完了の場合は `-` とする。

## 5. 関連ドキュメント

- [[prj-0001:pjr-9df9-lsd-rulebook]]：見直す rulebook を作った項目（派生元）
- [[prj-0001:pjr-czy8-balloon-slides-characters]]：案内役のキャラクターを整えた項目（手本の経緯）
