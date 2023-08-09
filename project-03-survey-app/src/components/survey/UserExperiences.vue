<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperiences"
          >Load Submitted Experiences</base-button
        >
      </div>
      <p v-if="isLoading">Loading...</p>
      <p v-else-if="!isLoading && (!results || results.length === 0)">
        No stored data yet, please enter some data to start.
      </p>
      <ul v-else-if="!isLoading && results && results.length !== 0">
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from "./SurveyResult.vue";

export default {
  // props: ["results"],''
  data() {
    return {
      results: [],
      isLoading: false,
    };
  },
  components: {
    SurveyResult,
  },
  methods: {
    loadExperiences() {
      this.isLoading = true;
      fetch(
        "https://vue-survey-app-62dfa-default-rtdb.europe-west1.firebasedatabase.app/surveys.json"
      )
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            console.log("error");
          }
        })
        .then((data) => {
          let results = [];
          for (let id in data) {
            results.push({
              id: id,
              name: data[id].name,
              rating: data[id].rating,
            });
          }
          this.results = results;
          this.isLoading = false;
        });
      // axios.get("https://vue-survey-app-62dfa-default-rtdb.europe-west1.firebasedatabase.app/surveys.json");
    },
  },
  mounted() {
    this.loadExperiences();
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
