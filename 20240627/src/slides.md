---
layout: cover
highlighter: shiki
colorSchema: dark
---

# 代码设计最佳实践
## 交互素材仓库（前端）


---
layout: intro
---

# 关于我

---
layout: center
class: text-center
growX: 50
growY: 100
---

<h1 flex="~ col">
<div transition duration-500 :class="$clicks <= 0 ? 'scale-150' : 'op50'">
  什么是最佳实践？
</div>
<div text-xl mt4 forward:delay-300 v-click>
  <span>最佳实践是一个管理学概念，认为存在某种技术、方法、过程、活动或机制可以使生产或管理实践的<span text-yellow2 italic v-mark.yellow.underline.delay300="2">结果达到最优</span>，并<span text-yellow2 italic v-mark.yellow.underline.delay300="2">减少出错</span>的可能性。</span>
  <sup text-xs opacity-75>维基百科</sup>
</div>
</h1>


---
layout: cover
---

<h1 flex="~ col">
<div text-2xl origin-top-left transition duration-500 :class="$clicks <= 2 ? 'scale-150' : 'op50'">
  为什么会分享这个话题？
</div>
<div text-xl mt10 forward:delay-300 v-click>
  KPI、
  目前在项目协同上，发现一些问题？ or 让大家能够在相同的规范或者认知中进行产出
</div>
</h1>

---
layout: center
class: text-center
growX: 50
growY: 100
---

<h1 flex="~ col">
<div transition duration-500 :class="$clicks <= 0 ? 'scale-150' : 'op50'">
  怎么做？
</div>
</h1>
<!-- 
没这个概念
who case～～能跑就行！
别人怎么做就怎么做
不知道什么是最佳
-->


---
layout: center
class: text-center
growX: 50
growY: 100
---

<h1 flex="~ col">
<div transition duration-500 :class="$clicks <= 0 ? 'scale-200' : 'op50'">
  portal-fe
</div>

<span v-click ttransition duration-500 text-6xl :class="$clicks > 1 ? 'op50 important-text-2xl' : ''">创建时长</span>
<span v-click relative inline-block>
  <span ml4 v-mark.linethrough.red.delay200="{at:3,roughness:6,seed:146}" transition inline-block :class="$clicks >= 3 ? 'op50' : ''">3坤年</span>
</span>
<span ml2 v-click font-hand bold absolute rotate--4 text-2xl text-lime delay-300 >7年半</span>

</h1>

<div v-click>
包含项目：
playturbo
warehouse
video-editor
ve-pro
assets-factory
cloud-clip
ai
</div>


<!-- 
[click] 时间、质量（设计合理性、稳定性、可维护性）如何平衡

我们可以总结出哪些最佳实践？

请在场的人参与发表各自想法～

组件库、全局样式、Hooks、HOC、

维度：基础、业务

基础通用业务功能、特殊化业务功能、

我们的代码仓库比较复杂
里面包含了很多个项目
这没问题，这也有很多好处
例如：
我们可以很方便的复用其他项目的功能模块（只要它足够的独立）
多个项目可以统一环境，代码风格eslint、git commit、构建环境webpack、技术栈、请求器

不过，这也往往带来一些比较可怕的事情
在改动某个项目中功能或对该功能进行破坏性调整的时候，并未考虑到该功能被其他项目所引用
或许开发者已经考虑到了，但往往因为不同项目之间的需求差异，调整后的功能点的覆盖缺漏导致无感知的将问题上线

这些都是经常性发生的

还有一些点是关于基建部分差异的，在这里就不拓展开来说了

-->

---
growX: 50
growY: 130
---

# <span font-hand text-green scale-110 ml1 inline-block>站在巨人的肩膀上</span>

<div flex="~ gap-2 items-center" text-indigo mt-15 v-click>
  <div i-ph-hammer-duotone text-2xl />
  <span>工具链</span>
</div>

