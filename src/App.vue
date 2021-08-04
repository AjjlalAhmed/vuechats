<template>
  <router-view :userName="userName" @addUserName="newUser" />
</template>
<script>
import { ref } from "vue";
export default {
  name: "App",
  setup() {
    const userName = ref("");
    const newUser = (e) => {
      userName.value = e;
    };
    return { newUser, userName };
  },
};
</script>

<style lang="scss">
* {
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');  
  @import url("https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");
  font-family: 'Poppins', sans-serif;
  padding: 0;
  margin: 0;
}
</style>
