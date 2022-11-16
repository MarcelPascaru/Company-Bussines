<template>
  <el-descriptions label="Username">
    <el-descriptions-item label="Sponsor name">{{ sponsor.name }}</el-descriptions-item>
    <el-descriptions-item label="Type">{{ sponsor.type }}</el-descriptions-item>
    <el-descriptions-item label="Budget">{{ sponsor.budget }}</el-descriptions-item>
    <el-descriptions-item label="Income">{{ sponsor.income }}</el-descriptions-item>
  </el-descriptions>
</template>

<script>
import { readSponsor } from "@/services/sponsors.services";

export default {
  name: 'SponsorDetails',
  data() {
    return {
      sponsor: {}
    }
  },
  mounted() {
    this.loadSponsor();
  },
  methods: {
    loadSponsor() {
      readSponsor(this.$route.params.id)
          .then((response) => {
            this.sponsor = response.data;
          });
    }
  }
}
</script>
