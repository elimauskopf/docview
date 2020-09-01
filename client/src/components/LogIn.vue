<template>
  <section>
    <div class="container">
      <b-field label="Username" type="is-success" class="login-field">
        <b-input v-model="username" placeholder maxlength="30"></b-input>
      </b-field>

      <b-field label="Password" type="is-warning" class="login-field">
        <b-input v-model="password" maxlength="30"></b-input>
      </b-field>
      <b-button v-on:click="checkCredentials" type="is-primary">LogIn</b-button>
      <!-- <p class="warn">{{ message }}</p> -->
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "LogIn",
  data: function () {
    return {
      username: "",
      password: "",
      message: "",
    };
  },
  methods: {
    checkCredentials: function () {
      if (this.username && this.password) {
        axios
          .get(`api/auth/${this.username}/${this.password}`)
          .then((response) => {
            console.log(response);

            if (response.data === "fail") {
              this.$toasted.show("Invalid credentials", {
                duration: 3000,
                icon: "exclamation-circle",
                type: "error",
              });
            } else {
              this.$toasted.show("Logged in!", {
                duration: 3000,
                icon: "check",
                type: "success",
              });
              this.$session.start();
              this.$session.set("isLoggedIn", true);
              this.$store.commit("toggleLogIn");
              this.$router.push("search");
            }
          });
      } else {
        this.$toasted.show("Please enter credentials", {
          duration: 3000,
          icon: "exclamation-circle",
          type: "error",
        });
      }
    },
  },
  beforeCreate: function () {
    if (
      this.$session.get("isLoggedIn") == true &&
      this.$router.currentRoute.path !== "/search"
    ) {
      this.$router.push("/search");
    }
  },
};
</script>

<style scoped>
.login-field {
  width: 15em;
  margin: auto;
  padding-top: 1em;
}

.warn {
  margin-top: 1em;
  color: red;
}
</style>