<div grid="~ cols-[max-content_min-content_auto] items-center gap-6" py8 px3>
  <div flex="~ gap-2 items-center" text-blue relative v-click>
    <div w-35px h-45px border="l b gray/30" left-0 bottom-15px absolute />
    <div i-ph-magnifying-glass-duotone text-2xl ml-12/>
    <span>国际化i18n</span>
  </div>
  <div i-ph-arrow-right-duotone op50 v-click />
  <div v-after>只需下载远程Excel文件，一个命令完成所有项目的翻译解析导入</div>

  <div flex="~ gap-2 items-center" text-lime relative v-click>
    <div w-35px h-56px border="l b gray/30" left-0 bottom-15px absolute />
    <div i-ph-book-bookmark-duotone text-2xl ml-12/>
    <span>Bump tag</span>
  </div>
  <div i-ph-arrow-right-duotone op50 v-click />
  <div v-after>自动校验是否同步最新代码、并根据规则创建tag</div>

  <div flex="~ gap-2 items-center" text-amber relative v-click>
    <div w-35px h-56px border="l b gray/30" left-0 bottom-15px absolute />
    <div i-ph-currency-circle-dollar-duotone text-2xl ml-12/>
    <span>Figma icons</span>
  </div>
  <div i-ph-arrow-right-duotone op50 v-click />
  <div v-after>实现从设计、发布、通过自动化脚本同步到开发端的自动化流程</div>

  <div flex="~ gap-2 items-center" text-orange relative v-click>
    <div w-35px h-56px border="l b gray/30" left-0 bottom-15px absolute />
    <div i-ph-plugs-duotone text-2xl ml-12 />
    <span>Auto import</span>
  </div>
  <div i-ph-arrow-right-duotone op50 v-click />
  <div v-after>让<span text-green>Figma icons</span>、<span text-green>Pt组件</span>的使用更加简单；也让项目对第三方组件引入方式提供了更多的可能性</div>
</div>

<div text-white:50 v-click="9">
丰富的 <span v-mark.box.teal.delay400="5" text-teal mx1>工具链</span> 让你的开发更加简单～</div>




<!-- 
最佳实践如果去应用到我们的团队中来？
以下是一些前端代码的最佳实践：

git 协同规范：https://confluence.mobvista.com/pages/viewpage.action?pageId=16679591
git rebase

工具链
ci
i18n
bump-tag
unplugin-auto-import
svg-icon vs figma-icons-vue https://confluence.mobvista.com/pages/viewpage.action?pageId=86157550

开发环境
volar https://marketplace.visualstudio.com/items?itemName=Vue.volar

公共模块
pt-components
common/components
common/utils
common/enums
types

编码
vue2.x
vuex vs pinia
composition api vs options api vs class component style
TS（类型提示、类型编程）（案例：接口定义、剧本定义、组件设计、Hooks开发）
组件设计（原子组件、HOC、业务组件）
Hooks开发
break change

代码提交（如果提交你的代码，让reviewer更加容易的get到你要解决的问题）

时间 or 质量 是否都可兼得？
如何？

使用模块化：提高代码的可维护性和可重用性。
// 使用模块化的方式组织你的代码，例如使用 ES Modules 或者模块打包工具（如Webpack、Rollup等）。这样可以

保持代码简洁：遵循单一职责原则，尽量保持函数和组件的代码简洁且易于理解。使用清晰的命名和注释，以提高代码的可读性。

遵循代码风格指南：选择并遵循适合你项目的代码风格指南，例如 Airbnb JavaScript Style Guide、Google JavaScript Style Guide等。使用一致的缩进、命名约定等，有助于团队合作和代码维护。

错误处理和异常情况：在代码中处理错误和异常情况，并给出适当的反馈或错误处理机制。使用 try-catch 来捕获可能发生异常的代码块，并提供有意义的错误消息。

性能优化：注意性能优化，包括减小文件大小、使用缓存、延迟加载等。优化图片、使用压缩和缓存技术来加快页面加载速度。
-->

---
grow: right
---

# 看似很难，其实一点也不简单的技术

<div flex="~ col gap-1" pt6>


<div text-xl text-white:50 v-click>
<span flex="inline gap-1 items-center" text-purple translate-y-0.6><div i-ph-puzzle-piece-duotone />Composition API</span>
</div>
<div flex="~ gap-2 items-center" mb3 ml7 v-click>
  <div i-ph-arrow-bend-down-right-duotone op50 />
  <div>
    用于提供 组合式 API 的 Vue 2 插件
  </div>
</div>


<div text-xl text-white:50 v-click>
<span flex="inline gap-1 items-center" text-blue translate-y-0.6><div i-ph-book-bookmark-duotone />TypeScript</span>
</div>
<div flex="~ gap-2 items-center" mb3 ml7 v-click>
  <div i-ph-arrow-bend-down-right-duotone op50 />
  <div>
    大家都应该要会的拓展语言，类型提示、类型编程让我们更早的发型bug；让接口定义、剧本定义、组件设计、Hooks等，开发的功能代码即文档
  </div>
</div>

<div text-xl text-white:50 v-click>
<span flex="inline gap-1 items-center" text-yellow translate-y-0.6><div i-ph-lightbulb-filament-duotone />组件设计</span>
</div>
<div flex="~ gap-2 items-center" mb3 ml7 v-click>
  <div i-ph-arrow-bend-down-right-duotone op50 />
  <div>
    了解如何去设计和实现原子组件、HOC、业务组件
  </div>
</div>

