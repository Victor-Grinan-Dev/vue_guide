const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: "321",
          name: "Manuel Lorenz",
          phone: "01234 5678 991",
          email: "manuel@localhost.com",
          isVissible: false,
        },
        {
          id: "123",
          name: "Julie Jones",
          phone: "09876 543 221",
          email: "julie@localhost.com",
          isVissible: false,
        },
      ],
    };
  },
});

app.component("friend-contact", {
  template: `
    <li>
        <h2>{{friend.name}}</h2>
        <button @click="toggleDetails">Show Details</button>
        <ul>
        <li><strong>Phone:</strong> {{friend.phone}}</li>
        <li><strong>Email:</strong> {{friend.email}}</li>
        </ul>
    </li>
      `,
  data() {
    return {
      isVissible: false,
      friend: {
        id: "321",
        name: "Manuel Lorenz",
        phone: "01234 5678 991",
        email: "manuel@localhost.com",
      },
    };
  },
  methods: {
    toggleDetails() {
      this.isDetailVissible = !this.isDetailVissible;
    },
  },
});

app.mount("#app");
