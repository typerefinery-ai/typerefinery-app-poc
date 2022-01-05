<template>
  <div class="vue-tempalte">
    <div class="container login">
      <div class="row">
        <form>
          <h3>Login</h3>

          <div class="form-group">
            <label>Email address</label>
            <input
              type="email"
              name="email"
              data-role="input"
              v-model="email"
              placeholder="Enter email"
            />
            <small class="text-muted"
              >We'll never share your email with anyone else.</small
            >
          </div>
          <div class="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              v-model="pass"
              data-role="input"
              placeholder="Enter email"
            />
          </div>
          <router-link :to="{ name: 'forgetPassword' }"
            >Forget password</router-link
          >
          <div class="form-group">
            <input
              type="checkbox"
              data-role="checkbox"
              data-caption="Remember me"
            />
          </div>
          <div class="form-group">
            <button class="button success" @click.prevent="login">Login</button>

            <input type="button" class="button" value="Cancel" />
          </div>
          <!-- <button class="button primary"  @click.prevent="login" v-if="isLoggingIn"><loader-component width="30"></loader-component></button> -->

          <p class="forgot-password text-right">
            Already registered
            <router-link :to="{ name: 'register' }">register?</router-link>
          </p>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import router from "../router";
import Vue from 'vue';
import axios from 'axios';
import Vueaxios from 'vue-axios'

Vue.use(Vueaxios,axios)
export default {
  name: "login",
  methods: {
    login: (e) => {
      e.preventDefault();
      let email = "user@email.com";
      let password = "password";
      let login = () => {
        let data = {
          email: email,
          password: password,
        };
        
        axios
          .post(process.env.VUE_APP_API_BASE, data)
        // Vue.axios.get('https://localhost:3000/api/login',data)
          .then(() => {
            alert("hello");
            console.log("Logged in");
            router.push("/home");
          })
          .catch((e) => {
            console.log("Cannot log in", e.message);
          });
      };
      login();
    },
  },
};
</script>
 
