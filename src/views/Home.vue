<template>
  <div class="home">
    <header>
      <h1 class="logo">vue chats</h1>
    </header>
    <section class="message-container">
      <ul>
        <li v-for="(data, index) in messageDate" :key="index">
          <div v-if="data.connection" class="connection">
            <span>
              {{ data.connection.message }}
              at {{ data.connection.time }}
            </span>
          </div>
          <div v-if="data.broadMessage" class="broad-message">
            <span class="message-text">
              {{ data.broadMessage.message }}
            </span>
            <span class="message-info">
              {{ data.broadMessage.name }}
              at {{ data.broadMessage.time }}
            </span>
          </div>
          <div v-if="data.yourMessage" class="your-message">
            <span class="message-text">
              {{ data.yourMessage.message }}
            </span>
            <span class="message-info">
              {{ data.yourMessage.name }}
              at {{ data.yourMessage.time }}
            </span>
          </div>
        </li>
      </ul>
    </section>
    <section class="message-control">
      <form id="form" @submit.prevent="sendMessage">
        <div class="form-control">
          <input type="text" placeholder="Send" v-model="message" />
          <button class="send-message">
            <i class="fa fa-paper-plane" aria-hidden="true"></i>
          </button>
        </div>
      </form>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import Localbase from "localbase";
import { useRouter } from "vue-router";
import { ref, watch } from "vue";
export default {
  name: "Home",
  props: ["userName"],
  setup(props) {
    const db = new Localbase("db");
    let ws;
    const router = useRouter();
    const message = ref("");
    const userName = ref(props.userName);
    const time = new Date();
    const messageDate = ref([]);
    // Creating websocket connetion
    const createConnection = (name) => {
      ws = new WebSocket("ws://localhost:3000");
      ws.addEventListener("open", () => {
        ws.send(
          JSON.stringify({
            event: "Creating_connection",
            payload: {
              userName: name,
              time: `${time.getHours()}.${time.getMinutes()}`,
            },
          })
        );
      });
      ws.addEventListener("message", (response) => {
        try {
          const data = JSON.parse(response.data);
          if (data.event == "User_connected") {
            messageDate.value.push({
              connection: {
                message: data.payload.message,
                time: data.payload.time,
              },
            });
          } else if (data.event == "broad_message") {
            messageDate.value.push({
              broadMessage: {
                name: name,
                message: data.payload.message,
                time: data.payload.time,
              },
            });
          } else if (data.event == "your_message") {
            messageDate.value.push({
              yourMessage: {
                name: name,
                message: data.payload.message,
                time: data.payload.time,
              },
            });
          }
        } catch (e) {
          console.log(e);
        }
      });
    };
    // Cheking if user exits
    if (userName.value == "") {
      (async () => {
        const user = await db.collection("users").get();
        if (user.length != 0) {
          userName.value = user[0].name;
          createConnection(userName.value);
        } else {
          router.push({ name: "Signup" });
        }
      })();
    } else {
      createConnection(userName.value);
    }
    // Run when user send message to server
    const sendMessage = () => {
      ws.send(
        JSON.stringify({
          event: "User_messsage",
          payload: {
            userName: userName.value,
            message: message.value,
            time: `${time.getHours()}.${time.getMinutes()}`,
          },
        })
      );
    };
    watch(messageDate.value, () => {
      db.collection("messages").add({
        data:messageDate._rawValue
      });
    });
    (async () =>{
      const oldMessageData = await db.collection("messages").get();
    })()
    return { message, messageDate, sendMessage };
  },
};
</script>

<style lang="scss">
$primary-color: #3ab1fa;
$white: #fff;
.home {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  position: relative;
  header {
    background: $primary-color;
    padding: 10px 0px;
    z-index: 5;
    .logo {
      font-size: 2rem;
      text-transform: capitalize;
      text-align: center;
      font-weight: 700;
      color: #fff;
    }
    position: fixed;
    width: 100%;
  }
  .message-container {
    flex-grow: 2;
    position: relative;
    margin-top: 70px;
    margin-bottom: 50px;
    ul {
      max-width: 1000px;
      margin: auto;
      list-style: none;
      li {
        padding: 5px 10px;
        .connection {
          display: flex;
          justify-content: center;
          span {
            font-size: 1rem;
            font-weight: 400;
            background: $primary-color;
            padding: 10px;
            color: $white;
            border: 0;
            border-radius: 3px;
          }
        }
        .broad-message {
          display: flex;
          flex-direction: column;
          padding: 5px 10px;
          width: 90%;
          margin: auto;
          align-items: flex-end;
          .message-info {
            font-weight: 400;
            font-size: 0.9rem;
            padding: 5px;
          }
          .message-text {
            background: #f1f0f0;
            font-size: 0.9rem;
            font-weight: 400;
            padding: 10px;
            border-radius: 5px;
            width: 80%;
            line-height: 1.7rem;
          }
        }
        .your-message {
          display: flex;
          flex-direction: column;
          padding: 5px 10px;
          width: 90%;
          margin: auto;
          align-items: flex-start;
          .message-info {
            font-weight: 300;
            font-size: 0.9rem;
            padding: 5px;
          }
          .message-text {
            background: $primary-color;
            font-size: 0.9rem;
            font-weight: 400;
            padding: 10px;
            border-radius: 5px;
            color: #fff;
            width: 80%;
            line-height: 1.7rem;
          }
        }
      }
    }
  }
  .message-control {
    position: fixed;
    width: 100%;
    bottom: 0;
    z-index: 5;
    #form {
      width: 100%;
      .form-control {
        display: flex;
        input {
          width: 100%;
          padding: 10px;
          border: 0;
          border-top: 1px solid #2222;
          font-size: 1rem;
        }
        .send-message {
          padding: 10px 20px;
          border: 0;
          background: $primary-color;
          i {
            color: $white;
            font-size: 2rem;
          }
        }
      }
    }
  }
}
</style>
