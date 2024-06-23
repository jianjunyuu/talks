---
layout: cover
highlighter: shiki
colorSchema: dark
---

# 代码设计最佳实践
## 交互素材仓库（前端）


<!-- --- -->
<!-- layout: intro -->
<!-- --- -->

<!-- # 1 -->

---
layout: cover
---

<h1 flex="~ col">
<div text-2xl origin-top-left transition duration-500 :class="$clicks <= 2 ? 'scale-150' : 'op50'">
  为什么会分享这个话题？
</div>
<div text-xl mt10 forward:delay-300 v-click>
  目前在项目协同上，发现一些问题？ or 让大家能够在相同的规范或者认知中进行产出
</div>
</h1>

---
layout: cover
---

<h1 flex="~ col">
<div text-2xl origin-top-left transition duration-500 :class="$clicks <= 1 ? 'scale-150' : 'op50'">
  什么是最佳实践？
</div>
<div text-xl mt10 forward:delay-300 v-click>
  <span>最佳实践是一个管理学概念，认为存在某种技术、方法、过程、活动或机制可以使生产或管理实践的<span text-yellow2 italic v-mark.yellow.underline.delay300="2">结果达到最优</span>，并<span text-yellow2 italic v-mark.yellow.underline.delay300="2">减少出错</span>的可能性。</span>
  <sup text-xs opacity-75>维基百科</sup>
</div>
</h1>

<!-- 
怎么做好？
完成一个功能
做好一个功能

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
多个项目可以统一环境，代码风格eslint、构建环境webpack、技术栈、请求器

不过，这也往往带来一些比较可怕的事情
在改动某个项目中功能或对该功能进行破坏性调整的时候，并未考虑到该功能被其他项目所引用
或许开发者已经考虑到了，但往往因为不同项目之间的需求差异，调整后的功能点的覆盖缺漏导致无感知的将问题上线

这些都是经常性发生的

还有一些点是关于基建部分差异的，在这里就不拓展开来说了

-->

<!-- 
最佳实践如果去应用到我们的团队中来？

-->

---
layout: center
class: text-center
growX: 50
growY: 100
---

<h1 important-text-5xl v-click>什么是最佳实践？</h1>

<div text-white:50 text-2xl v-click>
最佳实践是一个管理学概念，认为存在某种技术、方法、过程、活动或机制可以使实践的结果达到最优，并减少出错的可能性。
A tool should help you get things done <span text-yellow2 italic v-mark.yellow.underline.delay300="2">faster</span> and/or <span text-lime2 v-mark.lime.underline.delay700="2">easier</span>
</div>

<!--
So first, before we diving into today's topic, let's discuss a bit what we are expecting when working in open source.

We know that most of the open source projects we use daily are tools, but have you ever think about the question that, what defines a tool?

[click] The definition should be pretty straightforward and maybe you already have the answer in your mind.

[click] In my interpretation, a tool should help you get things done faster and/or easier, at least one of them.

I guess no one wants to use a tool that makes things slower and more complicated, right?
-->

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

<div left-70 top-15 relative transition duration-400 forward:delay-600 v-click="2">
  <img src="/balance-body.png" w-80 absolute left-0 top-0 />
  <img
    src="/balance-arm.png"
    w-80 absolute left-0 top-0 transition duration-1000
    class="origin-[50%_27%]"
    :class="$clicks >= 5 ? 'animate-balance-shake' : ''"
  />
  <div transition duration-1000 :class="$clicks >= 5 ? 'animate-balance-move-left' : ''" >
    <img src="/cost-of-learn.png" w-30 absolute left--35 top-20 duration-800 v-click="4" />
    <img src="/balance-balls-left.png" w-80 absolute left-0 top-0 v-click="3" />
    <img src="/balance-left.png" w-80 absolute left-0 top-0 />
  </div>
  <div transition duration-1000 :class="$clicks >= 5 ? 'animate-balance-move-right' : ''" >
    <img src="/cost-of-doing.png" w-28 absolute left-85 top-34 duration-800 v-click="4" />
    <img src="/balance-ball-right.png" w-80 absolute left-0 top-0 v-click="3" />
    <img src="/balance-right.png" w-80 absolute left-0 top-0 />
  </div>
</div>

<!--
So assume we want to build a new open source project, a tool for people to use. What would you consider to justify if the tool you going to build is a good one or not?

Well, my answer is no, you can't not really tell that without being verified by the community - because there are so many factors that can affect if an open source project would work out or not.

But also, I want to emphasize that in this context, "Good" is a relative term that deps on your expectation.
It's totally ok to build a tool that solves your own problem and call it a day - it's a great tool that works for you anyway.
Actually I have a plenty of such tools and I am happy about that even no one else is using them, but they get my job done at the end of the day, right?

So let's revise our goal. Let's say we want to build a tool that can be beneficial to not only ourselves but also to more people, and probably the community could also help us to make the tool better for everyone.

[click] So the question becomes how could we make a general and useful tool for ppl to use?.

[click] I'd say every decision comes with a trade-off. When users consider if they want to use a tool, they would justify and cost and the benefits they can get from it.

[click] So here we have a balance. If I gonna to put two most important factors on the balance, I'd pick "Cost of learning and using the tools" verse the "Cost of doing something oneself".

[click] In order to make users willing to use our tool, I'd say that the "Cost of learning" should be much less than the "Cost of doing"
[click] This has been my little go-to formula to pre-evaluate if idea I have is worthwhile.

For example, let's say if we want to get a summary of 10 numbers. Would you look for a library to do that? Probably no, because we could do it with a single loop in 2 line of code - the cost of doing ourself is too low that we don't even consider getting a tool.

But if we are going to do some calculus, I am certainly going to find a library to do it for me, because I basically forget everything I learned in my college XD.

However, on the other hand, if the library we picked requires us to understand like 100 different configurations before being able to use it, uhumm, we probably going to find another library that might be easier.

Thus we know that, when we are making tools, we have to think about those cases and find a good balance to make the tool worthwhile.
-->

