<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <router-link to="/" class="text-decoration-none logo-style">JWT</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarJWT"
        aria-controls="navbarJWT"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarJWT">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">
              <router-link to="/" class="text-decoration-none home-style">Home</router-link>
            </a>
          </li>
        </ul>
        <div class="form-inline my-2 my-lg-0">
          <ul class="navbar-nav mr-auto" v-if="$auth.check(1)">
            <li class="nav-item" v-for="(route, key) in routes.user" v-bind:key="route.path">
              <router-link :to="{ name : route.path }" :key="key" class="nav-link">{{route.name}}</router-link>
            </li>
          </ul>
          <ul class="navbar-nav mr-auto" v-if="$auth.check(2)">
            <li class="nav-item" v-for="(route, key) in routes.user" v-bind:key="route.path">
              <router-link :to="{ name : route.path }" :key="key" class="nav-link">{{route.name}}</router-link>
            </li>
          </ul>
          <ul class="navbar-nav ml-auto" v-if="!$auth.check()">
            <li class="nav-item" v-for="(route, key) in routes.unlogged" v-bind:key="route.path">
              <router-link :to="{ name : route.path }" :key="key" class="nav-link">{{route.name}}</router-link>
            </li>
          </ul>
          <ul class="navbar-nav ml-auto" v-if="$auth.check()">
            <li class="nav-item">
              <a
                class="nav-link"
                href="#"
                @click.prevent="$auth.logout({
                  makeRequest: true,
                  params: {
                    'token': token
                  },
                  redirect: '/',
                  success: function () {
                    this.token = null
                  },
                })"
              >Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import bus from '../bus'
export default {
  data () {
    return {
      routes: {
        // UNLOGGED
        unlogged: [{name: 'Register', path: 'register'}, {name: 'Login', path: 'login'}],
        user: [{name: 'Dashboard', path: 'dashboard'}],
        admin: [{name: 'Dashboard', path: 'admin.dashboard'}]
      },
      token: localStorage.getItem('laravel-jwt-auth')
    }
  },
  created () {
    bus.$on('token', (data) => {
      this.token = data
    })
  }
}
</script>

<style>
.home-style,
.logo-style {
  color: black !important;
}
</style>
