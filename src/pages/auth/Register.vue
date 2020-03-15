<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-6">
        <div class="card card-default">
          <div class="card-header">Register</div>
          <div class="card-body">
            <form class="form-signin" @submit.prevent="register">
              <div class="form-group">
                <input
                  type="text"
                  id="name"
                  class="form-control"
                  placeholder="Name"
                  v-model="name"
                  required
                  autofocus
                />
                <label for="inputName">Name</label>
              </div>
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
              <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
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
      name: null,
      email: null,
      password: null
    }
  },
  methods: {
    register () {
      this.$auth.register({
        params: {
          name: this.name,
          email: this.email,
          password: this.password
        }
      })
    }
  }
}
</script>

<style>
</style>
