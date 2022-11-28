<template>
  <div>
    <div class="view-title">
      <h1>Tickets</h1>
      <ticket-create-component></ticket-create-component>
    </div>
    <div class="view-content">
      <el-table
          class="table"
          :data="tickets"
          v-loading="loading"
          style="width: 100%">
        <el-table-column
            prop="type"
            label="Type">
        </el-table-column>
        <el-table-column
            prop="price"
            label="Price($)">
        </el-table-column>
        <el-table-column
            prop="sale_date"
            label="Sale_date">
        </el-table-column>
        <el-table-column
            prop="sales"
            label="Sales">
        </el-table-column>
        <el-table-column
            label="Actions"
            width="250">
          <template slot-scope="scope">
            <div class="d-flex">
              <router-link :to="{ name: 'TicketDetails', params: { id: scope.row.id }}">
                <el-button class="view-btn" type="primary">
                  View
                </el-button>
              </router-link>
              <ticket-update-component :ticket="scope.row"></ticket-update-component>
              <el-button class="delete-btn" type="danger" @click="deleteTicket(scope.row)">
                Delete
              </el-button>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import {readTickets, deleteTicket} from '@/services/tickets.services';
import TicketCreateComponent from "@/components/tickets/TicketCreateComponent";
import TicketUpdateComponent from "@/components/tickets/TicketUpdateComponent";

export default {
  name: 'TicketsView',
  components: {
    TicketCreateComponent,
    TicketUpdateComponent
  },
  data() {
    return {
      loading: true,
      tickets: [],
    }
  },
  mounted() {
    this.search();
  },
  methods: {
    search() {
      readTickets()
          .then((response) => {
            this.tickets = response.data;
            this.loading = false;
          })
    },
    deleteTicket(ticket) {
      this.$confirm(
          `Are you sure you want to delete ticket ${ticket.id}?`,
          {
            title: 'Delete ticket',
            confirmButtonText: "OK",
            cancelButtonText: "Cancel",
            type: "warning"
          }
      ).then(() => {
        deleteTicket(ticket.id)
            .then(() => {
              this.$notify({
                title: 'Success',
                type: 'success',
                message: `The ${ticket.id} successfully deleted!`
              });
              this.search();
            })
            .catch(e => {
              this.$notify.error({
                title: 'Error',
                message: e
              });
            });
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.d-flex {
  display: flex;
}
</style>
