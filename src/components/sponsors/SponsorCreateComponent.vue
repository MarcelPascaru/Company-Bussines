<template>
  <div>
    <el-button type="text" @click="dialogFormVisible = true">Add sponsor</el-button>

    <!-- Create User Form -->
    <el-dialog title="Create sponsor" :visible.sync="dialogFormVisible" width="30%">
      <el-form :model="formSponsor">
        <el-form-item label="Name">
          <el-input v-model="formSponsor.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="Type">
          <el-input v-model="formSponsor.type" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="Budget">
          <el-input v-model="formSponsor.budget" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="Income">
          <el-input v-model="formSponsor.income" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">Cancel</el-button>
        <el-button type="primary" @click="addSponsor">Create</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { createSponsor } from "@/services/sponsors.services";

export default {
  name: "SponsorCreateComponent",
  data() {
    return {
      formSponsor: {},
      dialogFormVisible: false
    }
  },
  methods: {
    addSponsor() {
      createSponsor(this.formSponsor)
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