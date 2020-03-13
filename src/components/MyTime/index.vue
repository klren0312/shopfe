<template>
  <div class="my-time">
    <span class="num" :style="{background: textBg}">{{current.days}}</span> 天
    <span class="num" :style="{background: textBg}">{{current.hours}}</span> 时
    <span class="num" :style="{background: textBg}">{{current.minutes}}</span> 分
    <span class="num" :style="{background: textBg}">{{current.seconds}}</span> 秒
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class MyTime extends Vue {
  @Prop(Object) private current: object = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  }

  @Prop(String) private textBg!: string
}
</script>

<style lang="scss" scope>
  .my-time {
    font-size: 12px;
    .num {
      padding: 4px;
      color: #fff;
    }
  }
</style>
