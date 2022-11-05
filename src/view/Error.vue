<template>
  <div class="error">
    <div class="header">
      <span class="error-title">Dashboard</span>
    </div>

    <el-card class="error-content">
      <h1 class="code">{{ code }}</h1>
      <h2 class="message">{{ errorMessage }}</h2>

    </el-card>
  </div>
</template>

<script>
export default {
  name: "ErrorView",
  data() {
    return {
      errors: {
        404: "Page not found",
        403: `Forbidden! You don't have permission to access this page`,
        500: "Internal server error",
      },
    };
  },
  props: {
    code: {
      type: Number,
      default: 404,
    },
  },
  computed: {
    errorMessage: function () {
      return this.errors[this.code];
    },
  },
};
</script>

<style>

.error-content{
    display: flex;
    align-items: center;
    justify-content: center;
}

.code{
    text-align: center;
    font-size: 86px;
}

.message{
    text-align: center;
    margin: 0;
    font-size: 64px;
}

.header{
    text-align: center;
    background: #000;
    padding: 1rem;
    color: #fff;
}

</style>
