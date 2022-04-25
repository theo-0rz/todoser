<template>
  <div class="todo-layout">
    <el-container>
      <el-header>
          <Header></Header>
      </el-header>
      <el-container>
        <el-aside width="400px">Aside</el-aside>
        <el-main>
            <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import Header from './components/Head.vue'

</script>

<style lang="scss" scoped>
.todo-layout {
    height: 100%;
    .el-container{
        height: 100%;
    }
    .el-container .el-container {
        flex-direction: row-reverse;
    }
}
</style>