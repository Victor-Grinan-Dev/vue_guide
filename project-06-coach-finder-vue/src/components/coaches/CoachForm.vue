<template>
  <form>
    <div class="form-control">
      <label for="firstname">Firstname</label>
      <input type="text" id="firstname" v-model.trim="firstName" />
    </div>
    <div class="form-control">
      <label for="lastname">lastname</label>
      <input type="text" id="lastname" v-model.trim="lastName" />
    </div>
    <div class="form-control">
      <label for="description">description</label>
      <textarea
        type="text"
        id="description"
        rows="5"
        v-model.trim="description"
      ></textarea>
    </div>
    <div class="form-control">
      <label for="rate">rate</label>
      <input type="text" id="rate" v-model.number="rate" />
    </div>
    <div class="form-control">
      <h3>Areas of expertise</h3>
      <div>
        <input type="checkbox" id="frontend" value="frontend" v-model="areas" />
        <label for="frontend">frontend development</label>
      </div>
      <div>
        <input type="checkbox" id="backend" value="backend" v-model="areas" />
        <label for="backend">backend development</label>
      </div>
      <div>
        <input type="checkbox" id="career" value="career" v-model="areas" />
        <label for="career">career</label>
      </div>
    </div>
    <base-button @click="submitForm">Register</base-button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      description: "",
      rate: null,
      areas: [],
    };
  },
  methods: {
    submitForm(event) {
      event.preventDefault();
      const formDtata = {
        first: this.firstName,
        last: this.lastName,
        desc: this.description,
        rate: this.rate,
        areas: this.areas,
      };
      console.log(formDtata);
    },
  },
};
</script>

<style scoped>
@import "../../styles/coach-form.css";
label {
  text-transform: capitalize;
}
</style>
