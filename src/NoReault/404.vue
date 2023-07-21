<template>
  <el-result icon="error" title="页面失踪了" sub-title="请前往正确的页面">
    <template #extra>
      <el-button type="primary" @click="$router.back()">返回</el-button>
    </template>
  </el-result>
</template>