---
# 活動の slides.md に写すときは specdojo: の欄を消す。教材の slides.md は SpecDojo の frontmatter を持たない。
specdojo:
  id: edu-scratch:lsd-slidev-template
  type: template
  status: draft
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

<p class="device-check">⚑ <strong>Scratch 3で実機で確かめる：</strong>_DEVICE_CHECK_INSTRUCTION_</p>

:: right ::

<!-- scale はブロック図の大きさ。ページの余白に合わせて 0.6〜0.9 の範囲で調整する。 -->
<ScratchBlocks label="_BLOCK_DIAGRAM_LABEL_" :scale="0.8">

```text
_SCRATCH_BLOCKS_
```

</ScratchBlocks>

<div class="teacher-cat" role="img" aria-label="案内役のねこ先生">
  <Cat :size="112" mood="blissful" color="#8d99a6" />
</div>

_TODO_: 扱う概念ごとに、この「節の扉」と「説明・制作」のページを追加する。

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
