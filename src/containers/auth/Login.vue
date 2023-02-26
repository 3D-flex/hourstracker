<template>
  <div>
    <form>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" >
        <div v-if="!v$.user.email.required">Email je povinný</div>
        <div v-if="!v$.user.email.email">Email je povinný</div>
      </div>
      <div class="mb-3">
        <label for="pass" class="form-label">Password</label>
        <input type="password" class="form-control" id="pass">
      </div>
      <button type="submit" class="btn btn-primary" @click="register">Submit</button>
    </form>
  </div>
</template>

<script>
import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'

import {mapActions} from "vuex";

export default {
  name: "Login",
  data() {
    return {
      v$: useVuelidate(),

      payload: {
        email: null,
        password: null,
        passwordAgain: null
      }
    }
  },
  validations() {
    return {
      user: {
        email: {required, email},
        password: {required},
      }
    }
  },
  methods: {
    ...mapActions({
      registerUser: "user/register"
    }),

    async register(e) {
      e.preventDefault();

      if(!this.v$.errors) {
        delete this.payload.passwordAgain;
        await this.registerUser(this.payload);
      }
    }
  }
}
</script>

<style scoped>

</style>