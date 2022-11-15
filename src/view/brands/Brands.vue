<template>
  <div>
    <div class="view-title">
      <h1>Brands</h1>
      <brand-create-component></brand-create-component>
    </div>
    <div class="view-content">
      <el-table
          class="table"
          :data="brands"
          v-loading="loading"
          style="width: 100%">
        <el-table-column
            prop="type"
            label="Type">
        </el-table-column>
        <el-table-column
            prop="amount"
            label="Amount">
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
              <router-link :to="{ name: 'BrandDetails', params: { id: scope.row.id }}">
                <el-button class="view-btn" type="primary">
                  View
                </el-button>
              </router-link>
              <brand-update-component :brand="scope.row"></brand-update-component>
              <el-button class="delete-btn" type="danger" @click="deleteBrand(scope.row)">
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
import {readBrands, deleteBrand} from '@/services/brands.services';
import BrandCreateComponent from "@/components/brands/BrandCreateComponent";
import BrandUpdateComponent from "@/components/brands/BrandUpdateComponent";

export default {
  name: 'BrandsView',
  components: {
    BrandCreateComponent,
    BrandUpdateComponent
  },
  data() {
    return {
      loading: true,
      brands: [],
    }
  },
  mounted() {
    this.search();
  },
  methods: {
    search() {
      readBrands()
          .then((response) => {
            this.brands = response.data;
            this.loading = false;
          })
    },
    deleteBrand(brand) {
      this.$confirm(
          `Are you sure you want to delete brand ${brand.id}?`,
          {
            title: 'Delete brand',
            confirmButtonText: "OK",
            cancelButtonText: "Cancel",
            type: "warning"
          }
      ).then(() => {
        deleteBrand(brand.id)
            .then(() => {
              this.$notify({
                title: 'Success',
                type: 'success',
                message: `The ${brand.id} successfully deleted!`
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
