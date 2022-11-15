<template>
  <el-descriptions label="Username">
    <el-descriptions-item label="Type">{{ brand.type }}</el-descriptions-item>
    <el-descriptions-item label="Amount">{{ brand.amount }}</el-descriptions-item>
    <el-descriptions-item label="Sales">{{ brand.sales }}</el-descriptions-item>
  </el-descriptions>
</template>

<script>
import { readBrand } from "@/services/brands.services";

export default {
  name: 'BrandDetails',
  data() {
    return {
      brand: {}
    }
  },
  mounted() {
    this.loadBrand();
  },
  methods: {
    loadBrand() {
      readBrand(this.$route.params.id)
          .then((response) => {
            this.brand = response.data;
          });
    }
  }
}
</script>
