---
layout: cover
highlighter: shiki
colorSchema: dark
---

# 项目工程最佳实践
## 交互素材仓库（前端）<span text-2xl op50> -- 余建君</span>

<!--
大家好，很高兴有机会给大家分享一些技术性话题

这个分享其实拖了挺久的了，其实从上一年就开始说要分享一些东西

但因为本身职责的工作需求比较多，就算在某个迭代结束后的空闲时间，都要开始准备下个迭代相关需求的功能调研了

现在借着这个机会，梳理一些东西，来给大家分享一下
之前沉淀一些工具，工作中发现一些问题

以下所讲内容都会围绕本职工作相关的技术性问题，加上个人主观上的理解和经验，分享下我是怎么去思考的。
-->

---
layout: intro
---

# 关于我

<h2 op90 forward:delay-300 v-click>
在这实习了长达两年多的切图仔
</h2>


<div text-xl mt4 forward:delay-300 v-click>
<span transition duration-500 inline-block border="~ color-white" pl2 pr2 pt1 pb1 rounded-4px mr2 opacity-50 hover:opacity-100 >
项目部分基建
</span>
<span transition duration-500 inline-block border="~ color-white" pl2 pr2 pt1 pb1 rounded-4px mr2 opacity-50 hover:opacity-100 >
视频编辑器
</span>
<span transition duration-500 inline-block border="~ color-white" pl2 pr2 pt1 pb1 rounded-4px mr2 opacity-50 hover:opacity-100 >
Figma icons
</span>
<span transition duration-500 inline-block border="~ color-white" pl2 pr2 pt1 pb1 rounded-4px mr2 opacity-50 hover:opacity-100 >
Bump tag
</span>
</div>


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

<!--
[click] 看着有点绕，没事，我们看标着黄色的文字

[click] 相信这也是我们团队一直在做，在推进的一件事情

比如说，code review、技术方案评审流程、需求迭代复盘。这些事情都是在保证质量、并且在错误中学习并优化它。

从我刚进这个团队，听的比较多的就是：技术沉淀文档化、功能代码可复用、需要使用Typescript开发

这几件事我觉得都是非常有必要的

我们团队成员还是比较多的，项目工程也比较复杂，这样的背景下，如果不对成员输出进行流程上的把控和限制，将会增加项目中的熵增。
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

<div text-xl mt4 forward:delay-300 v-click>
<span transition duration-500 inline-block border="~ color-white" pl2 pr2 pt1 pb1 rounded-4px mr2 opacity-50 hover:opacity-100 >
创意素材仓库
</span>
<span transition duration-500 inline-block border="~ color-white" pl2 pr2 pt1 pb1 rounded-4px mr2 opacity-50 hover:opacity-100 >
Playturbo
</span>
<br />
<span mt4 transition duration-500 inline-block border="~ color-white" pl2 pr2 pt1 pb1 rounded-4px mr2 opacity-50 hover:opacity-100 >
可玩编辑器
</span>
<span transition duration-500 inline-block border="~ color-white" pl2 pr2 pt1 pb1 rounded-4px mr2 opacity-50 hover:opacity-100 >
视频编辑器
</span>
<span transition duration-500 inline-block border="~ color-white" pl2 pr2 pt1 pb1 rounded-4px mr2 opacity-50 hover:opacity-100 >
AI视频编辑器
</span>
<span transition duration-500 inline-block border="~ color-white" pl2 pr2 pt1 pb1 rounded-4px mr2 opacity-50 hover:opacity-100 >
云剪辑
</span>
<span transition duration-500 inline-block border="~ color-white" pl2 pr2 pt1 pb1 rounded-4px mr2 opacity-50 hover:opacity-100 >
Assets Factory
</span>
</div>

<!--
这是我们一直在工作的项目仓库

[click] 

[click]

[click]

[click] 我们的代码仓库比较复杂，里面包含了很多个项目

这没问题，这也有很多好处

