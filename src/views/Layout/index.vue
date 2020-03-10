<template>
  <div>
    <div class="main-content">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Layout',
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>
<style lang="scss">
  .main-content {
    min-height: 100vh;
  }
</style>
