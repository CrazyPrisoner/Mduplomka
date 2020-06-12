<template>
  <nav>
    <div class="nav-wrapper">
      <a href="#!" class="brand-logo">Logo</a>
      <ul class="right hide-on-med-and-down">
        <li><a href="/register">Register</a></li>
        <li><a href="/course/1">Course</a></li>
        <li @click="logout"><a class="material-icons">exit_to_app</a></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {   
  methods:{
      logout(){
      try{
        localStorage.clear()
        this.$router.push('/login')
      }
      catch(err){
        console.log(err)
      }

    }
  }
}
</script>

<style lang="scss" scoped>
  .nav-wrapper{
    background-color: #31B540;

  }
  .right{
      padding-right: 1rem;
  }
  .brand-logo {
    margin-left: 1.5rem;;
  }

</style>