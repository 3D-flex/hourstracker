<template>
  <div>
    Vitajte {{user.first_name}}
  </div>
</template>

<script>
import user from "@/store/modules/user";

export default {
  name: "Dashboard",
  data() {
    return{
      user: null
    }
  },
  created() {
    this.user = JSON.parse(localStorage.getItem("user"));

    console.log(user)

    if(!this.user)
      this.$router.push({name: "Login"});
  }
}
</script>

<style scoped>

</style>