例如：
我们可以很方便的复用其他项目的功能模块（只要它足够的独立）
多个项目可以统一环境，代码风格eslint、git commit、构建环境webpack、技术栈、请求器

不过，这也往往带来一些比较可怕的事情
在改动某个项目中功能或对该功能进行破坏性调整的时候，并未考虑到该功能被其他项目所引用
或许开发者已经考虑到了，但往往因为不同项目之间的需求差异，调整后的功能点的覆盖缺漏导将问题上线

这些事情的发生往往都是无感知的，直到问题在线上被发现

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
    <div i-clarity:language-line text-2xl ml-12/>
    <span>国际化i18n</span>
    <a i-quill-link-out target="_blank" href="https://confluence.mobvista.com/pages/viewpage.action?pageId=98685486" />
  </div>
  <div i-ph-arrow-right-duotone op50 v-click />
  <div v-after>只需下载远程Excel文件，一个命令完成所有项目的翻译解析导入</div>

  <div flex="~ gap-2 items-center" text-lime relative v-click>
    <div w-35px h-56px border="l b gray/30" left-0 bottom-15px absolute />
    <div i-file-icons:tag text-2xl ml-12/>
    <span>Bump tag</span>
    <a i-quill-link-out target="_blank" href="https://gitlab.mobvista.com/playable/bump-tag" />
  </div>
  <div i-ph-arrow-right-duotone op50 v-click />
  <div v-after>自动校验是否同步最新代码、并根据规则创建tag</div>

  <div flex="~ gap-2 items-center" text-amber relative v-click>
    <div w-35px h-56px border="l b gray/30" left-0 bottom-15px absolute />
    <div i-logos:figma text-2xl ml-12/>
    <span>Figma icons</span>
    <a i-quill-link-out target="_blank" href="https://confluence.mobvista.com/pages/viewpage.action?pageId=86157550" />
  </div>
  <div i-ph-arrow-right-duotone op50 v-click />
  <div v-after>实现从设计、发布、通过自动化脚本同步到开发端的自动化流程</div>

  <div flex="~ gap-2 items-center" text-orange relative v-click>
    <div w-35px h-56px border="l b gray/30" left-0 bottom-15px absolute />
    <div i-unjs:unplugin text-2xl ml-12 />
    <span>Auto import</span>
    <a i-quill-link-out target="_blank" href="https://unplugin.unjs.io/" />
  </div>
  <div i-ph-arrow-right-duotone op50 v-click />
  <div v-after>让<span text-green>Figma icons</span>、<span text-green>Pt组件</span>的使用更加简单；也让项目对第三方组件引入方式提供了更多的可能性</div>
</div>

<div text-white:50 v-click="11">
丰富的 <span v-mark.box.teal.delay400="5" text-teal mx1>工具链</span> 让你的开发更加简单～</div>

<!--
站在巨人的肩膀上是一种表达，意味着我们借助前人的知识、经验和成就来取得进步。这句话最早出自于艾萨克·牛顿（Isaac Newton）的说法，他认为他的成功是因为他能够从其他科学家的工作中吸取到启示。

[click] 工具链这块在项目工程中也是充当不可缺失的角色

所谓，磨刀不误砍柴工

当有一些重复性工作，或者一些流程是可以规范起来的，我们都可以利用一些工具来替代重复性的人为操作

[click] i18n工具，从一开始，都是人为从excel文件将翻译好的内容，copy到项目里面来的

后面有了《视频编辑器》项目后，尝试一个半自动化的方案，比如把excel下载到本地后，调整下sheet的列，然后才能执行，解决人为手动copy的过程

在其他项目上，在项目外的本地执行后，需要将执行的文件copy到项目里面来，文件一一对应，

嗯.....感觉还是不够简洁

既然这样，有没有一个工具是让它足够简单的呢？

[click] PS：感谢下做这个事情的人

[click] 自动创建新的tag，支持自动验证当前分支本地和远程的合并状态、本地分支和主分支的版本是否落后，直接跨年的主版本号递增

