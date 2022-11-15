<template>
  <div>
    <el-button class="delete- btn" type="primary" @click="dialogFormVisible = true">
      Edit
    </el-button>
    <!-- Update Brand Form -->
    <el-dialog title="Update brand" :visible.sync="dialogFormVisible" width="30%">
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
        <el-button type="primary" @click="updateBrand">Update</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import {updateBrand} from "@/services/brands.services";

export default {
  name: "BrandUpdateComponent",
  props: {
    brand: {
      type: Object
    }
  },
  data() {
    return {
      formBrand: this.brand,
      dialogFormVisible: false
    }
  },
  methods: {
    updateBrand() {
      updateBrand(this.formBrand, this.formBrand.id )
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