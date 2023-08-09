<template>
  <div>
    <section>
      <base-card>
        <h2>Submitted Experiences</h2>
        <div>
          <base-button @click="loadExperiences"
            >Load Submitted Experiences</base-button
          >
        </div>
        <p v-if="isLoading && !error">Loading...</p>
        <p v-else-if="error">{{ error }}</p>
        <p
          v-else-if="!isLoading && (!results || results.length === 0) && !error"
        >
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
    <!-- <teleport to="body">
      <base-dialog v-if="error"> <p>Failed to fetch</p> </base-dialog>
    </teleport> -->
  </div>
</template>

<script>
import SurveyResult from "./SurveyResult.vue";
export default {
  data() {
    return {
      results: null,
      isLoading: false,
      error: null,
    };
  },
  components: {
    SurveyResult,
  },
  methods: {
    loadExperiences() {
      console.log(process.env.VUE_APP_URL);
      this.isLoading = true;
      fetch(
        // URL
        "https://vue-survey-app-62dfa-default-rtdb.europe-west1.firebasedatabase.app/surveys.json"
        // process.env.VUE_APP_URL
      )
        .then((res) => {
          if (res.ok) {
            return res.json();
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
        })
        .catch((err) => {
          this.error = err.message;
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
