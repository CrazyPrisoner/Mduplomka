<template>
    <div class="row TimaVelikolepniy">
            <div class="input-field col s6">
                <h1 class="h3 mb-3 font-weight-normal">Register</h1>
                <div class="form-group">
                    <label for="username">Username</label>
                    <input placeholder="Placeholder" id="username" type="text" v-model="registerData.first_name" class="validate" name="first_name">
                </div>
                <div class="form-group">
                    <label for="email">Email Address</label>
                    <input type="email" v-model="registerData.email" class="form-control" name="email" placeholder="Enter Email">
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" v-model="registerData.password" class="form-control" name="password" placeholder="Enter Password">
                </div>
                <button class="btn btn-lg btn-primary btn-block" @click="register">Register</button>
                <p>Register / <router-link to="/login">sign in</router-link></p>
          </div>
        </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      registerData: {
        first_name: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    async register () {
      await axios.post('http://127.0.0.1:5000/users/register', this.registerData)
      .then(
        this.$router.push('/login')
      ).catch(err => {
        console.log(err)
        })
    }
  },
  created(){
    if (localStorage.token) {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>
  .TimaVelikolepniy{
    padding: 4em 0;
    .col{
      float: initial;
      margin: 0 auto 0;
    }
  }
</style>