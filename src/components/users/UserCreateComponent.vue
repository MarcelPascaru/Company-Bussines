<template>
  <div>
    <el-button type="text" @click="dialogFormVisible = true">Add user</el-button>

    <!-- Create User Form -->
    <el-dialog title="Create user" :visible.sync="dialogFormVisible" width="30%">
      <el-form :model="formUser">
        <el-form-item label="User name">
          <el-input v-model="formUser.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="User email">
          <el-input v-model="formUser.email" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="User age">
          <el-input v-model="formUser.age" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="User designation">
          <el-input v-model="formUser.designation" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">Cancel</el-button>
        <el-button type="primary" @click="addUser">Create</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { createUser } from "@/services/users.services";

export default {
  name: "UserCreateComponent",
  data() {
    return {
      formUser: {},
      dialogFormVisible: false
    }
  },
  methods: {
    addUser() {
      createUser(this.formUser)
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