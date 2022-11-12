<template>
  <div>
    <el-button class="delete- btn" type="primary" @click="dialogFormVisible = true">
      Edit
    </el-button>
    <!-- Update User Form -->
    <el-dialog title="Update user" :visible.sync="dialogFormVisible" width="30%">
      <el-form :model="formUser">
        <el-form-item label="User name">
          <el-input v-model="formUser.name" autocomplete="off"></el-input>
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
        <el-button type="primary" @click="updateUser">Update</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import {updateUser} from "@/services/users.services";

export default {
  name: "UserUpdateComponent",
  props: {
    user: {
      type: Object
    }
  },
  data() {
    return {
      formUser: this.user,
      dialogFormVisible: false
    }
  },
  methods: {
    updateUser() {
      updateUser(this.formUser, this.formUser.id )
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