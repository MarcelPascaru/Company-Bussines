<template>
  <div>
    <el-button class="delete- btn" type="primary" @click="dialogFormVisible = true">
      Edit
    </el-button>
    <!-- Update Service Form -->
    <el-dialog title="Update service" :visible.sync="dialogFormVisible" width="30%">
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
        <el-button type="primary" @click="updateService">Update</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import {updateService} from "@/services/services.services";

export default {
  name: "ServiceUpdateComponent",
  props: {
    service: {
      type: Object
    }
  },
  data() {
    return {
      formService: this.service,
      dialogFormVisible: false
    }
  },
  methods: {
    updateService() {
      updateService(this.formService, this.formService.id )
          .then((response) => {
            this.$notify({
              title: 'Success',
              type: 'success',
              message: `The ${response.data.name} successfully updated!`
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