<template>
  <div>
    <el-button class="delete- btn" type="primary" @click="dialogFormVisible = true">
      Edit
    </el-button>
    <!-- Update Sponsor Form -->
    <el-dialog title="Update sponsor" :visible.sync="dialogFormVisible" width="30%">
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
        <el-button type="primary" @click="updateSponsor">Update</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import {updateSponsor} from "@/services/sponsors.services";

export default {
  name: "SponsorUpdateComponent",
  props: {
    sponsor: {
      type: Object
    }
  },
  data() {
    return {
      formSponsor: this.sponsor,
      dialogFormVisible: false
    }
  },
  methods: {
    updateSponsor() {
      updateSponsor(this.formSponsor, this.formSponsor.id )
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