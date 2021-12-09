<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <div class="ht-not-found not-found-default">
          <div class="content">
            <img src="../../assets/images/error/50002.png" alt="404 image" width="545" height="402" />
            <h2>噢！找不到页面。</h2>
            <el-button type="primary" @click="$router.go(-1)">返回</el-button>
          </div>
          <div id="clouds">
            <div class="cloud cloud-1"></div>
            <div class="cloud cloud-2"></div>
            <div class="cloud cloud-3"></div>
            <div class="cloud cloud-4"></div>
            <div class="cloud cloud-5"></div>
            <div class="cloud cloud-6"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'notfound'

}
</script>

<style lang="less" scoped>
.content {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 120px;
}
</style>>

