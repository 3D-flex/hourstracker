<template>
  <div>
    Vitajte {{user.first_name}}
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  data() {
    return{
      user: null
    }
  },
  created() {
    this.user = localStorage.getItem("user");

    if(!this.user)
      this.$router.push({name: "Login"});
  }
}
</script>

<style scoped>

</style>