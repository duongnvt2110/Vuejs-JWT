<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-6">
        <div class="card card-default">
          <div class="card-header">Login</div>
          <div class="card-body">
            <form class="form-signin" autocomplete="off" @submit.prevent="login" method="post">
              <div class="form-group">
                <input
                  type="email"
                  id="email"
                  class="form-control"
                  placeholder="Email address"
                  v-model="email"
                  required
                  autofocus
                />
                <label for="inputEmail">Email address</label>
              </div>

              <div class="form-group">
                <input
                  type="password"
                  id="password"
                  class="form-control"
                  placeholder="Password"
                  v-model="password"
                  required
                />
                <label for="inputPassword">Password</label>
              </div>
              <button type="submit" class="btn btn-lg btn-primary btn-block">Sign in</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      email: null,
      password: null,
      success: false,
      has_error: false,
      error: ''
    }
  },
  mounted () {
    //
  },
  methods: {
    login () {
      this.$auth.login({
        params: {
          email: this.email,
          password: this.password
        }, // data: {} in Axios
        success: function () {},
        error: function () {},
        rememberMe: true,
        redirect: '/Dashboard',
        fetchUser: true
      })
    }
  }
}
</script>

<style>
</style>
