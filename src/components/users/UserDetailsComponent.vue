<template>
  <el-descriptions label="Username">
    <el-descriptions-item label="Username">{{ user.name }}</el-descriptions-item>
    <el-descriptions-item label="Email">{{ user.email }}</el-descriptions-item>
    <el-descriptions-item label="Age">{{ user.age }}</el-descriptions-item>
    <el-descriptions-item label="Designation">{{ user.designation }}</el-descriptions-item>
  </el-descriptions>
</template>

<script>
import { readUser } from "@/services/users.services";

export default {
  name: 'UserDetails',
  data() {
    return {
      user: {}
    }
  },
  mounted() {
    this.loadUser();
  },
  methods: {
    loadUser() {
      readUser(this.$route.params.id)
          .then((response) => {
            this.user = response.data;
          });
    }
  }
}
</script>
