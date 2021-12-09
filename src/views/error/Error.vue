<template>
  <div style="display: table;height: 100%;width: 80%;margin: 0 auto;">
    <div
      style="display: table-cell;height: 100%;vertical-align: middle;width: 50%;padding: 0 30px;"
    >
      <div style="display: inline-block;">
        <h2 class="error-subtitle">服务异常！！！请联系管理员</h2>
        <el-button type="primary" @click="$router.go(-1)">返回</el-button>
      </div>
    </div>
    <div
      style="display: table-cell;height: 100%;vertical-align: middle;width: 50%;padding: 0 30px;"
    >
      <img src="../../assets/images/error/4000.png" alt="error" style="width: 642px;height:436px" />
    </div>
  </div>
</template>

<script>

export default {
  name: 'errorpage'
}
</script>

<style>
</style>