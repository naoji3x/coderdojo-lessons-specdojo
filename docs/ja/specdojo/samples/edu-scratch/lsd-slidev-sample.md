---
specdojo:
  id: edu-scratch:lsd-slidev-sample
  type: sample
  status: draft
  rulebook: edu-scratch:lsd-slidev-rulebook
theme: neversink
colorSchema: light
title: えらべるお話を作ろう
layout: cover
color: white
slide_info: false
info: |
  Scratch で、選択に応じて場面が変わる短いお話を作る活動の投影スライド例。
---

<!-- markdownlint-disable MD003 MD022 -->

# えらべるお話を作ろう

**1コマ｜40分**

登場人物に話しかけて、選んだ道で場面が変わるお話を作ろう。

<div class="teacher-cat" role="img" aria-label="案内役のねこ先生">
  <Cat :size="112" mood="excited" color="#8d99a6" />
</div>

:: note ::

作る → 動かす → 選び直す。

---
layout: top-title-two-cols
color: white
---

:: title ::

# 今日のめあて

:: left ::

<SpeechBubble position="r" color="violet" shape="round" maxWidth="390px">

選んだ答えで、**次の場面が変わるお話**を作ろう。

</SpeechBubble>

:: right ::

<ul class="check-list">
  <li>はじめの場面から話が始まる</li>
  <li>選んだ答えを記録できる</li>
  <li>答えに合う場面へ進める</li>
</ul>

<div class="teacher-cat" role="img" aria-label="案内役のねこ先生">
  <Cat :size="112" mood="excited" color="#8d99a6" />
</div>

---
layout: section
color: white
class: section-slide section-observe
---

# 完成見本を試して、

# お話の分かれ道を見つけよう

「どこで選ぶと、次の場面が変わった？」を言葉にしてみよう。

<div class="teacher-cat" role="img" aria-label="案内役のねこ先生">
  <Cat :size="112" mood="happy" color="#8d99a6" />
</div>

---
layout: two-cols-title
columns: is-5
color: white
align: l-lt-lt
margin: tight
---

:: title ::

# 選んだ答えを記録する

:: left ::

1. 旗を押したら、答えを空にする
2. 質問をして、答えを受け取る
3. 旗から動かして、答えが変わるか確かめる

<StickyNote color="orange-light" width="100%" title="改造してみよう">

質問を「好きな食べ物は？」に変えると、お話の分かれ道はどう変わる？

</StickyNote>

:: right ::

<ScratchBlocks label="選んだ答えを記録するブロック" :scale="0.76">

```text
緑の旗が押されたとき
[答え v] を [] にする
[どちらへ行く？] と聞いて待つ
[答え v] を (答え) にする
```

</ScratchBlocks>

<p class="device-check">⚑ <strong>Scratch 3で実機で確かめる：</strong>質問ブロックと「答え」変数の名前を、授業用端末で実際に作ってから動かそう。</p>

<div class="teacher-cat" role="img" aria-label="案内役のねこ先生">
  <Cat :size="112" mood="blissful" color="#8d99a6" />
</div>

---
layout: two-cols-title
columns: is-5
color: white
align: l-lt-lt
margin: tight
---

:: title ::

# 答えで次の場面を選ぶ

:: left ::

- 条件は「もし〜なら」で確かめる
- 答えごとに送るメッセージを変える
- 1つの答えだけを変えて、行き先を比べる

<StickyNote color="yellow-light" width="100%" title="改造してみよう">

「森」の行き先を「お城」に変えると、選んだ人へのお話はどう変わる？

</StickyNote>

:: right ::

<ScratchBlocks label="答えに合わせて場面を選ぶブロック" :scale="0.72">

```text
もし &lt;(答え) = [森]&gt; なら
  [森の場面 v] を送る
end

もし &lt;(答え) = [海]&gt; なら
  [海の場面 v] を送る
end
```

</ScratchBlocks>

<p class="device-check">⚑ <strong>Scratch 3で実機で確かめる：</strong>入力した言葉とメッセージ名が同じかを確認してから、旗で最初から試そう。</p>

<div class="teacher-cat" role="img" aria-label="案内役のねこ先生">
  <Cat :size="112" mood="blissful" color="#8d99a6" />
</div>

---
layout: top-title
color: white
---

:: title ::

# ここまでできたら標準完成

:: content ::

<div class="completion-grid grid grid-cols-2 gap-5 text-2xl mt-5">
  <div class="p-4 rounded bg-orange-100">✓ 最初の質問が出る</div>
  <div class="p-4 rounded bg-green-100">✓ 答えで次の場面が変わる</div>
  <div class="p-4 rounded bg-amber-100">✓ 友だちにも選んでもらえる</div>
</div>

<SpeechBubble position="t" color="teal" shape="round" maxWidth="720px">

うまくいったら、選べる道をもう1つ増やしてみよう！

</SpeechBubble>

<div class="teacher-cat" role="img" aria-label="案内役のねこ先生">
  <Cat :size="112" mood="lovestruck" color="#8d99a6" />
</div>

---
layout: top-title
color: white
---

:: title ::

# 保存して、友だちと遊ぼう

:: content ::

この活動では、作品に名前を付けて端末へ保存したら、隣の友だちに「森」と「海」を選んでもらおう。選んだ道でお話が変わるかを一緒に確かめよう。

<div class="teacher-cat" role="img" aria-label="案内役のねこ先生">
  <Cat :size="112" mood="lovestruck" color="#8d99a6" />
</div>

---
layout: top-title
color: white
---

:: title ::

# うまくいかないときは

:: content ::

<Admonition title="デバッグの合言葉" color="rose-light" custom="text-xl">

**1つ変えたら、すぐ旗から動かす。**

</Admonition>

質問の答え、変数に入った言葉、送るメッセージを1つずつ見よう。困ったら、「どの答えで、どの場面に行きたかったか」を先生や友だちに伝えよう。

<div class="teacher-cat" role="img" aria-label="案内役のねこ先生">
  <Cat :size="112" mood="shocked" color="#8d99a6" />
</div>

---
layout: section
color: white
class: section-slide section-reflection
---

# ふりかえり

質問、変数、条件、メッセージは、お話をどう変えた？

次は、登場人物の動きや音も加えて、お話をもっと伝わりやすくしよう。

<div class="teacher-cat" role="img" aria-label="案内役のねこ先生">
  <Cat :size="112" mood="happy" color="#8d99a6" />
</div>
