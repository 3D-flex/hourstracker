<template>
  <div>
    <form>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Meno zamestnanca</label>
        <input type="userName" v-model="payload.name" class="form-control" id="name">
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input type="email" v-model="payload.email" class="form-control" id="exampleInputEmail1">
      </div>
      <div class="mb-3">
        <label for="pass" class="form-label">Password</label>
        <p>*Heslo musí obsahovať aspoň 8 znakov a musí obsahovať jedno písmeno a aspoň jedno číslo*</p>
        <input type="password" v-model="payload.password" class="form-control" id="pass">
      </div>
      <div class="mb-3">
        <label for="pass1" class="form-label">Password again</label>
        <input type="password" v-model="payload.passwordAgain" class="form-control" id="pass1">
      </div>
      <button type="submit" class="btn btn-primary" @click="register">Submit</button>
    </form>
  </div>
</template>

<script>
import firebase from "@/firebase"
import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth';

export default {
  name: "Register",
  data() {
    return {
      payload: {
        name: null,
        email: null,
        password: null,
        passwordAgain: null
      },

      user: null
    }
  },
  methods: {
    async register(e) {
      e.preventDefault();
      const auth = getAuth(firebase)

      if (this.isFormValid)
        createUserWithEmailAndPassword(auth, this.payload.email, this.payload.password)
            .then((userCredential) => {
              // Signed in
              this.user = userCredential.user;
              this.user.displayName = this.payload.name;
              localStorage.setItem("user", JSON.stringify(this.user));

              console.log(this.user);

              this.$router.push({name: "Dashboard"});
            })
            .catch(e => {
              console.log(e.message);
            });
    }
  },
  computed: {
    isPasswordStrong() {
      const regex = new RegExp("^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$");
      return regex.test(this.payload.password)
    },
    isFormValid() {
      if(!this.payload.email) {
        alert("Email je povinny")
        return false
      }

      if(!this.payload.password){
        alert("Heslo je povinné")
        return false
      }

      if(!this.payload.passwordAgain){
        alert("Heslo znovu je povinné")
        return false
      }

      if(this.payload.password !== this.payload.passwordAgain){
        alert("Heslá sa nezhodujú")
        return false
      }

      if(this.isPasswordStrong){
        alert("Heslo nieje dostatočne silné")
        return false
      }

      return true;
    }
  }
}
</script>

<style scoped>

</style>