<template>
  <div>
    <div class="view-title">
      <h1>Sponsors</h1>
      <sponsor-create-component></sponsor-create-component>
    </div>
    <div class="view-content">
      <el-table
          class="table"
          :data="sponsor"
          v-loading="loading"
          style="width: 100%">
        <el-table-column
            prop="name"
            label="Name">
        </el-table-column>
        <el-table-column
            prop="type"
            label="Type">
        </el-table-column>
        <el-table-column
            prop="budget"
            label="Budget($)">
        </el-table-column>
        <el-table-column
            prop="income"
            label="Income(%)">
        </el-table-column>
        <el-table-column
            label="Actions"
            width="250">
          <template slot-scope="scope">
            <div class="d-flex">
              <router-link :to="{ name: 'SponsorDetails', params: { id: scope.row.id }}">
                <el-button class="view-btn" type="primary">
                  View
                </el-button>
              </router-link>
              <sponsor-update-component :sponsor="scope.row"></sponsor-update-component>
              <el-button class="delete-btn" type="danger" @click="deleteSponsor(scope.row)">
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
import {readSponsors, deleteSponsor} from '@/services/sponsors.services';
import SponsorCreateComponent from "@/components/sponsors/SponsorCreateComponent";
import SponsorUpdateComponent from "@/components/sponsors/SponsorUpdateComponent";

export default {
  name: 'SponsorView',
  components: {
    SponsorCreateComponent,
    SponsorUpdateComponent
  },
  data() {
    return {
      loading: true,
      sponsor: [],
    }
  },
  mounted() {
    this.search();
  },
  methods: {
    search() {
      readSponsors()
          .then((response) => {
            this.sponsor = response.data;
            this.loading = false;
          })
    },
    deleteSponsor(sponsor) {
      this.$confirm(
          `Are you sure you want to delete sponsor ${sponsor.name}?`,
          {
            title: 'Delete sponsor',
            confirmButtonText: "OK",
            cancelButtonText: "Cancel",
            type: "warning"
          }
      ).then(() => {
        deleteSponsor(sponsor.id)
            .then(() => {
              this.$notify({
                title: 'Success',
                type: 'success',
                message: `The ${sponsor.name} successfully deleted!`
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
