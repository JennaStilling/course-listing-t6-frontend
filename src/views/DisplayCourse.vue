<script setup>
import CourseServices from "../services/CourseServices.js";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const message = ref("");

const props = defineProps({
  id: {
    required: true,
  },
});

const course = ref({});
const errors = ref({});

onMounted(() => {
  //either props.id is not working or getCourse is not
  CourseServices.getCourse(props.id)
    .then((response) => {
      course.value = response.data;
      message.value = "";
    })
    .catch((error) => {
      course.value = "Error: " + error.code + ":" + error.message;
      console.log(error);
    });
});

function edit() {
  router.push({ name: "editCourse" });
}

function cancel() {
  router.push({ name: "courses" });
}
</script>

<template>
    <div id="body">
      <h1>Display Course</h1>
      <h2>{{ message }}</h2>
      <br />
      <div class="form">
        <div class="form-group">
          <label for="department">Department</label>
          <input v-model="course.department" type="text" id="department" disabled/>
        </div>
  
        <div class="form-group">
          <label for="courseNumber">Course Number</label>
          <input v-model="course.courseNumber" type="text" id="courseNumber" disabled/>
        </div>
  
        <div class="form-group">
          <label for="level">Level</label>
          <input v-model="course.level" type="text" id="level" disabled/>
        </div>
  
        <div class="form-group">
          <label for="hours">Hours</label>
          <input v-model="course.hours" type="text" id="hours" disabled/>
        </div>
  
        <div class="form-group">
          <label for="name">Name</label>
          <input v-model="course.name" type="text" id="name" disabled/>
        </div>
  
        <div class="form-group">
          <label for="description">Description</label>
          <input v-model="course.description" type="text" id="description" disabled/>
        </div>
      </div>

      <br />

      <button class="success" name="editCourse" v-on:click.prevent="edit()">
        Edit
      </button>
      <button name="cancel" v-on:click.prevent="cancel()">Cancel</button>
    </div>
  </template>
  