<template>
  <div>
    <el-button type="text" @click="dialogFormVisible = true">Add service</el-button>

    <!-- Create Service Form -->
    <el-dialog title="Create service" :visible.sync="dialogFormVisible" width="30%">
      <el-form :model="formService">
        <el-form-item label="Service name">
          <el-input v-model="formService.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="Service members">
          <el-input v-model="formService.members" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="Service costs">
          <el-input v-model="formService.costs" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">Cancel</el-button>
        <el-button type="primary" @click="addService">Create</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { createService } from "@/services/services.services";

export default {
  name: "ServiceCreateComponent",
  data() {
    return {
      formService: {},
      dialogFormVisible: false
    }
  },
  methods: {
    addService() {
      createService(this.formService)
          .then((response) => {
            this.$notify({
              title: 'Success',
              type: 'success',
              message: `The ${response.data.name} successfully created!`
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