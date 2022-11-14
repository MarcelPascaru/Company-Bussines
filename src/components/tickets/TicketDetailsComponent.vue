<template>
  <el-descriptions label="Username">
    <el-descriptions-item label="Type">{{ ticket.type }}</el-descriptions-item>
    <el-descriptions-item label="Price">{{ ticket.price }}</el-descriptions-item>
    <el-descriptions-item label="Sale-date">{{ ticket.sales }}</el-descriptions-item>
  </el-descriptions>
</template>

<script>
import { readTicket } from "@/services/tickets.services";

export default {
  name: 'TicketDetails',
  data() {
    return {
      ticket: {}
    }
  },
  mounted() {
    this.loadTicket();
  },
  methods: {
    loadTicket() {
      readTicket(this.$route.params.id)
          .then((response) => {
            this.ticket = response.data;
          });
    }
  }
}
</script>