<div text-xl text-white:50 v-click>
<span flex="inline gap-1 items-center" text-yellow translate-y-0.6><div i-ph-lightbulb-filament-duotone />Hooks</span>
</div>
<div flex="~ gap-2 items-center" mb3 ml7 v-click>
  <div i-ph-arrow-bend-down-right-duotone op50 />
  <div>
    Hooks 思想可以引导你如何去组织你的复杂庞大的代码逻辑，让你体验写代码就跟写诗一样的感觉
  </div>
</div>


<div text-xl text-white:50 v-click>
<span flex="inline gap-1 items-center" text-green translate-y-0.6><div i-ph-warning-octagon-duotone />代码提交</span>
</div>
<div flex="~ gap-2 items-center" mb3 ml7 v-click>
  <div i-ph-arrow-bend-down-right-duotone op50 />
  <div>
    如何提交你的代码，让reviewer更加容易的get到你要解决的问题
  </div>
</div>

</div>


---
grow: right
class: text-center
---

<div transition duration-800 :class="$clicks < 2 ? 'translate-y-45' : ''" relative>

# 精通 Vue2.x <span v-mark.linethrough.red.delay200="{at:1,roughness:6,seed:146}" transition inline-block :class="$clicks >= 1 ? 'op50' : ''"> Options API</span>

<div font-hand bold absolute rotate--4 left-106 top-10 text-3xl text-lime1 delay-300 v-click>Composition API</div>

</div>

<iframe v-click mt12 src="/markdown/why-composition-api.md" frameborder="0" width="100%" height="500px"></iframe>


---
grow: right
class: text-center
---

<div transition duration-800 :class="$clicks < 1 ? 'translate-y-45' : ''">

# <span text-blue >TypeScript</span>

</div>

<div text-white:50 text-2xl v-click>
最佳实践是一个管理学概念，认为存在某种技术、方法、过程、活动或机制可以使实践的结果达到最优，并减少出错的可能性。
A tool should help you get things done <span text-yellow2 italic v-mark.yellow.underline.delay300="2">faster</span> and/or <span text-lime2 v-mark.lime.underline.delay700="2">easier</span>
</div>


---
layout: center
class: text-center
growX: 50
growY: 100
---

<h1 important-text-5xl v-click>Component design</h1>

<div text-white:50 text-2xl v-click>
最佳实践是一个管理学概念，认为存在某种技术、方法、过程、活动或机制可以使实践的结果达到最优，并减少出错的可能性。
A tool should help you get things done <span text-yellow2 italic v-mark.yellow.underline.delay300="2">faster</span> and/or <span text-lime2 v-mark.lime.underline.delay700="2">easier</span>
</div>

---
layout: center
class: text-center
growX: 50
growY: 100
---

<h1 important-text-5xl v-click>Hooks</h1>

<div text-white:50 text-2xl v-click>
最佳实践是一个管理学概念，认为存在某种技术、方法、过程、活动或机制可以使实践的结果达到最优，并减少出错的可能性。
A tool should help you get things done <span text-yellow2 italic v-mark.yellow.underline.delay300="2">faster</span> and/or <span text-lime2 v-mark.lime.underline.delay700="2">easier</span>
</div>


---
layout: center
class: text-center
growX: 50
growY: 100
---

<h1 important-text-5xl v-click>Breaking-change</h1>

<div text-white:50 text-2xl v-click>
最佳实践是一个管理学概念，认为存在某种技术、方法、过程、活动或机制可以使实践的结果达到最优，并减少出错的可能性。
A tool should help you get things done <span text-yellow2 italic v-mark.yellow.underline.delay300="2">faster</span> and/or <span text-lime2 v-mark.lime.underline.delay700="2">easier</span>
</div>



---
layout: center
class: text-center
growX: 50
growY: 100
---

<h1 important-text-5xl v-click>Code commit</h1>

<div text-white:50 text-2xl v-click>
最佳实践是一个管理学概念，认为存在某种技术、方法、过程、活动或机制可以使实践的结果达到最优，并减少出错的可能性。
A tool should help you get things done <span text-yellow2 italic v-mark.yellow.underline.delay300="2">faster</span> and/or <span text-lime2 v-mark.lime.underline.delay700="2">easier</span>
</div>



---
grow: right
class: text-center
clicks: 5
title: What Makes a Good Tool?
---

<div transition duration-800 :class="$clicks < 2 ? 'translate-y-45' : ''" relative>

# What Makes a <span v-mark.linethrough.red.delay200="{at:1,roughness:6,seed:146}" transition inline-block :class="$clicks >= 1 ? 'op50' : ''"> Good</span> Tool?

<div font-hand bold absolute rotate--4 left-106 top-10 text-3xl text-lime1 delay-300 v-click>General & Useful</div>

</div>
