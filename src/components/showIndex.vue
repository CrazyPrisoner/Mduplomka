<template>
  <el-row type="flex" justify="center">
    <el-col :span="20">
      <nav_home></nav_home>
      <banner></banner>
      <Scheduling></Scheduling>
      <hot></hot>
      <foot_contact></foot_contact>
    </el-col>
  </el-row>
</template>

<script>
  import nav_home from '../components/home/nav_home.vue'
  import banner from '../components/home/banner.vue'
  import hot from '../components/home/hot.vue';
  import Scheduling from '../components/home/Scheduling.vue';
  import foot_contact from '../components/home/foot_contact.vue';

  export default {
    name: "showIndex",
    components:{
      nav_home,
      banner,
      hot,
      Scheduling,
      foot_contact
    },
    created() {
      if (!localStorage.token) {
        this.$router.push('/register')
      }
    }
  }
</script>

<style scoped>

</style>
