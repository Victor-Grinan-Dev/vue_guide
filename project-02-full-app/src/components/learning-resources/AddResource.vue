<template>
  <base-card>
    <form>
      <div class="form-control">
        <label for="title"></label>
        <input type="text" id="title" name="title" />
      </div>
      <div class="form-control">
        <label for="description"></label>
        <textarea type="text" id="description" name="description" rows="3" />
      </div>
      <div class="form-control">
        <label for="link"></label>
        <input type="text" id="link" name="link" />
      </div>
    </form>
  </base-card>
</template>
<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
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

.form-control {
  margin: 1rem 0;
}
</style>
