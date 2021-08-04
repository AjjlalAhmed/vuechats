<template>
  <div class="signup">
    <form id="form" @submit.prevent="submitForm">
      <div class="form-control">
        <h1>signup</h1>
      </div>
      <div class="form-control">
        <label>name</label>
        <input type="text" placeholder="Enter your name" v-model="nameModel" />
      </div>
      <div class="form-control">
        <button class="submit-btn">submit</button>
      </div>
    </form>
  </div>
</template>

<script>
import Localbase from "localbase";
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
export default {
  name: "signup",
  emits: ["addUserName"],
  props: ["userName"],
  setup(props, { emit }) {
    const db = new Localbase("db");
    const nameModel = ref("");
    const router = useRouter();
    const submitForm = () => {
      db.collection("users")
        .get()
        .then((user) => {
          if (user.length === 0) {
            db.collection("users").add({
              id: 1,
              name: nameModel.value,
            });
            emit("addUserName", nameModel.value);
          }
        });
    };
    watch(props, () => {
      router.push({ name: "Home", params: nameModel });
    });
    return { nameModel, submitForm };
  },
};
</script>

<style lang="scss">
$primary-color: #3ab1fa;
.signup {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  #form {
    min-width: 280px;
    box-shadow: 1px 1px 10px #2222;
    padding: 50px;
    border-radius: 3px;

    .form-control {
      h1 {
        font-size: 2rem;
        text-align: center;
        text-transform: capitalize;
        color: $primary-color;
        padding: 0;
        margin: 0;
        font-weight: 300;
        letter-spacing: 1px;
        background: $primary-color;
        border-radius: 3px;
        color: #fff;
        padding: 5px;
      }
      padding: 15px;
      label {
        display: block;
        font-size: 1.2rem;
        text-transform: capitalize;
        font-weight: 300;
        padding: 10px 0px;
      }
      input {
        padding: 10px;
        border: 1px solid #2222;
        width: 90%;
        border-radius: 3px;
      }
      .submit-btn {
        width: 100%;
        border: 0;
        padding: 10px;
        background: $primary-color;
        color: #fff;
        text-transform: capitalize;
        font-size: 1.2rem;
        border-radius: 3px;
        transition: 0.3s ease-in;
        cursor: pointer;
        &:hover {
          background: #009bfb;
        }
      }
    }
  }
}
</style>
