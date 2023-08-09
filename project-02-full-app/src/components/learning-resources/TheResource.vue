<template>
  <div>
    <base-card>
      <div class="tabulatorBar">
        <span class="tabsBtns">
          <base-button
            @click="setSelectedTab('stored-resources')"
            :mode="storeResButtonMode"
          >
            Stored Resources
          </base-button>
          <base-button
            @click="setSelectedTab('add-resource')"
            :mode="addResButtonMode"
          >
            Add Resources
          </base-button>
        </span>
        <base-button mode="static">
          you have {{ storeResources.length }} Resources stored
        </base-button>
      </div>
    </base-card>
    <keep-alive>
      <component :is="selectedTab"></component>
    </keep-alive>
  </div>
</template>

<script>
import StoredResources from "./StoredResources.vue";
import AddResource from "./AddResource.vue";

export default {
  components: {
    StoredResources,
    AddResource,
  },
  data() {
    return {
      selectedTab: "stored-resources",
      storeResources: [
        {
          id: "official-guide",
          title: "Official Guide",
          description: "The official Vue.js documentation.",
          link: "https://vuejs.org/",
        },
        {
          id: "google",
          title: "Google",
          description: "The original Google engine.",
          link: "https://google.com/",
        },
      ],
    };
  },
  provide() {
    return {
      resources: this.storeResources,
      addResource: this.addResource,
      removeResource: this.removeResource,
    };
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
    addResource(title, description, link) {
      const newResource = {
        id: new Date().toISOString(),
        title: title,
        description: description,
        link: link,
      };
      this.storeResources.unshift(newResource);
    },
    removeResource(id) {
      //because we are providing-injecting the array "storeResources":
      //if we use this.array.filter() to delete we are creating with new array (it wont work)

      //this manipulates the original array instead of creating a new one:
      const resIndex = this.storeResources.findIndex((res) => res.id === id);
      this.storeResources.splice(resIndex, 1);
    },
  },
  computed: {
    storeResButtonMode() {
      return this.selectedTab === "stored-resources" ? null : "flat";
    },
    addResButtonMode() {
      return this.selectedTab === "add-resource" ? null : "flat";
    },
  },
};
</script>
<style scoped>
.tabulatorBar {
  display: flex;
  justify-content: space-between;
}

.tabsBtns {
  display: flex;
  gap: 5px;

  background-color: rgb(155, 145, 165);
  border-radius: 5px;
}
</style>