[click] 为什么会有这个工具呢？

之前在操作发版创建手动创建tag时候，有可能会创建错误，没有按指定的规则进行创建，或者序号错了

特别是在跨月、跨年时候，人为操作并没有去考虑那么多，直接在最后的序号递增

这是其一

其二，打tag的时候，都是在迭代分支进行的，这个时候，如果迭代分支落后于master分支，人在无感知的情况，发布到生成，就会导致生产出现因为发布代码缺失而出现功能不符合预期

所以我们就讨论，有没有一个工具，来帮我们创建一个合理的tag，并且它还会帮我们去校验是否有合并过maser的最新代码没有

[click] 我解释下，这是一个什么东西

[click] 打开链接， 讲解流程图
-->

---
growX: 50
growY: 130
---

# <span font-hand text-green scale-110 ml1 inline-block>站在巨人的肩膀上</span>

<div flex="~ gap-2 items-center" text-hex-42b883 mt-15>
  <div i-fa6-brands-vuejs text-2xl />
  <span>组件库</span>
</div>

<div grid="~ cols-[max-content_min-content_auto] items-center gap-6" py8 px3>
  <div flex="~ gap-2 items-center" text-hex-42b883 relative v-click>
    <div w-35px h-45px border="l b gray/30" left-0 bottom-15px absolute />
    <div i-ph-table-thin text-2xl ml-12/>
    <span>MTable</span>
    <a i-quill-link-out target="_blank" href="https://gitlab.mobvista.com/playable/m-table" />
  </div>
  <div i-ph-arrow-right-duotone op50 v-click />
  <div v-after>通过JSON配置，快速生成数据表格</div>

  <div flex="~ gap-2 items-center" text-hex-42b883 relative v-click>
    <div w-35px h-45px border="l b gray/30" left-0 bottom-15px absolute />
    <div i-fluent-form-20-regular text-2xl ml-12/>
    <span>Schema Form</span>
    <a i-quill-link-out target="_blank" href="http://el-schem-form.playable-portal-test.mintegral.com/" />
  </div>
  <div i-ph-arrow-right-duotone op50 v-click />
  <div v-after>通过JSON配置，快速生成表单页面，提升一些通用功能的开发效率</div>

  <div flex="~ gap-2 items-center" text-hex-F5BD35 relative v-click>
    <div w-35px h-45px border="l b gray/30" left-0 bottom-15px absolute />
    <div i-solar-figma-bold-duotone text-2xl ml-12/>
    <span>Pt components</span>
    <a i-quill-link-out target="_blank" href="https://www.figma.com/design/ppcx9IazVbvyDQqrV80mPT/Design-System" />
  </div>
  <div i-ph-arrow-right-duotone op50 v-click />
  <div v-after>精美漂亮的UI组件，让你开发设计出来的页面就跟搭积木一样简单</div>

</div>

<div text-white:50 v-click="5">
丰富的 <span v-mark.box.teal.delay400="5" text-teal mx1>组件</span> 给你搭积木一样的开发体验～</div>

<!--
工具链篇，不知道大家有没有理解，并且体会到它们给你们带来便捷

如果你还没有理解，或者没有体会它的便捷

没关系，如果可以，你可以给我们反馈一些你的使用体验，这将会让我们感知到，它还是有提升空间的。

接下来，我们看看组件库

[click] 它是一个可以通过JSON配置出你想要的表格的组件

[click] 它支持四种配置方式，简单配置、slot、动态组件、自定义组件。基本能覆盖你所需要的场景



[click] Schema Form 这是一个表单配置库，做过素材仓库一些功能的人，可能就了解过

它越在一些简单的需求功能上，体现的效率就越明显

当然，这样说并不是说它胜任不了复杂的功能点

在PT报表页面，弹窗里面的筛选弹窗，都是基于它的可配置特性，将它作为基础能力，实现实现同一份配置可以渲染不同状态的数据，完成了筛选可回撤的能力

