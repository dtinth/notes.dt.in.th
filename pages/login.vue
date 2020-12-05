<template>
  <div>
    <p>user: {{ $auth.user }}</p>
    <p>
      <button @click="$auth.loginWith('auth0')">login</button>
      <button @click="$auth.logout()">logout</button>
    </p>
  </div>
</template>

<script>
export default {
  components: {},
}
</script>

