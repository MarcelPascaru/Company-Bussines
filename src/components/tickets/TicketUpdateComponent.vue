<template>
  <div>
    <el-button class="delete- btn" type="primary" @click="dialogFormVisible = true">
      Edit
    </el-button>
    <!-- Update User Form -->
    <el-dialog title="Update ticket" :visible.sync="dialogFormVisible" width="30%">
      <el-form :model="formTicket">
        <el-form-item label="Ticket type">
          <el-input v-model="formTicket.type" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="Ticket price">
          <el-input v-model="formTicket.price" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="User designation">
          <el-input v-model="formTicket.sale_date" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">Cancel</el-button>
        <el-button type="primary" @click="updateTicket">Update</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import {updateTicket} from "@/services/tickets.services";

export default {
  name: "TicketUpdateComponent",
  props: {
    ticket: {
      type: Object
    }
  },
  data() {
    return {
      formTicket: this.ticket,
      dialogFormVisible: false
    }
  },
  methods: {
    updateTicket() {
      updateTicket(this.formTicket, this.formTicket.id )
          .then((response) => {
            this.$notify({
              title: 'Success',
              type: 'success',
              message: `The ${response.data.id} successfully updated!`
            });
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