[click] 

[click] 这是我们PT相关产品延伸出来的一套UI原子组件

[click] 得益于我们有优秀的设计团队，去规范并梳理那么多组件，让我们在开发时候，可以有更多精力去关注需求的实现

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
    提供 组合式 API 的 Vue 2 插件
  </div>
</div>


<div text-xl text-white:50 v-click>
<span flex="inline gap-1 items-center" text-blue translate-y-0.6><div i-ph-book-bookmark-duotone />TypeScript</span>
</div>
<div flex="~ gap-2 items-center" mb3 ml7 v-click>
  <div i-ph-arrow-bend-down-right-duotone op50 />
  <div>
    强类型编程语言，类型提示、类型编程让我们更早的发型bug；让接口定义、剧本定义、组件设计、Hooks等，开发的功能代码即文档
  </div>
</div>

<div text-xl text-white:50 v-click>
<span flex="inline gap-1 items-center" text-yellow translate-y-0.6><div i-ph-lightbulb-filament-duotone />代码设计</span>
</div>
<div flex="~ gap-2 items-center" mb3 ml7 v-click>
  <div i-ph-arrow-bend-down-right-duotone op50 />
  <div>
    了解如何去设计和实现原子组件、HOC、业务组件；
    利用hooks思想组织并解耦复杂庞大的代码逻辑
  </div>
</div>

<!-- <div text-xl text-white:50 v-click>
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
    Hooks 思想可以引导你如何去组织你的复杂庞大的代码逻辑，解耦庞大逻辑块。
  </div>
</div> -->


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

<!--
这里，我主要想分享下代码设计相关的

[click] Composition API 是一个插件，可以让你在vue2.x版本就能体验开发风格是基于函数的组合，但组合式 API 并不是函数式编程

组合式 API 是以 Vue 中数据可变的、细粒度的响应性系统为基础的，而函数式编程通常强调数据不可变

这个思想在我们的仓库中也是应用的很多

[click] 现在我们的新组件基本都使用了这套风格

[click] 这个也是我们团队中要会使用的强类型语言

[click] 当然，它的强大，也得看人怎么去使用

[click] 代码设计这个话题，
-->

---
grow: right
class: text-center
---

<div transition duration-800 :class="$clicks < 2 ? 'translate-y-45' : ''" relative>

# 精通 Vue2.x <span v-mark.linethrough.red.delay200="{at:1,roughness:6,seed:146}" transition inline-block :class="$clicks >= 1 ? 'op50' : ''"> Options API</span>

<div font-hand bold absolute rotate--4 left-106 top-10 text-3xl text-lime1 delay-300 v-click>Composition API</div>

</div>

<iframe forward:delay-500 v-click mt12 src="https://cn.vuejs.org/guide/extras/composition-api-faq#what-is-composition-api" frameborder="0" width="100%" height="500px"></iframe>

<!--
相对于 Options API，它有更好的逻辑复用、更灵活的代码组织、更好的类型推导
-->

---
grow: right
class: text-center
---

<div transition duration-800 :class="$clicks < 1 ? 'translate-y-45' : ''">

# <span text-blue >TypeScript</span>

</div>


---
grow: right
class: text-center
clicks: 10
---

<div transition duration-800 :class="$clicks < 1 ? 'translate-y-45' : ''">

# <span text-blue >TypeScript - 接口定义</span>

</div>

<div transition forward:delay-300 v-click>

<div text-left>

````md magic-move {at:3}
```ts {3}
import { AxiosPromise } from 'axios'

export function projectSave(): AxiosPromise
```

Non-code blocks in between as ignored, you can put some comments.

```ts
import type { _Response } from '@pt/api/type'

export function projectSave(): _Response<data model type, like: { id: number; name: string }>
```
````

</div>
<div text-xs text-red text-left v-if="$clicks === 2">
  它的返回类型并不明确
</div>

</div>


<div mt1 text-left grid="~ cols-2 gap-x-2">


