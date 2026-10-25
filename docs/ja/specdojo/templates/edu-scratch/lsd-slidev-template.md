---
# 次の specdojo は kata 自身のメタ情報。教材化時は下の教材用記入欄で置き換える。
specdojo:
  id: edu-scratch:lsd-slidev-template
  type: template
  status: draft
  rulebook: edu-scratch:lsd-slidev-rulebook
# 教材用記入欄（コメントを外して上の specdojo 全体と置換し、値を確定する）：
# specdojo:
#   id: _PROJECT_ID_:_LOCAL_ID_
#   type: project
#   status: draft
#   rulebook: edu-scratch:lsd-slidev-rulebook
# _PROJECT_ID_ はカタログの project_id、_LOCAL_ID_ は対象行の local_id。
# 例：prj-0001:lsd-balloon-game。ready への昇格は人間が判断する。
# 任意の based_on は depends_on の推移閉包内の確認済み先行成果物だけを指定する。
# 教材化時はこの案内コメントを除く。下の Slidev 設定は同じ先頭 frontmatter に残す。
# YAML ブロックの追加や、ページ区切り・ページ別 layout・授業の順序と時間の変更は不要。
theme: neversink
colorSchema: light
title: _ACTIVITY_TITLE_
layout: cover
color: white
slide_info: false
info: |
  _ACTIVITY_OVERVIEW_
---

<!-- markdownlint-disable MD003 MD022 -->

# _ACTIVITY_TITLE_

<strong><code>_LESSON_NUMBER_</code>｜<code>_LESSON_DURATION_</code></strong>

_ACTIVITY_INTRODUCTION_

<div class="teacher-cat" role="img" aria-label="案内役のねこ先生">
  <Cat :size="112" mood="excited" color="#8d99a6" />
</div>

:: note ::

_LEARNING_FLOW_

---
layout: top-title-two-cols
color: white
---

:: title ::

# 今日のめあて

:: left ::

<SpeechBubble position="r" color="violet" shape="round" maxWidth="390px">

_LEARNING_GOAL_

</SpeechBubble>

:: right ::

<ul class="check-list">
  <li>_SUCCESS_CRITERION_1_</li>
  <li>_SUCCESS_CRITERION_2_</li>
  <li>_SUCCESS_CRITERION_3_</li>
</ul>

<div class="teacher-cat" role="img" aria-label="案内役のねこ先生">
  <Cat :size="112" mood="excited" color="#8d99a6" />
</div>

---
layout: section
color: white
class: section-slide section-observe
---

# _OBSERVATION_SECTION_TITLE_

_OBSERVATION_SECTION_PROMPT_

<div class="teacher-cat" role="img" aria-label="案内役のねこ先生">
  <Cat :size="112" mood="happy" color="#8d99a6" />
</div>

---
layout: two-cols-title
columns: is-6
color: white
align: l-lt-lt
---

:: title ::

# _OBSERVATION_PAGE_TITLE_

:: left ::

<StickyNote color="orange-light" width="100%" title="_OBSERVATION_LABEL_1_">

_OBSERVATION_QUESTION_1_

</StickyNote>

:: right ::

<StickyNote color="yellow-light" width="100%" title="_OBSERVATION_LABEL_2_">

_OBSERVATION_QUESTION_2_

</StickyNote>

<div class="teacher-cat" role="img" aria-label="案内役のねこ先生">
  <Cat :size="112" mood="happy" color="#8d99a6" />
</div>

---
layout: section
color: white
class: section-slide section-concept
---

# _CONCEPT_SECTION_TITLE_

_CONCEPT_SECTION_INTRODUCTION_

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

# _EXPLANATION_PAGE_TITLE_

:: left ::

1. _BUILD_STEP_1_
2. _BUILD_STEP_2_
3. _BUILD_STEP_3_

<!-- 指導案のこの制作段階に「変えて試す」がある場合だけ、短い問いを入れる。ない場合はこの StickyNote を削除する。 -->
<StickyNote color="orange-light" width="100%" title="改造してみよう">

_MODIFICATION_QUESTION_

</StickyNote>

:: right ::

<!-- scale はブロック図の大きさ。ページの余白に合わせて 0.6〜0.9 の範囲で調整する。 -->
<ScratchBlocks label="_BLOCK_DIAGRAM_LABEL_" :scale="0.8">

```text
_SCRATCH_BLOCKS_
```

</ScratchBlocks>

<!-- 注記は手順・問いの列が詰まる場合、ブロック図の直後へ置く。全文が画面内で読め、案内役と重ならないことを描画で確かめる。 -->
<p class="device-check">⚑ <strong>Scratch 3で実機で確かめる：</strong>_DEVICE_CHECK_INSTRUCTION_</p>

<div class="teacher-cat" role="img" aria-label="案内役のねこ先生">
  <Cat :size="112" mood="blissful" color="#8d99a6" />
</div>

_TODO_: 扱う概念ごとに、この「節の扉」と「説明・制作」のページを追加する。指導案の各制作段階に「変えて試す」があれば、その段階に合う `_MODIFICATION_QUESTION_` をそれぞれ入れる。問いを一律に追加しない。

---
layout: top-title
color: white
---

:: title ::

# ここまでできたら標準完成

:: content ::

<div class="completion-grid grid grid-cols-2 gap-5 text-2xl mt-5">
  <div class="p-4 rounded bg-orange-100">✓ _COMPLETION_CRITERION_1_</div>
  <div class="p-4 rounded bg-green-100">✓ _COMPLETION_CRITERION_2_</div>
  <div class="p-4 rounded bg-amber-100">✓ _COMPLETION_CRITERION_3_</div>
  <div class="p-4 rounded bg-yellow-100">✓ _COMPLETION_CRITERION_4_</div>
</div>

<SpeechBubble position="t" color="teal" shape="round" maxWidth="720px">

_COMPLETION_ENCOURAGEMENT_

</SpeechBubble>

<div class="teacher-cat" role="img" aria-label="案内役のねこ先生">
  <Cat :size="112" mood="lovestruck" color="#8d99a6" />
</div>

---
layout: top-title
color: white
---

:: title ::

# 保存・共有する場合

:: content ::

<!-- 指導案で保存・共有を扱う場合だけ、このページを残す。保存形式・保存先・相手・遊び方を具体化し、扱わない場合はページ全体を削除する。 -->

_SAVE_AND_SHARE_INSTRUCTION_

<div class="teacher-cat" role="img" aria-label="案内役のねこ先生">
  <Cat :size="112" mood="lovestruck" color="#8d99a6" />
</div>

---
layout: two-cols-title
columns: is-6
color: white
align: l-lt-lt
---

:: title ::

# 発展ミッション

:: left ::

<ul class="mission-list">
  <li>_EXTENSION_MISSION_1_</li>
  <li>_EXTENSION_MISSION_2_</li>
</ul>

:: right ::

<ul class="mission-list">
  <li>_EXTENSION_MISSION_3_</li>
  <li>_EXTENSION_MISSION_4_</li>
</ul>

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

**_DEBUGGING_SLOGAN_**

</Admonition>

_DEBUGGING_CHECKS_

<div class="teacher-cat" role="img" aria-label="案内役のねこ先生">
  <Cat :size="112" mood="shocked" color="#8d99a6" />
</div>

---
layout: section
color: white
class: section-slide section-reflection
---

# ふりかえり

_REFLECTION_QUESTION_

_NEXT_ACTIVITY_CONNECTION_

<div class="teacher-cat" role="img" aria-label="案内役のねこ先生">
  <Cat :size="112" mood="happy" color="#8d99a6" />
</div>
