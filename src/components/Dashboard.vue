<template>
  <div class="container">
    <div class="card card-default">
      <div class="card-header">Dashboard</div>
      <div class="card-body">
        <p>JWT</p>
        <p>JWT</p>
      </div>
    </div>
  </div>
</template>
<script>
import bus from '../bus'
export default {
  created () {
    bus.$emit('token', localStorage.getItem('laravel-jwt-auth'))
  }
}
</script>

<style>
</style>