<div transition forward:delay-300 v-click="3" v-if="$clicks <= 4">
<div flex="~ items-center" style="line-height: 1"><span text-2xl i-vscode-icons:file-type-typescript />
  &nbsp;playsmart/src/types/request.d.ts
</div>
<div>

```ts
declare module 'request' {
  export interface ResponseData<T> {
    code: number
    data: T
    msg: string
  }

  export interface ListData<T> {
    list: T[] | null
    page: number
    page_size: number
    total: number
  }

  export interface ListDataPagingParams {
    page?: number
    page_size?: number
  }
}
```
</div>
</div>



<div v-click="4" v-if="$clicks <= 4">
<div flex="~ items-center" style="line-height: 1"><span text-2xl i-vscode-icons:file-type-typescript />&nbsp;playturbo/src/api/type.ts</div>
<div>

```ts
import type { AxiosPromise } from 'axios'
import type { ResponseData } from 'request'

export type _Response<T> = AxiosPromise<ResponseData<T>>
```
</div>
</div>


</div>

<div text-left mt10 transition forward:delay-300 v-click v-if="$clicks < 7">
类型关联

````md magic-move {at:6}
```ts
// 用户数据模型
interface User {
  id: number
  name: string
}

// 接口参数
interface GetUserParams {
  id: number
}

// 接口定义
function getUser(
  id: number
): _Response<User>
```

```ts {9,14}
// 用户数据模型
interface User {
  id: number
  name: string
}

// 接口参数
interface GetUserParams {
  id: User['id']
}

// 接口定义
function getUser(
  id: User['id']
): _Response<User>
```
````
</div>


<div text-left mt10 transition forward:delay-300 v-if="$clicks <= 9">
列表数据

````md magic-move {at:8}
```ts {7-8}
// 用户数据模型
interface User {
  id: number
  name: string
}

// 获取用户列表
function getUsers(): _Response<ListData<User>>
```

```ts {9-15}
// 用户数据模型
interface User {
  id: number
  name: string
}

// 获取用户列表
function getUsers(): _Response<ListData<User>>
// 等同于
function getUsers(): _Response<{
  list: User[] | null
  page: number
  page_size: number
  total: number
}>
```

```ts {11}
// 用户数据模型
interface User {
  id: number
  name: string
}

// 获取用户列表
function getUsers(): _Response<ListData<User>>
// 等同于
function getUsers(): _Response<{
  list: User[] | null
  page: number
  page_size: number
  total: number
}>
```
````
</div>


<div text-left mt10 transition forward:delay-300 v-click>
分页参数定义

```ts
import type { ListDataPagingParams } from 'request'

interface GetUsersParams 
  extends ListDataPagingParams,
  Partial<User, 'id' | 'age'> {
  // ...other
}

// 获取用户列表
function getUsers(data: GetUsersParams): _Response<ListData<User>>
```
</div>

---
grow: right
class: text-center
---

<div transition duration-800 :class="$clicks < 1 ? 'translate-y-45' : ''">

# <span text-blue >TypeScript - Component Props</span>

</div>


<div transition forward:delay-300 v-click>
<div flex="~ items-center" style="line-height: 1"><span text-2xl i-vscode-icons:file-type-vue />
  &nbsp;tracks.vue
</div>

<div text-left>

````md magic-move {at:2}
```ts
import { definePropType } from '@types-vue/props'
```

```vue {7}
<script lang="ts">
import { definePropType } from '@types-vue/props'

export default defineComponent({
  name: 'Tracks',
  // 是否可以拖拽资源到轨道
  enableDraggingAsset: Boolean,
  data: {
    type: definePropType<Track[]>(Array),
  },
  modeType: {
    type: definePropType<TrackMode>(String),
    default: TrackMode.Tradition,
  },
})
</script>
```

