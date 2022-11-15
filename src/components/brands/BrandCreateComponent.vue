<template>
  <div>
    <el-button type="text" @click="dialogFormVisible = true">Add brand</el-button>

    <!-- Create User Form -->
    <el-dialog title="Create brand" :visible.sync="dialogFormVisible" width="30%">
      <el-form :model="formBrand">
        <el-form-item label="Brand type">
          <el-input v-model="formBrand.type" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="Brand amount">
          <el-input v-model="formBrand.amount" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="Brand sales">
          <el-input v-model="formBrand.sales" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">Cancel</el-button>
        <el-button type="primary" @click="addBrand">Create</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { createBrand } from "@/services/brands.services";

export default {
  name: "BrandCreateComponent",
  data() {
    return {
      formBrand: {},
      dialogFormVisible: false
    }
  },
  methods: {
    addBrand() {
      createBrand(this.formBrand)
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