<template>
  <!-- 一级路由出口 -->
  <div class="h-screen fixed top-0 left-0 w-screen">
    <!-- 二级路由出口 -->
    <m-transition-router-view
      :routerType="$store.getters.routerType"
      mainComponentName="home"
    ></m-transition-router-view>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
