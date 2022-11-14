<template>
  <div>
    <div class="view-title">
      <h1>Users</h1>
      <user-create-component></user-create-component>
    </div>
    <div class="view-content">
      <el-table
          class="table"
          :data="users"
          v-loading="loading"
          style="width: 100%">
        <el-table-column
            prop="name"
            label="Name">
        </el-table-column>
        <el-table-column
            prop="email"
            label="Email">
        </el-table-column>
        <el-table-column
            prop="age"
            label="Age">
        </el-table-column>
        <el-table-column
            prop="designation"
            label="Designation">
        </el-table-column>
        <el-table-column
            label="Actions"
            width="250">
          <template slot-scope="scope">
            <div class="d-flex">
              <router-link :to="{ name: 'UserDetails', params: { id: scope.row.id }}">
                <el-button class="view-btn" type="primary">
                  View
                </el-button>
              </router-link>
              <user-update-component :user="scope.row"></user-update-component>
              <el-button class="delete-btn" type="danger" @click="deleteUser(scope.row)">
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
import {readUsers, deleteUser} from '@/services/users.services';
import UserCreateComponent from "@/components/users/UserCreateComponent";
import UserUpdateComponent from "@/components/users/UserUpdateComponent";

export default {
  name: 'UsersView',
  components: {
    UserCreateComponent,
    UserUpdateComponent
  },
  data() {
    return {
      loading: true,
      users: [],
    }
  },
  mounted() {
    this.search();
  },
  methods: {
    search() {
      readUsers()
          .then((response) => {
            this.users = response.data;
            this.loading = false;
          })
    },
    deleteUser(user) {
      this.$confirm(
          `Are you sure you want to delete user ${user.name}?`,
          {
            title: 'Delete user',
            confirmButtonText: "OK",
            cancelButtonText: "Cancel",
            type: "warning"
          }
      ).then(() => {
        deleteUser(user.id)
            .then(() => {
              this.$notify({
                title: 'Success',
                type: 'success',
                message: `The ${user.name} successfully deleted!`
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
