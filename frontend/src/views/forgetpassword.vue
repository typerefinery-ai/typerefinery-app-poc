<template>
  <div class="vue-tempalte">
    <div class="container login">
      <div class="row">
        <form>
          <h3>Forget Password</h3>

          <div class="form-group">
            <label>Email address</label>
            <input type="email"  name="email" data-role="input" v-model= "email" placeholder="Enter email" />
            <small class="text-muted"
              >We'll never share your email with anyone else.</small
            >
          </div>
              
          <div class="form-group">
            <button class="button success" @click.prevent="login">
              Reset
            </button>
            
            <input type="button" class="button" value="Cancel" />
          </div>
          <!-- <button class="button primary"  @click.prevent="login" v-if="isLoggingIn"><loader-component width="30"></loader-component></button> -->

          <p class="forgot-password text-right">
            
            <router-link :to="{ name: 'login' }">Back</router-link>
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
 
 name: "forgetPassword",
};
</script>