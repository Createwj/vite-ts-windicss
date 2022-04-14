<template>
  <h3>index</h3>
  <p></p>
  <div class="bind">
    111
    <p class="bind-title" alt="123">123</p>
    <p class="bind-content">321</p>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.bind {
  color: red;
  &-title {
    color: black;
  }
  &-content {
    color: blue;
  }
}
</style>
