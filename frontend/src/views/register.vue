<template>
  <div class="vue-tempalte">
    <div class="container login">
      <div class="row">
        <form>
          <h3>Register</h3>

          <div class="form-group">
            <label>Email address</label>
            <input type="email"  name="email" data-role="input" v-model= "email" placeholder="Enter email" />
            <small class="text-muted"
              >We'll never share your email with anyone else.</small
            >
          </div>
          <div class="form-group">
            <label>Password</label>
            <input type="password"  name="password" v-model= "pass" data-role="input" placeholder="Enter email" />
          </div>
          <div class="form-group">
            
          </div>
          <div class="form-group">
            <button id="btn" class="button success" @click.prevent="login">
              Register
            </button>
            <input type="button" class="button" value="Cancel" />
          </div>
          <!-- <button class="button primary"  @click.prevent="login" v-if="isLoggingIn"><loader-component width="30"></loader-component></button> -->

          <p class="forgot-password text-right">
            Already registered
            <router-link :to="{ name: 'login' }">login?</router-link>
          </p>
        </form>
      </div>
    </div>
  </div>
</template>
 
<script>
//  import LoaderComponent from  "../components/LoadingComponent.vue";
//  import { setTimeout } from 'timers';
export default {
  //  components: { LoaderComponent },
//   data() {
//     return {
//       isLoggingIn: false,
//     };
//   },
 data() {
            return {
                 authenticated: false,
                 email:"",
                 pass:"",
                mockAccount: {
                    email: "test@1.com",
                    password: "pass"
                }
            }
        },
  methods: {
      login() {
          console.log(this.email, this.pass);
         
                if(this.email != "" && this.pass != "") {
                    if(this.email == this.mockAccount.email && this.pass == this.mockAccount.password) {
                        // this.$emit("authenticated", true);
                        this.authenticated=true;
                        this.$router.replace({ name: "home" });
                    } else {
                        console.log("The email and / or password is incorrect");
                    }
                } else {
                    console.log("A email and password must be present");
                }
            }
    // login() {
    //   this.isLoggingIn = true;
    //   setTimeout(() => {
    //     this.isLoggingIn = false;
    //     this.isAlertShow = true;
    //     setTimeout(() => this.redirect(), 1000);
    //   }, 1000);
    // },

    // redirect() {
    //   this.$router.push({ name: "home" });
    // },
  },
};
</script>