```vue {8-10}
<script lang="ts">
import { definePropType } from '@types-vue/props'

export default defineComponent({
  name: 'Tracks',
  // 是否可以拖拽资源到轨道
  enableDraggingAsset: Boolean,
  data: {
    type: definePropType<Track[]>(Array),
  },
  modeType: {
    type: definePropType<TrackMode>(String),
    default: TrackMode.Tradition,
  },
})
</script>
```

```vue {10-13}
<script lang="ts">
import { definePropType } from '@types-vue/props'

export default defineComponent({
  name: 'Tracks',
  enableDraggingAsset: Boolean,
  data: {
    type: definePropType<Track[]>(Array),
  },
  modeType: {
    type: definePropType<TrackMode>(String),
    default: TrackMode.Tradition,
  },
})
</script>
```

```ts
export enum TrackMode {
  // 传统模式
  Tradition = 'tradition',
  // 片段模式
  Fragment = 'fragment',
}

// or

type TrackMode = 'tradition' | 'fragment'
```
````

</div>
</div>


---
grow: right
class: text-center
---

<div transition duration-800 :class="{'translate-y-45': $clicks < 3, 'translate-x-10': $clicks === 0}" relative>

# <span text-lime><span inline-block transition duration-800 :class="$clicks > 0 ? 'op50' : ''">组件</span><span transition duration-800 v-mark.linethrough.red.delay200="{at:2,roughness:6,seed:146}" :class="$clicks > 0 ?  $clicks === 2 ? 'op50' : 'op100' : 'op0'">开发</span></span>

<div font-hand bold absolute rotate--4 left-108 top-10 text-3xl text-lime1 delay-300 v-click="2">设计</div>

</div>

<!--
ok，我们聊聊组件

组件这个词，作为前端开发者来说，应该是一个非常熟悉的了，不管你用的是Vue还是React，我们几乎每天都在开发组件

[click] 组件开发是根据组件设计的规范和要求来实现组件的过程。

这个实现过程，对所有开发者要求都一样，人和代码有一样能跑就行

开个玩笑～

PS：解释现状，case by case

- 认知领域
- 代码健壮性理解
- 代码可维护性理解
- 简洁之道
- 一些底层的数据结构和设计模式的应用

总而言之，它（组件开发）关注如何实际地编写和实现这个组件。

对调用者来说，它不关心你实现的方式，只要设计合理即可

[click] 组件设计关注如何构建一个组件，涉及到组件的结构和接口的定义

比如，这个组件的应该需要什么属性和方法，它们又应该是怎样的。

带着这个问题，我们看看日常的开发流程。

比如，我们在针对复杂业务需求对应高复杂度功能时候，往往会在开发之前，梳理你要实现功能一些技术方案，来保证在开发阶段，确保组件满足预期的需求；

也可以避免在实现过程中出现不合理的代码块；

在团队协同上，组件设计后，还可以拆分给不通的开发者并行开发，最后在根据技术方案给定的规范进行集成。

-->


---
grow: right
class: text-center
---

<div grid="~ cols-2 gap-x-2" mt5>

<div style="
  background: url(/question.png) -50px center no-repeat;
    background-size: cover;
  width: 140px;
  height: 400px;
  "
  translate-x-55
  relative
  transition
  forward:delay-300>
<div absolute rotate--5 left-32 top-14 text-4xl text-hex-ebbfbd style="word-break: keep-all;">怎么设计组件呢？</div>
</div>


</div>

<!-- <div relative>
<div style="
  background: url(/question.png) -560px center no-repeat;
    background-size: cover;
  width: 140px;
  height: 400px;
  "
  absolute
  transition
  top-24
  right-0
  forward:delay-300 v-click="4">
<div absolute rotate-5 right-40 top-10 text-4xl text-hex-f6d949 style="word-break: keep-all;">
  ???
</div>
</div>
</div> -->



<!-- <div mt12 text-left text-white:50 text-4xl transition forward:delay-300 v-click>
<span flex="inline gap-1 items-center" text-yellow translate-y-0.6><div i-ph-lightbulb-filament-duotone />组件设计</span>
</div>

