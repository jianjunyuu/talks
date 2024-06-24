# 为什么选择composition-api

> 可阅读 [Composition API FAQ](https://vuejs.org/guide/extras/composition-api-faq.html) 理解
> 也可以看作者的视频介绍[VUE CONF Composable Vue](https://www.bilibili.com/video/BV1x54y1V7H6)

## 在实践中跟Options API & Class Component 写法有什么差异

这里举个写组件的例子：


### Options Api

这是vue2 javascript原始的写法，对 TS 的支持并不友好

data、computed、watch、lifecycle、methods，都必须在指定的位置声明

```vue
<template>
  <div class="controllable-popper">
    <div class="popper" ref="popper"><slot /></div>

    <span class="reference-wrapper" ref="wrapper">
      <slot name="reference" v-bind:show="show" v-bind:hide="hide"></slot>
    </span>
  </div>
</template>

<script>
import { createPopper } from '@popperjs/core'

export default {
  props: {
    popoverProps: {
      type: Object,
      // see: https://popper.js.org/documentation.html
      default: () => ({}),
    },
  },
  data() {
    return {
      instance: null,
    }
  },
  mounted() {
    const { popper, wrapper } = this.$refs

    const reference = wrapper.children[0] || wrapper
    const specificRef = reference.querySelector('*[popover-reference]')

    document.body.appendChild(popper)
    this.instance = createPopper(specificRef || reference, popper, {
      placement: 'right-start',
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [0, 8],
          },
        },
      ],
      ...this.popoverProps,
    })
  },
  beforeDestroy() {
    const popper = this.$refs.popper
    if (popper && popper.parentElement) {
      popper.parentElement.removeChild(popper)
    }

    if (this.instance) {
      this.instance.destroy()
      this.instance = null
    }
  },
  methods: {
    show() {
      this.$nextTick(() => {
        this.$refs.popper.setAttribute('data-show', '')

        const instance = this.instance
        if (instance) {
          // Enable the event listeners
          instance.setOptions((options) => ({
            ...options,
            modifiers: [
              ...options.modifiers,
              { name: 'eventListeners', enabled: true },
            ],
          }))

          // Update its position
          instance.update()
        }
      })
    },
    hide() {
      this.$nextTick(() => {
        this.$refs.popper.removeAttribute('data-show')

        const instance = this.instance
        if (instance) {
          // Disable the event listeners
          instance.setOptions((options) => ({
            ...options,
            modifiers: [
              ...options.modifiers,
              { name: 'eventListeners', enabled: false },
            ],
          }))
        }
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.popper {
  border-radius: 4px;
  z-index: 9999;

  background-color: #fff;
  padding: 8px;
  line-height: 0;
  align-items: center;
  justify-content: center;
  min-width: auto;
  display: none;

  &[data-show] {
    display: flex;
  }
}
.controllable-popper,
.reference-wrapper {
  display: inline-block;
}
</style>
```

### Class Component

vue2.x 跟 TS 的整合，通常需要基于 vue-class-component 来用基于 class（类） 的组件书写方式。

除了能结合TS的类型提示，在其他方面跟Options API无差别

```vue
<template>
  ...
</template>

<script>
import { createPopper } from '@popperjs/core'
import { Vue, Component } from 'vue-property-decorator'

type InferOptionType<T> = T extends (a: any, b: any, c: infer P) => any
  ? P
  : never
type OptionType = InferOptionType<typeof createPopper>

@Component
export default class Search extends Vue {
  // props
  @Prop({ type: Object, default: () => ({}) }) 
  popoverProps: OptionType

  // data
  instance: ReturnType<typeof createPopper> | null = null

  mounted() {
    const { popper, wrapper } = this.$refs

    const reference = wrapper.children[0] || wrapper
    const specificRef = reference.querySelector('*[popover-reference]')

    document.body.appendChild(popper)
    this.instance = createPopper(specificRef || reference, popper, {
      placement: 'right-start',
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [0, 8],
          },
        },
      ],
      ...this.popoverProps,
    })
  }

  beforeDestroy() {
    const popper = this.$refs.popper
    if (popper && popper.parentElement) {
      popper.parentElement.removeChild(popper)
    }

    if (this.instance) {
      this.instance.destroy()
      this.instance = null
    }
  }

  // methods
  show() {
    // ....
  },
  hide() {
    // ....
  }
}
</script>
```


### Composition API

Composition API 是一组 API，允许我们使用导入的函数而不是声明选项来编写 Vue 组件。

声明选项，必须安装指定方式来编写

函数，每个选项（data、computed、watch、lifecycle、methods）都可以是函数


- 更好的类型推断

函数式的编写，这样跟接近编写原生的js的
原生的js/TS对类型的提示可以说是很完美的。

- 更好的逻辑重用

对比vue2的mixins

- 更灵活的代码组织
看下面的`index.ts`代码

```vue
<template>
  ...
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { usePopper } from './index'
import { createPopper } from '@popperjs/core'
import { definePropType } from '@types-vue/props'

type InferOptionType<T> = T extends (a: any, b: any, c: infer P) => any
  ? P
  : never
type OptionType = InferOptionType<typeof createPopper>

export default defineComponent({
  props: {
    popoverProps: {
      type: definePropType<OptionType>(Object),
      // type: Object as PropType<OptionType>,
      // see: https://popper.js.org/documentation.html
      default: () => ({}),
    },
  },
  setup(props) {
    // const { show, hide } = usePopper(props)
    // return { show, hide }

    return { ...usePopper(props) }
  },
})
</script>
```


index.ts
```ts
import { nextTick, onBeforeUnmount, onMounted, ref } from '@vue/composition-api'
import { createPopper } from '@popperjs/core'

export function usePopper(props: any) {
  let instance: ReturnType<typeof createPopper> | null = null
  const popper = ref<HTMLElement>()
  const wrapper = ref<HTMLElement>()

  onMounted(() => {
    if (wrapper.value && popper.value) {
      const reference = wrapper.value.children[0] || wrapper.value
      const specificRef = reference.querySelector('*[popover-reference]')
      document.body.appendChild(popper.value)
      instance = createPopper(specificRef || reference, popper.value, {
        placement: 'right-start',
        modifiers: [
          {
            name: 'offset',
            options: {
              offset: [0, 8],
            },
          },
        ],
        ...props.popoverProps,
      })
    }
  })

  onBeforeUnmount(() => {
    if (popper.value && popper.value.parentElement) {
      popper.value.parentElement.removeChild(popper.value)
    }

    instance?.destroy()
  })

  function show(): void {
    nextTick(() => {
      popper.value?.setAttribute('data-show', '')

      if (instance) {
        // Enable the event listeners
        instance.setOptions((options) => ({
          ...options,
          modifiers: [
            ...(options.modifiers ?? []),
            { name: 'eventListeners', enabled: true },
          ],
        }))

        // Update its position
        instance.update()
      }
    })
  }
  function hide(): void {
    nextTick(() => {
      popper.value?.removeAttribute('data-show')

      if (instance) {
        // Disable the event listeners
        instance.setOptions((options) => ({
          ...options,
          modifiers: [
            ...(options.modifiers ?? []),
            { name: 'eventListeners', enabled: false },
          ],
        }))
      }
    })
  }

  return { show, hide }
}
```
