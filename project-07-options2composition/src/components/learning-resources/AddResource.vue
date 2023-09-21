<template>
  <div>
    <base-card>
      <form @submit.prevent="submitData">
        <div class="form-control">
          <label for="title">title:</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="eg.HTML Manual"
            v-model="title"
          />
        </div>
        <div class="form-control">
          <label for="description">description:</label>
          <textarea
            type="text"
            id="description"
            name="description"
            rows="3"
            placeholder="eg. HTML's oficial page"
            draggable="false"
            v-model="description"
          />
        </div>
        <div class="form-control">
          <label for="link">link:</label>
          <input
            type="text"
            id="link"
            name="link"
            placeholder="eg. https//html.org"
            v-model="link"
          />
        </div>
        <base-button>add resource</base-button>
      </form>
    </base-card>
    <teleport to="body">
      <base-dialog v-if="inputError" @close-dialog="toggleDialog">
        <template #header>Input Error</template>
        <template #default
          ><p>
            At least one of the fields is incomplete, please check that all have
            been filled.
          </p>
        </template>
      </base-dialog>
      <base-dialog v-if="urlError" @close-dialog="toggleDialog">
        <template #header>URL Error</template>
        <template #default
          ><p>
            The provided url has an invalid value, please check that the entered
            url is copied from the resource page.
          </p>
        </template>
      </base-dialog>
    </teleport>
  </div>
</template>
<script>
export default {
  inject: ["addResource"],
  data() {
    return {
      title: "",
      description: "",
      link: "",
      inputError: false,
      urlError: false,
    };
  },
  methods: {
    submitData() {
      if (
        //check empty fields
        this.title.trim() === "" &&
        this.description.trim() === "" &&
        this.link.trim() === ""
      ) {
        this.inputError = true;
      }
      if (
        //check invalid url
        !this.validateUrl(this.link)
      ) {
        this.urlError = true;
      }

      if (!this.urlError && !this.inputError) {
        const title = this.title.trim();
        const description = this.description.trim();
        const link = this.link.trim();

        this.addResource(title, description, link);
      }
    },
    toggleDialog() {
      this.inputError = false;
      this.urlError = false;
      this.link = "";
    },
    validateUrl(url) {
      const urlPattern = new RegExp(
        "^(https?:\\/\\/)?" + // validate protocol
          "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // validate domain name
          "((\\d{1,3}\\.){3}\\d{1,3}))" + // validate OR ip (v4) address
          "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // validate port and path
          "(\\?[;&a-z\\d%_.~+=-]*)?" + // validate query string
          "(\\#[-a-z\\d_]*)?$",
        "i"
      ); // validate fragment locator
      return !!urlPattern.test(url);
    },
  },
};
</script>
<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
  /* text-transform: capitalize; */
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

textarea {
  resize: vertical;
}

.form-control {
  margin: 1rem 0;
}
</style>
