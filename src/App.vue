<template>
  <div class="app">
    <!-- <img src="static/img/title.png" width="100%" style="margin-bottom: 12px;"> -->
    <div class="header-nav">
      <div class="header-nav-item" :class="{'header-nav-item-select': curNav === 'home'}"
        @click="gotoHome()">首页</div>
      <div class="header-nav-item" :class="{'header-nav-item-select': curNav === 'dimensions'}"
        @click="gotoDimension()">知识库</div>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      curNav: 'home'
    }
  },
  methods: {
    gotoHome() {
      this.curNav = 'home'
    },
    gotoDimension() {
      this.curNav = 'dimensions'
    }
  },
}
</script>

<style lang="less" scoped>
.app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.header-nav {
  display: flex;
  position: absolute;
  top: 0;
  right: 28px;
  color: #fff;
  height: 60px;
  font-size: 1.5rem;
  font-weight:500;
  &-item {
    padding: 20px 16px 4px;
    cursor: pointer;
    &:hover {
      border-bottom: 4px solid fade(#119aff, 90%);
      background-color: fade(#00388a, 90%);
    }
    &-select {
      border-bottom: 4px solid #119aff;
      background-color: #00388a;
    }
  }
}
</style>
