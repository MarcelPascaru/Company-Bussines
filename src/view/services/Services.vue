<template>
  <div>
    <div class="view-title">
      <h1>Services</h1>
      <service-create-component></service-create-component>
    </div>
    <div class="view-content">
      <el-table
          class="table"
          :data="services"
          v-loading="loading"
          style="width: 100%">
        <el-table-column
            prop="name"
            label="Name">
        </el-table-column>
        <el-table-column
            prop="members"
            label="Members">
        </el-table-column>
        <el-table-column
            prop="costs"
            label="Costs">
        </el-table-column>
        <el-table-column
            label="Actions"
            width="250">
          <template slot-scope="scope">
            <div class="d-flex">
              <router-link :to="{ name: 'ServiceDetails', params: { id: scope.row.id }}">
                <el-button class="view-btn" type="primary">
                  View
                </el-button>
              </router-link>
              <service-update-component :service="scope.row"></service-update-component>
              <el-button class="delete-btn" type="danger" @click="deleteService(scope.row)">
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
import {readServices, deleteService} from '@/services/services.services';
import ServiceCreateComponent from "@/components/services/ServicesCreateComponent";
import ServiceUpdateComponent from "@/components/services/ServicesUpdateComponent";

export default {
  name: 'ServicesView',
  components: {
    ServiceCreateComponent,
    ServiceUpdateComponent
  },
  data() {
    return {
      loading: true,
      services: [],
    }
  },
  mounted() {
    this.search();
  },
  methods: {
    search() {
      readServices()
          .then((response) => {
            this.services = response.data;
            this.loading = false;
          })
    },
    deleteService(service) {
      this.$confirm(
          `Are you sure you want to delete user ${service.name}?`,
          {
            title: 'Delete service',
            confirmButtonText: "OK",
            cancelButtonText: "Cancel",
            type: "warning"
          }
      ).then(() => {
        deleteService(service.id)
            .then(() => {
              this.$notify({
                title: 'Success',
                type: 'success',
                message: `The ${service.name} successfully deleted!`
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
