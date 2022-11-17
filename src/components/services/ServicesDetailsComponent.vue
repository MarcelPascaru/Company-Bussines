<template>
  <el-descriptions label="Username">
    <el-descriptions-item label="Service Name">{{ service.name }}</el-descriptions-item>
    <el-descriptions-item label="Members">{{ service.members }}</el-descriptions-item>
    <el-descriptions-item label="Costs">{{ service.costs }}</el-descriptions-item>
  </el-descriptions>
</template>

<script>
import { readService } from "@/services/services.services";

export default {
  name: 'ServiceDetails',
  data() {
    return {
      service: {}
    }
  },
  mounted() {
    this.loadService();
  },
  methods: {
    loadService() {
      readService(this.$route.params.id)
          .then((response) => {
            this.service = response.data;
          });
    }
  }
}
</script>