<div mt12 text-left text-white:50 text-4xl transition forward:delay-300 v-click>
<span flex="inline gap-1 items-center" text-yellow translate-y-0.6><div i-ph-lightbulb-filament-duotone />组件设计</span>
</div> -->

<!--

设计组件的过程可以包括以下步骤：




首先，了解下组件一些基本能力

Props
Slots
Emits
Methods

确定要实现的功能点
// TODO

是否能提取基础能力？
// TODO


组件 功能 业务
组件划分：

公共模块

common/pt-components 基础组件

common/components 基础业务组件

功能组件



common/utils
common/enums
types
-->



---
grow: right
class: grid grid-cols-[auto_640px] gap-4 justify-center
---

<img inline-block src="/bulb.png" translate-y--10> 

<div w-min flex="~ col gap-0">

<div text-xl text-white:50 v-click>
<span flex="inline gap-1 items-center" text-purple mb1>
明确目标和范围
</span>
</div>
<div w-150  flex="~ gap-2" mb3 ml2 v-click>
  <div w-10 i-ph-arrow-bend-down-right-duotone op50 mt2 />
  <div border="~ color-purple" text-xs w-120 style="background-color:rgba(192, 132, 252, 0.1);padding: 8px;" rounded-8px>
  明确组件的用途和预期的功能。考虑该组件在整个系统中的定位和作用。
  </div>
</div>



<div text-xl text-white:50 v-click>
<span flex="inline gap-1 items-center" text-purple mb2>
确定接口
</span>
</div>
<div w-150  flex="~ gap-2" mb3 ml2 v-click>
  <div w-10 i-ph-arrow-bend-down-right-duotone op50 mt1 />
  <div border="~ color-purple" text-xs w-120 style="background-color:rgba(192, 132, 252, 0.1);padding: 8px;" rounded-8px>
定义组件与外部世界之间的交互方式，包括输入和输出。考虑组件接收的参数、返回的结果以及可能引发的异常情况。
  </div>
</div>


<div text-xl text-white:50 v-click>
<span flex="inline gap-1 items-center" text-purple mb2>
划分功能模块
</span>
</div>
<div w-150  flex="~ gap-2" mb3 ml2 v-click>
  <div w-10 i-ph-arrow-bend-down-right-duotone op50 mt1 />
  <div border="~ color-purple" text-xs w-120 style="background-color:rgba(192, 132, 252, 0.1);padding: 8px;" rounded-8px>
将组件的功能划分为逻辑上独立的模块或子组件。这有助于组织代码结构和提高可维护性。
  </div>
</div>


<div text-xl text-white:50 v-click>
<span flex="inline gap-1 items-center" text-purple mb2>
考虑可扩展性和重用性
</span>
</div>
<div w-150  flex="~ gap-2" mb3 ml2 v-click>
  <div w-10 i-ph-arrow-bend-down-right-duotone op50 mt1 />
  <div border="~ color-purple" text-xs w-120 style="background-color:rgba(192, 132, 252, 0.1);padding: 8px;" rounded-8px>
设计组件时要考虑到未来可能的需求变化和系统扩展。尽量使组件可扩展，并提供清晰的接口和文档，以便其他开发人员能够理解和重复使用该组件。
  </div>
</div>


<div text-xl text-white:50 mt2 v-click>
上传组件
</div>

<div text-xl text-white:50 mt2 v-click>
项目ID Name组件
</div>




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
grow: right
class: text-center
clicks: 5
title: What Makes a Good Tool?
---

<div transition duration-800 :class="$clicks < 2 ? 'translate-y-45' : ''" relative>

# What Makes a <span v-mark.linethrough.red.delay200="{at:1,roughness:6,seed:146}" transition inline-block :class="$clicks >= 1 ? 'op50' : ''"> Good</span> Tool?

<div font-hand bold absolute rotate--4 left-106 top-10 text-3xl text-lime1 delay-300 v-click>General & Useful</div>

</div>
