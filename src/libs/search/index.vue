<template>
  <div
    class="group relative p-0.5 rounded-xl border-white duration-500 hover:bg-red-100/40"
    ref="containerTarget"
  >
    <div>
      <!-- 搜索图标 -->
      <m-svg-icon
        class="w-1.5 h-1.5 absolute translate-y-[-50%] top-[50%] left-2"
        name="search"
        color="#707070"
      />
      <!-- 输入框 -->
      <input
        class="dark:bg-zinc-800 dark:text-zinc-200 dark:border-zinc-700 dark:group-hover:bg-zinc-900 dark:group-hover:border-zinc-700 block w-full h-[44px] pl-4 text-sm outline-0 bg-zinc-100 caret-zinc-400 rounded-xl text-zinc-900 tracking-wide font-semibold border border-zinc-100 duration-500 group-hover:bg-white group-hover:border-zinc-200 focus:border-red-300"
        type="text"
        placeholder="搜索"
        v-model="inputValue"
        @keyup.enter="onSearchHandler"
        @focus="onFocusHandler"
        @blur="onBlurHandler"
      />
      <!-- 删除按钮 -->
      <m-svg-icon
        @click="onClearClick"
        v-show="inputValue"
        name="input-delete"
        class="h-1.5 w-1.5 absolute translate-y-[-50%] top-[50%] right-9 duration-500 cursor-pointer"
      ></m-svg-icon>
      <!-- 分割线 -->
      <div
        class="opacity-0 h-1.5 w-[1px] absolute translate-y-[-50%] top-[50%] right-[62px] duration-500 bg-zinc-200 group-hover:opacity-100"
      ></div>
      <!-- TODO: 搜索按钮(通用组件) -->
      <m-button
        class="opacity-0 duration-500 absolute translate-y-[-50%] top-[50%] right-1 rounded-xl group-hover:opacity-100"
        icon="search"
        iconColor="#ffffff"
        @click="onSearchHandler"
      ></m-button>
    </div>

    <!-- 下拉区 -->
    <transition name="slide">
      <div
        v-if="$slots.dropdown"
        v-show="isFocus"
        class="dark:bg-zinc-800 dark:border-zinc-600 max-h-[368px] w-full text-base overflow-auto bg-white absolute z-20 left-0 top-[56px] p-2 rounded border border-zinc-200 duration-200 hover:shadow-3xl scrollbar-thin scrollbar-thumb-zinc-200 dark:scrollbar-thumb-zinc-900 scrollbar-track-transparent"
      >
        <slot name="dropdown" />
      </div>
    </transition>
  </div>
</template>

<script>
const EMIT_UPDATE_MODELVALUE = 'update:modelValue'
// 触发搜索（点击或回车）事件
const EMIT_SEARCH = 'search'
// 删除所有文本事件
const EMIT_CLEAR = 'clear'
// 输入事件
const EMIT_INPUT = 'input'
// 获取焦点事件
const EMIT_FOCUS = 'focus'
// 失去焦点事件
const EMIT_BLUR = 'blur'
</script>

<script setup>
import { useVModel } from '@vueuse/core'
import { ref, watch } from 'vue'
import { onClickOutside } from '@vueuse/core'

const props = defineProps({
  modelValue: {
    required: true,
    type: String
  }
})
const emits = defineEmits([
  EMIT_UPDATE_MODELVALUE,
  EMIT_SEARCH,
  EMIT_CLEAR,
  EMIT_INPUT,
  EMIT_FOCUS,
  EMIT_BLUR
])
const inputValue = useVModel(props)
// 监听用户输入行为
watch(inputValue, (val) => {
  emits(EMIT_INPUT, val)
})
// 删除文本
const onClearClick = () => {
  inputValue.value = ''
  emits(EMIT_CLEAR, '')
}
// 搜索按钮
const onSearchHandler = () => {
  emits(EMIT_SEARCH, inputValue.value)
}
// input 获取焦点
const isFocus = ref(false)
const containerTarget = ref(null)
// 获取到焦点
const onFocusHandler = () => {
  isFocus.value = true
  emits(EMIT_FOCUS)
}
// 失去焦点
const onBlurHandler = () => {
  emits(EMIT_BLUR)
}
// 点击区域外隐藏dropdown
onClickOutside(containerTarget, () => {
  isFocus.value = false
})
</script>

<style lang="scss" scoped>
.slide-enter-active {
  transition: all 0.5s;
}

.slide-leave-active {
  transition: all 0.5s;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateY(40px);
  opacity: 0;
}
</style>
