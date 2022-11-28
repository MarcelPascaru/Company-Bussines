<template>
    <div class="sidebar">
        <el-menu
            default-active="1"
            class="el-menu-vertical-demo"
            background-color="transparent"
            active-text-color="#FFCF56"
            :router="true"
        >
            <h1 class="sidebar-title">Dashboard</h1>

            <el-menu-item class="sidebar-item" index="1" :route="{ name: 'ExampleComponent' }">
                <div class="name-box">
                    <i class="icon fa-solid fa-chart-simple"></i>
                    <span>Statistic</span>
                </div>
            </el-menu-item>
            <el-menu-item  class="sidebar-item" index="2" :route="{ name: 'UsersView' }">
                <div class="name-box">
                    <i class="icon fa-solid fa-users"></i>
                    <span>Users</span>
                </div>
            </el-menu-item>
            <el-menu-item class="sidebar-item" index="3" :route="{name: 'TicketsView'}">
                <div class="name-box">
                    <i class="icon fa-solid fa-ticket"></i>
                    <span>Tickets</span>
                </div>
            </el-menu-item>
            <el-menu-item class="sidebar-item" index="4" :route="{name: 'BrandsComponent'}">
                <div class="name-box">
                    <i class="icon fa-solid fa-copyright"></i>
                    <span>Brands</span>
                </div>
            </el-menu-item>
            <el-menu-item class="sidebar-item" index="5" :route="{name: 'SponsorsComponent'}">
                <div class="name-box">
                    <i class="icon fa-solid fa-money-bill-trend-up"></i>
                    <span>Sponsors</span>
                </div>
            </el-menu-item>
            <el-menu-item class="sidebar-item" index="7" :route="{name: 'ServicesComponent'}">
                <div class="name-box">
                    <i class="icon fa-solid fa-screwdriver-wrench"></i>
                    <span>Services</span>
                </div>
            </el-menu-item>
        </el-menu>
    </div>
</template>
<script>
export default {
    name: "SidebarView",
    components: {},

    methods: {
        logout() {
            this.$store.dispatch('auth/logout').then(() => {
                this.$router.push({name: 'Home'});
            })
        }
    }
};
</script>

<style lang="scss" scoped>
.sidebar {
    background-color: #3A3845;
    height: calc(100vh - 40px);
    min-height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;

    .el-menu-vertical-demo {
        border-right: 0;
    }

    .sidebar-item{
        background: #826F66;
        border-radius: 1rem;
    }

    .sidebar-item:hover{
        transform: translateY(-10px);
        transition: 1s;
    }

    .sidebar-title{
        color: #F18F01;
        font-size: 26px;
        font-weight: 700;
    }

    .name-box{
        display: flex;
        align-items: center;
        color: #EDEAD0;
        font-size: 16px;
    }

    .name-box:hover{
        color: black;
    }

    .fa-solid{
        margin-right: 0.3rem;
        font-size: 20px;
    }


}
</style>
