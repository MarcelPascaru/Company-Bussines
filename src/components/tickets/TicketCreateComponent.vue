<template>
  <div>
    <el-button type="text" @click="dialogFormVisible = true">Add ticket</el-button>

    <!-- Create Ticket Form -->
    <el-dialog title="Create ticket" :visible.sync="dialogFormVisible" width="30%">
      <el-form :model="formTicket">
        <el-form-item label="Ticket type">
          <el-input v-model="formTicket.type" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="Ticket price">
          <el-input v-model="formTicket.price" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="Ticket sales">
          <el-input v-model="formTicket.sales" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">Cancel</el-button>
        <el-button type="primary" @click="addTicket">Create</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { createTicket } from "@/services/tickets.services";

export default {
  name: "TicketCreateComponent",
  data() {
    return {
      formTicket: {},
      dialogFormVisible: false
    }
  },
  methods: {
    addTicket() {
      createTicket(this.formTicket)
          .then((response) => {
            this.$notify({
              title: 'Success',
              type: 'success',
              message: `The ${response.data.id} successfully created!`
            });

            this.$parent.search();
          })
          .catch(e => {
            this.$notify.error({
              title: 'Error',
              message: e
            });
          })
          .finally(() => {
            this.dialogFormVisible = false;
          });
    },
  }
}
</script>