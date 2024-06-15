<template>
  <div class="bg-white dark:bg-zinc-900 sticky top-0 left-0 z-10">
    <ul
      ref="ulTarget"
      class="relative flex overflow-x-auto p-1 text-xs text-zinc-600 overflow-hidden"
    >
      <!-- 滑块 -->
      <li
        ref="sliderTarget"
        class="absolute h-[22px] bg-zinc-900 dark:bg-zinc-800 rounded-lg duration-200"
        :style="sliderStyle"
      ></li>
      <!-- 汉堡按钮 -->
      <li
        @click="onShowPopup"
        class="z-20 fixed top-0 right-[-1px] h-4 px-1 flex items-center bg-white dark:bg-zinc-900 shadow-l-white dark:shadow-l-zinc"
      >
        <m-svg-icon class="w-1.5 h-1.5" name="hamburger"></m-svg-icon>
      </li>
      <!-- category item -->
      <li
        v-for="(item, index) in $store.getters.categorys"
        :ref="setItemRef"
        @click="onItemClick(index)"
        :key="item.id"
        class="shrink-0 px-1.5 py-0.5 z-10 duration-200 last:mr-4"
        :class="{
          'text-zinc-100 ': currentCategoryIndex === index
        }"
      >
        {{ item.name }}
      </li>
    </ul>
    <m-popup v-model="isVisible">
      <menu-vue @onItemClick="onItemClick"></menu-vue>
    </m-popup>
  </div>
</template>

<script setup>
import { ref, watch, onBeforeUpdate } from 'vue'
import { useScroll } from '@vueuse/core'
import MenuVue from '@/views/main/components/menu/index.vue'

// 滑块
const sliderStyle = ref({
  transform: 'translateX(0px)',
  width: '60px'
})
// 选中的 item 下标
const currentCategoryIndex = ref(0)
// 获取填充的所有 item 元素
let itemRefs = []
const setItemRef = (el) => {
  if (el) {
    itemRefs.push(el)
  }
}
onBeforeUpdate(() => {
  itemRefs = []
})
// 获取 ul 元素，以计算偏移位置
const ulTarget = ref(null)
const { x: ulScrollLeft } = useScroll(ulTarget)
watch(currentCategoryIndex, (val) => {
  // 获取选中元素的 left、width
  const { left, width } = itemRefs[val].getBoundingClientRect()
  // 为 sliderStyle 设置属性
  sliderStyle.value = {
    // ul 横向滚动位置 + 当前元素的 left 偏移量
    transform: `translateX(${ulScrollLeft.value + left - 10 + 'px'})`,
    width: width + 'px'
  }
})
// item 点击事件
const onItemClick = (index) => {
  currentCategoryIndex.value = index
  isVisible.value = false
}
// 控制popup展示
const isVisible = ref(false)
const onShowPopup = () => {
  isVisible.value = true
}
</script>
